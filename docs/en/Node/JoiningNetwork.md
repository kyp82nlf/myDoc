# Node Access&Exit

## Overview

TOP Network's main chain is a decentralized and permissionless public chain. You can become a TOP node at any time by participating in staking  with a low entry threshold. Low risk, zero cost and high reward are the premium features of TOP Network staking.

So, how do you become a TOP node? Let's find out.

## Node Access

### Roles of Node & Mainnet Access Criteria

#### Roles of Node

There are three types of nodes in TOP Network – edge, validator, and advance. 

The advance node can play multiple roles in different networks simultaneously: validator, auditor, and archive.

NOTE：

> The advance node in a cluster cannot serve as auditor and validator at the same time in the auditor group and validator group.

The table below demonstrates the responsibilities of each node:

| Roles       | Responsiblity                                                |
| ----------- | ------------------------------------------------------------ |
| edge        | The edge node serves as the access point for users. All the transactions sent to the Edge node of the edge network before being forwarded to the routing and core networks. It protects consensus nodes from DDoS (distributed denial-of-service) and other similar attacks. |
| validator   | The validator node formed the sharding of TOP Network, and are responsible for verifying transactions through the hpPBFT. |
| auditor     | The auditor node have several responsibilities like cross-sharding synchronization, cross-sharding transaction routing, and participation in the hpBFT consensus mechanism. |
| archive     | The archive node stores the entire state of the TOP Network chain. Archive nodes also help new nodes synchronize the current blockchain state and ensure that data is available. |
| Root-Beacon | TOP Network’s Root-Beacon node acting as the coordinator and archive for the system. They handle node registration and elections, along with staking, voting, slashing, and work-load logging. Also act as a global clock for the whole system through the production of timing blocks at regular intervals. |
| Sub-Beacon  | The Sub-Beacon node handles auditor,validator election,audit,salsh,and work-load logging. |

#### Access Threshold

New nodes must register through REC (Root Election Contract) and start the node process before they can join the network.

The smart contract deployed on the Root-Beacon chain determines whether the node meets the minimum requirements of the selected node type. The node roles, deposit required and hardware configuration are as follows:

| Roles of Nodes | Deposit             | Hardware Configuration                 |
| -------------- | ------------------- | -------------------------------------- |
| edge           | 100,000*10^6 uTOP   | 2CPU/4GB men<br/>40GB SSD<br/>100Mb/s  |
| validator      | 500,000*10^6 uTOP   | 2CPU/4GB men<br/>60GB SSD<br/>100Mb/s  |
| advance        | 1,000,000*10^6 uTOP | 4CPU/8GB men<br/>100GB SSD<br/>200Mb/s |

If the registration deposit is lower than the minimum deposit required, the node will fail to register.

After the node registration is complete, the system will randomly classify the nodes into clusters or shards according to the type of the registered node, ZEC (Zone Election Contract).

## Node Exit

To exit the network, nodes need to first cancel the registration by sending a "node cancellation" transaction to the node registration contract and paying the Beacon transaction fee. Nodes can liquidate their deposit only after they cancel their registration before exiting. Beacon periodically queries the list of nodes in the node registration contract, and kicks the cancelled nodes out of the network. If our system detects that a node is not cancelled or logged out but not working, it will be punished.
