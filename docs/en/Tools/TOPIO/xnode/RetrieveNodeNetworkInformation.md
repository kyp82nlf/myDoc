# Retrieve Node Network Information

## Overview 

Caution:

> Use xnode(net) command to query, please use TOPIO Console mode or attach mode. Specific please see [start TOPIO](/en/Tools/TOPIO/StartTOPIO) .

The net command provides network-layer query capabilities, including nodes joining physical network results, xnetwork IDs,and the maximum number of connection peers.

## net Commands

Execute `xnode net -h` or ` xnode net --help` view net commands.

```
$> xnode net
NAME:
    net

COMMANDS:
    help                         Show a list of commands or help for one command.
    Joined                       Get the result of whether the node has joined the network.
    xnetworkID                   Get xnetwork ID which the node joined in.
    maxpeer                      Get the count of max connect peers.
    peercount                    Get the count of connecting peers.
    netID                        Print the node's network IDs.
    osInfo                       Print OS information.
    accountAddr                  Print the node account address
    nodeP2PAddr                  Print the nodes's P2P ID with IP:port.
```

## Command Instructions

### Net Joined

Query whether the node is joined to the physical network.

The node registers and starts xnode access through the node, then enters the node candidate pool and waits for the election.

**Request**

`xnode net joined`

**Request Parameters**

None.

**Options**

None.

**Response Parameters**

The result of the node joining to the physical network:"true" or "false".

**Request Sample**

`xnode net joined`

**Response Schema**

* Successful

`true` or `false`

* Failed

None.

### the xnetworkID

Query whether the node joins the mainchain network or the business chain network.

**Request**

`xnode net xnetworkID`

**Request Parameters**

None.

**Options**

None.

**Response Parameters**

Mainchain network ID default to "0," business chain network ID default to "1."

**Request Sample**

`xnode net xnetworkID`

**Response Schema**

* Successful

"0" or "1"。

* Failed

None.

### Maximun Connected Peers

****

**Request**

`xnode net peercount`

**Request**

None.

**Options**

None.

**Response Parameters**

The maximum number of connectd peers is now 256.

**Request Sample**

`xnode net peercount`

**Response Schema**

* Successful

`256`

* Failed

None.

### Connected Peers

The number of connected peers is directly related to the number of nodes in the network.

**Request**

`xnode net peercount`

**Request Parameters**

None.

**Options**

None.

**Response Parameters**

Number of connected peers.

**Request Sample**

`xnode net peercount`

**Response Schema**

* Successful

`66`

* Failed

None.

### Network ID

The network ID where the node has been elected.

**Request**

`xnode net netID`

**Request Parameters**

None.

**Options**

None.

**Response Parameters**

| Network ID                                                   | Description                                   |
| ------------------------------------------------------------ | --------------------------------------------- |
| xnetwork_id[0]                                               | The node has not been elected to the network. |
| xnetwork_id[0] zone_id[1]、cluster_id[0]、group_id[0]        | Root-Beacon Network                           |
| xnetwork_id[0] zone_id[2]、cluster_id[0]、group_id[0]        | Sub-Beacon Network                            |
| xnetwork_id[0] zone_id[14]、cluster_id[1]、group_id[1]       | Archive Network                               |
| xnetwork_id[0] zone_id[15]、cluster_id[1]、group_id[1]       | Edge Network                                  |
| xnetwork_id[0] zone_id[0]、cluster_id[1]、group_id[n],n∈[1,63] | Audit  Network                                |
| xnetwork_id[0] zone_id[0]、cluster_id[1]、group_id[m],m∈[64,126] | Validate Network                              |

**Request Sample**

`xnode net netID`

**Response Schema**

* Successful

```
xnetwork_id[0] zone_id[14] cluster_id[1] group_id[1]   Archive Network
xnetwork_id[0] zone_id[0] cluster_id[1] group_id[63]   Audit Network
xnetwork_id[0] zone_id[0]  cluster_id[1] group_id[64]   Validate Network
```

The returned results indicate that the different roles of this node are elected to Archive Network, Audit Network, and Validate Network.

* Failed

None.

### OS information

**Request**

`xnode net osInfo`

**Request Parameters**

None.

**Options**

None.

**Response Parameters**

| Parameter Name         | Description            |
| ---------------------- | ---------------------- |
| OS name                | OS name.               |
| Host Name              | Host name.             |
| Release(Kernel)Version | Kernel Version.        |
| Kernel Build Timestamp | Kernel Build Timestamp |
| Machine Arch           | Machine Arch           |

**Request Sample**

`xnode net osInfo`

**Response Schema**

* Successful

```
Os Name:Linux
Host Name:Jiao
Release(Kernel) Version:3.10.0-1127.el7.x86_64
Kernel Build Timestamp:#1 SMP Tue Mar 31 23:36:51 UTC 2020
Machine Arch:x86_64
```

* Failed

None.

### Node Account Address

**Request**

`xnode net accountAddr`

**Request Parameters**

None.

**Options**

None.

**Response Schema**

| Parameter Name | Description               |
| -------------- | ------------------------- |
| accountaddr    | The node account address. |

**Request Sample**

`xnode net accountAddr`

**Response Schema**

* Successful

`T-0-LeXNqW7mCCoj23LEsxEmNcWKs8m6kJH446`

* Failed

None.

### Node P2P_IP:Port

**Request**

`xnode net nodeP2PAddr`

**Request Parameters**

None.

**Options**

None.

**Response Parameters**

| Parameter Name | Description       |
| -------------- | ----------------- |
| tnode          | Node P2P IP:port. |

**Request Sample**

`xnode net nodeP2PAddr`

**Response **

* Scuccessful

```
tnode://ffffff17236471b087a873b8daf14c840000000090e2bd5f54283eccc94e8d3bf0a81bc0@127.0.0.1:9002
```

* Failed

None.