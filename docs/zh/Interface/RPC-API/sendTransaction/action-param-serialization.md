# action param序列化

## 创建用户合约(xtransaction_type_create_contract_account)

### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                                                         |
| -------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| symbol   | 是       | TOP    | String | 代币symbol。                                                 |
| amount   | 是       | -      | Uint64 | 向用户合约中转账的金额，默认单位：uTOP。如不转账，则输入"0"。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

### receiver action param序列化

receiver action type:xaction_type_create_contract_account

将"gas_limit"、"contract_code"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称      | 是否必选 | 默认值 | 类型   | 说明                                                        |
| ------------- | -------- | ------ | ------ | ----------------------------------------------------------- |
| gas_limit     | 是       | -      | Uint64 | 合约愿意为交易发送方付出的每笔交易的gas费用上限，单位Tgas。 |
| contract_code | 是       | -      | String | 用户合约代码。                                              |

**示例**

```
top::base::xstream_t stream(top::base::xcontext_t::instance());
stream << gas_limit;
stream << contract_code;
std::string code_stream((char*)stream.data(),stream.size());
```

## 转账(xtransaction_type_transfer)

### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                       |
| -------- | -------- | ------ | ------ | -------------------------- |
| symbol   | 是       | TOP    | String | 代币symbol。               |
| amount   | 是       | -      | Uint64 | 转出金额，默认单位：uTOP。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

### receiver action param序列化

receiver action type:xaction_type_asset_in

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                       |
| -------- | -------- | ------ | ------ | -------------------------- |
| symbol   | 是       | TOP    | String | 代币symbol。               |
| amount   | 是       | -      | Uint64 | 转入金额，默认单位：uTOP。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

## 节点投票(xtransaction_type_vote)

TOP Network链上账户可以给在线节点投票，获取收益：

* 您可以给任意一个包含"auditor"角色的节点（即advance节点）投票。
* 投到一个节点上的起投票数10000票，后续累加投票无限制。
* 单个账户目前最多允许给1000个节点投票。
* 给节点投票后，节点获取的奖励会有一部分分给投票者。

### sender action param序列化

sender action type:xaction_type_source_null

无序列化参数。

### receiver action param序列化

receiver ation type:xaction_type_run_contract

将参数"vote_infos"的值序列化。

**参数说明**

| 参数名称   | 是否必选 | 默认值 | 类型                    | 说明                                                         |
| ---------- | -------- | ------ | ----------------------- | ------------------------------------------------------------ |
| vote_infos | 是       | -      | Map<std::string,uint64> | key：接受投票节点账户地址(String)； value：投票数量(Integer)。 |

**示例**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, vote_infos);
```

## 取消节点投票(xtransaction_type_abolish_vote)

投票人可以随时将已经投到节点上的选票取消并收回。

每次取消投票的票数无限制，但时不能高于给节点投票的总数，否则取消投票将失败。

给节点投票后，即使注销节点，选票也不会主动退还至您的账户， 取消投票需要您主动发起取消投票操作。

您可以批量取消节点投票。

### sender action param序列化

sender action type:xaction_type_source_null

无序列化参数。

### receiver action param序列化

receiver ation type:xaction_type_run_contract

将参数"vote_infos"的值序列化。

**参数说明**

| 参数名称   | 是否必选 | 默认值 | 类型                    | 说明                                              |
| ---------- | -------- | ------ | ----------------------- | ------------------------------------------------- |
| vote_infos | 是       | -      | Map<std::string,uint64> | key：接受投票节点账户地址； value：取消投票数量。 |

**示例**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, vote_infos);
```

## 锁定TOP token兑换gas(xtransaction_type_pledge_token_gas)

兑换gas的价格为：

![Snap55](action-param-serialization.assets/Snap55.jpg)         

### sender action param序列化

sender action type:xaction_type_source_null

无序列化参数。

### receiver action param序列化

receiver ation type:xaction_type_pledge_token

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                       |
| -------- | -------- | ------ | ------ | -------------------------- |
| symbol   | 是       | TOP    | String | 代币symbol。               |
| amount   | 是       | -      | Uint64 | 锁定金额，默认单位：uTOP。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

## 解锁兑换gas的TOP token(xtransaction_type_redeem_token_gas)

发起解锁后，需要等待24小时，并由锁定账户发起一笔交易（非查询）后，解锁的金额才会到账。

### sender action param序列化

sender action type:xaction_type_source_null

无序列化参数。

### receiver action param序列化

receiver ation type:xaction_type_redeem_token

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                       |
| -------- | -------- | ------ | ------ | -------------------------- |
| symbol   | 是       | TOP    | String | 代币symbol。               |
| amount   | 是       | -      | Uint64 | 解锁金额，默认单位：uTOP。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

## 锁定TOP token兑换选票(xtransaction_type_pledge_token_vote)

兑票规则：<br/>locked TOP tokens=votes_amount / [ 1.04^(lock_duration / 30 - 1) ], duration < 570；<br/>locked TOP tokens=vote_amount / 2,                        lock_duration >= 570。<br/>锁定期最少为30天，且必须为30的整数倍。锁定期越长，相同的兑票数量锁定越少的TOP token。

### sender action param序列化

sender action type:xaction_type_source_null

无序列化参数。

### receiver action param序列化

receiver ation type:xaction_type_pledge_token_vote

将"vote_amount"、"lock_duration"两个参数的值按顺序序列化。

**参数说明**

| 参数名称      | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| vote_amount   | 是       | -      | Uint64 | 兑票数量，每次兑票10000票起兑。                              |
| lock_duration | 是       | -      | Uint16 | TOP token锁定期，锁定期单位：天。<br/>锁定期最少为30天，且必须为30的整数倍。锁定期越长，相同的兑票数量锁定越少的TOP token。 |

**示例**

```
xaction_pledge_token_vote_param pledge_vote_param(this, vote_amount, lock_duration);
        std::string param = pledge_vote_param.create();
```

## 解锁兑换选票的TOP token(xtransaction_type_redeem_token_vote)

锁定期内的TOP token不能解锁，只能解锁到期的TOP token。

已经被使用的选票对应锁定的TOP token不能被解锁。

发起解锁后，解锁的金额会立即到账。

### sender action param序列化

sender action type:xaction_type_source_null

### receiver action param序列化

receiver ation type:receiver ation type:xaction_type_pledge_token_vote

将参数"vote_num"的值序列化。

**参数说明**

| 参数名称    | 是否必选 | 默认值 | 类型   | 说明                            |
| ----------- | -------- | ------ | ------ | ------------------------------- |
| vote_amount | 是       | -      | Uint64 | 赎回票数，解锁对应的TOP token。 |

**示例**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, vote_amount);
```

## 调用合约(xtransaction_type_run_contract)

### 调用用户智能合约

#### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                                                       |
| -------- | -------- | ------ | ------ | ---------------------------------------------------------- |
| symbol   | 是       | TOP    | String | 代币symbol。                                               |
| amount   | 是       | -      | Uint64 | 调用用户合约时，向用户智能合约账户中转账的金额，单位uTOP。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

#### receiver action param序列化

receiver action type:xaction_type_run_contract

将以下参数的值按照顺序序列化。

| 参数名称      | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| contract_addr | 是       | -      | String | 用户智能合约账户地址，以"T-3"为标识开头。                    |
| contract_func | 是       | -      | String | 调用合约的函数名称。                                         |
| param         | 是       | -      | String | 参数类型及参数值，格式：参数1类型,参数1值\|参数2类型,参数2值\|参数3类型,参数3值，例如：1,1\|2,a\|3,true。<br/>1--Unit64，参数值为整数型;<br/>2--String，参数值为任意字符串;<br/>3--Bool，参数值必须为"true"或者"false"。 |

**示例**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        if (network_ids.empty()) {
            target_action_name = "register_node";
            param_t = stream_params(stream_t, contract_addr, contract_func, param);
```

### 调用系统智能合约

调用系统智能合约包括：

| 方法名                                                  | 说明             |
| ------------------------------------------------------- | ---------------- |
| [registerNode](#注册节点registerNode)                   | 注册节点。       |
| [unregisterNode](#注销节点unregisterNode)               | 注销节点。       |
| [redeemNodeDeposit](#赎回节点保证金redeemNodeDeposit)   | 赎回节点保证金。 |
| [updateNodeType](#更新节点类型updateNodeType)           | 更新节点类型。   |
| [unstakeDeposit](#减少节点保证金unstakeDeposit)         | 减少节点保证金。 |
| [stakeDeposit](#增加节点保证金stakeDeposit)             | 增加节点保证金。 |
| [setNodeName](#设置节点昵称setNodeName)                 | 设置节点昵称。   |
| [setDividendRatio](#设置分红比例setDividendRatio)       | 设置分红比例。   |
| [claimNodeReward](#领取节点奖励claimNodeReward)         | 领取节点奖励。   |
| [claimVoterDividend](#领取投票者分红claimVoterDividend) | 领取投票者分红。 |
| [submitProposal](#提交提案submitProposal)               | 提交提案。       |
| [withdrawProposal](#撤回提案withdrawProposal)           | 撤回提案。       |
| [tccVote](#TCC表决提案tccVote)                          | TCC表决提案。    |

#### 注册节点registerNode

TOP Network目前有三种类型的节点：边缘(edge)节点、验证(validator)节点、高级(advance)节点。您可以注册成为其中一种类型的节点。

高级节点可在不同的网络里同时担任多个角色：验证（validator)、审计(auditor)、存档(archive)、Root-Beacon、Sub-Beacon。

各类型节点注册最低保证金如下表所示。

| 节点类型            | 最低注册保证金      |
| ------------------- | ------------------- |
| 边缘节点(edge)      | 100,000*10^6 uTOP   |
| 验证节点(validator) | 500,000*10^6 uTOP   |
| 高级节点(advance)   | 1,000,000*10^6 uTOP |

提醒：

> 节点注册成功后（包括第一次注册和注销后重新注册），需要启动xnode，才会成功进入候选池，等待选举。启动xonde请参见[启动TOPIO](/zh/Tools/TOPIO/StartTOPIO.md)中“启动xnode”内容。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                             |
| -------- | -------- | ------ | ------ | -------------------------------- |
| symbol   | 是       | TOP    | String | 代币symbol。                     |
| amount   | 是       | -      | Uint64 | 节点注册保证金，默认单位：uTOP。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

将"node_type"、"nodename"、"node_sign_key"三个参数的值按顺序序列化。

**参数说明**

| 参数名称      | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| node_type     | 是       | -      | String | 节点类型，包括edge（边缘节点）、validator（验证节点）、advance（高级节点），高级节点兼具archive（存档）、validator（验证）、auditor（审计）角色。<br/>您可以注册成为三种类型中的一种。<br/>注册成为高级节点后，advance节点被选举为何种工作角色取决于节点的选票：<br/>advance节点被选举为audtior、archive、Root-Beacon、Sub-Beacon角色，节点所获得的选票需要大于等于节点实际质押的保证金（此处节点保证金以TOP计算，非uTOP）。<br/>当选票低于实际质押保证金时，advance节点只能被选为validator。<br/>说明：<br/>节点选票须由接受投票而得，可以由其他节点投票，也可由本账户投票。 |
| nodename      | 是       | -      | String | 节点昵称，4-16字符，字母、数字或下划线。                     |
| node_sign_key | 是       | -      | String | 您可以使用节点账户公钥作为节点注册的node sign key，此处直接传入节点账户的公钥(Base64)。<br/>为了更好地保护您的账户资产，建议您使用`wallet createKey`创建一对无资产的公私钥对，其中公钥作为节点注册的node sign key，在节点注册入网后，节点工作时使用私钥为节点签名。创建公私钥对算法请参见[账户协议](/zh/AboutTOPNetwork/Protocol/AccountProtocol.md)中“创建公私钥对算法”内容。<br/>此处请输入对应的公钥(base64)，其他节点可使用该公钥进行验签。 |

**示例**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        if (network_ids.empty()) {
            target_action_name = "register_node";
            param_t = stream_params(stream_t, node_type, nodename, node_sign_key);
```

#### 注销节点unregisterNode

TOP Network的节点退出网络，需要先发起节点注销：

* 节点注销需要节点主动发起。

* 节点注销后，节点注册保证金不会立刻退回到节点账户，会被锁定一段时间，如果节点作恶，锁定期会延长。

* 锁定的保证金到期后需要节点账户主动赎回保证金，系统不会自动退回。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

无序列化参数。

#### 赎回节点保证金redeemNodeDeposit

节点注销后，节点保证金将会被锁定72小时，锁定的保证金到期后需要节点主动赎回保证金，系统不会自动退回。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

无序列化参数。

#### 更新节点类型updateNodeType

##### sender action param序列化

sender action type:xaction_type_asset_out

更新节点类型前，请使用` queryNodeInfo`查询节点保证金余额(node_deposit)是否达到新节点类型所需的最低保证金要求，如果不满足新类型节点所需的保证金，更新的时候需要质押相应保证金差额。

如果当前节点保证金余额大于等于新类型节点注册最低保证金，那么更新节点类型时，您可以继续为节点增加保证金或者不增加（输入"0"）。

更新节点类型还可以通过重新注册实现，如果新类型节点需要更多的保证金，在重注册时，需要增加相应的保证金差额。

同样的，如果当前节点保证金余额大于等于新类型节点所需注册保证金，那么重注册节点时，您可以继续为节点增加保证金或者不增加（输入"0"）。

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                                                         |
| -------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| symbol   | 是       | TOP    | String | 代币symbol。                                                 |
| amount   | 是       | -      | Uint64 | 节点注册保证金，默认单位：uTOP。如不需要增加节点保证金，则输入"0"。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

将参数"node_typet"的值序列化。

**参数说明**

| 参数名称  | 是否必选 | 默认值 | 类型   | 说明                                                         |
| --------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| node_type | 是       | -      | String | 新节点类型，包括edge（边缘节点）、advance（高级节点）、validator（验证节点）。 |

**示例**

```
 std::string param_t;
		top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        target_action_name = "update_node_type";
        param_t = stream_params(stream_t,node_type);
```

#### 减少节点保证金unstakeDeposit

您可以随时减少质押的保证金，减少保证金不会改变您注册的节点类型，但是如果节点保证金余额低于当前类型节点保证金最低要求，减少保证金将失败。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

将参数"unstake_deposit"的值序列化。

**参数说明**

| 参数名称        | 是否必选 | 默认值 | 类型   | 说明                     |
| --------------- | -------- | ------ | ------ | ------------------------ |
| unstake_deposit | 是       | -      | Uint64 | 减少的保证金，单位uTOP。 |

**示例**

```
 std::string param_t;
		top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        target_action_name = "unstake_deposit";
        param_t = stream_params(stream_t,unstake_deposit);
```

#### 增加节点保证金stakeDeposit

您可以随时为节点增加保证金，从而提高您的综合权益(Comprehensive Stake)。

增加节点保证金不会改变您注册的节点类型。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                         |
| -------- | -------- | ------ | ------ | ---------------------------- |
| symbol   | 是       | TOP    | String | 代币symbol。                 |
| amount   | 是       | -      | Uint64 | 增加的节点保证金，单位uTOP。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

无序列化参数。

#### 设置节点昵称setNodeName

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

将参数"nodename"的值序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                                         |
| -------- | -------- | ------ | ------ | -------------------------------------------- |
| nodename | 是       | -      | String | 新的节点昵称，4-16字符，字母、数字或下划线。 |

**示例**

```
  std::string param_t;
		top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        target_action_name = "set_nodekname";
        param_t = stream_params(stream_t, nodename);
```

#### 设置分红比例setDividendRatio

设置了分红比例，您收到的全部奖励，包括工作奖励和您自身的投票分红，会按照您设置的分红比例分到支持您的投票者账户上。

每14天您可以修改一次分红比例。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

将参数"dividend_ratio"的值序列化。

**参数说明**

| 参数名称       | 是否必选 | 默认值 | 类型    | 说明                         |
| -------------- | -------- | ------ | ------- | ---------------------------- |
| dividend_ratio | 是       | -      | Integer | 分红比例，取值范围 [0,100]。 |

**示例**

```
 top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, dividend_ratio);
```

#### 领取节点奖励claimNodeReward

领取节点奖励之前可使用`queryNodeReward`查询节点奖励信息。

每24小时最多领取一次，每次领取奖励金额需要≥1,000*10^6 uTOP token。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

无序列化参数。

#### 领取投票者分红claimVoterDividend

系统每24小时结算一次投票者分红，将投票人分红自动发放到分红池。

投票人24小时内可以申请提现一次，发起提现申请后立即到账，如提现金额低于10*10^6 uTOP，提现将失败。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

无序列化参数。

#### 提交提案submitProposal

链上治理时，首先需要提交链上治理提案。

任何用户可以发起提案，只要质押一定的TOP token即可。

提醒：

> 提交提案需要质押至少100*10^6 uTOP token作为提案保证金，质押天数为30天，到期时，提案保证金会自动退回至您的账户中。

> 除了最低交易保证金100,000 uTOP token，调用Root-Beacon系统合约交易，需要扣除100*10^6 uTOP token的交易手续费。

>  因此提交提案前请确保您的账户里至少有200.1*10^6 uTOP token的余额。

##### 链上参数修改提案

只有TCC委员对提案有表决权，对于不同级别的提案，表决通过的规则不同：

* Normal：需51%委员通过。

* Important：需51%委员通过，且弃权委员不超过25%。

* Critical：需2/3的委员通过，且反对委员不超过20%。

##### 社区基金管理提案

社区基金管理提案为"Critical"级别。

系统将治理奖励和零工作量节点奖励发放至社区基金账户，社区用户可以通过链上治理将账户中的余额转账至一个销毁账户地址，提案经过TCC表决通过后，销毁即生效。

说明：

> * 社区基金账户地址：T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0。
> * 销毁账户地址：T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明                              |
| -------- | -------- | ------ | ------ | --------------------------------- |
| symbol   | 是       | TOP    | String | 代币symbol。                      |
| amount   | 是       | -      | Uint64 | 提案保证金，最低为100*10^6 uTOP。 |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

将以下参数的值按照顺序序列化。

**参数说明**

| 参数名称               | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ---------------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| proposal_type          | 是       | -      | Uint8  | 提案类型：1--修改链上治理参数提案；2--社区基金管理提案。     |
| target                 | 是       | -      | String | 当提案类型为修改链上治理参数提案时，target为链上治理参数名称，链上治理参数请参见[链上治理参数说明](/zh/On-ChainGovernance/Overview.md)；<br/>当提案类型为社区基金管理提案时，target为接受转账账户地址，销毁账户地址为：T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug。 |
| value                  | 是       | -      | String | 当target为链上治理参数时，value为链上治理参数修改后的值。<br/>当target为接受转账账户地址，value为转账金额，单位uTOP。 |
| effective_timer_height | 是       | -      | Uint64 | 提案通过后生效时钟高度。如生效时钟高度小于提案通过时的时钟高度，那么提案在通过后会立刻生效。 |

**示例**

```
std::string param_t = stream_params(stream_t,
                                      target, value,
                                            proposal_type,
                                      effective_timer_height);
```

#### 撤回提案withdrawProposal

提案只能由对应的提案者撤回。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

将参数"proposal_id"的值序列化。

**参数说明**

| 参数名称    | 是否必选 | 默认值 | 类型   | 说明                                |
| ----------- | -------- | ------ | ------ | ----------------------------------- |
| proposal_id | 是       | -      | String | 提案ID，可通过`queryProposal`查询。 |

**示例**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, proposal_id);
```

#### TCC表决提案tccVote

对提案投票前，可先获取提案详细信息了解提案。

只有TCC委员有表决权， 对于不同级别的提案，表决通过的规则不一样。

提案表决通过后，且没有被否决，将形成立法命令，发给全网节点。

提案被表决通过后，系统将自动删除提案，无法查询提案。

##### sender action param序列化

sender action type:xaction_type_asset_out

将代币"symbol"、"amount"两个参数的值按照顺序序列化。

**参数说明**

| 参数名称 | 是否必选 | 默认值 | 类型   | 说明         |
| -------- | -------- | ------ | ------ | ------------ |
| symbol   | 是       | TOP    | String | 代币symbol。 |
| amount   | 是       | -      | Uint64 | 为"0"。      |

**示例**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### receiver action param序列化

receiver action type:xaction_type_run_contract

将"proposal_id"、"account_addr"、"opinion"三个参数的值按照顺序序列化。

**参数说明**

| 参数名称     | 是否必选 | 默认值 | 类型    | 说明                                |
| ------------ | -------- | ------ | ------- | ----------------------------------- |
| proposal_id  | 是       | -      | String  | 提案ID，可通过`queryProposal`查询。 |
| account_addr | 是       | -      | String  | 表决账户地址，即TCC委员账户地址。   |
| opinion      | 是       | -      | Boolean | 表决意见：true--赞成；false--反对。 |

**示例**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, proposal_id,account_addr,opinion);
```
