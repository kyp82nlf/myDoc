# 交易协议

## 概述

交易是指启动从一个账户到另一个帐户的资产转移的命令。交易还可以包含在处理交易时将被触发的操作。

动作(Action)：一个动作可以是一个内置的系统功能，比如Hash和投票，或者是一个自定义的智能合约。用户可以通过发送交易或消息来触发动作。

消息(Message)：消息就是对账户属性发起操作的指令。消息的数据包含属性、动作、输入参数和输出参数。为安全起见，消息不能更改账户余额。

消息是一种特殊的交易。一个发送高频消息的账户会受到流量控制，必须支付gas费，否则账户所有者可能被迫执行工作证明(POW)。

## 交易数据结构

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

## 交易签名

签名过程分两步，第一步是交易对象序列化，所谓序列化，即按照固定顺序将交易对象中的字段转换成二进制；第二步是用私钥对这些二进制数据进行签名。

### 交易对象序列化

- 交易对象中的参数主要有4个基础类型，分别是 Uint16, Uint32, Uint64, String。
- 由于Java中没有无符号类型，所以涉及数字一律用BigInteger类型，序列化时再转换。
- 序列化采用小端字节序(little endian)。
- 其他组合类型都需要拆分成基础类型处理，例如在JavaSDK的投票接口中，传入的是Map<String, BigInteger>对象，拆分成String和Uint64拼接在一起。

### 参数序列化顺序



## 交易生命周期

交易生命周期如下图所示。

![Snap63](TransactionProtocol.assets/Snap63.jpg)

1.客户端对交易签名后，交易直接被发送至Edge Network，从而保护共识网络（Audit Network、Validate Network、Root-Beacon Network及Sub-Beacon Network）免受泛滥交易的攻击。

2.交易到达Edge Network后，根据交易接收方账户所属网络分片，将交易发送至对应的Audit Network。

3.交易到达Audit Network后，交易将被路由至交易接收方账户所在网络分片(Validator/Root-Beacon/Sub-Beacon Network)。

4.交易到达接收方账户所在网络分片后，开始交易共识，具体请参见[共识协议](/zh/AboutTOPNetwork/Protocol/ConsensusProtocol.md)。

5.交易共识完成后，将数据打包到区块中，并将区块数据存入交易接收方账户所在分片的所有节点以及archive节点的数据库中。

