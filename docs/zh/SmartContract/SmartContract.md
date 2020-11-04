# 智能合约

## 概述

智能合约是可编程区块链账户，也就是将一段代码存在区块链的一个账户下，当这个账户接收到交易，就会按照内置代码运算，并将运算结果更新到该账户对应的区块链数据库中。

## 合约类型

TOP Network链上有两种合约，一是原生系统合约，采用 C++ 语言开发，实现TOP Network链的政治经济制度及链上治理功能，另一种是用户合约，由Lua脚本语言开发，实现特定的应用功能。

## 系统智能合约

TOP Network系统合约提供的功能包括节点注册、节点投票、节点入网、节点选举、链上治理等。

系统合约如下表所示：

| 系统合约         | 部署位置          | 合约地址                                   | 说明                                                         | 是否时钟触发 |
| ---------------- | ----------------- | ------------------------------------------ | ------------------------------------------------------------ | ------------ |
| 集群选举相关合约 | Root-Beacon       | T-21-38PMFdqf8CxBgBAXrYtWuqd7i23z3C85KDq@0 | Root-Beacon选举Root-Beacon group合约。                       | 是           |
|                  |                   | T-21-38S9CXF7EFLUfk4ZTnwtjuLJgNu4Jf8Go4A@0 | Root-Beaco选举Sub-Beacon group合约。                         | 是           |
|                  |                   | T-21-38NN9R9DoXrEhaEGKjGDzSmY1ZfgLqSetvQ@0 | Root-Beacon选举edge group合约。                              | 是           |
|                  |                   | T-21-38TWCPmtZNavRWgTp9KF4CFt6kdCfFxP6EP@0 | Root-Beacon选举archive group合约。                           | 是           |
|                  |                   | T-21-38M7UrM9d2o1J9v1SVRDPtSSMHr4Qsn96N4@0 | Root-Beacon候选池合约，包括所有候选及当选Root-Beacon、Sub-Beacon、edge和archive节点信息。 | 是           |
|                  | Sub-Beacon        | T-22-4uS5rwwKTQeeLPcNwb5VAeXbQhVAq5TiR3d@3 | Sub-Beacon选举auditor/validator group合约。                  | 是           |
|                  |                   | T-22-4uN3e6AujFyvDXY4h5t6or3DgKpu5rTKELD@3 | 分片关联关系合约。                                           | 否           |
|                  |                   | T-22-4uCQ5Di2vZmPURNYVUuvWm5p7EaFQrRLs76@3 | Sub-Beacon候选池合约，包括所有候选及当选auditor和validator节点信息。 | 是           |
| 链上治理合约     | Root-Beacon       | T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0 | 链上治理合约。                                               | 否           |
| 注册合约         | Root-Beacon       | T-21-38DSqqwBWkHKxkVuCq3htW47BGtJRCM2paf@0 | 节点注册合约。                                               | 否           |
|                  | Sub-Beacon        | T-22-4uAt8Na2U1GUtWSHXJSqaJJBXunUX9WU9kB@0 | 对分片汇总上来的工作量数据进行处理，例如计算节点奖励。       | 是           |
|                  |                   | T-22-4uDhihoPJ24LQL4znxrugPM4eWk8rY42ceS@2 | 对分片汇总上来的惩罚数据进行处理，例如计算节点惩罚。         | 是           |
| 分片合约         | Validator Network | T-2-MFGB3gFWSsMfEo9LrC7JEaj1gJTXaYfXny     | 统计分片工作量合约。                                         | 是           |
|                  |                   | T-2-ML7oBZbitBCcXhrJwqBhha2MUimd6SM9Z6     | 统计分片惩罚合约。                                           | 是           |
|                  |                   | T-2-MT3itmNbWs4XYn8R1NUcoucmppJwN7qE69     | 分片奖励领取合约。                                           | 否           |
|                  |                   | T-2-MVfDLsBKVcy1wMp4CoEHWxUeBEAVBL9ZEa     | 节点投票合约。                                               | 否           |
| 奖励增发合约     | Sub-Beacon        | T-22-4uBPYNoyqWBgKzNFnhjtFH5E5fuPZJAapji@1 | 增发TOP token作为奖励池。                                    | 否           |

## 用户智能合约

### 合约开发

目前用户智能合约只支持Lua脚本语言开发，Lua API使用指南请参见[Lua API](/zh/SmartContract/LuaAPI.md)。

### 合约部署

使用TOPIO、RPC API或者TOP Network官方SDK部署用户智能合约。

TOPIO是TOP Network面向社区用户提供的集客户端操作(topcl)与节点管理(xnode)的一款工具，使用指南请参见[TOPIO使用指南](/zh/Tools/TOPIO/Overview.md)。

RPC API是TOP Network提供给社区使用的与链交互的接口，包括发送交易，查询交易信息、节点信息、链信息等，RPC API使用指南请参见[RPC API](/zh/Interface/RPC-API/Overview.md)。

TOP Network软件开发工具包(SDK)封装了加密算法、RPC交互和智能合约，是应用程序与TOP Network网络之间交互的桥梁，SDK使用指南请参见[SDK使用指南](/zh/Interface/SDKs/00-overview.md)。

### 合约调用

可通过TOPNetwork提供的RPC API、SDK、TOPIO或者其他客户端（钱包等）调用用户智能合约。
