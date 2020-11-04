# 查询接口说明

查询接口提供查询链上信息查询功能，具体如下表所示。

| 方法名                                | 说明                                               |
| ------------------------------------- | -------------------------------------------------- |
| [getTransaction](#查询账户交易信息)   | 查询账户交易信息。                                 |
| [getAccount](#查询链上账户信息)       | 查询链上账户信息。                                 |
| [getBlock](#查询区块信息)             | 根据账户及区块高度查询区块信息。                   |
| [getChainInfo](#查询主链信息)         | 查询主链信息。                                     |
| [getStandbys](#查询候选池节点信息)    | 查询节点候选池中节点信息。                         |
| [getCGP](#查询链上治理参数)           | 查询链上治理参数(on-chain governance parameters)。 |
| [queryNodeInfo](#查询节点信息)        | 查询节点信息。                                     |
| [queryNodeReward](#查询节点奖励)      | 查询节点奖励。                                     |
| [listVoteUsed](#查询节点投票分布)     | 查询节点投票分布。                                 |
| [queryVoterDividend](#查询投票者分红) | 查询投票者分红。                                   |
| [queryProposal](#查询提案信息)        | 查询提案信息。                                     |

## 接口使用说明

### 使用前提

查询链上账户信息、查询区块信息、查询账户交易详情，请确保您已经拥有一个链上账户，且已发送过交易。

### 查询账户交易信息

**请求方式**

`getTransaction`

**请求参数**

| 参数名称     | 是否必选 | 默认值 | 类型   | 说明                                           |
| ------------ | -------- | ------ | ------ | ---------------------------------------------- |
| account_addr | 是       | -      | String | 数据所在账户地址：发送交易或接受交易账户地址。 |
| tx_hash      | 是       | -      | String | 账户交易hash，可用于查询交易详细信息。         |

**返回参数**

| 参数名称           |                      |                     |                          | 类型   | 说明                                                         |
| ------------------ | -------------------- | ------------------- | ------------------------ | ------ | ------------------------------------------------------------ |
| original_tx_info   |                      |                     |                          | Object | 原始交易信息。                                               |
|                    | authorization        |                     |                          | String | 交易体签名。                                                 |
|                    | challenge_proof      |                     |                          | String | 预留字段，默认为空字符串。                                   |
|                    | ext                  |                     |                          | String | 预留字段，用于扩展，默认为空字符串。                         |
|                    | from_ledger_id       |                     |                          | Uint16 | 预留字段，默认为"0"。                                        |
|                    | last_tx_hash         |                     |                          | Uint64 | 交易发送方上次交易的xx64hash，用于交易的排序和去重。         |
|                    | last_tx_nonce        |                     |                          | Uint64 | 交易发送方上次交易的nonce，用于交易的排序和去重。            |
|                    | note                 |                     |                          | String | 交易备注。                                                   |
|                    | send_timestamp       |                     |                          | Uint64 | 交易发送时间戳GMT。                                          |
|                    | to_ledger_id         |                     |                          | Uint16 | 预留字段，默认为"0"。                                        |
|                    | tx_action            |                     |                          | Object | 交易action，包括"sender_action"及"reveiver_action"。         |
|                    |                      | receiver_action     |                          | Object | 交易接受方执行内容。                                         |
|                    |                      |                     | action_authorization     | String | action签名，json结构，当交易为部署合约交易时，此处会显示合约的公钥信息，公钥用来验证合约账户与交易发送方账户是否匹配。 |
|                    |                      |                     | action_ext               | String | 预留扩展字段，默认为空字符串。                               |
|                    |                      |                     | action_hash              | Uint32 | 整个action的xxhash32。默认为"0"，暂未使用。                  |
|                    |                      |                     | action_name              | String | 调用合约时，合约的函数名。<br/>其中，系统合约函数请参见[系统智能合约 API](/zh/Interface/SmartContractInterface/SystemContractAPI.md)。 |
|                    |                      |                     | action_param             | String | 接收方执行内容。不同action type执行内容的序列化请参见[action param序列化](/zh/Interface/RPC-API/sendTransaction/action-param-serialization.md)。 |
|                    |                      |                     | action_size              | Uint16 | action对象的大小。                                           |
|                    |                      |                     | action_type              | Uint16 | 接收方执行类型，不同的交易类型对应不同的action type，具体请参见[tx_type与action_type说明](/zh/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)。<br/>xaction_type_create_contract_account    = 3,    // 创建合约账户  <br/>xaction_type_run_contract              = 5,    // 调用智能合约<br/>xaction_type_asset_in                = 6,    // 资产转入<br/>xaction_type_pledge_token_vote          = 21,   //锁定TOP token兑换选票<br/>    xaction_type_redeem_token_vote          = 22,   // 解锁兑换选票的TOP token<br/>    xaction_type_pledge_token               = 23,   //锁定TOP token兑换gas<br/>    xaction_type_redeem_token               = 24,   //解锁兑换gas的TOP token |
|                    |                      |                     | tx_receiver_account_addr | String | 交易接受方账户地址。                                         |
|                    |                      | sender_action       |                          | Object | 交易发送方执行内容。                                         |
|                    |                      |                     | action_authorization     | String | action签名，json结构。                                       |
|                    |                      |                     | action_ext               | String | 预留字段，默认为空字符串。                                   |
|                    |                      |                     | action_hash              | Uint32 | 整个action的xxhash32。默认为"0"，暂未使用。                  |
|                    |                      |                     | action_name              | String | 预留字段，默认为空字符串。                                   |
|                    |                      |                     | action_param             | String | 发送方执行内容。不同action type执行内容的序列化请参见[action param序列化](/zh/Interface/RPC-API/sendTransaction/action-param-serialization.md)。 |
|                    |                      |                     | action_size              | Uint16 | action对象的大小。                                           |
|                    |                      |                     | action_type              | Uint16 | 发送方执行类型，不同的交易类型对应不同的action type，具体请参见[tx_type与action_type说明](/zh/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)。<br/>xaction_type_asset_out                  = 0,    // 资产转出。<br/>xaction_type_source_null =1,          // 源端不执行操作 |
|                    |                      |                     | tx_sender_account_addr   | String | 交易发送方账户地址。                                         |
|                    | tx_deposit           |                     |                          | Uint32 | 交易保证金，单位uTOP。                                       |
|                    | tx_expire_duration   |                     |                          | Uint16 | 交易到期时长，超过则被丢弃，默认100s。                       |
|                    | tx_hash              |                     |                          | String | 交易hash的十六进制。                                         |
|                    | tx_len               |                     |                          | Uint16 | 交易大小。交易消耗的gas与交易大小相关。                      |
|                    | tx_random_nonce      |                     |                          | Uint32 | 随机数字。默认为"0"，暂未使用。                              |
|                    | tx_structure_version |                     |                          | Uint32 | 交易结构版本号。默认为"0"，暂未使用。                        |
|                    | tx_type              |                     |                          | Uint16 | 交易类型，不同的交易类型，action中action_param（执行内容）及action type（执行类型）不同。<br/>xtransaction_type_create_contract_account      = 1,    // 创建合约账户 <br/>xtransaction_type_run_contract                           = 3,    // 调用智能合约<br/>xtransaction_type_transfer                                   = 4,    // 转账<br/>xtransaction_type_vote                                             = 20, //投票<br/>xtransaction_type_abolish_vote                               = 21,//取消投票<br/>xtransaction_type_pledge_token_gas                      = 22,   // 锁定TOP token兑换gas<br/>xtransaction_type_redeem_token_gas                    = 23,   // 解锁兑换gas锁定的TOP token<br/>xtransaction_type_pledge_token_vote                     = 27,   // 锁定TOP token兑换选票<br/>xtransaction_type_redeem_token_vote                    = 28,   // 解锁兑换选票锁定的TOP token |
| tx_consensus_state |                      |                     |                          | Object | 交易共识结果。<br>跨账户交易会进行三次共识，所以会返回三个unit的信息；单账户交易只返回只在交易发送账户下进行一次共识，所以只返回"confirm_unit_info"。 |
|                    | confirm_unit_info    |                     |                          | Object | 交易第三次共识产生的unit block。                             |
|                    |                      | exec_status         |                          | String | 交易最终共识结果：success--成功；failure--失败。             |
|                    |                      | height              |                          | Uint64 | 交易第三次共识产生的unit block高度。                         |
|                    |                      | recv_tx_exec_status |                          | String | 交易接收方共识结果：success--成功；failure--失败。<br/>交易接收方共识失败或拒绝执行，通常在执行合约交易的时候会出现拒绝共识的情况。例如，注册节点，节点保证金低于最低要求，合约将执行失败。 |
|                    |                      | tx_exec_status      |                          | String | 交易发送方共识状态：success--成功；failure--失败。           |
|                    |                      | unit_hash           |                          | String | 交易第三次共识产生的unit block对应的hash。                   |
|                    |                      | used_deposit        |                          | Uint32 | 交易第三次共识结束后，因发送方账户gas不足以支付交易花费而扣除的发送方账户的交易保证金，单位uTOP。 |
|                    |                      | used_disk           |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_gas            |                          | Uint32 | 用户合约交易，交易第三次共识结束后，扣除的发送方账户gas。<br/>如果合约用户已支付一部分gas，那么此处扣除整个交易所消耗的gas的剩余部分；如果合约无法支付其应承担的gas，那么此处扣除整个交易消耗的gas。单位Tgas。 |
|                    | recv_unit_info       |                     |                          | Object | 交易第二次共识产生的unit block。                             |
|                    |                      | height              |                          | Uint64 | 交易第二次共识产生的unit block高度。                         |
|                    |                      | unit_hash           |                          | String | 交易第二次共识产生的unit block对应的hash。                   |
|                    |                      | used_deposit        |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_disk           |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_gas            |                          | Uint32 | 用户合约交易，交易第二次共识后，扣除接收方账户应承担的的gas。单位Tgas。 |
|                    | send_unit_info       |                     |                          | Object | 交易第一次共识产生的unit block。                             |
|                    |                      | height              |                          | Uint64 | 交易第一次共识产生的unit block高度。                         |
|                    |                      | tx_fee              |                          | Uint64 | 对于调用Beacon系统合约交易（注册节点相关、提案相关、启动节点进程入网），系统自动从交易发送方账户中扣除100*10^6 uTOP token作为交易手续费，并销毁。 |
|                    |                      | unit_hash           |                          | String | 交易第一次共识产生的unit block对应的hash。                   |
|                    |                      | used_deposit        |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_disk           |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_gas            |                          | Uint32 | 交易第一次共识扣除的gas，单位Tgas。<br/>对于非调用用户合约的跨账户交易，交易所消耗的gas全部由发送方承担，在发送方gas足够的情况下，会在第一轮共识就扣完交易所需要的gas；在gas不足的情况下，第一轮共识会扣除发送方账户可用的gas，剩余gas在第三轮共识扣除交易保证金兑换gas支付交易费用。 |

**请求样例**

```
account_address=T-0-LVb72cJ9LzaQbdR41Zvx7dsAL1oDFFGQrJ&
body={
"params" : {
    "account_addr" : "T-0-LVb72cJ9LzaQbdR41Zvx7dsAL1oDFFGQrJ",
    "tx_hash" : "0x8aa1e7082af07bf22840a1526745c484a5a20115d8e92cff2d9ed413128ac2b4" 
   }
}&
method=getTransaction&
sequence_id=9&
identity_token=&
version=1.0
```

**返回样例**

根据交易不同状态，返回交易信息不同，具体如下。

* 成功返回

说明：

> * 交易为单账户交易，交易只在交易发送方下进行一次共识，查询交易最终返回结果中只有"confirm_unit_info"的信息。
> * 交易为跨账户交易，交易总共需要进行三次共识，查询交易最终返回结果中包括三次共识的信息，包括"confirm_unit_info（发送方第二次共识）"、"recv_unit_info（接收方共识）"、"send_unit_info"（发送方第一次共识），如下所示。

交易在区块中，但不在交易池中，交易状态为"confirmed"，返回交易原始信息及所有区块信息，如下所示。

根据返回参数exec_status判断交易最终是否成功：

1.当exec_status返回值为"success"，证明交易最终成功。

2.当exec_status返回值为"failure"，则交易失败，此时recv_tx_exec_status返回值为"failure"，表明交易接收方共识失败。

```
{
   "data" : {
      "original_tx_info" : {
         "authorization" : "0x005d19e04e77e99a0b9c029b0a247fe30009b3cc543db18bdb503b37e7d0788d50530437ef65583da62454bb4eafe2cf5e03952134a2ba08e84565e3d8e0aa893e",
         "challenge_proof" : "",
         "ext" : "",
         "from_ledger_id" : 0,
         "last_tx_hash" : 1,
         "last_tx_nonce" : 15813211746016799364,
         "note" : "",
         "send_timestamp" : 1596523599,
         "to_ledger_id" : 0,
         "tx_action" : {
            "receiver_action" : {
               "action_authorization" : "",
               "action_ext" : "",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x000000001027000000000000",
               "action_size" : 78,
               "action_type" : 6,
               "tx_receiver_account_addr" : "T-0-LRyJeU1r4GqPTAmKEgZ2t1mGBj9DK2gWu2"
            },
            "sender_action" : {
               "action_authorization" : "",
               "action_ext" : "",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x000000001027000000000000",
               "action_size" : 78,
               "action_type" : 0,
               "tx_sender_account_addr" : "T-0-LaN5M2j2p4neS4TsN6WAjo6vf1yKrUoKtv"
            }
         },
         "tx_deposit" : 100000,
         "tx_expire_duration" : 100,
         "tx_hash" : "0x0e4bcb020f2fdf6ed4105385a2d564b6ae33f7ae8d85563d471c7240713d8c5b",
         "tx_len" : 315,
         "tx_random_nonce" : 0,
         "tx_structure_version" : 0,
         "tx_type" : 4
      },
      "tx_consensus_state" : {
         "confirm_unit_info" : {
            "exec_status" : "success",
            "height" : 3,
            "recv_tx_exec_status" : "success",
            "tx_exec_status" : "success",
            "unit_hash" : "bd47732e8d959846c0302ab3582632e6c11e19c1d30f6578213fc4342de95b01",
            "used_deposit" : 0,
            "used_disk" : 0,
            "used_gas" : 0
         },
         "recv_unit_info" : {
            "height" : 1,
            "unit_hash" : "f75ea49c50f4fe151931bc782468e0243880994393f0a8c30e8179597aaa5389",
            "used_deposit" : 0,
            "used_disk" : 0,
            "used_gas" : 0
         },
         "send_unit_info" : {
            "height" : 2,
            “tx_fee" : 0，
            "unit_hash" : "80e4029f0ce8c2861ac89b5b9394ced6cf80161ebc899d22cb6d1a4afc8616b9",
            "used_deposit" : 0,
            "used_disk" : 0,
            "used_gas" : 774
         }
      }
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "8"
}
```

交易同时在区块和交易池中，交易状态为"pending"，此时查询交易返回交易原始信息，及部分有效区块信息。

此时交易完成了第一轮共识，返回"send_unit_info"有效信息，而此时第二、三轮共识尚未成功，返回信息如下所示。

```
{
   "data" : {
      "original_tx_info" : {
         "authorization" : "0x01e561ef402c741267205afcef44c55dd4b63d8bd3541865ed54bab899e8bb4a14561c3023e018a887f39b11991ef80fb00e26ae646f09f4fffa0b95c1d3354896",
         "challenge_proof" : "",
         "ext" : "",
         "from_ledger_id" : 0,
         "last_tx_hash" : 626445491935432046,
         "last_tx_nonce" : 3,
         "note" : "",
         "send_timestamp" : 1600856931,
         "to_ledger_id" : 0,
         "tx_action" : {
            "receiver_action" : {
               "action_authorization" : "",
               "action_ext" : "",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x000000006400000000000000",
               "action_size" : 78,
               "action_type" : 6,
               "tx_receiver_account_addr" : "T-0-La8cTjNyTEmspAyTbXEsMhRPN6U9A7JRvH"
            },
            "sender_action" : {
               "action_authorization" : "",
               "action_ext" : "",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x000000006400000000000000",
               "action_size" : 78,
               "action_type" : 0,
               "tx_sender_account_addr" : "T-0-LSiFkNdXxRh9KyrYDsDEX2QJrnCCUScMqB"
            }
         },
         "tx_deposit" : 100000,
         "tx_expire_duration" : 100,
         "tx_hash" : "0xe4d16d17fba819fe2fe66172f354f5f37b8ffa02f28c15b0cade0356948fa660",
         "tx_len" : 315,
         "tx_random_nonce" : 0,
         "tx_structure_version" : 0,
         "tx_type" : 4
      },
      "tx_consensus_state" : {
         "confirm_unit_info" : {
            "height" : 0,
            "unit_hash" : "6a7801c5c10a093d0f5ce8e44eda97e6948e8cd79dc6264722fd6309d9a795b9"
         },
         "recv_unit_info" : {
            "height" : 0,
            "unit_hash" : "8c9ff2688d524c9e319e13bb3276b61f0fd0737bc2a8d8ae11ac423d9edb6e1a"
         },
         "send_unit_info" : {
            "height" : 6,
            "tx_fee" : 0,
            "unit_hash" : "4c973bf24d97dea94fbbd22a9271619a4a11bca5e0e04f0deff1587160aba9e4",
            "used_deposit" : 0,
            "used_disk" : 0,
            "used_gas" : 945
         }
      }
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "18"
}
```

交易不在区块，在交易池中，交易状态为"pending"，只返回交易原始信息，交易共识信息为"null"，如下所示。

```
{
   "data" : {
      "original_tx_info" : {
         "authorization" : "0x01e561ef402c741267205afcef44c55dd4b63d8bd3541865ed54bab899e8bb4a14561c3023e018a887f39b11991ef80fb00e26ae646f09f4fffa0b95c1d3354896",
         "challenge_proof" : "",
         "ext" : "",
         "from_ledger_id" : 0,
         "last_tx_hash" : 626445491935432046,
         "last_tx_nonce" : 3,
         "note" : "",
         "send_timestamp" : 1600856931,
         "to_ledger_id" : 0,
         "tx_action" : {
            "receiver_action" : {
               "action_authorization" : "",
               "action_ext" : "",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x000000006400000000000000",
               "action_size" : 78,
               "action_type" : 6,
               "tx_receiver_account_addr" : "T-0-La8cTjNyTEmspAyTbXEsMhRPN6U9A7JRvH"
            },
            "sender_action" : {
               "action_authorization" : "",
               "action_ext" : "",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x000000006400000000000000",
               "action_size" : 78,
               "action_type" : 0,
               "tx_sender_account_addr" : "T-0-LSiFkNdXxRh9KyrYDsDEX2QJrnCCUScMqB"
            }
         },
         "tx_deposit" : 100000,
         "tx_expire_duration" : 100,
         "tx_hash" : "0xe4d16d17fba819fe2fe66172f354f5f37b8ffa02f28c15b0cade0356948fa660",
         "tx_len" : 315,
         "tx_random_nonce" : 0,
         "tx_structure_version" : 0,
         "tx_type" : 4
      },
      "tx_consensus_state" : null
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "17"
}
```

* 失败返回

交易既不在区块，又不在交易池中，此时交易不存在。

```
{
   "errmsg" : "transaction not found",
   "errno" : 11,
   "sequence_id" : "20"
}
```

### 查询链上账户信息

**请求方法**

`getAccount`

**请求参数**

| 参数名称     | 是否必选 | 默认值 | 类型   | 说明                                                 |
| ------------ | -------- | ------ | ------ | ---------------------------------------------------- |
| account_addr | 是       | -      | String | 数据所在账户地址，可输入当前正在使用的链上账户地址。 |

**返回参数**

说明：

> RPC所有关于TOP token的单位都为uTOP，1TOP=1*10^6 uTOP。

| 参数名称                | 类型   | 说明                                                         |
| ----------------------- | ------ | ------------------------------------------------------------ |
| account_addr            | String | 账户地址。                                                   |
| available_gas           | Uint64 | 账户现有可用gas的量，单位Tgas。                              |
| balance                 | Uint64 | 账户余额，单位uTOP。                                         |
| burned_token            | Uint64 | 该账户所有已经销毁的TOP token，单位uTOP。                    |
| cluster_id              | Uint8  | cluster ID。                                                 |
| created_time            | Uint64 | 账户在链上创建的时钟高度。                                   |
| disk_staked_token       | Uint64 | 兑换disk锁定的TOP token，单位uTOP。                          |
| gas_staked_token        | Uint64 | 兑换gas锁定的TOP token，单位uTOP。                           |
| group_id                | Uint8  | group ID。                                                   |
| latest_tx_hash          | String | 最新共识成功的交易hash。                                     |
| latest_tx_hash_xxhash64 | String | 最新共识成功的交易xx64hash。                                 |
| latest_unit_height      | Uint64 | 最新共识成功的交易的unit block高度。                         |
| lock_balance            | Uint64 | 锁定的TOP token，单位uTOP，主要用于用户合约交易。<br/>调用用户合约的时候，交易发送方可同时给合约账户转账，如果合约执行失败，转账款需要退还给发送方，所以在合约执行成功前，先将转账款锁定。 |
| lock_deposit_balance    | Uint64 | 用户合约交易费用与执行合约交易占用的CPU时长以及交易大小相关，无法在交易开始确定合约的交易费用。采取的方法是冻结一部分发送方交易保证金，在交易第三次共识的时候，根据合约的最终执行情况，扣除发送方交易保证金以支付交易费用，单位uTOP。 |
| lock_gas                | Uint64 | 用户合约交易费用与据执行合约交易占用的CPU时长以及交易大小相关，无法在交易开始确定合约的交易费用。采取的方法是冻结发送方一部分gas，在交易第三次共识的时候，根据合约的最终执行情况，扣除发送方交易消耗的gas，单位Tgas。 |
| nonce                   | Uint64 | 该账户最新共识成功的交易序号，唯一。                         |
| total_free_gas          | Uint64 | 账户免费获取的gas总量，单位Tgas。目前当账户余额≥100*10^6 uTOP，系统会免费赠与该账户25,000 Tgas。该值随着链上参数治理变化而变化。 |
| total_gas               | Uint64 | 账户gas总量，单位Tgas。<br/>一个普通账户24小时内可以获得的gas不超过200,000Tgas。<br/>一个合约账户24小时内可以获得的gas不超过10,000,000Tgas。 |
| total_stake_gas         | Uint64 | 账户锁定TOP token而获得的gas总量，单位Tgas。                 |
| unlock_disk_staked      | Uint64 | 解锁中的兑换disk的TOP token，发起解锁后，需要等待24小时，解锁的金额才会到账。 |
| unlock_gas_staked       | Uint64 | 解锁中的兑换gas的TOP token，发起解锁后，需要等待24小时，解锁的金额才会到账。 |
| unused_free_gas         | Uint64 | 免费gas余量，单位Tgas。                                      |
| unused_stake_gas        | Uint64 | 锁定TOP token兑换的gas余量，单位Tgas。                       |
| unused_vote_amount      | Uint64 | 该账户未使用选票数量。                                       |
| vote_staked_token       | Uint64 | 兑换选票锁定的TOP token，单位uTOP。                          |
| zone_id                 | Uint8  | zone ID。                                                    |

如查询用户合约账户信息，除以上参数外，返回以下两个参数。

| 参数名称                | 类型   | 说明                         |
| ----------------------- | ------ | ---------------------------- |
| contract_code           | String | 合约代码。                   |
| contract_parent_account | String | 合约父账户，部署合约的账户。 |

**请求样例**

```
target_account_address=T-0-LVb72cJ9LzaQbdR41Zvx7dsAL1oDFFGQrJ&
body={
"params" : {
    "account_addr" : "T-0-LVb72cJ9LzaQbdR41Zvx7dsAL1oDFFGQrJ" 
   }
}&
method=getAccount&
sequence_id=9&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

```
{
   "data" : {
      "account_addr" : "T-0-LaN5M2j2p4neS4TsN6WAjo6vf1yKrUoKtv",
      "available_gas" : 25000,
      "balance" : 100000000000000,
      "burned_token" : 0,
      "cluster_id" : 1,
      "created_time" : 1596520429,
      "disk_staked_token" : 0,
      "group_id" : 64,
      "gas_staked_token" : 0,
      "latest_tx_hash" : "0xfcd8843c36b1c8fee81bcac7e7cf2b38682deef723e9a237918b70b3a6dfc4c9",
      "latest_tx_hash_xxhash64" : "0xdb73d04d0f5daa84",
      "latest_unit_height" : 1,
      "lock_balance" : 0,
      "lock_deposit_balance" : 0,
      "lock_gas" : 0,
      "nonce" : 1,
      "total_free_gas" : 25000,
      "total_gas" : 25000,
      "total_stake_gas" : 0,
      "unlock_disk_staked" : 0, 
      "unlock_gas_staked" : 0,
      “unused_free_gas" : 25000,
      "unused_stake_gas" : 0,
      "unused_vote_amount" : 0,
      "vote_staked_token" : 0,
      "zone_id" : 0
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "5"
}
```

* 失败返回

链上无此账户，返回：

```
{
   "errmsg" : "account not found on chain",
   "errno" : 11,
   "sequence_id" : "38"
}
```

### 查询区块信息

根据账户地址及区块高度查询区块信息。

提醒：

> 查询区块信息的前提是账户已发送交易且交易执行成功。

**请求方法**

`getBlock`

**请求参数**

| 参数名称     | 是否必选 | 默认值 | 类型          | 说明                                                         |
| ------------ | -------- | ------ | ------------- | ------------------------------------------------------------ |
| account_addr | 是       | -      | String        | 数据所在账户地址。<br/>查询unit block请使用普通账户地址，如"T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT"。<br/>查询table block请使用table block账户地址，如"T-a-gRD2qVpp2S7UpjAsznRiRhbE1qNnhMbEDp@0"。 |
| height       | 是       | -      | String/Uint64 | 最新区块高度"latest"(String)或者具体区块高度(Uint64)。       |

**返回参数**

* unit block

| 参数名称  |                   |                 |                     |                     | 类型          | 说明                                                         |
| --------- | ----------------- | --------------- | ------------------- | ------------------- | ------------- | ------------------------------------------------------------ |
| body      |                   |                 |                     |                     | Object        |                                                              |
|           | fullunit          |                 |                     |                     | Object        | 为了节约数据存储空间，每21个lightunit会打包成1个fullunit，这个21个lightunit将会被清除。 |
|           | lightunit         |                 |                     |                     | Object        | 包括lightunit_input、lightunit_state两部分。                 |
|           |                   | lightunit_input |                     |                     | Object        | lightunit块相关交易。                                        |
|           |                   |                 | txs                 |                     | Object        | 本区块打包的交易信息，结构为map数组，map的key为交易hash，比如6e734fed40b907bb64d257968e6a46a79c4ca144088d330b674cc8b545350324 |
|           |                   |                 |                     | recv_tx_exec_status | Uint8         | 交易接收方执行结果：1--成功；2--失败。二次共识失败或拒绝执行，通常在执行合约交易的时候会出现拒绝共识的情况。 |
|           |                   |                 |                     | send_tx_lock_gas    | Uint64        | 交易发送方可为接收方支付的gas。                              |
|           |                   |                 |                     | tx_exec_status      | Uint8         | 发送方交易执行状态，1--成功；2-- 失败。                      |
|           |                   |                 |                     | tx_consensus_phase  | Uint8         | 交易的发送方or接收方，1--self；2--send；3--recv。<br/>enum_transaction_subtype_self      = 1,  // self operate<br/>enum_transaction_subtype_send      = 2,  // send to other account<br/>enum_transaction_subtype_recv      = 3,  // receive from other account<br/>enum_transaction_subtype_recv_ack  = 4(confirm),  // receive ack from other account |
|           |                   |                 |                     | used_tx_deposit     | Uint32        | 交易消耗的交易保证金，单位uTOP。                             |
|           |                   |                 |                     | used_disk           | Uint32        | 交易消耗的账户disk资源。                                     |
|           |                   |                 |                     | used_gas            | Uint32        | 交易消耗的账户gas资源，单位tgas。                            |
|           |                   | lightunit_state |                     |                     | Object        | lightunit块相关交易带来的状态变化。                          |
|           |                   |                 | balance_change      |                     | Uint64        | 余额变化。                                                   |
|           |                   |                 | native_property     |                     | key-value数组 | 账户原生属性，如果属性为空，表明本次出块该属性未设置，计算上等价为0。 |
|           |                   |                 | custom_property_key |                     | String数组    | 查询有变化的自定义属性名称列表，只返回key。                  |
| hash      |                   |                 |                     |                     | String        | 本块hash的十六进制字符串。                                   |
| header    |                   |                 |                     |                     | Object        |                                                              |
|           | auditor_xip       |                 |                     |                     | String        | 本块的auditor leader节点。（xip格式）                        |
|           | timerblock_height |                 |                     | timerblock_height   | Uint64        | 时钟块高度。                                                 |
|           | validator         |                 |                     |                     | String        | 本块的validator leader节点账户地址。                         |
|           | validator_xip     |                 |                     |                     | String        | 本块的validator leader节点。（xip格式）                      |
| height    |                   |                 |                     |                     | Uint64        | 块高度。                                                     |
| owner     |                   |                 |                     |                     | String        | unit block所属账户地址。                                     |
| prev_hash |                   |                 |                     |                     | String        | 前一区块hash的十六进制。                                     |
| timestamp |                   |                 |                     |                     | Uint64        | 出块时间戳GMT。                                              |

* table block

| 参数名称   |           |                   |                    | 类型   | 说明                                                         |
| ---------- | --------- | ----------------- | ------------------ | ------ | ------------------------------------------------------------ |
| tableblock |           |                   |                    | Object | table block下包含多个units，当链上长时间没有新交易，查询tableblock最新高度数据为"null"。 |
|            | units     | lightunit_input   |                    | Object | tableblock存储若干unit块相关信息。                           |
|            |           |                   | is_contract_create | Bool   | 合约里创建的交易。（后续可能会删除）                         |
|            |           |                   | last_tx_nonce      | String | 上一笔交易nonce。                                            |
|            |           |                   | send_tx_lock_gas   | Uint64 | 交易发送方可为接收方支付的gas。                              |
|            |           |                   | tx_consensus_phase | Uint8  | 交易的发送方or接收方，1（self）,2（send）,3（recv）<br/>enum_transaction_subtype_self      = 1,  // self operate<br/>enum_transaction_subtype_send      = 2,  // send to other account<br/>enum_transaction_subtype_recv      = 3,  // receive from other account<br/>enum_transaction_subtype_recv_ack  = 4(confirm),  // receive ack from other account |
|            |           | lightunit_state   |                    | Object | 参见unit block参数说明。                                     |
|            |           | unit_height       |                    | Uint64 | unit块高度。                                                 |
|            | hash      |                   |                    | String | 块hash的十六进制字符串。                                     |
|            | header    |                   |                    | Object |                                                              |
|            |           | auditor_xip       |                    | String | 本块的auditor leader节点(xip)。                              |
|            |           | timerblock_height |                    | Uint64 | 时钟块高度。                                                 |
|            |           | auditor           |                    | String | 本块的validator leader节点账户地址。                         |
|            |           | validator_xip     |                    | String | 本块的validator leader节点(xip)。                            |
|            | height    |                   |                    | Uint64 | 块高度。                                                     |
|            | owner     |                   |                    | String | table block所属账户地址。                                    |
|            | prev_hash |                   |                    | String | 前一区块hash的十六进制。                                     |
|            | timestamp |                   |                    | Uint64 | 出块时间戳。                                                 |

**请求样例**

* unit block

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT",
    "height" : "latest" 
   }
}&
method=getBlock&
sequence_id=4&
identity_token=&
version=1.0
```

* table block

```
target_account_addr=T-a-gRD2qVpp2S7UpjAsznRiRhbE1qNnhMbEDp@0&
body={
"params" : {
    "account_addr" : "T-a-gRD2qVpp2S7UpjAsznRiRhbE1qNnhMbEDp@146",
    "height" : 9
   }
}&
method=getBlock&
sequence_id=5&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

unit block

```
{
   "data" : {
      "value" : {
         "body" : {
            "fullunit" : null,
            "lightunit" : {
               "lightunit_input" : {
                  "txs" : [
                     {
                        "0xe31fbabe30ae6c06bf6f5fc54bec44295bf2efa749ac82b97b63565804383e42" : {
                           "recv_tx_exec_status" : 1,
                           "send_tx_lock_gas" : 0,
                           "tx_consensus_phase" : "confirm",
                           "tx_exec_status" : 1,
                           "used_disk" : 0,
                           "used_gas" : 0,
                           "used_tx_deposit" : 0
                        }
                     }
                  ]
               },
               "lightunit_state" : {
                  "balance_change" : 0,
                  "burned_amount_change" : 0,
                  "custom_property_key" : null,
                  "native_property" : null
               }
            }
         },
         "hash" : "41098cec1fd53036f2a3ef3e38d97427b4f30bc49a5771e684fc7277fa2749c2",
         "header" : {
            "auditor_xip" : "100000000000001:f6000000000407ff",
            "timerblock_height" : 7929,
            "validator" : "T-0-LXRSDkzrUsseZmfJFnSSBsgm754XwV9SLw",
            "validator" : "100000000000001:f600000000050003"
         },
         "height" : 3,
         "owner" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4",
         "prev_hash" : "ba754df1f36e328462b98d175f4e143308c7ba307605ba947b6f21a17b4c337d",
         "timestamp" : 1594882650
      }
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "9"
}
```

table blcok

```
 {
   "data" : {
      "value" : {
         "body" : {
            "tableblock" : {
               "units" : {
                  "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4" : {
                     "lightunit_input" : {
                        "0xe31fbabe30ae6c06bf6f5fc54bec44295bf2efa749ac82b97b63565804383e42" : {
                           "is_contract_create" : 0,
                           "last_tx_nonce" : 0,
                           "send_tx_lock_gas" : 0,
                           "tx_consensus_phase" : "confirm"
                        }
                     },
                     "lightunit_state" : {
                        "balance_change" : 0,
                        "burned_amount_change" : 0,
                        "custom_property_key" : null,
                        "native_property" : null
                     },
                     "unit_height" : 3
                  }
               }
            }
         },
         "hash" : "f260ae40f5ea129a7f22b36b6abe8e46bb0058114af7390d54261e0db513e462",
         "header" : {
            "auditor_xip" : "100000000000001:f6000000000407ff",
            "timerblock_height" : 7929,
            "validator" : "T-0-LXRSDkzrUsseZmfJFnSSBsgm754XwV9SLw",
            "validator_xip" : "100000000000001:f600000000050003"
         },
         "height" : 9,
         "owner" : "T-a-gRD2qVpp2S7UpjAsznRiRhbE1qNnhMbEDp@146",
         "prev_hash" : "1d69844c0efec8fb56df7bb38ff9080251fb2b3fd62e3d6a961779ca3e3820d4",
         "table_id" : 146,
         "timestamp" : 1594882650
      }
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "17"
}
```

* 失败返回

查询账户错误，返回：

```
{
   "data" : {
      "value" : null
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "19"
}
```

### 查询候选池节点信息

包括Root-Beacon上候选池合约中所有的节点信息，包括已经被选举为Edge、Archive、Sub-Beacon、Root-Beacon节点的信息。

**请求方式**

`getStandbys`

**请求参数**

| 参数名称          | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ----------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| account_addr      | 是       | -      | String | 数据所在账户地址。可使用候选池合约账户地址：T-21-38M7UrM9d2o1J9v1SVRDPtSSMHr4Qsn96N4@0（Root-Beacon候选池合约账户地址） 或者T-22-4uCQ5Di2vZmPURNYVUuvWm5p7EaFQrRLs76@3（Sub-Beacon候选池合约账户地址）。 |
| node_account_addr | 否       | -      | String | 候选节点账户地址，如不指定，默认查询所有候选节点。           |

**返回参数**

| 参数名称             | 类型   | 说明                                                         |
| -------------------- | ------ | ------------------------------------------------------------ |
| node_sign_key        | String | 节点注册时使用的公钥。账户公钥或者无资产的公私钥对中的公钥。 |
| node_account_address | String | 节点账户地址。                                               |
| program_version      | String | 主链版本号。                                                 |
| stake                | Unit64 | 节点权益。                                                   |

**请求样例**

```
target_account_address=T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn&
body={
"params" : {
    "account_addr" : "T-21-38M7UrM9d2o1J9v1SVRDPtSSMHr4Qsn96N4@0"
    "node_account_addr" :""
    
   }
}&
method=getStandbys&
sequence_id=6&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

```
{
	 "data" : {
      "arc" : [
         {
            "node_sign_key" : "BFFVnheBS2yJLwlb+q6xH/DL+RotbvRdd9YeJKug1tP+WppTdB36KzMOHxmHTsh5u9BKgPDgXppFvyBeqYUxoTU=",
            "node_account_address" : "T-0-LKfBYfwTcNniDSQqj8fj5atiDqP8ZEJJv6",
            "program_version" : "1.0.0.0",
            "stake" : 0
         },
      ],
      "auditor" : [
         {
            "node_sign_key" : "BFFVnheBS2yJLwlb+q6xH/DL+RotbvRdd9YeJKug1tP+WppTdB36KzMOHxmHTsh5u9BKgPDgXppFvyBeqYUxoTU=",
            "node_account_address" : "T-0-LKfBYfwTcNniDSQqj8fj5atiDqP8ZEJJv6",
            "program_version" : "1.0.0.0",
            "stake" : 0
         },
         {
            "node_sign_key" : "BFyUBEG/eO5SomaDQZidofp7n0s0eq/9scRAxWp8w+fbb3CnOSffdN3CeNHzJKYgBBmK5anXtvXkkBYCmW7+tiU=",
            "node_account_address" : "T-0-LhCXUC5iQCREefnRPRFhxwDJTEbufi41EL",
            "program_version" : "1.0.0.0",
            "stake" : 0
         }
      ],
      "edge" : [
         {
            "node_sign_key" : "BFFVnheBS2yJLwlb+q6xH/DL+RotbvRdd9YeJKug1tP+WppTdB36KzMOHxmHTsh5u9BKgPDgXppFvyBeqYUxoTU=",
            "node_account_address" : "T-0-LKfBYfwTcNniDSQqj8fj5atiDqP8ZEJJv6",
            "program_version" : "1.0.0.0",
            "stake" : 0
         },
         {
            "node_sign_key" : "BFyUBEG/eO5SomaDQZidofp7n0s0eq/9scRAxWp8w+fbb3CnOSffdN3CeNHzJKYgBBmK5anXtvXkkBYCmW7+tiU=",
            "node_account_address" : "T-0-LhCXUC5iQCREefnRPRFhxwDJTEbufi41EL",
            "program_version" : "1.0.0.0",
            "stake" : 0
         }
      ],
      "root_beacon" : [
         {
            "node_sign_key" : "BFFVnheBS2yJLwlb+q6xH/DL+RotbvRdd9YeJKug1tP+WppTdB36KzMOHxmHTsh5u9BKgPDgXppFvyBeqYUxoTU=",
            "node_account_address" : "T-0-LKfBYfwTcNniDSQqj8fj5atiDqP8ZEJJv6",
            "program_version" : "1.0.0.0",
            "stake" : 0
         },
         {
            "node_sign_key" : "BFyUBEG/eO5SomaDQZidofp7n0s0eq/9scRAxWp8w+fbb3CnOSffdN3CeNHzJKYgBBmK5anXtvXkkBYCmW7+tiU=",
            "node_account_address" : "T-0-LhCXUC5iQCREefnRPRFhxwDJTEbufi41EL",
            "program_version" : "1.0.0.0",
            "stake" : 0
         }
      ],
      "validator" : [
         {
            "node_sign_key" : "BFFVnheBS2yJLwlb+q6xH/DL+RotbvRdd9YeJKug1tP+WppTdB36KzMOHxmHTsh5u9BKgPDgXppFvyBeqYUxoTU=",
            "node_account_address" : "T-0-LKfBYfwTcNniDSQqj8fj5atiDqP8ZEJJv6",
            "program_version" : "1.0.0.0",
            "stake" : 0
         },
         {
            "node_sign_key" : "BFyUBEG/eO5SomaDQZidofp7n0s0eq/9scRAxWp8w+fbb3CnOSffdN3CeNHzJKYgBBmK5anXtvXkkBYCmW7+tiU=",
            "node_account_address" : "T-0-LhCXUC5iQCREefnRPRFhxwDJTEbufi41EL",
            "program_version" : "1.0.0.0",
            "stake" : 0
         }
      ],
      "sub_beacon" : [
         {
            "node_sign_key" : "BFFVnheBS2yJLwlb+q6xH/DL+RotbvRdd9YeJKug1tP+WppTdB36Kz MOHxmHTsh5u9BKgPDgXppFvyBeqYUxoTU=",
            "node_account_address" : "T-0-LKfBYfwTcNniDSQqj8fj5atiDqP8ZEJJv6",
            "program_version" : "1.0.0.0",
            "stake" : 0
         },
         {
            "node_sign_key" : "BFyUBEG/eO5SomaDQZidofp7n0s0eq/9scRAxWp8w+fbb3CnOSffdN3CeNHzJKYgBBmK5anXtvXkkBYCmW7+tiU=",
            "node_account_address" : "T-0-LhCXUC5iQCREefnRPRFhxwDJTEbufi41EL",
            "program_version" : "1.0.0.0",
            "stake" : 0
         }
      ]
   }
}
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "49"
}
```

* 失败返回

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "50"
}
```

### 查询链上治理参数

**请求方式**

`getCGP`

**请求参数**

| 参数名称     | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ------------ | -------- | ------ | ------ | ------------------------------------------------------------ |
| account_addr | 是       | -      | String | 数据所在账户地址。可使用链上治理合约账户地址：T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0。 |

**返回参数**

查询返回的参数值为参数当前最新值，关于参数的说明及初始值请参见[链上治理参数](/zh/On-ChainGovernance/On-ChainGovernanceParameters.md)。

**请求样例**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0"
   }
}&
method=getCGP&
sequence_id=4&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

```
{
   "data" : {
      "additional_issue_year_ratio" : "8",
      "application_contract_code_max_len" : "32768",
      "archive_election_interval" : "11",
      "archive_reward_ratio" : "3",
      "auditor_group_count" : "2",
      "auditor_reward_ratio" : "10",
      "award_auditor_credit" : "30000",
      "award_validator_credit" : "30000",
      "backward_auditor_slash_credit" : "100000",
      "backward_node_lock_duration_increment" : "103681",
      "backward_validator_slash_credit" : "100000",
      "beacon_tx_fee" : "100000000",
      "bookload_max_block_per_table" : "32",
      "cgc_proposal_expire_time" : "30",
      "claim_node_reward_interval" : "8640",
      "claim_voter_dividend_interval" : "8640",
      "cluster_election_interval" : "71",
      "cluster_election_minimum_rotation_ratio" : "66",
      "cluster_zero_workload" : "0",
      "contract_transaction_size" : "25",
      "cpu_gas_exchange_ratio" : "40",
      "cross_reading_rec_standby_pool_contract_height_step_limitation" : "2",
      "cross_reading_rec_standby_pool_contract_logic_timeout_limitation" : "29",
      "custom_property_max_number" : "128",
      "custom_property_name_max_len" : "16",
      "dividend_ratio_change_interval" : "120960",
      "edge_election_interval" : "17",
      "edge_reward_ratio" : "3",
      "election_rotation_count_ratio" : "16",
      "free_gas" : "25000",
      "fullunit_contain_of_unit_num" : "21",
      "governance_reward_ratio" : "4",
      "initial_total_locked_token" : "10000000000000",
      "leader_election_round" : "2",
      "max_archive_group_size" : "512",
      "max_auditor_group_size" : "64",
      "max_auditor_rotation_count" : "2",
      "max_edge_group_size" : "512",
      "max_election_committee_size" : "256",
      "max_gas_account" : "200000",
      "max_gas_contract" : "10000000",
      "max_nodedeposit_lock_duration" : "3153593",
      "max_validate_stake" : "24500000",
      "max_validator_group_size" : "128",
      "max_vote_nodes_num" : "1000",
      "min_archive_deposit" : "1000000000000",
      "min_auditor_deposit" : "1000000000000",
      "min_auditor_group_size" : "32",
      "min_cgc_proposal_deposit" : "100000000",
      "min_credit" : "100000",
      "min_edge_deposit" : "100000000000",
      "min_election_committee_size" : "32",
      "min_free_gas_balance" : "100000000",
      "min_mainnet_active_archives" : "1",
      "min_mainnet_active_auditors" : "128",
      "min_mainnet_active_edges" : "1",
      "min_mainnet_active_validators" : "512",
      "min_mainnet_active_votes" : "0",
      "min_node_reward" : "0",
      "min_ratio_annual_total_reward" : "2",
      "min_stake_votes_num" : "1000",
      "min_table_block_report" : "32",
      "min_tx_deposit" : "100000",
      "min_validator_deposit" : "500000000000",
      "min_validator_group_size" : "32",
      "min_voter_dividend" : "0",
      "min_votes_num" : "100",
      "nodes_per_segment" : "27",
      "punish_interval_table_block" : "147456",
      "punish_interval_time_block" : "8641",
      "rec_election_interval" : "60480",
      "rec_standby_pool_update_interval" : "10",
      "reward_issue_interval" : "8640",
      "schedule_table_num_per_clock" : "4",
      "shard_zero_workload" : "0",
      "sign_block_publishment_threshold_value" : "0",
      "sign_block_ranking_publishment_threshold_value" : "10",
      "sign_block_ranking_reward_threshold_value" : "0",
      "sign_block_reward_threshold_value" : "80",
      "sign_table_blocks_report_interval" : "311",
      "tableblock_batch_tx_max_num" : "64",
      "tableblock_batch_unitblock_max_num" : "64",
      "task_num_per_round" : "16",
      "tcc_member_number" : "T-0-Ldf7KcME5YaNvtFsr6jCFwNU9i7NeZ1b5a,T-0-LWUw2ioaCw3TYJ9Lsgu767bbNpmj75kv73,T-0-LTHfpc9otZwKmNcXA24qiA9A6SMHKkxwkg",
      "toggle_whitelist" : "0",
      "total_gas_shard" : "2160000000000",
      "total_issuance" : "20000000000000000",
      "tx_deposit_gas_exchange_ratio" : "100",
      "tx_send_timestamp_tolerance" : "300",
      "unitblock_confirm_tx_batch_num" : "8",
      "unitblock_recv_transfer_tx_batch_num" : "4",
      "unitblock_send_transfer_tx_batch_num" : "3",
      "unlock_gas_staked_delay_time" : "8641",
      "usedgas_decay_cycle" : "8641",
      "validator_group_count" : "4",
      "validator_reward_ratio" : "60",
      "vote_reward_ratio" : "20",
      "votes_report_interval" : "30",
      "whitelist" : "T-0-LhCXUC5iQCREefnRPRFhxwDJTEbufi41EL,T-0-LefzYnVUayJSgeX3XdKCgB4vk7BVUoqsum,T-0-LeXNqW7mCCoj23LEsxEmNcWKs8m6kJH446,T-0-LXqp1NkfooMAw7Bty2iXTxgTCfsygMnxrT,T-0-LcNfcqFPH9vy3EYApkrcXLcQN2hb1ygZWE,T-0-LTHfpc9otZwKmNcXA24qiA9A6SMHKkxwkg,T-0-LLJ8AsN4hREDtCpuKAxJFwqka9LwiAon3M,T-0-Ldf7KcME5YaNvtFsr6jCFwNU9i7NeZ1b5a,T-0-LWUw2ioaCw3TYJ9Lsgu767bbNpmj75kv73,T-0-LKfBYfwTcNniDSQqj8fj5atiDqP8ZEJJv6,T-0-LTSip8Xbjutrtm8RkQzsHKqt28g97xdUxg,T-0-Lgv7jLC3DQ3i3guTVLEVhGaStR4RaUJVwA,T-0-LNi53Ub726HcPXZfC4z6zLgTo5ks6GzTUp,T-0-LVpL9XRtVdU5RwfnmrCtJhvQFxJ8TB46gB,T-0-LaFmRAybSKTKjE8UXyf7at2Wcw8iodkoZ8,T-0-LUv7e8RZLNtnE1K9sEfE9SYe74rwYkzEub,T-0-LXRSDkzrUsseZmfJFnSSBsgm754XwV9SLw",
      "workload_per_tableblock" : "2",
      "workload_per_tx" : "1",
      "workload_report_interval" : "1080",
      "workload_timer_interval" : "18",
      "zec_election_interval" : "8640",
      "zec_standby_pool_update_interval" : "11",
      "zone_election_trigger_interval" : "5"
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "4"
}
```

* 失败返回

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "5"
}
```

### 查询主链信息

**请求方式**

`getChainInfo`

**请求参数**

| 参数名称     | 是否必选 | 默认值 | 类型   | 说明                                             |
| ------------ | -------- | ------ | ------ | ------------------------------------------------ |
| account_addr | 是       | -      | String | 数据所在账户地址。可输入当前正在使用的链上账户。 |

**返回参数**

| 参数名称               | 类型   | 说明                   |
| ---------------------- | ------ | ---------------------- |
| first_timerblock_hash  | String | 第一个时钟块hash。     |
| first_timerblock_stamp | Uint64 | 第一个时钟块生成时间。 |
| version                | String | 主链版本。             |

**请求样例**

```
target_account_address=T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn&
body={
"params" : {
    "account_addr" : "T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn"
   }
}&
method=getChainInfo&
sequence_id=6&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

```
{
	"data": {
		"first_timerblock_hash": "ddba228c84b6380845adce23ced7dd0f4574c9fbb45f2221a610e869798565e3",
		"first_timerblock_stamp": 1590980774,
		"version": "0.0.0.1"
	},
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "6"
}
```

* 失败返回

无。

### 查询节点信息

**请求方法**

`queryNodeInfo`

**请求参数**

| 参数名称          | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ----------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| account_addr      | 是       | -      | String | 数据所在账户地址。可使用注册合约账户地址：T-21-38DSqqwBWkHKxkVuCq3htW47BGtJRCM2paf@0。 |
| node_account_addr | 否       | 空     | String | 节点账户地址，如不指定，则默认查询所有节点信息。             |

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
| registered_node_type | String  | 节点注册类型：<br/>边缘节点：edge；<br/>验证节点：validator；<br/>高级节点：advance。 |
| node_sign_key        | String  | 注册节点时使用的公钥。                                       |
| validator_credit     | String  | validator节点信誉分。                                        |
| validator_stake      | Uint64  | validator节点权益：validator stake=（节点保证金+节点得票总数）/2 |
| vote_amount          | Uint64  | 节点得票总数。                                               |

**请求样例**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-21-38DSqqwBWkHKxkVuCq3htW47BGtJRCM2paf@0",
    "node_account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4"
   }
}&
method=queryNodeInfo&
sequence_id=4&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

```
 "data" : {
      "account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4",
      "auditor_credit" : "0.100000",
      "auditor_stake" : 0,
      "dividend_ratio" : 0,
      "network_id" : "0 ",
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
	"sequence_id": "8"
}
```

### 查询节点奖励

**请求方法**

`queryNodeReward`

**请求参数**

| 参数名称          | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ----------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| account_addr      | 是       | -      | String | 数据所在账户地址。可使用分片奖励领取合约账户地址：T-2-MT3itmNbWs4XYn8R1NUcoucmppJwN7qE69。 |
| node_account_addr | 否       | -      | String | 节点账户地址，如不指定，则查询所有节点奖励信息。             |

**返回参数**

| 参数名称        | 类型   | 说明                           |
| --------------- | ------ | ------------------------------ |
| accumulated     | Uint64 | 奖励总额，单位uTOP。           |
| issue_time      | Uint64 | 每个节点奖励发放时的时钟高度。 |
| last_claim_time | Uint64 | 上次领取奖励的时钟高度。       |
| unclaimed       | Uint64 | 未领取的奖励，单位uTOP。       |

**请求样例**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-2-MT3itmNbWs4XYn8R1NUcoucmppJwN7qE69",
    "node_account_addr" : ""
   }
}&
method=queryNodeReward&
sequence_id=4&
identity_token=&
version=1.0
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
	"sequence_id": "10"
}
```

### 查询节点投票分布

**请求方法**

`listVoteUsed`

**请求参数**

| 参数名称          | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ----------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| account_addr      | 是       | -      | String | 数据所在账户地址。可使用投票合约账户地址：T-2-MVfDLsBKVcy1wMp4CoEHWxUeBEAVBL9ZEa。 |
| node_account_addr | 是       | -      | String | 被查询的节点账户地址。                                       |

**返回参数**

| 参数名称   | 类型    | 说明                                                    |
| ---------- | ------- | ------------------------------------------------------- |
| vote_infos | Map数组 | 接收投票节点账户地址(String)；给节点投票数量(Integer)。 |

**请求样例**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-2-MVfDLsBKVcy1wMp4CoEHWxUeBEAVBL9ZEa",
    "node_account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4"
   }
}&
method=listVoteUsed&
sequence_id=4&
identity_token=&
version=1.0
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
	"sequence_id": "12"
}
```

### 查询投票者分红

**请求方法**

`queryVoterDividend`

**请求参数**

| 参数名称          | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ----------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| account_addr      | 是       | -      | String | 数据所在账户地址。可使用分片奖励领取合约地址：T-2-MT3itmNbWs4XYn8R1NUcoucmppJwN7qE69。 |
| node_account_addr | 是       | -      | String | 投票者账户地址。                                             |

**返回参数**

| 参数名称        |                 | 类型   | 说明                                 |
| --------------- | --------------- | ------ | ------------------------------------ |
| accumulated     |                 | Uint64 | 投票者已领取的分红总额。             |
| last_claim_time |                 | Uint64 | 投票者上次领取分红的时钟高度。       |
| node_dividend   |                 | List   | 被投票节点的分红信息。               |
|                 | account_addr    | String | 被投票节点账户地址。                 |
|                 | accumulated     | Uint64 | 被投票节点分给该投票者的分红。       |
|                 | last_claim_time | Uint64 | 被投票节点分红上次被领取的时钟高度。 |
|                 | unclaimed       | Uint64 | 被投票节点分给该投票者未领取的分红。 |
| unclaimed       |                 | Uint64 | 投票者未领取的分红总额。             |

**请求样例**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-2-MT3itmNbWs4XYn8R1NUcoucmppJwN7qE69",
    "node_account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4"
   }
}&
method=queryVoterDividend&
sequence_id=4&
identity_token=&
version=1.0
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
	"sequence_id": "14"
}
```

### 查询提案信息

**请求方法**

`queryProposal`

**请求参数**

| 参数名称     | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ------------ | -------- | ------ | ------ | ------------------------------------------------------------ |
| account_addr | 是       | -      | String | 数据所在账户地址。可使用链上治理合约账户地址：T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0。 |
| proposal_id  | 否       | 空     | String | 提案ID。如不指定，则默认查询所有提案。                       |

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
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0",
    "node_account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4"
   }
}&
method=queryProposal&
sequence_id=4&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

```
{
	"chain_timer_height": 40,
	"proposal_deposit": 400,
	"end_time": "1590487691",
	"modification_description": "bbb",
	"new_value": "2",
	"orig_value": "10000",
	"parameter": "archive_deposit",
	"priority": 3,
	"proposal_account_addr": "T-0-LZ6nexZWNPwua7cagJcGuzLwe5aytnzTsk",
	"proposal_id": "aaa",
	"voting_status": 0
}
```

* 失败返回

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "16"
}
```

