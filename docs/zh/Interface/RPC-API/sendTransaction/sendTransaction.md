# 交易接口

支持发送交易，包括转账、节点staking、节点注册、节点投票、节点领取奖励、调用合约等。

在发送交易前，请确保：

1.您已拥有一个链上账户。可通过`getAccount`查询此账户是否已经在链上创建。

2.获取链访问身份令牌，使用`requestToken`命令获取。

## 交易费用说明

TOP Network链上发送交易会消耗一定的gas资源，如果账户余额大于等于100*10^6 uTOP，系统会免费赠与25,000 Tgas。

每笔交易都至少需要100,000 uTOP token作为交易保证金，否则交易将被丢弃。

在账户gas资源充足的情况下，交易保证金在交易成功后会立即退回到您的账户。如gas资源不足以支付交易费用，则需要从交易保证金中扣除一笔费用用来兑换gas资源以支付交易费用，扣除的TOP token将被销毁。

如交易保证金也不足以兑换足够的gas资源，那么交易最终将失败。

交易所消耗的资源详细信息请参见[资源模型](/zh/AboutTOPNetwork/Protocol/ResourceModel.md)。

对于调用部署在Root-Beacon上合约的交易（注册节点相关、提案相关、启动节点进程入网），系统还会自动从发送方账户里扣除100*10^6 uTOP token的服务费，并销毁。

> 在RPC API中，账户余额、交易保证金等TOP token单位为uTOP，1TOP=1*10^6 uTOP。

## 接口说明

**请求方式**

`sendTransaction`

**请求参数**

| 参数名称             |                          | 是否必选 | 类型   | 说明                                                         |
| -------------------- | ------------------------ | -------- | ------ | ------------------------------------------------------------ |
| authorization        |                          | 是       | String | 交易体签名。采用ECDSA数字签名算法。                          |
| challenge_proof      |                          | 是       | String | 预留字段，空字符串。                                         |
| ext                  |                          | 是       | String | 预留字段，空字符串。                                         |
| from_ledger_id       |                          | 是       | Uint16 | 预留字段，为"0"。                                            |
| last_tx_hash         |                          | 是       | String | 交易发送方上次交易的xx64hash，用于交易的排序和去重。"0x"开头的hash。 |
| last_tx_nonce        |                          | 是       | Uint64 | 交易发送方上次交易的nonce，用于交易的排序和去重。            |
| note                 |                          | 是       | String | 交易备注。                                                   |
| to_ledger_id         |                          | 是       | Uint16 | 预留字段，为"0"。                                            |
| receiver_action      |                          |          | Object | 交易接受方执行内容。                                         |
|                      | action_authorization     | 是       | String | action签名，json结构，当交易为部署合约交易时，此处需要输入合约的公钥信息，公钥用来验证合约账户与交易发送方账户是否匹配。 |
|                      | action_ext               | 是       | String | 预留扩展字段，空字符串。                                     |
|                      | action_hash              | 是       | Uint32 | 整个action的xxhash32。默认为"0"，暂未使用。                  |
|                      | action_name              | 是       | String | 调用合约时，合约的函数名。系统合约函数请参见[系统合约函数](/zh/SmartContract/SystemContractFunction.md)。非合约交易时，默认为空。 |
|                      | action_param             | 是       | String | 接收方执行内容。不同action type执行内容的序列化请参见[action param序列化](/zh/Interface/RPC-API/sendTransaction/action-param-serialization.md)。 |
|                      | action_size              | 是       | Uint16 | action对象的大小。                                           |
|                      | action_type              | 是       | Uint16 | 接收方执行类型，不同的交易类型对应不同的action type，具体请参见[tx_type与action_type说明](/zh/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)。<br/>xaction_type_create_contract_account    = 3,    // 创建用户合约账户  <br/>xaction_type_run_contract              = 5,    // 调用智能合约<br/>xaction_type_asset_in                = 6,    // 资产转入<br/>xaction_type_pledge_token_vote          = 21,   //锁定TOP token兑换选票<br/>    xaction_type_redeem_token_vote          = 22,   // 解锁兑换选票的TOP token<br/>    xaction_type_pledge_token               = 23,   //锁定TOP token兑换gas<br/>    xaction_type_redeem_token               = 24,   //解锁兑换gas的TOP token |
|                      | tx_receiver_account_addr | 是       | String | 交易接受方账户地址。                                         |
| send_timestamp       |                          | 是       | Uint64 | 交易发送时间戳GMT。                                          |
| sender_action        |                          |          | Object | 交易发送方执行内容。                                         |
|                      | action_authorization     | 是       | String | action签名，json结构。                                       |
|                      | action_ext               | 是       | String | 预留扩展字段，空字符串。                                     |
|                      | action_hash              | 是       | Uint32 | 整个action的xxhash32。默认为"0"，暂未使用。                  |
|                      | action_name              | 是       | String | 预留字段，空字符串。                                         |
|                      | action_param             | 是       | String | 发送方执行内容。不同action type执行内容的序列化请参见[action param序列化](/zh/Interface/RPC-API/sendTransaction/action-param-serialization.md)。 |
|                      | action_size              | 是       | Uint16 | action对象的大小。                                           |
|                      | action_type              | 是       | Uint16 | 发送方执行类型，不同的交易类型对应不同的action type，具体请参见[tx_type与action_type说明](/zh/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)。<br/>xaction_type_asset_out                  = 0,    // 资产转出。<br/>xaction_type_source_null =1,          // 源端不执行操作 |
|                      | tx_sender_account_addr   | 是       | String | 交易发送方账户地址。                                         |
| tx_deposit           |                          | 是       | Uint32 | 交易保证金，最低为0.1*10^6 uTOP。                            |
| tx_expire_duration   |                          | 是       | Uint16 | 交易到期时长，超过则被丢弃，默认100s。                       |
| tx_hash              |                          | 是       | String | 交易hash的十六进制。                                         |
| tx_len               |                          | 是       | Uint16 | 交易大小。交易消耗的gas与交易大小相关。                      |
| tx_random_nonce      |                          | 是       | Uint32 | 随机数字。预留字段，为"0"。                                  |
| tx_structure_version |                          | 是       | String | 交易结构版本号。默认为"0"，暂未使用。                        |
| tx_type              |                          | 是       | Uint16 | 交易类型，不同的交易类型，action中action_param（执行内容）及action type（执行类型）不同。<br/>xtransaction_type_create_contract_account      = 1,    // 创建合约账户 <br/>xtransaction_type_run_contract                           = 3,    // 调用智能合约<br/>xtransaction_type_transfer                                   = 4,    // 转账<br/>xtransaction_type_vote                                             = 20,   //投票<br/>xtransaction_type_abolish_vote                               = 21,   //取消投票<br/>xtransaction_type_pledge_token_gas                      = 22,   // 锁定TOP token兑换gas<br/>xtransaction_type_redeem_token_gas                    = 23,   // 解锁兑换gas锁定的TOP token<br/>xtransaction_type_pledge_token_vote                     = 27,   // 锁定TOP token兑换选票<br/>xtransaction_type_redeem_token_vote                    = 28,   // 解锁兑换选票锁定的TOP token |

**返回参数**

| 参数名称 | 类型   | 说明                                    |
| -------- | ------ | --------------------------------------- |
| tx_hash  | String | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Uint16 | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
account_address=T-0-LZzAeUA93vv7WsXswb85xC42s2Jonka6oN&
body={
"params":{
      "authorization" : "0x012d20ecbb8f66a3a4c64376d0900bda0540f97d1cb7ac47ecd5b54dcc07b2023c03d64a4d1b7b03322740e61fa334728416b88498ba6eaee0f53845eb725af993",
      "challenge_proof" : "",
      "ext" : "",
      "from_ledger_id" : 0,
      "last_tx_hash" : "0xf6e9be5d70632cf5",
      "last_tx_nonce" : 0,
      "note" : "",
      "receiver_action" : {
         "action_authorization" : "",
         "action_ext" : "",
         "action_hash" : 0,
         "action_name" : "",
         "action_param" : "0x26000000542d302d4c4e6935335562373236486350585a6643347a367a4c67546f356b7336477a545570",
         "action_size" : 0,
         "action_type" : 2,
         "tx_receiver_account_addr" : "T-0-LNi53Ub726HcPXZfC4z6zLgTo5ks6GzTUp"
      },
      "send_timestamp" : 1600303446,
      "sender_action" : {
         "action_authorization" : "",
         "action_ext" : "",
         "action_hash" : 0,
         "action_name" : "",
         "action_param" : "",
         "action_size" : 0,
         "action_type" : 1,
         "tx_sender_account_addr" : "T-0-LNi53Ub726HcPXZfC4z6zLgTo5ks6GzTUp"
      },
      "to_ledger_id" : 0,
      "tx_deposit" : 100000,
      "tx_expire_duration" : 100,
      "tx_hash" : "0x56601b2c5b5da1ed850ca2b545403837b9b34f88c3fbe0765577c54fc69296f3",
      "tx_len" : 0,
      "tx_random_nonce" : 0,
      "tx_structure_version" : 0,
      "tx_type" : 0
   }
}&
method=sendTransaction&
sequence_id=2&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "2",
	"tx_hash": "0x34ca8f317107ce6b01c933b017f28e6cf0f84f2e31627a8349f167c1aa9ade10",
	"tx_size": 306
}
Please use command 'get transaction' to query transaction status later on!!!
```

TOP Network交易共识需要一定的时间，不会立刻返回交易共识结果，可通过`get transaction`查询交易详细信息查看交易共识最终结果。

* 失败返回

```
{
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "3",
	"tx_hash": "0xc73f6295bc5b6be1ace273d59504f4c97d1b01cd2d3301c47cf042e28795e35b",
	"tx_size": 306
}
Please use command 'get transaction' to query transaction status later on!!!
```

同样的，交易失败的情况下，也不会直接返回交易共识结果，需要通过`get transaction`查询交易详细信息查看交易共识最终结果。
