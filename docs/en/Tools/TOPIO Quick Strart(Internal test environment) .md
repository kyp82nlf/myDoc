# TOPIO快速入门（内部测试环境版）

以下内容基于内部测试环境。

## 如何创建链上账户？

在TOPIO上进行一切活动，包括发送交易、查询信息、注册节点、投票等，都需要一个链上账户。

步骤1 创建一个本地账户。

说明：

> * 支持同时创建多个本地账户，默认使用最新创建的本地账户。
> * 此时创建的账户为本地账户，在链上并不存在此账户，需要创建一个链上账户，创建链上账户请参见“步骤2 创建链上账户”。

**请求方式**

`wallet createAccount`

**请求参数**

无。

**选项**

| 选项名称  | 默认值       | 类型   | 说明                                                         |
| --------- | ------------ | ------ | ------------------------------------------------------------ |
| -d，--dir | 系统默认路径 | String | account keystore文件存储路径，如不指定，默认存储在系统默认路径下，默认存放路径为。 |
| -h,--help | -            | -      | 查看命令帮助信息。                                           |

**返回参数**

| 参数名称（修改） | 类型   | 说明                                                         |
| ---------------- | ------ | ------------------------------------------------------------ |
| public key       | String | 公钥，和私钥总是成对出现。<br/>用于加密及验签。              |
| account address  | String | 因为公钥较长，为了简便实用，采用“账户地址”替代公钥从而代表账户。<br/>您可以公开您的账户地址，其他人需要账户地址和您进行互动，例如给您的账号地址转账，或者您通过账号地址向别人发送一笔交易。<br/>此处创建的为普通用户账户地址，以“T-0”为标识开头。 |
| private key path | String | account keystore文件存储账户公私钥及账户地址等信息，用于设置默认账户等。<br/>私钥用于解密和交易签名。<br/>请安全保管您的私钥文件，不要与其他人分享您的私钥，以免造成资产损失！ |

**请求样例**

`wallet createAccount`

**返回样例**

```
Please set a password for the account keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.
Or CTRL+D skips this step.
Please Input Password Again
Please set a password hint! If don't, there will be no hint when you forget your password.
basketball
Successfully create an account locally!

You can share your public key and account address with anyone.Others need them to interact with you!
You must nerver share the private key and keystore file with anyone!They control access to your funds!
You must backup your keystore file!Without the file,you’ll be impossible to access account funds!
You must remember your password!Without the password,it’s impossible to use the keystore file!
Public Key: 0x04f1aa8e1203fa1cfb8fb7605cb5cf1cdf25b30500e3fc4835819025570763d3f78c9260f041491d0d47bf3bf253ec3a9b36541ebc2c188eb4f320cd276bbf1410
account_addr: T-0-LPXXAanpbjNPQ4ff4iosZYN5eNfWZWDLky
Account Keystore File Path: /root/Topnetwork/keystore/T-0-LPXXAanpbjNPQ4ff4iosZYN5eNfWZWDLky
```

步骤2 创建链上账户。

说明：

> 同一个本地账户，只需要创建一次对应的链上账户，重启TOPIO后，不需要再创建。

使用`debug create`创建链上账户。

**请求方式**

`debug create`

**请求参数**

无

**选项**

无

**返回参数**

| 参数名称 | 类型    | 说明                                    |
| -------- | ------- | --------------------------------------- |
| tx_hash  | String  | 本次交易hash，可用于查询交易结果。      |
| tx_size  | Integer | 交易大小，交易消耗的gas和交易大小相关。 |

**请求样例**

```
debug create
```

**返回样例**

```
$> {
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "1",
   "tx_hash" : "0xdeb22a5e30cddfc6d5c141ee5bd414cfdee45496a7c3146d2cbaf6bcf414ecc2",
   "tx_size" : 276
}
Please use command 'get transaction' to query transaction status later on!!!
```

TOP Network所有交易返回并不会直接返回交易是否成功的结果，因为一笔交易发送后需要经过一定的时间进行处理。

直接返回交易的hash及交易大小，需要通过`get transaction`或者`get account`查询交易是否成功以及是否有链上账户信息。

## 如何确定链上账户已经创建成功？

如上所述，创建链上账户实际上相当于在链上发起一笔交易，TOP Network所有交易返回并不会直接返回交易是否成功的结果，因为一笔交易发送后需要经过一定的时间进行处理。可根据交易hash查询交易是否成功或者查询链上账户信息来判断链上账户是否创建成功。

### 查询交易

**请求方式**

`get transaction`

**请求参数**

| 参数名称     | 是否必选 | 默认值 | 类型   | 说明                                          |
| ------------ | -------- | ------ | ------ | --------------------------------------------- |
| account_addr | 是       | -      | String | 发送交易或接受交易账户地址。                  |
| tx_hash      | 是       | -      | String | 账户上一次交易hash，可通过`get account`查询。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

请参见“[交易数据结构说明](#附录 交易结构数据说明)”。

**请求样例**

```
get transaction T-0-LVb72cJ9LzaQbdR41Zvx7dsAL1oDFFGQrJ 0x8aa1e7082af07bf22840a1526745c484a5a20115d8e92cff2d9ed413128ac2b4
```

**返回样例**

```
{
   "data" : {
      "original_tx_info" : {
         "authorization" : "0x00cb2fdc3e0525a3037f73ca3f83e3f28feeebffdae3280fcaffe368d355b47f932bf74be4b4f8544d36febff067bc5081859e0bb9882488d2ac25be4dd3dc09da",
         "challenge_proof" : "",
         "edge_nodeid" : "T-0-LVeEo7QGURbT7Kxc5SxMmMxvbhXXc1r2aq",
         "ext" : "0x",
         "from_network_id" : 0,
         "last_tx_hash" : 0,
         "last_tx_nonce" : 17791961111430638837,
         "parent_account" : "",
         "send_timestamp" : 1594803102,
         "to_network_id" : 0,
         "tx_action" : {
            "source_action" : {
               "action_authorization" : "0x",
               "action_ext" : "0x",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x",
               "action_size" : 0,
               "action_type" : 1,
               "tx_sender_account_addr" : "T-0-LWWyW1VRAT82aQdtAcyzewTAfETqFqAH3C"
            },
            "target_action" : {
               "action_authorization" : "0x",
               "action_ext" : "0x",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x26000000542d302d4c5757795731565241543832615164744163797a6577544166455471467141483343",
               "action_size" : 0,
               "action_type" : 2,
               "tx_receiver_account_addr" : "T-0-LWWyW1VRAT82aQdtAcyzewTAfETqFqAH3C"
            }
         },
         "tx_deposit" : 100000,
         "tx_expire_duration" : 100,
         "tx_hash" : "0xdeb22a5e30cddfc6d5c141ee5bd414cfdee45496a7c3146d2cbaf6bcf414ecc2",
         "tx_len" : 0,
         "tx_random_nonce" : 0,
         "tx_structure_version" : 0,
         "tx_type" : 0
      },
      "tx_consensus_state" : {
         "confirm_unit_info" : {
            "exec_status" : "success",
            "height" : 1,
            "tx_exec_status" : "success",
            "unit_hash" : "396ae61655f156f5d19831abff5d0620ba39c850bc4ca1e6077309218c1b90cc",
            "used_deposit" : 0,
            "used_disk" : 0,
            "used_tgas" : 0
         }
      }
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "4"
}

```

根据confirm_unit_info里的exec_status字段判断交易是否成功。

### 查询链上账户信息

**请求方式**

`get account`

**请求参数**

| 参数名称(现状) | 参数名称（修改） | 是否必选 | 默认值       | 类型   | 说明                                                         |
| -------------- | ---------------- | -------- | ------------ | ------ | ------------------------------------------------------------ |
| account_addr   |                  | 否       | 当前使用账户 | String | 指定查询链上信息的账户地址，如不指定，则默认查询正在使用的账户。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

| 参数名称               | 类型   | 说明                                                         |
| ---------------------- | ------ | ------------------------------------------------------------ |
| account_addr           | String | 账户地址。                                                   |
| balance                | Uint64 | 账户余额，单位uTOP。                                         |
| disk_staked_token      | Uint64 | 兑换disk锁定的TOP token，单位uTOP。                          |
| last_hash              | String | 上一次交易hash，0x开头的十六进制字符。                       |
| last_xxhash64          | String | 上一次交易xx64hash。                                         |
| last_unit_height       | Uint64 | 上一次交易unit区块高度。                                     |
| lock_balance           | Uint64 | 锁定的TOP token，单位uTOP，主要用于合约交易。<br/>发送应用合约交易的时候，发送方可同时给合约转账，如果合约执行失败，转账款需要退还给发送方，所以在合约执行成功前，将转账款锁定。 |
| locked_deposit_balance | Uint64 | 应用合约交易冻结的交易保证金，在交易第三次共识的时候，根据合约的执行情况，发送方对交易单位uTOP。 |
| lock_tgas              | Uint64 | 交易发送方用于支付合约交易的gas。                            |
| nonce                  | Number | 交易序号，唯一。                                             |
| gas_staked_token       | Uint64 | 兑换gas锁定的TOP token，单位uTOP。                           |
| unused_vote_amount     | Uint64 | 未使用选票数量。                                             |
| vote_staked_token      | Uint64 | 兑换选票锁定的TOP token，单位uTOP。                          |

**请求样例**

`get account`

**返回样例**

```
$> {
   "data" : {
      "account_addr" : "T-0-LWWyW1VRAT82aQdtAcyzewTAfETqFqAH3C",
      "balance" : 100000000000000,
      "destroy_token" : 0,
      "disk_staked_token" : 0,
      "gas_staked_token" : 0,
      "last_hash" : "0xdeb22a5e30cddfc6d5c141ee5bd414cfdee45496a7c3146d2cbaf6bcf414ecc2",
      "last_hash_xxhash64" : "0xab7088fef12e36f2",
      "last_unit_height" : 1,
      "lock_balance" : 0,
      "lock_deposit_balance" : 0,
      "lock_tgas" : 0,
      "nonce" : 1,
      "unused_vote_amount" : 0,
      "vote_staked_token" : 0
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "5"
}
```

## 重启TOPIO后如何设置默认账户？

退出TOPIO，重启TOPIO，需要重新设置默认账户。如果此账户是本地账户，则需要创建此本地账户对应的链上账户。如果此本地账户已经创建过对应的链上账户，则不需要再创建。

### 设置默认账户

系统默认使用最新创建的账户，如您重新启动TOPIO，需要重新设置账户，用于发送交易。

**请求方式**

`wallet setDefault`

**请求参数**

| 参数名称            | 是否必选 | 默认值 | 类型   | 说明                                         |
| ------------------- | -------- | ------ | ------ | -------------------------------------------- |
| keystore _file path | 是       | -      | String | 该账户所对应的account keystore文件存储路径。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

无。

**请求样例**

`wallet SetDefault /root/Topnetwork/keystore/T-0-LPXXAanpbjNPQ4ff4iosZYN5eNfWZWDLky`

**返回样例**

```
T-0-LQcciHQHgsL1dHhzN5vqQKfd8QxKhKrsbs: Set default account successfully.
```

## 如何切换账户？

使用`wallet setDefault`命令。