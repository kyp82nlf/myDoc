# 系统交易

## 概述

system命令用于发送节点注册、节点投票、领取节点奖励、节点提案等交易。

system命令如下表所示。

| 命令                                         | 说明                   |
| -------------------------------------------- | ---------------------- |
| [system registerNode](#注册节点)             | 注册节点。             |
| [system unregisterNode](#注销节点)           | 注销节点。             |
| [system setNodeName](#设置节点昵称)          | 设置节点昵称。         |
| [system queryNodeInfo](#查询节点信息)        | 查询节点信息。         |
| [system undateNodeType](#更新节点类型)       | 更新节点类型。         |
| [system queryNodeReward](#查询节点奖励)      | 查询节点奖励。         |
| [system claimNodeReward](#领取节点奖励)      | 领取节点奖励。         |
| [system stakeDeposit](#增加节点保证金)       | 增加节点保证金。       |
| [system unstakeDeposit](#减少节点保证金)     | 减少节点保证金。       |
| [system redeemNodeDeposit](#赎回节点保证金)  | 赎回节点保证金。       |
| [system voteNode](#节点投票)                 | 节点投票。             |
| [system unvoteNode](#取消节点投票)           | 取消节点投票。         |
| [system setDividendRatio](#设置分红比例)     | 设置分红比例。         |
| [system queryVoterDividend](#查询投票者分红) | 查询投票者分红。       |
| [system claimVoterDividend](#领取投票者分红) | 领取投票者分红。       |
| [system listVoteUsed](#查询账户投票分布信息) | 查询账户投票分布信息。 |
| [system submitProposal](#提交提案)           | 提交提案。             |
| [system withdrawProposal](#撤回提案)         | 撤回提案。             |
| [system queryProposal](#获取提案详细信息)    | 获取提案详细信息。     |
| [system tccVote](#TCC表决提案)               | TCC表决提案。          |

## 查看system所有命令及帮助

使用`system -h   ` 或者` system--help`查看system所有命令。

```
COMMANDS:
    claimNodeReward                 Claim the node rewards.
    claimVoterDividend              Claim the voter dividend.
    listVoteUsed                    Query vote-used distribution.
    queryNodeInfo                   Query node information.
    queryNodeReward                 Query specific node rewards.
    queryProposal                   Query specific proposal details.
    queryVoterDividend              Query specific voter dividend.
    redeemNodeDeposit               Redeem node deposit when node regiter.
    registerNode                    Register as node.
    setDivident                     Set devident percentage to voters supporting your node.
    setNickname                     Set nickname.
    stakeDeposit                    Stake deposit.
    submitProposal                  The committee submit the on-chain governance proposal.
    tccVote                         TCC(TOP Network Community Council) vote on proposal.
    unregisterNode                  Node unregister.
    unstakeDeposit                  Unstake deposit.
    unvoteNode                      Unvote on nodes.
    updateNodeType                  Update node type.
    voteNode                        Vote on nodes.
    withdrawProposal                Withdraw proposal.

OPTIONS:
    -h --help                       Show a list of commands or help for one command.
```

使用` system claimNodeReward -h`或者`system claimNodeReward --help`查看子命令`claimNodeReward`的帮助信息。

```
Claim the node rewards.

USAGE:
    system claimNodeReward

OPTIONS:
    -h --help                       Show help information for one command.

EXAMPLE:
    system claimNodeReward
```

## 命令使用说明

### 交易费用说明

TOP Network链上发送交易会消耗一定的gas资源，如果账户余额大于等于100*10^6 uTOP，系统会免费赠与25,000 Tgas。

每笔交易都至少需要100,000 uTOP token作为交易保证金，否则交易将被丢弃。

在账户gas资源充足的情况下，交易保证金在交易成功后会立即退回到您的账户。如gas资源不足以支付交易费用，则需要从交易保证金中扣除一笔费用用来兑换gas资源以支付交易费用，扣除的TOP token将被销毁。

如交易保证金也不足以兑换足够的gas资源，那么交易最终将失败。

对于调用部署在Root-Beacon上合约的交易（注册节点相关、提案相关、启动节点进程入网），系统还会自动从发送方账户里扣除100*10^6 uTOP token的服务费，并销毁。

交易所消耗的资源详细信息请参见[资源模型](/zh/AboutTOPNetwork/Protocol/ResourceModel.md)。

Root-Beacon合约详细内容请参见[智能合约](AboutTOP/Network/SmartContract/SmartContract.md)一章“系统合约”内容。

### 注册节点

TOP Network目前有三种类型的节点：边缘(edge)节点、验证(validator)节点、高级(advance)节点。您可以注册成为其中一种类型的节点。

高级节点可在不同的网络里同时担任多个角色：验证（validator)、审计(auditor)、存档(archive)、Root-Beacon、Sub-Beacon。

各类型节点注册最低保证金如下表所示。

| 节点类型            | 最低注册保证金      |
| ------------------- | ------------------- |
| 边缘节点(edge)      | 100,000*10^6 uTOP   |
| 验证节点(validator) | 500,000*10^6 uTOP   |
| 高级节点(advance)   | 1,000,000*10^6 uTOP |

提醒：

> 节点注册成功后（包括第一次注册和注销后重新注册），需要启动xnode，才会加入TOP Network物理网络，进入候选池等待选举。启动xonde请参见[启动TOPIO](/zh/Tools/TOPIO/StartTOPIO.md)中“启动xnode”内容。

**请求方式**

```
system registerNode
```

**请求参数**

| 参数名称         | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ---------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| register_deposit | 是       | -      | Uint64 | 节点注册保证金，单位uTOP。                                   |
| node_type        | 是       | -      | String | 节点类型，包括edge（边缘节点）、validator（验证节点）、advance（高级节点），高级节点兼具archive（存档）、validator（验证）、auditor（审计）角色。<br/>您可以注册成为三种类型中的一种。<br/>注册成为高级节点后，advance节点被选举为何种工作角色取决于节点的选票：<br/>advance节点被选举为audtior、archive、Root-Beacon、Sub-Beacon角色，节点所获得的选票需要大于等于节点实际质押的保证金（此处节点保证金以TOP计算，非uTOP）。<br/>当选票低于实际质押保证金时，advance节点只能被选为validator。<br/>说明：<br/>节点选票须由接受投票而得，可以由其他节点投票，也可由本账户投票。 |
| nodename         | 是       | -      | String | 节点昵称，4-16字符，字母、数字或下划线。                     |

**选项**

| 选项名称        | 默认值   | 类型   | 说明                                                         |
| --------------- | -------- | ------ | ------------------------------------------------------------ |
| -h,--help       | -        | -      | 查看命令帮助信息。                                           |
| --node_sign_key | 账户公钥 | String | 您可以使用节点账户公钥(Base64)作为节点注册的node sign key。<br/>为了更好地保护您的账户资产，建议您使用`wallet createKey`创建一对无资产的公私钥对，其中公钥作为节点注册的node sign key，在节点注册入网后，节点工作时使用私钥为节点签名。<br/>此处请输入对应的公钥(Base64)，其他节点可使用该公钥进行验签。<br/>如不设置node_sign_key，系统默认使用账户公钥。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system registerNode 500000000000 validator qiqi --node_sign_key BFYRfp557uqBAKA54JmFkT+UVXf74LVdHDnjtLBM/V3nyIdKiHLwX2yr7s03RCoHNfciT0Zays3oUvcmkRv5VK4=
```

**返回样例**

* 成功返回

```
$> {
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "28",
   "tx_hash" : "0x15109aaf5f3084f66dc8767a39787abc0629d8eb66099e0712f39033af7e26c3",
   "tx_size" : 261
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查看交易，交易最终共识成功，使用`system queryNodeInfo`查询节点信息，如下图所示。

![image-20200721173736924](system.assets/image-20200721173736924.png)

以上信息证明节点注册成功。

* 失败返回

注册成为"validator"类型节点，但是没有质押足够的保证金，返回：

```
{
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "20",
   "tx_hash" : "0xeb49aff52fbb76092eb2ab97646b5afa61e022e245f34e6ca2dba3370682b4a5",
   "tx_size" : 261
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则注册节点失败。

### 注销节点

TOP Network的节点退出网络，需要先发起节点注销：

* 节点注销需要节点主动发起。

* 节点注销后，节点注册保证金不会立刻退回到节点账户，会被锁定72小时，如果节点作恶，锁定期会延长。

* 锁定的保证金到期后需要节点账户主动赎回保证金，系统不会自动退回。

**请求方式**

```
system unregister
```

**请求参数**

无。

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system unregister
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "6",
	"tx_hash": "0x8159071ec087303cf673ed67e19d448826af0797c3030c9e77c6d081f5e09a87",
	"tx_size": 293
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，则成功注销节点。

* 失败返回

返回交易hash及交易大小，根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则注销节点失败。

### 设置节点昵称

**请求方式**

```
system setNickname
```

**请求参数**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                                         |
| -------- | -------- | ------ | ------ | -------------------------------------------- |
| nodename | 是       | -      | String | 新的节点昵称，4-16字符，字母、数字或下划线。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system setNickname baba
```

**返回样例**

* 成功返回

```
{
   "errmsg":"ok",
   "errno":0,
   "sequence_id":"7",
   "tx_hash":"0x631c785ce9462ff6c7951f1a5e941af6d6910d54b29ccdc8f4fc388dc513b770",
   "tx_size":298
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，`system queryNodeInfo`查询节点名称有更新，则成功更新节点名称。

* 失败返回

```
{
   "errmsg":"ok",
   "errno":0,
   "sequence_id":"12",
   "tx_hash":"0x3a4ac388896178c50ab777fb7947ac3028abe5298535800ecd918236f2c36c17",
   "tx_size":298
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，使用`system queryNodeinfo`查询节点名称未更新，则节点名称更新失败。

### 增加节点保证金

您可以随时为节点增加保证金，从而提高您的综合权益(Comprehensive Stake)。

增加节点保证金不会改变您注册的节点类型。

**请求方式**

```
system stakeDeposit
```

**请求参数**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                     |
| -------- | -------- | ------ | ------ | ------------------------ |
| deposit  | 是       | -      | Uint64 | 增加的保证金，单位uTOP。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
stakeDeposit 200000
```

**返回样例**

* 成功返回

```
{
   "errmsg":"ok",
   "errno":0,
   "sequence_id":"10",
   "tx_hash":"0xf8a59907230c19f78dc194d1d724c3ab3306702a85d860219e7300304b294546",
   "tx_size":307
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，最终共识成功，使用`system queryNodeInfo`查询节点保证金(node_deposit)余额有相应变化，成功增加节点保证金。

* 失败返回

根据交易hash，使用`get transaction`查询交易，最终共识失败，增加节点保证金失败。

### 减少节点保证金

您可以随时减少质押的保证金，减少保证金不会改变您注册的节点类型，但是如果节点保证金余额低于当前类型节点保证金最低要求，减少保证金将失败。

您可以随时减少质押的保证金，减少保证金不会改变您注册的节点类型，但是如果节点保证金余额低于当前类型节点保证金最低要求，减少保证金将失败。

**请求方式**

```
system unstakeDeposit
```

**请求参数**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                     |
| -------- | -------- | ------ | ------ | ------------------------ |
| deposit  | 是       | -      | Uint64 | 减少的保证金，单位uTOP。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system unstakeDeposit 300000
```

**返回样例**

* 成功返回

```
{
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "30",
   "tx_hash" : "0xce9275be9176c53dadb445149e702a8c408f7007f3cb22e263483e6f30f2997d",
   "tx_size" : 380
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，`system queryNodeInfo`查询节点保证金(node_deposit)余额有相应变化，成功减少节点保证金。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，减少节点保证金失败。

### 赎回节点保证金

节点注销后，节点保证金将会被锁定72小时，锁定的保证金到期后需要节点主动赎回保证金，系统不会自动退回。

**请求方式**

```
system redeemNodeDeposit
```

**请求参数**

无。

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system redeemNodeDeposit
```

**返回样例**

* 成功返回

```
{
   "errmsg":"ok",
   "errno":0,
   "sequence_id":"3",
   "tx_hash":"0xcf612c66a8b33f0976e316f5002b49ca3cdbb7e854107b15c81c7ed04836a982",
   "tx_size":321
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，使用`get account`查询账户余额有相应变化，则成功赎回节点保证金。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，赎回节点保证金失败。

### 更新节点类型

支持更新节点类型。

更新节点类型前，请使用`system queryNodeInfo`查询节点保证金余额(node_deposit)是否达到新节点类型所需的最低保证金要求，如果不满足新类型节点所需的保证金，更新的时候需要质押相应保证金差额。

如果当前节点保证金余额大于等于新类型节点注册最低保证金，那么更新节点类型时，您可以继续为节点增加保证金或者不增加（输入"0"）。

更新节点类型还可以通过命令`system registerNode`重注册实现，如果新类型节点需要更多的保证金，在重注册时，需要增加相应的保证金差额。

同样的，如果当前节点保证金余额大于等于新类型节点所需注册保证金，那么重注册节点时，您可以继续为节点增加保证金或者不增加（输入"0"）。

**请求方式**

```
system updateNodeType
```

**请求参数**

| 参数名称  | 是否必选 | 默认值 | 类型   | 说明                     |
| --------- | -------- | ------ | ------ | ------------------------ |
| deposit   | 是       | -      | Uint64 | 增加的保证金，单位uTOP。 |
| node_type | 是       | -      | Object | 更新后的节点类型。       |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system updatenodetype 300000 edge validator
```

* 成功返回

```
{
   "errmsg":"ok",
   "errno":0,
   "sequence_id":"3",
   "tx_hash":"0xcf612c66a8b33f0976e316f5002b49ca3cdbb7e854107b15c81c7ed04836a982",
   "tx_size":321
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，使用`system queryNodeInfo`查询节点类型有相应变化，则成功更新节点类型。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则更新节点类型失败。

### 查询节点信息

**请求方式**

```
system queryNodeInfo
```

**请求参数**

| 参数名称            | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ------------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| target_account_addr | 否       | 空     | String | 节点账户地址。<br/>可指定某个节点，不指定的话，默认查询所有节点信息。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称             | 类型    | 说明                                                         |
| -------------------- | ------- | ------------------------------------------------------------ |
| account_addr         | String  | 节点账户地址。                                               |
| auditor_credit       | String  | auditor节点信誉分。                                          |
| auditor_stake        | Uint64  | auditor节点权益：auditor stake=（节点保证金+节点得票总数）*信誉分 |
| dividend_ratio       | Integer | 分红率，百分比%，值为[0,100]。                               |
| network_id           | String  | 值为0，证明节点加入的是主链网络。                            |
| node_deposit         | Uint64  | 节点保证金，单位uTOP。                                       |
| nodename             | String  | 节点昵称。                                                   |
| registered_node_type | String  | 节点注册类型：<br/>边缘节点：edge<br/>验证节点：validator<br/>高级节点：advance |
| node_sign_key        | String  | 注册节点时使用的公钥。                                       |
| validator_credit     | String  | validator节点信誉分。                                        |
| validator_stake      | Uint64  | validator节点权益：validator stake=（节点保证金+节点得票总数）/2 |
| vote_amount          | Uint64  | 节点得票总数。                                               |

**请求样例**

```
system queryNodeInfo T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4
```

**返回样例**

* 成功返回

```
 "data" : {
      "account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4",
      "auditor_credit" : "0.100000",
      "auditor_stake" : 0,
      "dividend_ratio" : 0,
      "network_id" : "0",
      "node_deposit" : 1000,
      "nodename" : "qiqi",
      "registered_node_type" : "validator",
      "node_sign_key" : "BFYRfp557uqBAKA54JmFkT+UVXf74LVdHDnjtLBM/V3nyIdKiHLwX2yr7s03RCoHNfciT0Zays3oUvcmkRv5VK4=",
      "validator_credit" : "0.100000",
      "validator_stake" : 0,
      "vote_amount" : 0
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "10"
}
```

* 失败返回

节点未注册返回：

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "11"
}
```

### 查询节点奖励

节点奖励包括节点工作奖励及选票奖励。

**请求方式**

```
system queryNodeReward
```

**请求参数**

| 参数名称            | 是否必选 | 默认值 | 类型   | 说明                           |
| ------------------- | -------- | ------ | ------ | ------------------------------ |
| target_account_addr | 否       | -      | String | 如为空，默认查询所有节点奖励。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称        | 类型   | 说明                           |
| --------------- | ------ | ------------------------------ |
| accumulated     | Uint64 | 节点奖励总额，单位uTOP。       |
| issue_time      | Uint64 | 每个节点奖励发放时的时钟高度。 |
| last_claim_time | Uint64 | 上次领取奖励的时钟高度。       |
| unclaimed       | Uint64 | 未领取的奖励，单位uTOP。       |

**请求样例**

```
system queryNodeReward 
```

**返回样例**

* 成功返回

```
{
   "data" : {
      "T-0-LSiFkNdXxRh9KyrYDsDEX2QJrnCCUScMqB" : {
         "accumulated" : 5918521830,
         "issue_time" : 1000,
         "last_claim_time" : 0,
         "unclaimed" : 5918521830
      },
      "T-0-La8cTjNyTEmspAyTbXEsMhRPN6U9A7JRvH" : {
         "accumulated" : 4687423050,
         "issue_time" : 1200,
         "last_claim_time" : 0,
         "unclaimed" : 4687423050
      }
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "49"
}
```

* 失败返回

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "24"
}
```

### 领取节点奖励

领取节点奖励之前可使用`system queryNodeReward`查询节点奖励信息。

每24小时最多领取一次，每次领取奖励金额需要≥1,000*10^6 uTOP token。

**请求方式**

```
system claimNodeReward
```

**请求参数**

无。

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system claimNodeReward
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "11",
	"tx_hash": "0x589d064b2130e6bb99858f9be952e56c262e663ca23e453aae3a497dc44b6e23",
	"tx_size": 291
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，使用`get account`查询节点账户余额有相应变化，则成功领取节点奖励。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则领取节点奖励失败。

### 节点投票

投票之前请确保您的节点账户中有足够的未使用的选票，可使用`get account`命令查询。如您的账户中没有足够的选票，可通过命令`sendtx stakeVote`兑换选票。

TOP Network链上节点账户可以给在线节点投票，获取收益：

* 您可以给任意一个包含"auditor"角色的节点（即advance节点）投票。
* 投到一个节点上的起投票数10,000票，后续累加投票无限制。
* 单个账户目前最多允许给1000个节点投票。
* 给节点投票后，节点获取的奖励会有一部分分给投票者。

**请求方式**

```
system voteNode
```

**请求参数**

| 参数名称          | 是否必选 | 默认值 | 类型     | 说明                                     |
| ----------------- | -------- | ------ | -------- | ---------------------------------------- |
| node_num          | 是       | -      | Interger | 接受投票的节点数，可同时给多个节点投票。 |
| node_account_addr | 是       | -      | String   | 接受投票账户地址。                       |
| vote_ num         | 是       | -      | Uint64   | 投票数量。                               |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询此次交易结果。  |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system voteNode 2 T-0-LTSip8Xbjutrtm8RkQzsHKqt28g97xdUxg 200 T-0-LTBBRL1awrVhcisxCCMmgsB5XyPkRuBj9g 300
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "7",
	"tx_hash": "0x2330f8d417bd6c51770df492272f5e9669717ec25a915d3d379e0ed52e462d07",
	"tx_size": 352
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，`get account`查询节点账户未使用选票有相应变化，则成功给节点投票。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则给节点投票失败。

### 取消节点投票

投票人可以随时将已经投到节点上的选票取消并收回。

每次取消投票的票数无限制，但时不能高于给节点投票的总数，否则取消投票将失败。

给节点投票后，即使注销节点，选票也不会主动退还至您的账户， 取消投票需要您主动发起取消投票操作。

您可以批量取消节点投票。

**请求方式**

```
system unvoteNode
```

**请求参数**

| 参数名称          | 是否必选 | 默认值 | 类型     | 说明                 |
| ----------------- | -------- | ------ | -------- | -------------------- |
| node_num          | 是       | -      | Interger | 投票节点数。         |
| node_account_addr | 是       | -      | String   | 接收投票的账户地址。 |
| vote_ num         | 是       | -      | Uint64   | 取消投票数量。       |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询此次交易结果。  |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system unvoteNode 1 T-0-LTSip8Xbjutrtm8RkQzsHKqt28g97xdUxg 100
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "3",
	"tx_hash": "0xb740183a59398241ecf709d9003f607bb6dde40441b106d9edd795fde0da1208",
	"tx_size": 356
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，`get account`查询节点账户未使用选票有相应变化，则成功取消给节点投票。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则取消给节点投票失败。

### 设置分红比例

设置了分红比例，您收到的全部奖励（包括但不限于工作量奖励和节点选票奖励），会按照您设置的分红比例分到支持您的投票者账户上。

每14天您可以修改一次分红比例。

**请求方式**

```
system setDividendRatio
```

**请求参数**

| 参数名称 | 是否必选 | 默认值 | 类型    | 说明                           |
| -------- | -------- | ------ | ------- | ------------------------------ |
| percent  | 是       | -      | Integer | 分红百比例，取值范围 [0,100]。 |

**选项**

| 选项名称     | 默认值             | 类型   | 说明                                                       |
| ------------ | ------------------ | ------ | ---------------------------------------------------------- |
| -h,--help    | -                  | -      | 查看命令帮助信息。                                         |
| --tx_deposit | 100,000 uTOP token | String | 交易保证金，单位：uTOP。如不填，默认为100,000 uTOP token。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询此次交易结果。  |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system setDividendRatio 60
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "5",
	"tx_hash": "0x3586caae6a3871b48209beda70c7617b0cd51dcc07f1116cd63d537b377c278c",
	"tx_size": 303
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，则成功设置分红比例。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，则设置分红比例失败。

### 查询投票者分红

您给节点投票之后，可以获取相应的投票分红，分红比例由被投票的节点设置。

投票者分红不是立刻可以查询，投票6小时后可以查询投票者分红。

**请求方式**

```
system queryVoterDividend
```

**请求参数**

| 参数名称            | 是否必选 | 默认值 | 类型   | 说明             |
| ------------------- | -------- | ------ | ------ | ---------------- |
| target_account_addr | 是       | -      | String | 投票者账户地址。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称        |                 | 类型   | 说明                                           |
| --------------- | --------------- | ------ | ---------------------------------------------- |
| accumulated     |                 | Uint64 | 投票者分红总额，单位uTOP。                     |
| last_claim_time |                 | Uint64 | 投票者上次领取分红的时钟高度。                 |
| node_dividend   |                 | List   | 被投票节点的分红信息。                         |
|                 | account_addr    | String | 被投票节点账户地址。                           |
|                 | accumulated     | Uint64 | 被投票节点分给该投票者的分红，单位uTOP。       |
|                 | last_claim_time | Uint64 | 被投票节点分红上次被领取的时钟高度。           |
|                 | unclaimed       | Uint64 | 被投票节点分给该投票者未领取的分红，单位uTOP。 |
| unclaimed       |                 | Uint64 | 投票者未领取的分红总额，单位uTOP。             |

**请求样例**

```
system queryVoterDividend T-0-LKogyPKkA6owYPjPGrzYSe39KLTSVJUzS8
```

**返回样例**

* 成功返回

```
{
   "data" : {
      "accumulated" : 1136005762,
      "last_claim_time" : 16632,
      "node_dividend" : [
         {
            "account_addr" : "T-0-LKogyPKkA6owYPjPGrzYSe39KLTSVJUzS8",
            "accumulated" : 1136005762,
            "last_claim_time" : 16632,
            "unclaimed" : 768988516
         }
      ],
      "unclaimed" : 768988516
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "82"
}
```

* 失败返回

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "23"
}
```

### 领取投票者分红

系统每24小时结算一次投票者分红，将投票人分红自动发放到分红池。

投票人24小时内可以申请提现一次，发起提现申请后立即到账，如提现金额低于10*10^6 uTOP，提现将失败。

**请求方式**

```
system claimVoterDividend
```

**请求参数**

无。

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询此次交易结果。  |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system claimVoterDividend
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "2",
	"tx_hash": "0x591c0f2fdc3a6e189bedefbe21e965c2aa7bfec70e31a0660fe2a00e02edea07",
	"tx_size": 286
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，使用`get account`查询节点账户余额有变化，则成功领取节点奖励。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则节点领取奖励失败。

### 查询账户投票分布信息

支持查询账户已投票的具体信息，包括接收投票的节点、对应的票数。

**请求方式**

```
system listVoteUsed
```

**请求参数**

| 参数名称            | 是否必选 | 默认值 | 类型   | 说明             |
| ------------------- | -------- | ------ | ------ | ---------------- |
| target_account_addr | 是       | -      | String | 投票者账户地址。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称   | 类型    | 说明                                                    |
| ---------- | ------- | ------------------------------------------------------- |
| vote_infos | Map数组 | 接收投票节点账户地址(String)；给节点投票数量(Integer)。 |

**请求样例**

```
system listVoteUsed T-0-LKogyPKkA6owYPjPGrzYSe39KLTSVJUzS8
```

**返回样例**

* 成功返回

```
{
   "data" : {
      "vote_infos" : {
         "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4" : 200
      }
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "80"
}
```

* 失败返回

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "6"
}
```

### 提交提案

链上治理时，首先需要提交链上治理提案。

任何用户可以发起提案，只要质押一定的TOP token即可。

提醒：

> 提交提案需要质押至少100*10^6 uTOP token作为提案保证金，质押天数为30天，到期时，提案保证金会自动退回至您的账户中。

> 除了最低交易保证金100,000 uTOP token，调用Root-Beacon系统合约交易，需要扣除100*10^6 uTOP token的交易手续费。
>
> 因此提交提案前请确保您的账户里至少有200.1*10^6 uTOP token的余额。

#### 链上参数修改提案

只有TCC委员对提案有表决权，对于不同级别的提案，表决通过的规则不同：

* Normal：需51%委员通过。

* Important：需51%委员通过，且弃权委员不超过25%。

* Critical：需2/3的委员通过，且反对委员不超过20%。

#### 社区基金管理提案

社区基金管理提案为"Critical"级别。

系统将治理奖励和零工作量节点奖励发放至社区基金账户，社区用户可以通过链上治理将账户中的余额转账至销毁账户，提案经过TCC表决通过后，销毁即生效。

说明：

> * 社区基金账户地址：T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0。
> * 销毁账户地址：T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug。

**请求方式**

```
system submitProposal
```

**请求参数**

| 参数名称               | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ---------------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| proposal_type          | 是       | -      | Uint8  | 提案类型：1--修改链上治理参数提案；2--社区基金管理提案。     |
| target                 | 是       | -      | String | 当提案类型为修改链上治理参数提案时，target为链上治理参数名称，链上治理参数请参见[链上治理参数说明]( /zh/On-ChainGovernance/Overview.md)；<br/>当提案类型为社区基金管理提案时，target为接受转账账户地址，销毁账户地址：T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug。 |
| value                  | 是       | -      | String | 当target为链上治理参数时，value为修改后的值。<br/>当target为接受转账账户地址，value为转账金额，单位uTOP。 |
| proposal_deposit       | 是       | -      | Uint64 | 提案保证金，最低为100*10^6 uTOP。                            |
| effective_timer_height | 是       | -      | Uint64 | 提案通过后生效时钟高度。如生效时钟高度小于提案通过时的时钟高度，那么提案在通过后会立刻生效。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询此次交易结果。  |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system submitProposal 1 archive_deposit 10000 100 1010110
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "3",
	"tx_hash": "0xb777722eba6b3b9295f42171b0ed7a31d72f6465797ddeed111af4f0ad710a1f",
	"tx_size": 424
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，则成功提交提案。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则提交提案失败。

### 获取提案详细信息

对提案投票前，可先获取提案详细信息了解提案。

**请求方式**

```
system queryProposal
```

**请求参数**

| 参数名称    | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ----------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| proposal_id | 否       | 空     | String | 提案ID，如为空，默认查询所有提案。<br/>提案ID可通过`system queryProposal`查询。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称               | 类型   | 说明                                                         |
| ---------------------- | ------ | ------------------------------------------------------------ |
| effective_timer_height | Uint64 | 提案通过后生效时钟高度。如生效始终高度小于提案通过时的始终高度，那么提案在通过后会立刻生效。 |
| expire_time            | String | 提案失效时间，提案在259200个时钟高度内没有被TCC通过或者否决，提案将失效。 |
| priority               | Uint8  | 提案优先级：1--Normal；2--Important；3--Critical。<br/>只有TCC委员对提案有表决权，对于不同级别的提案，表决通过的规则不同：<br/>Normal：需51%委员通过。<br/>Important：需51%委员通过，且弃权委员不超过25%。<br/>Critical：需2/3的委员通过，且反对委员不超过20%。 |
| proposal_account_addr  | String | 提案发起者账户地址。                                         |
| proposal_deposit       | Uint64 | 提案保证金，最低为100*10^6 uTOP。                            |
| proposal_id            | String | 提案ID，系统自动生成，唯一。                                 |
| proposal_type          | Uint8  | 提案类型：1--修改链上治理参数提案；2--社区基金管理提案。     |
| target                 | String | 当提案类型为修改链上治理参数提案时，target为链上治理参数名称，链上治理参数请参见[链上治理参数说明]( /zh/On-ChainGovernance/Overview.md)；<br/>当提案类型为社区基金管理提案时，target为接受转账账户地址，销毁账户地址为：T-b-gkhLhFJXVN3ZPQYZxphja93BEUtwKRdden。 |
| value                  | String | 当target为链上治理参数时，value为修改后的值。<br/>当target为接受转账账户地址，value为转账金额，单位uTOP。 |
| voting_status          | Uint16 | 该提案投票表决状态：0--未开始；8--进行中；9--失败；10--成功。 |

**请求样例**

```
system queryProposal 1
```

**返回样例**

* 成功返回

```
{
    "data" : {
	   "effective_timer_height": 1010110,
	   "expire_time": 1000
	   "priority": 3,
       "proposal_account_addr": "T-0-LZ6nexZWNPwua7cagJcGuzLwe5aytnzTsk",
	   "proposal_deposit": 400,
	   "proposal_id": 1
	   "proposal_type": 1
	   "target": archive_deposit
	   "value": 1000
	   "voting_status": 0
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "3"
}
```

* 失败返回

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "4"
}
```

### TCC表决提案

对提案投票前，可先获取提案详细信息了解提案。

只有TCC委员有表决权， 对于不同级别的提案，表决通过的规则不一样。

提案表决通过后，将形成立法命令，发给全网节点。

提案被表决通过后，系统将自动删除提案，无法查询提案。

**请求方式**

```
system tccVote
```

**请求参数**

| 参数名称     | 是否必选 | 默认值 | 类型    | 说明                                       |
| ------------ | -------- | ------ | ------- | ------------------------------------------ |
| proposal_id  | 是       | -      | String  | 提案ID，可通过`system queryProposal`查询。 |
| account_addr | 是       | -      | String  | 表决账户地址，即TCC委员账户地址。          |
| opinion      | 是       | -      | Boolean | 表决意见：true--赞成；false--反对。        |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询此次交易结果。  |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

`system tccVote 1 T-0-Lh5GLYuH3Lf5h1zRoNYdpBgB918BYxJXDc true`

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "5",
	"tx_hash": "0x1eca678e243743f226ebb6a42c7a5500a056c890574392c7bf70b6797e179902",
	"tx_size": 341
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，则成功表决提案。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则表决提案失败。

### 撤回提案

提案只能由对应的提案者撤回。

**请求方式**

```
system withdrawProposal
```

**请求参数**

| 参数名称    | 是否必选 | 默认值 | 类型   | 说明                                             |
| ----------- | -------- | ------ | ------ | ------------------------------------------------ |
| proposal_id | 是       | -      | String | 提案ID，提案ID可通过`system queryProposal`查询。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询此次交易结果。  |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
system withdrawProposal 1
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "6",
	"tx_hash": "0xe1befa7a1acae89fbbf9c3cab8314212fb671af003a9d581867b541428e02f56",
	"tx_size": 302
}
Please use command 'get transaction' to query transaction status later on!!!
```

根据交易hash，使用`get transaction`查询交易，交易最终共识成功，则成功撤回提案。

* 失败返回

根据交易hash，使用`get transaction`查询交易，交易最终共识失败，则撤回提案失败。
