# 查询节点网络信息

## 概述

提醒：

> 使用xnode命令查询信息，请进入TOPIO console模式或者attach模式。具体请分别参见[启动TOPIO](/zh/Tools/TOPIO/StartTOPIO)中“使用console模式”、“使用attach”模式内容。

net命令提供网络层查询功能，包括查询节点加入物理网络结果、节点加入的xnetwork ID、以及最大连接peer的数量。

net命令如下表所示。

| 命令                                              | 说明                        |
| ------------------------------------------------- | --------------------------- |
| [xnode net joined](#查询节点加入网络结果)         | 查询节点加入物理网络结果。  |
| [xnode net xnetworkID](#查询节点加入的xnetworkID) | 查询节点加入的xnetwork ID。 |
| [xnode net maxpeer](#查询最大连peer的数量)        | 查询最大连接peer的数量。    |
| [xnode net peercount](#查询连接peer的数量)        | 查询连接peer的数量。        |
| [xnode net netID](#查询节点加入的networkID)       | 查询节点加入的network ID。  |
| [xnode net osInfo](#查询OS系统信息)               | 查询OS系统信息。            |
| [xnode net accountAddr](#查询节点账户地址)        | 查询节点账户地址。          |
| [xnode net nodeP2PAddr](#查询节点P2P_IP及端口)    | 查询节点P2P IP及端口。      |

## 查看net所有命令及帮助

使用`xnode net -h   ` 或者` xnode net --help`查看net所有命令。

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
    netID                        Print network IDs which the node joined in.
    osInfo                       Print OS information.
    accountAddr                  Print the node account address
    nodeP2PAddr                  Print the nodes's P2P ID with IP:port.
```

## 命令使用说明

### 查询节点加入网络结果

查询节点是否已加入物理网络。

节点通过节点注册并启动xnode入网，入网后进入节点候选池等待选举。

**请求方式**

`xnode net joined`

**请求参数**

无。

**选项**

无。

**返回参数**

节点接入物理网络的结果，结果为"true"或"false"。

**请求样例**

`xnode net joined`

**返回样例**

* 成功返回

`true`或者`false`

* 失败返回

无。

### 查询节点加入的xnetworkID

查询节点加入的是主网还是业务链网络。

**请求方式**

`xnode net xnetworkID`

**请求参数**

无。

**选项**

无。

**返回参数**

主网网络ID默认为"0"，业务链网络ID为"1"。

**请求样例**

`xnode net xnetworkID`

**返回样例**

* 成功返回

"0"或者"1"。

* 失败返回

无。

### 查询最大连接peer的数量

**请求方式**

`xnode net peercount`

**请求参数**

无。

**选项**

无。

**返回参数**

最大链接peer数量现为256个。

**请求样例**

`xnode net peercount`

**返回样例**

* 成功返回

`256`

* 失败返回

无。

### 查询连接peer的数量

节点连接peer的数量和节点角色相关，节点加入的网络越多，连接的peer数量会相应增加。

**请求方式**

`xnode net peercount`

**请求参数**

无。

**选项**

无。

**返回参数**

返回节点连接peer的数量，根据节点实际加入的网络返回。

**请求样例**

`xnode net peercount`

**返回样例**

例如网络中有1000个节点，节点连接peer的数量为66.

* 成功返回

`66`

* 失败返回

无。

### 查询节点加入的networkID

查询节点经过选举后，加入的网络ID。

**请求方式**

`xnode net netID`

**请求参数**

无。

**选项**

无。

**返回参数**

| 参数名称           | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| 节点具体所在的网络 | 如只返回xnetwork_id[0]，如只返回xnetwork_id[0]，无zone_id、cluster_id、group_id信息，证明节点还未被选举到分片网络。<br/>zone_id、cluster_id、group_id，分别为1、0、0，节点被选举到Root-Beacon Network；<br/>zone_id、cluster_id、group_id，分别为2、0、0，节点被选举到Sub-Beacon Network；<br/>zone_id、cluster_id、group_id，分别为14、1、1，节点被选举到Archive Network；<br/>zone_id、cluster_id、group_id，分别为15、1、1，节点被选举到Edge Network；<br/>zone_id、cluster_id，分别为0、1，group_id的值为[1,63]，节点被选举到Audit Network；<br/>zone_id、cluster_id，分别为0、1，group_id的值为[64,126]，节点被选举到Validate Network。 |

**请求样例**

`xnode net netID`

**返回样例**

* 成功返回

```
xnetwork_id[0] zone_id[14] cluster_id[1] group_id[1]   Archiver Network
xnetwork_id[0] zone_id[0] cluster_id[1] group_id[63]   Auditor Network
xnetwork_id[0] zone_id[0]  cluster_id[1] group_id[64]   Validator Network
```

以上返回结果说明当前此节点的不同角色分别被选举进入Archiver Network、Auditor Network、Validator Network。

* 失败返回

无。

### 查询OS系统信息

**请求方式**

`xnode net osInfo`

**请求参数**

无。

**选项**

无。

**返回参数**

| 参数名称               | 说明             |
| ---------------------- | ---------------- |
| OS name                | 操作系统名称。   |
| Host Name              | 主机名。         |
| Release(Kernel)Version | 版本（内核）。   |
| Kernel Build Timestamp | 内核构建时间戳。 |
| Machine Arch           | 机器结构。       |

**请求样例**

`xnode net osInfo`

**返回样例**

* 成功返回

```
Os Name:Linux
Host Name:Jiao
Release(Kernel) Version:3.10.0-1127.el7.x86_64
Kernel Build Timestamp:#1 SMP Tue Mar 31 23:36:51 UTC 2020
Machine Arch:x86_64
```

* 失败返回

无。

### 查询节点账户地址

**请求方式**

`xnode net accountAddr`

**请求参数**

无。

**选项**

无。

**返回参数**

| 参数名称    | 说明           |
| ----------- | -------------- |
| accountaddr | 节点账户地址。 |

**请求样例**

`xnode net accountAddr`

**返回样例**

* 成功返回

`T-0-LeXNqW7mCCoj23LEsxEmNcWKs8m6kJH446`

* 失败返回

无。

### 查询节点P2P_IP及端口

**请求方式**

`xnode net nodeP2PAddr`

**请求参数**

无。

**选项**

无。

**返回参数**

| 参数名称 | 说明          |
| -------- | ------------- |
| tnode    | 节点P2P地址。 |

**请求样例**

`xnode net nodeP2PAddr`

**返回样例**

* 成功返回

```
tnode://ffffff17236471b087a873b8daf14c840000000090e2bd5f54283eccc94e8d3bf0a81bc0@127.0.0.1:9002
```

* 失败返回

无。