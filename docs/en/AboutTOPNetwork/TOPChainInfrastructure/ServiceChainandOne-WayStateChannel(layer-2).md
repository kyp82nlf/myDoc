# Service-Chains and One-Way State Channels(Layer-2)

## Overview

Each business has varying needs and workflows which cannot be satisfied by a single chain. TOP Network introduces service chains, which are pluggable chains built for specific use cases. For instance, there will be a VPN service chain, d-storage service chain etc. Businesses can easily deploy their own personal service chain to fit the needs of their application.
By default, each service chain has the same sharded architecture as the main chain, consisting of Shards,Clusters, and a Root-Beacon Chain. However, service chains allow for the execution of complex business logic through application level smart-contracts, while the main chain only handles asset transfer and
system level functions.
Service chains are slightly different from the popular side-chain concept. With side-chains, there is a two-way pegging process in which tokens are locked on the main chain, and then freed on the side-chain.
With service chains, assets are free to move back and forth to the main chain and other service chains.Each account is able to store multiple types of assets, and directly receive any native token issued on TOP Network. Additionally, account numbers are globally unique between the main chain and all service chains.

![servicechain](./ServiceChainandOne-WayStateChannel(layer-2).assets/servicechain-1597980651607.jpg)

### Service Chain Development Framework

TOP Network provides comprehensive service chain development and deployment frameworks. Most DApp developers do not have any experience developing blockchains, and so the process of developing service chains for their businesses should be abstracted as much as possible. The TOP Network service chain development framework is a turn-key solution allowing developers to create service chains with all of the important features built-in. The service chain development framework includes the following built-in features:

* A p2p network interconnecting the service chain with the main chain and all other service chains.
* An account system which is valid globally between the main chain and all service chains.
* A native token which is recognized between the main chain and all service chains.
* Common asset operations for TOP and the associated service chain native token including: asset
  lock, unlock or deposit, in addition to transfers between the main chain and service chains.
* Multiple consensus mechanisms to choose from.
* Application level smart contracts, which are integrated with on-chain storage as well as distributed
  off-chain storage.

Developers can customize the service chain parameters to meet the needs of their business during the application process. For instance, the minimum gas for a transaction, or the minimum number of nodes required for a shard can be configured. For now, developers will choose the underlying consensus mechanism of the service chain from a list, which includes TOP Network’s hpPBFT-PoS* consensus mechanism,or other consensus mechanisms like PoW. In the future, bigger businesses may aim to develop their own customized consensus mechanisms.

### Service Chain Deployment Framework

To actually deploy a service chain, TOP Network provides a one-click deployment framework. Developers need not worry about the underlying details involved with deploying a service chain, and can instead focus on the high-level functionality. All developers need to do is submit an application by calling a dedicated smart contract deployed on the Root-Beacon Chain. Along with the application, developers need to deposit a certain amount of TOP Tokens, and also specify the configurations parameters of the service-chain,including things like which consensus mechanism will be used, the minimal amount of nodes in a shard,etc. After successfully submitting an application, the Root-Beacon Chain smart contract will issue a Chain-ID along with the service chain native token by broadcasting to all existing service chain and main chain nodes.
TOP Network’s service chain framework goes further by addressing one of the main problems with side-chains and similar concepts, which is garnering nodes. After completing the application process, the TOP Network election contract on the main Root-Beacon Chain will bootstrap the service chain by assigning nodes to act as the Root-Beacon Chain nodes of the service chain. Once the service chain Root-Beacon Chain begins running, it will gain all the functionality of the main Root-Beacon Chain, including core system level smart contracts like the election contract, asset operations, and so on.
Subsequently, the service chain Root-Beacon Chain can accept node registrations, and begin assigning new nodes to Shards and Clusters in a similar manner to the main chain. These nodes will validate and execute service transactions and application level smart contracts, which run the necessary business
logic. While the main chain can help bootstrap a service chain by providing the initial core Root-Beacon Chain nodes, to gain more nodes the service chain will need to host useful applications. If the service chain is popular, it will be easier to obtain more nodes, while if it has no transaction volume, it may be harder to convince additional nodes to join.

## One-Way State Channels

In the past several years, there has been much discussion revolving around layer-2 scaling. Numerous projects have been working on technologies like state-channels for years. However, layer-2 solutions have yet to really take hold, mostly due to the difficulty of implementation. In terms of state-channels,the crux of the issue is that current attempts are aiming for total generality. While this seems ideal, it brings about many challenges and inefficiencies that make actually using state-channel solutions infeasible.
TOP Network implements built-in state-channels with the goal of increasing throughput for specific uses cases. In particular, TOP Network’s state-channels are only used for applications which involve low-value high-frequency micro transactions. The state-channels are built atop service chains, and slightly differ based on the specific use case. We’ll use the VPN service chain to demonstrate how TOP Network’s state-channel solution works.
The participants in a VPN service chain transaction are a VPN client, a VPN service provider, and VPN Edge Node relays. When a VPN session is initiated, these actors form a virtual consensus network.Deployed on this virtual consensus network is what we call a virtual smart-contract, which is stored
locally by each node for the duration of the session. The virtual smart-contract can pull information from the VPN service-chain, such as the current balance of the VPN client.
A VPN session is billed based off of billing units, which are usually around 1Mb of bandwidth. This is an exceedingly small amount in terms of value. Executing a transaction for each billing unit could require hundreds of transaction for just a single session. Instead, the virtual smart-contract keeps track
of the number of billing units consumed during a particular session, and at the end submits a single transaction to the service chain. The client, service node, and Edge relays will periodically submit to the virtualsmart-contractthenumberofbillingunitsconsumedorrelayed. Thevirtualnetworkconsistingof
session participants will perform a small consensus check using what we call Proof-of-Bandwidth(PoB).。

![VPNService](ServiceChainandOne-WayStateChannel(layer-2).assets/VPNService.jpg)

The major difference between TOP Network’s state-channels and those of other projects is the settlement and dispute process. In usual state-channel implementations, the settlement and dispute process is complex.Each participant in the state-channel must agree completely on every state transition. If one of the participants goes offline, or there is a disagreement, the channel cannot be settled until there is a resolution.
In this scenario, users are presented a "challenge window", where they can submit proof of the state theythink is valid. This window of time can be relatively long, which can negate the reduction in latency gained from the state-channels in the first place.
TOP Network forgoes this dispute process by forming one-way state-channels. Essentially, the client has the final say. If a discrepancy is uncovered from the consensus check, the state-channels is closed and the client pays the amount last logged in the virtual smart-contract. So for instance, if the client submits that it used 90Mb, while the service-node submits a contribution of 92Mb, the client will only pay for 90Mb. Since each billing unit is so small in value, the service-node does not stand to lose any significant amount. The discrepancy in which the channel will close is configurable by the service node. For instance, if the service provider is a big data center with excess bandwidth, it may be content in losing a few extra Mb in the case of dishonest client. An individual service provider may be more stringent, and will close the channel as soon as there is a discrepancy of just a 1 or 2 Mb.
Each service chain has slightly difference consensus checks, but the general process is the same. State-channels help to vastly increase scalability. Since this functionality is built-in, developers do not need to fuss with integration, and can instead simply enjoy the speed increases.