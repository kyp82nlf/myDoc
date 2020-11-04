# Fully Sharding Mainchain(Layer-1)

## Overview

Layer-1 scaling refers to direct performance improvements in the blockchain itself. Of all the on-chain scalability solutions, sharding has gained the most attention, and is generally considered the best route for a permissionless public blockchain. However, most sharding attempts thus far have only sharded in terms of computation, and not state and network capacity.
TOP Network has developed a comprehensive multi-level dynamic sharding paradigm which shards in all three aspects. This is facilitated by the underlying network infrastructure in layer-0, along with a layered consensus network, VRF-based sortition algorithms, a two-layer Lattice-DAG data structure, and a parallel pBFT-PoS* consensus mechanism. These innovations allow TOP Network to achieve linear scalability while remaining secure and totally permissionless.

## Mainchain Architecture

![Snap114](ComprehensiveMulti-levelDynamicSharding(layer-1).assets/Snap114.jpg)

## Sub-Beacon Network

TOP Network Sub-Beacon handles auditor, validator election, audit , salsh, and work-load logging.

## Three Layer Consensus Network

The TOP Network consensus network is divided into three layers:
The Edge Network: All transactions will be sent to edge network before reaching the audit network.

The Audit Network: Consists of audit nodes randomly partitioned into clusters, handles most of the bandwidth heavy operations such as cross-shard communication, and participate in transaction validation.

The Validate Network: Consists of shard made up of validator nodes. This is where the transactions validation takes place. Within each shard, Validator Nodes validate and confirm transactions using a parallel hpPBFT algorithm. Currently, there are two auditor groups, each auditor group has two validator groups under its jurisdiction.

A tiered network is used for multiple reasons. First, splitting duties among multiple types of nodes helps keep node requirements low. The Audit Network handles most of the bandwidth heavy operations such as cross-shard communication, which then allows validator nodes to have relatively low
requirements. In addition, the Edge Network helps protect the Audit and Validate Network from spam attacks, as clients can only send transactions directly to edge Nodes.

All TOP Network networks support sharding expansion.

## VRF-FTS Random Partitioning

Security is one of the biggest challenges involved with sharding. By dividing the network into smaller groups, it becomes easier for malicious entities to take control of shards in what’s called a Single-Shard Takeover Attack. To prevent this, the sharding process is done randomly. With random sharding, malicious entities are not able to direct their nodes into any specific shard, making an attack much more
difficult.
To generate randomness in a decentralized manner, TOP Network makes use of a Verifiable Random Function.VRFs are cryptographic constructs which allow for the creation of unbiasable and publicly verifiable random seeds. These random seeds generated via VRF are used along with a weighted Follow-The-
Satoshi (FTS) algorithm to sort Validators into shards, and Advance Nodes into Clusters.

## Dynamic Sharding

While random partitioning helps prevent attackers from directly inserting their nodes into a particular shard, it is not sufficient to prevent adaptive adversaries from slowly corrupting a shard. For instance,it is possible that given enough time, a malicious entity could bribe all the nodes in a particular shard.
If the node makeup of a shard remains static, this type of bribing attack is feasible. To prevent this,TOP Network employs dynamic sharding. Every so often, a few nodes from each shard are reshuffled into other shards. Over time, shards will have completely different nodes then they had previously. As only a few
nodes are shuffled around at a time, consensus can continue uninterrupted while the newly moved nodes sync to the state of their new shard.
This same process occurs in the Routing/Audit Network as well, where Advance Nodes are continuously shuffled between Clusters. This two-layer dynamic sharding scheme renders adaptive adversary attacks practically impossible. 

## Multi-Level Sharding

When it comes to sharding, the goal is to achieve linear scalability. This means that scalability increases linearly with increasing node count. For this to occur, the amount of work each node must do should not strongly depend on the total number of nodes in the system, or the global volume of transactions.
To accomplish this, all of a blockchain’s resources must be sharded, including state(storage), computation(transaction validation and smart contract execution), and networking(block propagation, cross-shard communication etc). If, for instance, only computation is sharded, then storage or bandwidth will eventually become a bottleneck.
To reach the goal of a fully sharded system, we developed a novel multi-layered sharding architecture. Each blockchain resource is sharded in multiple ways, which aids in increasing scalability and keeping node requirements low.

## Two-Layer State Sharding

The state of TOP Network consists of all user accounts and all smart-contracts. Every user account and every smart-contract is represented by an account object. Each account object contains multiple properties, associated functions, and a mini NoSQL database. This state is sharded in two ways.
First, account objects are divided between shards, meaning nodes within a shard only need to store the state of a subset of the total account space. While this already achieves partitioning of the global state,it is not quite sufficient for a few reasons. Since Validator nodes only store the state of the account subspace associated with that shard, they cannot adequately verify transactions sent from other shards unless they know that the state of the sending account was properly updated.
To account for this, we use table blocks, which store the latest state information of recently changed accounts. There are 1024 table blocks which are divided into the current number of shards. The account space is mapped so that each table block is responsible for an equally sized account subspace. Finding the table block associated with an account can be quickly determined using the hash of the account number. This allows shards to quickly pull relevant state information from other shards and check if balances have been updated properly before committing a transaction.
Table blocks are also used to increase throughput by batching transactions. Multiple transactions from the same account, along with transactions from accounts within the same account subspace, can be included together in one table block. These blocks can be validated in one consensus round,potentially increasing throughput drastically. 

## Three-Layer Compute Sharding

Computational resources are needed for transaction validation and smart-contract execution, which are both pBFT consensus processes. We use a three-layer design to facilitate secure compute sharding.
When a transaction is sent to a shard for validation, a random subset within that shard is chosen to perform a pBFT consensus check. The rest of the shard monitors the subset and aids with the subsequent synchronization process. Advance nodes in the governing cluster are also involved in the pBFT consensus through a secondary audit process. The concept of three-layer compute sharding will become more clear after reading section 4 on TOP’s consensus mechanism.

## Three Layer Network Sharding

The network is divided into three levels. At the top level is Zones, followed by Clusters within the Routing Network, and then Shards(auditor group and validator group) within the Core Network. Each Zone is a network of Clusters and Shards, and each Cluster and Shard is also a network. Network operations within each of these levels is
confined to a specific network. For instance, network communication within a Shard or Cluster always remains between the nodes in that Shard or Cluster. This three-layer partitioning of the network helps to ensure that bandwidth requirements do not grow significantly as the size of the overall network grows.

