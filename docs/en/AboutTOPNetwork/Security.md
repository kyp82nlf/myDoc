# Security

## Overview

Security is of paramount importance when designing a blockchain. As such, TOP Network was built with an abundance of mitigation techniques to ensure security of the system.

## Transaction Flooding and DDoS Attacks

In DDoS attacks, attackers may send a large number of transactions from accounts under their control to flood the whole system and thwart legitimate transaction processing. Such attacks seem possible, as TOP Network Chain does not charge fees for most general transactions, making it nearly costless for attackers to submit a large number of transactions. TOP Network Chain has implemented several anti-attack strategies to account for this. The goal is to make it very expensive for an attacker to launch attacks by sending high volumes of transactions.

### Minimum Balance

TOP Network accounts must have a minimum balance of 0.1 TOP token before sending transactions. Additionally, an account must maintain a minimum balance of 100 TOP to receive free daily TGAS resources. If the user goes over these quotas, additional TOP tokens must be deposited before sending anymore transactions. These requirements significantly increase the cost for an attacker to generate a large number of accounts and subsequently send a large volume of transactions in order to flood the system.

### Locked Assets

New assets received from a transaction will be locked for a certain period of time, during which the asset cannot be transferred. The lock-up period, a parameter set by the system, depends upon the value of the asset. Assets with higher value have longer lock-up times, which prevents circular transfer attacks and ensures the safety of high-value transactions.

## Sybil Attacks

In a Sybil attack, malicious entities attempt to create or control hundreds or thousands of nodes to sabotage the security of the consensus network. TOP Network uses a special type of Proof-of-Stake* (chapter [Consensus Protocol](/en/AboutTOPNetwork/Protocol/ConsensusProtocol.md)), to prevent Sybil attacks from occurring.

### Minimum Deposit Requirement

Each node needs to have an independent account and make a minimum deposit into an election smart contract on the Root-Beacon Chain before joining the consensus network. Minimum deposit requirements are different for Edge Nodes, Validator Nodes, Archive Nodes and Audit Nodes. The more important
the role of a node, the higher the minimum deposit. As a result, it is costly for an attacker to create and own many nodes in the hopes of launching an attack.

### Admission Requirements and Random Sharding

After a node meets the minimum requirements, its odds of being selected to actually participate in consensus depends upon the Comprehensive Stake. The Comprehensive Stake integrates a form of reputation with the deposit amount, which requires attackers to both accumulate a large sum of assets,
and stay in the system for a long period of time with good behavior before launching an attack. These methods significantly increase the cost of an attack. Moreover, TOP Network Chain uses a VRF-FTS algorithm to randomly select nodes to form Shards and Clusters from the candidate node pool. This reduces the probability that a malicious attacker can direct all of its nodes into a particular Shard or Cluster.

## Penny-Spend Attack

In penny-spend attacks, attackers send an enormous number of low-value transactions to a large number of accounts, preventing the system from processing legitimate transactions and wasting the disk space of the consensus nodes. The economics restrictions on high-frequency transactions and the minimum deposit requirement mentioned above can prevent most penny-spend attacks. Additionally, after using the free allotted DISK space, additional DISK space must be acquired through depositing TOP tokens to send and permanently store new transactions
Transactions are stored in the Unit Lattices, where old transaction data in accounts can be pruned in real-time as the system processes new transactions, significantly reducing the storage space for accounts and making it unlikely for penny-spend attacks to exhaust the storage space in nodes.

## Attacks On A Single Shard

In attacks targeting a single Shard, attackers try to locate a Shard in which a specific transaction occurs and then attempt to launch DDoS attacks on the Shard, modify transactions, or create fake transactions.TOP Netwrok Chain prevents such attacks through several measures.

### Edge Network

The Edge Network separates users and clients from the Core Network so that they cannot directly connect to the Core Network to retrieve account and transaction information from consensus nodes.

### RandomandDynamicSharding

The VRF-FTS algorithm randomly selects consensus nodes to form shards based on Comprehensive Stake. In addition, nodes dynamically rotate between different Shards and Clusters to serve different sets of account spaces. When validating transactions, each shard randomly selects its pBFT leader. Such
three-layer dynamic randomness makes it difficult for attackers to identify in advance the specific Shard and/or node processing a specific transaction, minimizing the chance of malicious nodes colluding in advance and launching DDoS attacks on a specific node.

### Double Auditing

In order for a transaction to be confirmed, the transaction is first validated in a Shard, and then further audited by a group of Audit Nodes in the Audit Network. Consensus and Audit node groups are selected randomly at the transaction level, so the attacker cannot anticipate which nodes will be responsible for validating or auditing the transaction. In this way, malicious nodes in a Shard or Cluster, if any, cannot deceive the system into accepting fake transactions.

### Shard Merge

When a Shard suffers a DDoS attack, its surviving nodes are so few that the Shard cannot work securely. In this case, the Shard which has been attacked will automatically be merged into another shard to form a larger, more secure Shard.

## Double Spend Attack

TOP Chain organizes transactions into Unit Lattices, where transactions initiated by an account are stored on a chain dedicated to that account. Therefore, transactions from each account will form their own micro chains. Each valid transaction of an account contains a unique nonce that monotonically increases, aswellasthehashvalueoftheprevioustransactionthatthesystemhasconfirmed. Inaddition, when a transaction is verified, the account balance is updated in real-time, allowing each consensus node to discover and reject double-spend transactions immediately.

## Smart Contract Security

TOP Chain offers two types of smart contracts, namely Platform Contracts and Application Contracts, which are executed on independent and isolated virtual machines. Platform contracts, written in non-Turing complete scripting languages, handle account assets on the main chain. In comparison, Appli-
cation Contracts are written in Turing complete languages and thus are very flexible. However, Application Contracts are restricted to running on the independent service chains, which protects the main chain from asset loss caused by various possible loopholes in Application contracts.

## Single Node Attack

In single node attacks, malicious nodes tamper with transactions or refuse to process transactions. However, even if one-third of the Validator nodes in a Shard are malicious, the pBFT consensus algorithm can still guarantee that the remaining honest nodes execute the consensus process correctly for transactions. Nodes that fail to process transactions in time are replaced by candidate nodes.
Transactions must be verified by Validator nodes, and also audited and signed by a group of Audit Nodes before obtaining final confirmation, which allows Audit Nodes to discover malicious nodes in a Shard. The system selects Audit Nodes randomly at the transaction level, making it impossible for Validator nodes to identify in advance the audit-conducting nodes, thus preventing malicious collusion between Audit Nodes and Validator Nodes.

## Replay Transaction Attack

In a replay transaction attack, an attacker intercepts transaction packets on the transport layer in the operating system and saves the transactions for replay later. This attack is a variant of DDoS and Double-Spend attacks. TOP Chain prevents replay transaction attacks with the following strategies.
1. Each account has a monotonically increasing nonce to identify every transaction. Transactions with the same nonce initiated by the same account will be rejected.
2. Each submitted transaction needs to contain the hash value of the latest valid transaction in the account. All transactions in the same account are organized into a Unit Lattice in chronological order of creation, which allows Validator nodes to determine easily whether an incoming transaction
is a duplicate.