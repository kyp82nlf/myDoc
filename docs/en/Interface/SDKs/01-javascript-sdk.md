# JavaScript SDK

## 概述

该项目是TOP Network官方 `Javascript SDK`。

目前支持: 

链基础操作、账户管理、用户智能合约部署及调用、节点操作、staking、提案管理以及交易相关工具等。未来还将支持更丰富的功能和应用。

JavaScript SDK为Node.js模块，支持同步写法，已上传至npmjs.com。

## 安装

### Node

```bash
npm i top-sdk-js
```

### 浏览器端使用

若需要在浏览器端使用，可在本地安装browserify模块，再在SDK目录下执行` npm run browser` 命令。会在browser目录下生成TopJs.js文件，可直接用于Web使用。

## 接口总览

| 接口                                                | 描述                              |
| :-------------------------------------------------- | :-------------------             |
| [constructor(provider, options = {})](#TopJs初始化设置) | TopJs初始化设置。                 |
| [topjs.accounts.generate()](#根据私钥生成account账户对象) | 根据私钥生成account账户对象。       |
| [topjs.passport()](#获取链上访问身份令牌)         | 获取链上访问身份令牌。          |
| [topjs.getChainInfo()](#获取主链信息)               | 获取主链信息。                     |
| [topjs.getAccount()](#查询链上账户信息)                     | 查询链上账户信息。                |
| [topjs.updateNonceAndLastHash()](#更新账户交易nonce和lasthash) | 更新账户交易nonce和lasthash。          |
| [topjs.transfer()](#转账)                          | 转账。                             |
| [topjs.getTransaction()](#查询账户交易详情)                | 查询账户交易详情。                  |
| [topjs.stakeGas()](#锁定TOP_token兑换gas) | 锁定TOP token兑换gas。    |
| [topjs.unStakeGas()](#解锁兑换gas的TOP_token)    | 解锁兑换gas的TOP token。    |
| [topjs.deployContract()](#部署用户智能合约)           | 部署用户智能合约。               |
| [topjs.callContract()](#调用用户智能合约)             | 调用用户智能合约。               |
| [topjs.getProperty()](#获取属性)                        | 获取属性。                        |
| [topjs.registerNode()](#注册节点)              | 注册节点。                    |
| [topjs.queryNodeInfo()](#获取节点信息)                    | 获取节点信息。                    |
| [topjs.unRegisterNode()](#注销节点)                     | 注销节点。                        |
| [topjs.redeemNodeDeposit()](#赎回节点保证金)               | 赎回节点保证金。                  |
| [topjs.stakeVote()](#锁定TOP_token兑换选票)            | 锁定TOP token兑换选票。      |
| [topjs.unStakeVote()](#解锁兑换选票的TOP_token)           | 解锁兑换选票的TOP token。       |
| [topjs.voteNode()](#节点投票)                  | 节点投票。                    |
| [topjs.unVoteNode()](#取消投票)                         | 取消投票。                        |
| [topjs.queryVoterDividend()](#获取投票者分红信息)            | 获取投票者分红信息。             |
| [topjs.claimVoterDividend()](#领取投票者分红)              | 领取投票者分红。                 |
| [topjs.queryNodeReward()](#获取节点奖励信息)               | 获取节点奖励信息。                 |
| [topjs.claimNodeReward()](#领取节点奖励)                  | 领取节点奖励。                     |
| [topjs.submitProposal()](#提交提案)                  | 提交提案。                     |
| [topjs.withdrawProposal()](#撤回提案)                 | 撤回提案。                       |
| [topjs.tccVote()](#TCC表决提案)                         | TCC表决提案。                |
| [topjs.queryProposal()](#获取提案详情)                    | 获取提案详情。                     |

| 工具                                                | 描述                              |
| :-------------------------------------------------- | :-------------------             |
| [topjs.utils.decodeActionParam()](#解析出转账交易体中的amount和note数据) | 解析出转账交易体中的amount和note数据。  |
| [transaction.exec_status](#判断交易是否成功)               | 判断交易是否成功。  |
| [交易体对象说明](#交易体对象说明)                | 所有交易请求都返回该对象。  |

## 链基础操作

### TopJs初始化设置

**请求方法**

> constructor(provider, options = {})

**请求参数**

|    参数名称        |    是否必选    |    默认值    |    类型     |                        说明                             |
| :---------------: | :---------: | :-----------------------------------------------------: | :---------: | ----------- |
|   provider     |   否    | - | String      |  节点账户地址。                                             |
|   options        |   否       |   参见”options对象参数说明“   | Object    |  参数。                                           |

**options**对象参数说明

| 参数名称        | 是否必选 | 默认值 | 类型 | 说明     |
| --------------- | -------- | ------ | ---- | -------- |
| pollCount       | 否       | 100    |Number| 轮询次数。 |
| pollDelayTime   | 否       | 3s     |Number| 轮询间隔，单位s。 |
| timeout         | 否       | 无限制  |Number| 超时时间，单位s。 |
| headers         | 否       | 空     |Object| 请求头。  |
| withCredentials | 否       | 空     |Object| 登录验证。 |

说明：

- > SDK发送交易请求后，请求无法直接返回交易执行结果，所以需要循环去链上查询交易是否成功，默认每3秒查询一次，循环100次，共5分钟。如果此时交易仍查询不到，则程序返回交易hash。对应options对象中的pollCount和pollDelayTime参数。

- > SDK利用axios库发送交易请求，timeout、headers、withCredentials，这三个参数可直接参考axios库。

**示例代码**

```javascript
const TopJs = require('topJs');
const topjs = new TopJs('http://localhost:19081');

// change provider
topjs.setProvider('http://192.168.50.26:19081');

// set pollCount
const topjs = new TopJs('http://192.168.50.35:19081', {
        pollCount:5,
        pollDelayTime: 3000
    });
```

### 根据私钥生成account账户对象

本地根据私钥生成账户对象，对象中包含私钥、公钥、地址等参数。

**请求方法**

> topjs.accounts.generate

**请求参数**

| 参数名称   | 是否必选 | 默认值 | 类型   | 说明   |
| ---------- | -------- | ------ | ------ | ------ |
| privateKey | 是       | -      | String | 私钥。 |

**返回参数**

本地生成account主要用于生成公私钥和地址，其他参数，除了“token"，均为初始值，需调用`topjs.accountInfo`方法获取链上真实值。

| 参数名称           | 参数名称（修改）     | 类型   | 说明                                                         |
| ------------------ | -------------------- | ------ | ------------------------------------------------------------ |
| address            | account_addr         | String | 账户地址。                                                   |
| privateKey         |                      | String | 私钥。                                                       |
| publicKey          |                      | String | 公钥。                                                       |
| token              | identity_token       | String | 身份令牌，用于和主链节点交互，后续所有请求都需要该参数。需要调用"topjs.passport"接口获取，只需获取一次。 |
| nonce              |                      | Uint64 | 该账户最新共识成功的交易序号，唯一。                         |
| last_hash          | latest_hash          | String | 最新共识成功的交易hash。                                     |
| last_hash_xxhash64 | latest_hash_xxhash64 | String | 最新共识成功的交易xx64hash。                                 |
| last_unit_height   | latest_unit_height   | Uint64 | 最新共识成功的交易的unit block高度。                         |
| balance            |                      | Uint64 | 账户余额，单位uTOP。                                         |

**请求样例**

```javascript
let account = topjs.accounts.generate();
// use privateKey
let account = topjs.accounts.generate({
    privateKey: '016a55aa3c6910caf0dead4aaa488f70872320b93889c3bc56d0426933c6f088'
});
```
**返回样例**

```javascript
{
    "address":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
    "privateKey":"016a55aa3c6910caf0dead4aaa488f70872320b93889c3bc56d0426933c6f088",
    "publicKey":"04e2932d0df760c6aae4caa29c326c2edac7f9686ab611be7c0e6e44f4ace54d62226202e5ce7ac1c4c4d8b9701eb6e5c35811a09c32a0c572814ca3c504c01425",
    "token":"",
    "nonce":0,
    "last_hash":"",
    "last_hash_xxhash64":"",
    "last_unit_height":0,
    "balance":0
}
```

### 获取链上访问身份令牌

根据账户获取identity token（身份令牌），每个账户token不同。在后续所有的请求中，都需要token参数。

**请求方法**

> topjs.passport

**请求参数**

|    参数名称        |    是否必选      |    默认值   |    类型     |                        说明                             |
| :---------------: | :---------: | :-----------------------------------------------------: | :---------: | ----------- |
|   argsObjects     |   否    | 参见“argsObjects参数说明” | Object     |  账户对象。                                               |
|   callback        |   否       |   -       | Function    |  方法回调函数。                                           |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型 | 说明     |
| :------: | -------- | --------------------------- | ---- | -------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 账户对象。 |

**返回参数**

| 参数名称          | 参数名称（修改） | 类型 | 说明 |
| --------         | ---- | ---- | ---- |
|secret_key        |        |String|密钥key。            |
|signature_method  |  |String|签名方法。            |
|signature_ver_code||String|签名方法版本号。      |
|token             |identity_token             |String|身份令牌，用于和主链节点交互，后续所有请求都需要该参数。              |

**请求样例**

```javascript
topjs.passport().then(console.log);
// 使用特定account账户
topjs.passport({
    account
}).then(console.log);
```

**返回样例**

```javascript
{ data:
   { secret_key: 'd014f1ea-fecd-468d-9278-1e75b0275825',
     signature_method: 'hmac_sha2',
     signature_ver_code: '1.0',
     token: 'bb7e78f6-6498-4827-86cc-172dd30b6214' },
  errmsg: 'ok',
  errno: 0,
  sequence_id: '1588816846088' 
}
```

### 获取主链信息

**请求方法**

> topjs.getChainInfo

**请求参数**

|    参数名称        |    是否必选    |    默认值    |    类型     |                        说明                             |
| :---------------: | :---------: | :-----------------------------------------------------: | :---------: | ----------- |
|   argsObjects     |   否    |   参见“argsObjects参数说明”   | Object      |  账户对象。                                               |
|   callback        |   否       | - | Function   |  方法回调函数。                                           |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明       |
| :------: | -------- | --------------------------- | ------ | ---------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 账户对象。 |

**返回参数**

| 参数名称               | 类型   | 说明                   |
| ---------------------- | ------ | ---------------------- |
| first_timerblock_hash  | String | 第一个时钟块hash。     |
| first_timerblock_stamp | Uint64 | 第一个时钟块生成时间。 |
| version                | String | 版本。                 |

**请求样例**

```javascript
topjs.getChainInfo().then(console.log);
```
**返回样例**

```javascript
{ data:
   { first_timerblock_hash: '1828311c9f2ecdec97601b50627a051d398ef027a66ea45134924de96ce1b8b1',
     first_timerblock_stamp: 0,
     version: '0.0.0.1' 
    },
  errmsg: 'ok',
  errno: 0,
  sequence_id: '1588817869947' 
}
```

## 账户管理

### 查询链上账户信息

**请求方法**

> topjs.getAccount

**请求参数**

|    参数名称   |  是否必选 | 默认值 |    类型     |                        说明                             |
| :---------------: | :---------: | :-----------------------------------------------------: | :---------: | ----------- |
|   argsObjects     |   否    |   参见“argsObjects参数说明”   | Object     |  账户对象。                                               |
|   callback        |   否       |   -       | Function   |  方法回调函数。                                           |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明       |
| :------: | -------- | --------------------------- | ------ | ---------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 账户对象。 |

**返回参数**(已根据最新数据结构修改)

| 参数名称                | 类型   | 说明                                                         |
| ----------------------- | ------ | ------------------------------------------------------------ |
| account_addr            | String | 账户地址。                                                   |
| available_gas           | Uint64 | 账户现有可用gas的量，单位Tgas。                              |
| balance                 | Uint64 | 账户余额，单位uTOP。                                         |
| burned_token            | Uint64 | 该账户已经销毁的TOP token，单位uTOP。                        |
| cluster_id              | Uint8  | 账户所在clsuter ID，cluster包括auditor group和validator group（shard）。 |
| created_time            | Uint64 | 账户在链上创建的时钟高度。                                   |
| unlock_disk_staked      | Uint64 | 解锁中的兑换disk的TOP token，发起解锁后，需要等待24小时，解锁的金额才会到账。 |
| disk_staked_token       | Uint64 | 兑换disk锁定的TOP token，单位uTOP。                          |
| gas_staked_token        | Uint64 | 兑换gas锁定的TOP token，单位uTOP。                           |
| latest_tx_hash          | String | 最新共识成功的交易hash。                                     |
| latest_tx_hash_xxhash64 | String | 最新共识成功的交易xx64hash。                                 |
| latest_unit_height      | Uint64 | 最新共识成功的交易的unit block高度。                         |
| lock_balance            | Uint64 | 锁定的TOP token，单位uTOP，主要用于合约交易。<br/>调用合约的时候，发送方可同时给合约转账，如果合约执行失败，转账款需要退还给发送方，所以在合约执行成功前，将转账款锁定。 |
| lock_deposit_balance    | Uint64 | 应用合约交易费用与执行合约交易占用的CPU时长以及交易大小相关，无法在交易开始确定合约的交易费用。采取的方法是冻结一部分应用合约交易保证金，在交易第三次共识的时候，根据合约的最终执行情况，扣除发送方交易保证金，单位uTOP。 |
| lock_gas                | Uint64 | 应用合约交易费用与据执行合约交易占用的CPU时长以及交易大小相关，无法在交易开始确定合约的交易费用。采取的方法是冻结一部分应用合约交易消耗的gas，在交易第三次共识的时候，根据合约的最终执行情况，扣除发送方交易消耗的gas，单位Tgas。 |
| nonce                   | Uint64 | 该账户最新共识成功的交易序号，唯一。                         |
| shard_id                | Uint8  | 即validator group ID(shard)。                                |
| unlock_gas_staked       | Uint64 | 解锁中的兑换gas的TOP token，发起解锁后，需要等待24小时，解锁的金额才会到账。 |
| total_gas               | Uint64 | 账户总gas量，单位Tgas。                                      |
| unused_vote_amount      | Uint64 | 该账户未使用选票数量。                                       |
| vote_staked_token       | Uint64 | 兑换选票锁定的TOP token，单位uTOP。                          |
| zone_id                 | Uint8  | zone ID，zone由cluster组成。                                 |

**请求样例**

```javascript
topjs.getAccount({
    account
}).then(console.log);
```

**返回样例**

```
{ data:
   { account: 'T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY',
     balance: 1000000000000,
     disk_balance: 0,
     freeze: 0,
     last_hash:
      '0xcba563d2af20b32d1f0d4895e961f39c538721faa12a734a703485f650ad8d37',
     last_hash_xxhash64: '0x8cb232f903bf3d90',
     last_unit_height: 1,
     lock_balance: 0,
     lock_deposit_balance: 0,
     lock_gas: 0,
     nonce: 1,
     random_seed:'',
     random_seed_xxhash64: 12300445990495349000,
     gas_balance: 0,
     unvote_num: 0,
     vote_balance: 0 },
  errmsg: 'ok',
  errno: 0,
  sequence_id: '1588818727562' }
```

### 更新账户交易nonce和lasthash

当一个用户发送交易至链上时，必须要使用该用户最新的"nonce"和"last_hash_xxhash64"，这两个属性可以从该方法的返回值中获取。

**请求方法**

> topjs.updateNonceAndLastHash

**请求参数**

| 参数名称 | 是否必选 | 默认值                      | 类型     | 说明                                                         |
| :------: | -------- | --------------------------- | -------- | ------------------------------------------------------------ |
| account  | 否       | topjs对象下的defaultAccount | Object   | 账户对象，nonce和lastHash会放入account对象中，后续发送交易时直接传入account对象即可。 |
| callback | 否       | -                           | Function | 方法回调函数。                                               |

**返回参数**

| 参数名称           | 类型 | 说明 |
| ------------------ | ---- | ---- |
| nonce              | Uint64 | 交易序号，唯一。 |
| last_hash_xxhash64 | String| 上次交易hash。 |

**请求样例**

```javascript
topjs.updateNonceAndLastHash(account).then(console.log);
```
### 转账

发起转账交易前，发起人的账户余额应该大于100,000uTOP token，这100,000uTOP token将用作交易保证金。

**请求方法**

> topjs.transfer

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 参数名称（修改） | 是否必填 | 默认值                                                       | 类型          | 说明                                                         |
| :------: | -------- | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| account  |   | 否       | topjs对象下的defaultAccount |Object| 发送交易前，需要先获取最新的nonce和last_hash_xxhash64赋值与需要使用的account对象中，可直接调用"topjs.updateNonceAndLastHash"方法，将自动把这两个参数放入account对象中。 |
|    to    |        | 是       | -                                                            | String        | 交易接收账户地址，为普通账户或者合约账户。<br/>接收者地址在"target_action"对象下的"account_addr"属性中。 |
|   data   |   note   | 否       | 空字符串                                                      | String        | 备注。                                                        |
|  amount  |    | 是       | -                                                       | Uint64 | 转账金额，单位uTOP。                                             |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.transfer({
    account,
    to: 'T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd',
    amount: 140,
    data: 'hello top hahah hahah'
}).then(console.log);
```

**返回样例**

```javascript
{
    "data":{
        "authorization":"0x00d0ed8bf78517cd811c01d044e9b70336009d8caf5d6b3102ede80d9965eb4ee56328a9d6e841e9c910b17b85a74d3a041abf99e6b7589ba36b2c29cbae340681",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":100000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588822094,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":10138221756255519000,
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":1,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c000000000000001500000068656c6c6f20746f70206861686168206861686168",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c000000000000001500000068656c6c6f20746f70206861686168206861686168",
            "action_size":0,
            "action_type":6
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xc46e4945ae8bd11172f27ea78974f2161daffc55e6f9dbe38f5f2082b2d667f1",
        "transaction_len":0,
        "transaction_type":4,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588822094439"
}
```

### 查询账户交易详情

**请求方法**

> topjs.getTransaction

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明     |
| :------: | -------- | --------------------------- | ------ | -------- |
| account  | 否       | topjs对象下的defaultAccount |Object| 账户对象。 |
|  txHash  | 否       | account对象下的最后一次交易hash  | String | 交易Hash。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
topjs.getTransaction({
    account,
    txHash: '0xc46e4945ae8bd11172f27ea78974f2161daffc55e6f9dbe38f5f2082b2d667f1'
}).then(console.log);
```
**返回样例**

```javascript
{ data:
   { authorization:
      '0x00d0ed8bf78517cd811c01d044e9b70336009d8caf5d6b3102ede80d9965eb4ee56328a9d6e841e9c910b17b85a74d3a041abf99e6b7589ba36b2c29cbae340681',
     confirm_action: '0x',
     confirm_unit_height: 3,
     deposit: 100000,
     edge_nodeid: 'T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R',
     exec_status: 1,
     expire_duration: 100,
     ext: '0x',
     fire_timestamp: 1588822094,
     flag: 0,
     from_account_id: 0,
     from_network_id: 0,
     hash_work_proof: 0,
     last_trans_hash: 10138221756255519000,
     last_trans_nonce: 1,
     last_unit_hash: 0,
     last_unit_hight: 0,
     parent_account: '',
     recv_tx_exec_status: 1,
     recv_unit_height: 1,
     send_unit_height: 2,
     source_action:
      { account_addr: 'T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY',
        action_authorization: '0x',
        action_ext: '0x',
        action_hash: 0,
        action_name: '',
        action_param:
         '0x000000008c000000000000001500000068656c6c6f20746f70206861686168206861686168',
        action_size: 0,
        action_type: 0 },
     target_action:
      { account_addr: 'T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd',
        action_authorization: '0x',
        action_ext: '0x',
        action_hash: 0,
        action_name: '',
        action_param:
         '0x000000008c000000000000001500000068656c6c6f20746f70206861686168206861686168',
        action_size: 0,
        action_type: 6 },
     to_account_id: 0,
     to_network_id: 0,
     trans_random_nounce: 0,
     transaction_hash:
      '0xc46e4945ae8bd11172f27ea78974f2161daffc55e6f9dbe38f5f2082b2d667f1',
     transaction_len: 0,
     transaction_type: 4,
     tx_exec_status: 1,
     version: 0 },
  errmsg: 'ok',
  errno: 0,
  sequence_id: '1588822219552'
}
```

### 锁定TOP_token兑换gas

当前gas兑换成TOP token的比例设置为：

1Tgas=100 uTOP token

**请求方法**

> topjs.stakeGas 

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明                 |
| :------: | -------- | --------------------------- | ------ | -------------------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 账户对象。           |
|  amount  | 是       | -                           | Uint64 | 锁定金额，单位uTOP。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.stakeGas({
    account,
    amount: 4000,
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x0097a1939e874599921e02bdb9e624490236c38f378f5aebf8f2618a1f2b5f5ca12c238e5111c4fac8ba28517aed0b2298f53355c8b0a685e1cd2d57ef3253134e",
        "confirm_action":"0x",
        "confirm_unit_height":4,
        "deposit":100000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588822791,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":16896937634490628000,
        "last_trans_nonce":2,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_unit_height":4,
        "send_unit_height":4,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000f40100000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000f40100000000000000000000",
            "action_size":0,
            "action_type":6
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xd2434230ad06767c8937ba53ff607c2d72a0166fca1c2ed3d9a8f635c79b38bd",
        "transaction_len":0,
        "transaction_type":24,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588822790751"
}
```

### 解锁兑换TOP_token的gas

**请求方法**

> topjs.unStakegas 

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明                 |
| :------: | -------- | --------------------------- | ------ | -------------------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 账户对象。           |
|  amount  | 是       | -                           | Uint64 | 锁定金额，单位uTOP。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.unStakegas({
    account,
    amount: 500,
}).then(console.log);
```

**返回样例**

```javascript
{
    "data":{
        "authorization":"0x0097a1939e874599921e02bdb9e624490236c38f378f5aebf8f2618a1f2b5f5ca12c238e5111c4fac8ba28517aed0b2298f53355c8b0a685e1cd2d57ef3253134e",
        "confirm_action":"0x",
        "confirm_unit_height":4,
        "deposit":100000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588822791,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":16896937634490628000,
        "last_trans_nonce":2,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_unit_height":4,
        "send_unit_height":4,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000f40100000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000f40100000000000000000000",
            "action_size":0,
            "action_type":6
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xd2434230ad06767c8937ba53ff607c2d72a0166fca1c2ed3d9a8f635c79b38bd",
        "transaction_len":0,
        "transaction_type":24,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588822790751"
}
```

## 用户智能合约部署和调用

### 部署用户智能合约

部署用户智能合约，部署合约前，发起人的账户余额应该大于100,000uTOP token，这100,000uTOP token将用作交易保证金。

**请求方法**

> topjs.deployContract

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|   参数名称   | 参数名称（修改） | 是否必选 | 默认值                      | 类型   | 说明                                                         |
| :----------: | ---------------- | -------- | --------------------------- | ------ | ------------------------------------------------------------ |
|   account    |                  | 否       | topjs对象下的defaultAccount | Object | 账户对象。                                                   |
| contractCode | contract_code    | 是       | -                           | String | 合约代码。                                                   |
|   deposit    | utop_amount      | 是       | -                           | Uint64 | 转入合约账户的金额，单位uTOP。<br/>部署合约会创建一个合约账户，您可以同时向此账户中转账，也可以不转。 |
|   gasLimit   | gas_limit        | 是       | -                           | Uint64 | 合约愿意为交易发送方付出的每笔交易的gas费用上限，单位Tgas。  |
|     type     | symbol           | 否       | TOP                         | String | 代币类型。                                                   |
|     note     |                  | 否       | 空字符串                    | String | 备注。                                                       |

- 合约中保存的数据，会作为属性保存在合约账户中。可通过"getProperty"获取。
- 合约地址即为交易体对象"target_action"中的"account_addr"属性。

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.deployContract({
    account,
    contractCode: data.toString(),
    deposit: 400000,
    note: 'test_tx',
}).then(console.log);
> PublishContractResult
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x009777c617fcfb2d25aba0c4b91d1c5a79e2dcbfdc4af96a50522da79a984c9fd763bbb8cf52284226c0b7ff8cde2eb98868469c028ce6eee35e846b868d862fd3",
        "confirm_action":"0x",
        "confirm_unit_height":6,
        "deposit":100000,
        "edge_nodeid":"T-0-LhDiNCG8e6wjYe32PGD7ndZu9PhVVvDiuj",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588823452,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":8084375894460312000,
        "last_trans_nonce":3,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":1,
        "send_unit_height":5,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000801a06000000000007000000746573745f7478",
            "action_size":0,
            "action_type":3
        },
        "target_action":{
            "account_addr":"T-3-MaLcEDQpeDuFqG55mrDLTEXjZWdy8Td3sA",
            "action_authorization":"0x045b742050fae2a6eec1de2a27468b1a2ff997468263d06d365aabfeda968df475891f1ad614f9c4870ec47084140fc2d519cdcfc57fde4b7110b30a4092f6fcc1",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000001904000066756e6374696f6e20696e697428290d0a202020206372656174655f6b6579282774656d705f3127290d0a202020206372656174655f6b6579282774656d705f3227290d0a20202020686372656174652827686d617027290d0a202020207365745f6b6579282774656d705f31272c20273027290d0a202020207365745f6b6579282774656d705f32272c20273027290d0a20202020687365742827686d6170272c20276b6579272c202776616c27290d0a20202020686372656174652827656d7074795f6d617027290d0a202020206372656174655f6b657928276d61705f6c656e27290d0a202020206372656174655f6b657928276d61705f73747227290d0a656e640d0a0d0a66756e6374696f6e206f70745f6d6170286b65792c2076616c7565290d0a20202020687365742827686d6170272c20746f737472696e67286b6579292c20746f737472696e672876616c756529290d0a656e640d0a0d0a66756e6374696f6e20636865636b5f6d6170286b6579290d0a202020206c6f63616c206d61705f6c656e203d20686c656e2827686d617027290d0a202020207365745f6b6579282774656d705f31272c20746f737472696e67286d61705f6c656e29290d0a202020206c6f63616c206d61705f737472203d20686765742827686d6170272c20746f737472696e67286b657929290d0a202020207365745f6b6579282774656d705f32272c20746f737472696e67286d61705f73747229290d0a202020206864656c2827686d6170272c20746f737472696e67286b657929290d0a656e640d0a0d0a66756e6374696f6e206765745f656d7074795f6d617028290d0a202020207365745f6b657928276d61705f6c656e272c20746f737472696e6728686c656e2827656d7074795f6d6170272929290d0a202020207365745f6b657928276d61705f737472272c20746f737472696e6728686765742827656d7074795f6d6170272c2027756e6578697374272929290d0a656e640d0a0d0a66756e6374696f6e206765745f656d7074795f6b657928290d0a202020207365745f6b657928276d61705f737472272c20746f737472696e6728686765742827656d7074795f6d6170272c2027272929290d0a656e640d0a0d0a66756e6374696f6e2064656c5f656d7074795f6b657928290d0a202020206864656c2827686d6170272c202727290d0a202020207365745f6b657928276d61705f6c656e272c20746f737472696e6728686c656e2827656d7074795f6d6170272929290d0a656e640d0a0d0a66756e6374696f6e2064656c5f6e6f745f65786973745f6b657928290d0a202020206864656c2827686d6170272c2027756e657869737427290d0a202020207365745f6b657928276d61705f6c656e272c20746f737472696e6728686c656e2827656d7074795f6d6170272929290d0a656e640d0a",
            "action_size":0,
            "action_type":3
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x43b40acec4fe1a5275c36b0e4acf6d571c3b13b0fad6a042266a60235268710d",
        "transaction_len":0,
        "transaction_type":1,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588823451464"
}
```

### 调用用户智能合约

**请求方法**

> topjs.callContract

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|    参数名称     |  参数名称（修改）  | 是否必选 | 默认值                      | 类型                       | 说明         |
| :-------------: | -------- | --------------------------- | -------------------------- | ------------ | ------------ |
|     account     |          | 否       | topjs对象下的defaultAccount | Object                   | 账户对象。    |
| contractAddress | contract_addr | 是       | -                           | String                     | 合约账户地址。 |
|   actionName    |   action_name   | 是       | -                           | String                     | 方法名。      |
|   actionParam   |   action_param   | 是       | -                           | Object，类型仅支持String、Number、Bool | 方法参数。    |
|     amount      |    tx_deposit    | 否       | 100,000uTOP token          | Uint64               | 交易保证金，单位uTOP。 |
|    coinType     | symbol | 否       | TOP                         | String                     | 代币类型。    |
|      note       |             | 否       | 空                          | String                     | 备注。        |

**返回参数**

调用合约接口，无法直接返回调用结果，请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.callContract({
    account,
    contractAddress: 'T-3-MaLcEDQpeDuFqG55mrDLTEXjZWdy8Td3sA',
    actionName: 'opt_map',
    actionParam: [{
        type: 'string',
        value: 'inkey'
    }, {
        type: 'string',
        value: 'ttt'
    }]
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x0023ead21079777f6a8b9c183c35b9e4f38105eb48e0172b9fee0df1d4e0789d90176278813a8b278632a4394747d3de1747d4d35dfbe75cee288aed4be439b081",
        "confirm_action":"0x",
        "confirm_unit_height":14,
        "deposit":100000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588824692,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":12378176698763194000,
        "last_trans_nonce":7,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":5,
        "send_unit_height":13,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-3-MaLcEDQpeDuFqG55mrDLTEXjZWdy8Td3sA",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"opt_map",
            "action_param":"0x020205000000696e6b65790203000000747474",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xbb0d1062219a0855577eb42b8aabda23123d143b36448f257ab3db46aca1d366",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588824692293"
}
```

### 获取属性

合约中保存的数据，会作为属性保存在合约账户中，可通过"getProperty"获取。

**请求方法**

> topjs.getProperty

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|    参数名称     | 参数名称（修改） | 是否必选 | 默认值                      | 类型              | 说明             |
| :-------------: | ---------------- | -------- | --------------------------- | ----------------- | ---------------- |
|     account     |                  | 否       | topjs对象下的defaultAccount | Object            | 账户对象。       |
| contractAddress | contract_addr    | 是       | -                           | String            | 合约账户地址。   |
|      type       |                  | 是       | -                           | String、Map、List | 目标属性的类型。 |
|      data       |                  | 是       | -                           | Object            | key。            |

**返回参数**

| 参数名称 |  类型 | 说明 |
| -------- |  ---- | ---- |
| property_value |  List   | 结果数组，获取List数据时，直接返回List中所有数据，返回值为ASCII码。 |

> 目标属性类型（type）Map类型数据需要两个key，第一个key对应Map本身的key，第二个key对应Map中键值对的key，故data是一个数组，里面包含两个key。
>
> 示例: 
```javascript
topjs.getProperty({
    contractAddress: 'T-3-MaLcEDQpeDuFqG55mrDLTEXjZWdy8Td3sA',
    type: 'map',
    data: ['hmap', 'key']
}).then(console.log);
// 返回对象
{ data: { property_value: [ '76616c' ] },
  errmsg: 'ok',
  errno: 0,
  sequence_id: '1588824032937' }
```
String与List类型数据，只有本身自己的key，故data直接为一个字符串。

示例: 

```javascript
{
    contractAddress,
    type: 'list',
    data: 'listKey',
}
```
```javascript
{
    contractAddress,
    type: 'string',
    data: 'stringKey',
}
// 返回对象
{ data: { property_value: [ '30' ] },
  errmsg: 'ok',
  errno: 0,
  sequence_id: '1588824086336' }
```
-----------------------------------------------------------------------------------

## 节点操作

### 注册节点

TOP Network目前有三种类型的节点：边缘(edge)节点、验证(validator)节点、高级(advance)节点。

其中高级节点可在不同的网络里同时担任多个角色：验证(validator)、审计(auditor)、存档(archive)。

一个高级节点在一个cluster中，不可以在auditor group及其下辖validator group中同时分别担任审计(auditor)、验证角色(validator)。

以下是节点入网的最低保证金要求。

| 节点角色                 | 保证金                    |
| ------------------------ | ------------------------- |
| 边缘节点(edge Node)      | 100,000*10^6 uTOP token   |
| 验证节点(validator Node) | 500,000*10^6 uTOP token   |
| 审计节点(auditor Node)   | 1,000,000*10^6 uTOP token |
| 存档节点(archive Node)   | 1,000,000*10^6 uTOP token |

**请求方法**

> topjs.registerNode

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|   参数名称    | 参数名称（修改） | 是否必选 | 默认值                      | 类型   | 说明                                                         |
| :-----------: | ---------------- | -------- | --------------------------- | ------ | ------------------------------------------------------------ |
|    account    |                  | 否       | topjs对象下的defaultAccount | Object | 账户对象。                                                   |
|   mortgage    | register_deposit | 是       | -                           | Uint64 | 节点注册保证金，单位uTOP。                                   |
|   nodeType    | node_type        | 是       | -                           | Object | 节点类型，包括edge（边缘节点）、validator（验证节点）、advance（高级节点），高级节点兼具archive（存档）、validator（验证）、auditor（审计）角色。<br/>您可以注册成为三种类型中的一种。<br/>注册成为高级节点后，advance节点被选举为何种工作角色取决于节点的选票：<br/>advance节点被选举为audtior、archive、REC、ZEC角色，节点所获得的选票需要大于等于节点实际质押的保证金（此处节点保证金以TOP计算，非uTOP）。<br/>当选票低于实际质押保证金时，advance节点只能被选为validator。<br/>说明：<br/>节点选票须由接受投票而得，可以由其他节点投票，也可由本账户投票。 |
|   nodename    |                  | 是       | -                           | String | 节点昵称。                                                   |
| node_sign_key |                  | 是       | -                           | String | 您可以使用节点账户公私钥对作为节点注册的node key，此处直接传入节点账户的公钥。<br/>为了更好地保护您的账户资产，建议您创建一对无资产的公私钥对，在节点注册入网后，节点工作时使用该私钥为节点签名。<br/>此处请输入对应的公钥，其他节点可使用该公钥进行解密。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.registerNode({
    account,
    mortgage: 1000000,
    nodeType: 'auditor,validator,archive'
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x0098c2d1234376f8832e3311a864f124ccb6f6211ea9a21ccfea9306702a70a6ee68de0eb193667a50ca114dec112ba6836d17a5087696ea35d3fda7496033376c",
        "confirm_action":"0x",
        "confirm_unit_height":16,
        "deposit":100000,e
        "edge_nodeid":"T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588829127,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":13742757501507197000,
        "last_trans_nonce":8,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":2,
        "send_unit_height":15,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x0000000040420f000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-x-qNaehjjvgj8zdsy6H1kcJjUrD4NxxWjJLV",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"node_register",
            "action_param":"0x1900000061756469746f722c76616c696461746f722c61726368697665",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x8bc0ef4c613e4b7757878bd686e06f71fc89e5cdb7f57b320a834e2dae844826",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588829235549"
}
```

### 获取节点信息

**请求方法**

> topjs.queryNodeInfo

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|  参数名称   | 参数名称（修改）    | 是否必选 | 默认值                      | 类型   | 说明           |
| :---------: | ------------------- | -------- | --------------------------- | ------ | -------------- |
|   account   |                     | 否       | topjs对象下的defaultAccount | Object | 账户对象。     |
| nodeAddress | target_account_addr | 是       | -                           | String | 节点账户地址。 |

**返回参数**

| 参数名称             | 类型    | 说明                                                         |
| -------------------- | ------- | ------------------------------------------------------------ |
| account_addr         | String  | 节点账户地址。                                               |
| auditor_credit       | String  | auditor节点信誉分。                                          |
| auditor_stake        | Uint64  | auditor节点权益：auditor stake=（节点保证金+节点得票总数）*信誉分 |
| dividend_ratio       | Integer | 分红率，百分比%，值为[0,100]。                               |
| network_id           | String  | 节点经过选举后，加入的具体的网络ID。                         |
| node_deposit         | Uint64  | 节点注册保证金。                                             |
| nodename             | String  | 节点昵称。                                                   |
| registered_node_type | String  | 节点注册类型：<br/>边缘节点：edge<br/>验证节点：validator<br/>高级节点：advance |
| node_sign_key        | String  | 用户智能合约时使用的公钥。                                   |
| validator_credit     | String  | validator节点信誉分。                                        |
| validator_stake      | Uint64  | validator节点权益：validator stake=（节点保证金+节点得票总数）/2 |
| vote_amount          | Uint64  | 节点得票总数。                                               |

**请求样例**

```javascript
topjs.queryNodeInfo({
    account,
    nodeAddress: account.address
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "m_account":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
        "m_account_mortgage":1000000,
        "m_audit_vote_stake":0,
        "m_credit_denominator":1000000,
        "m_credit_numerator":100000,
        "m_registered_role":24579,
        "m_support_ratio_denominator":100,
        "m_support_ratio_numerator":90,
        "m_validate_vote_stake":0,
        "m_vote_amount":0,
        "network_id":"0 "
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588829235549"
}
```

### 注销节点

在TOP Network主网的节点要退出主网， 需要先发起节点注销。

* 节点注销只能节点自己发起。

* 节点注销后， 保证金不会立马退回到节点账号上， 会被锁定一段时间，如果节点作恶，锁定期会延长。

* 锁定的保证金到期后需要节点账号主动发起赎回保证金的操作，不会自动退回。

**请求方法**

> topjs.unRegisterNode

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明           |
| :------: | -------- | --------------------------- | ------ | -------------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.unRegisterNode({
    account,
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x01dc6bf6fd73402ad2d1c6f16e0659ce60e7858602428610952b2db2064a887c361344f8211377fafa39bcf6fa34f541b40865632f639514fe9d1eaf12054809f7",
        "confirm_action":"0x",
        "confirm_unit_height":20,
        "deposit":100000,
        "edge_nodeid":"T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc",
        "exec_status":3,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588829629,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":17957712945901930000,
        "last_trans_nonce":10,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":2,
        "recv_unit_height":4,
        "send_unit_height":18,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-x-qNaehjjvgj8zdsy6H1kcJjUrD4NxxWjJLV",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"node_deregister",
            "action_param":"0x",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x430f82cae53efa0566532f37e3af92017bb4babbecb8106da769140b64f2512f",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588829681203"
}
```

### 赎回节点保证金

锁定的保证金到期后需要节点账号主动发起赎回保证金的操作，不会自动退回。

**请求方法**

> topjs.redeemNodeDeposit

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明           |
| :------: | -------- | --------------------------- | ------ | -------------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.redeemNodeDeposit({
    account,
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x01293c9d8bc26d2dbec8440c9f72bead60e5b0b8fea4954b05219e7da636191a5a345c95241f42c2fc111183105043b671080b18e1479b5962ab853763dfb58699",
        "confirm_action":"0x",
        "confirm_unit_height":22,
        "deposit":100000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588829778,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":2623572866122064400,
        "last_trans_nonce":11,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":5,
        "send_unit_height":21,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-x-qNaehjjvgj8zdsy6H1kcJjUrD4NxxWjJLV",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"redeem",
            "action_param":"0x",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xe0715e7fb3338a4f9770b11dcea5564f8d353316362d35fdf74c48fda27d11da",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588829821116"
}
```

## staking

### 锁定TOP_token兑换选票

TOP Network链上的账户可以给在线节点（需包含"auditor"角色）投票，获取收益。

账户投票前需要质押TOP token以兑换成选票。

兑票时要输入锁定期，不同的锁定期兑票比例不一样，锁定期越长，相同额度的TOP token会兑换到更多的选票。

**请求方法**

> topjs.stakeVote

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 参数名称（修改） | 是否必选 | 默认值                      | 类型   | 说明                                                         |
| :------: | ---------------- | -------- | --------------------------- | ------ | ------------------------------------------------------------ |
| account  |                  | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。                                               |
|  amount  | vote_amount      | 是       | -                           | Uint64 | 锁定的TOP token，单位uTOP。(应该是兑票数量)                  |
| lockTime | lock_duration    | 是       | -                           | String | TOP token锁定期，锁定期单位：天。<br/>兑票规则：<br/>votes_amount / [ 1.04^(lock_duration / 30 - 1) ], duration < 570；<br/>vote_amount / 2,                        lock_duration >= 570。<br/>锁定期最少为30天，且必须为30的整数倍。锁定期越长，相同的兑票数量锁定越少的TOP token。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.stakeVote({
    account: voter,
    amount: 100200,
    lockTime: 30
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x00243f5a69fd2515746d233cdec2556288fcaeb5308a76be2e5be9ee2031fd1eb071dc885c0e42e923d21c1de571dc20c4bb698d93f0da464ab3454d301fb4c93e",
        "confirm_action":"0x",
        "confirm_unit_height":2,
        "deposit":100000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588830441,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":2161706494449905400,
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_unit_height":2,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x68870100000000001e0000000000",
            "action_size":0,
            "action_type":21
        },
        "target_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x",
            "action_size":0,
            "action_type":0
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x8591b855896b72b44c3039ae41c321a0d4cfeffedb6c0f5dd44663b09fd89f81",
        "transaction_len":0,
        "transaction_type":27,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588830440885"
}
```

### 解锁兑换选票的TOP_token

锁定期内的TOP token不能解锁，只能解锁到期的TOP token。

已经被使用的选票对应锁定的TOP token不能被解锁。

**请求方法**

> topjs.unStakeVote

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 参数名称（修改） | 是否必选 | 默认值                      | 类型   | 说明                            |
| :------: | ---------------- | -------- | --------------------------- | ------ | ------------------------------- |
| account  |                  | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。                  |
|  amount  | vote_amount      | 是       | -                           | String | 选票数量，解锁相应的TOP token。 |
|   note   |                  | 否       | -                           | String | 备注。                          |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.unStakeVote({
        account: voter,
        amount: 100
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x0166022fe34d358574067e70b826c35a1ff18f00e3dc299b5160cc2a19da26550f745ceaec46d3e15c272a8c597e0e99ea62f6cd5db0f97eec90cce14678996ab3",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":100000,
        "edge_nodeid":"T-0-LhDiNCG8e6wjYe32PGD7ndZu9PhVVvDiuj",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588830705,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":4801789360877607000,
        "last_trans_nonce":2,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_unit_height":3,
        "send_unit_height":3,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000640000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x",
            "action_size":0,
            "action_type":0
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x701f80cbdac920f980ff16fd5ebf790672e32ce2d53a0bb482c8fd49c557d261",
        "transaction_len":0,
        "transaction_type":28,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588830705029"
}
```

### 节点投票

TOP Network链上账户可以给在线节点投票，获取收益：

- 您可以给任意一个包含"auditor"角色的节点（即advance节点）投票。
- 投到一个节点上的起投票数10,000票，后续累加投票无限制。
- 给节点投票后，节点获取的奖励会有一部分分给投票者。

**请求方法**

> topjs.voteNode

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|   参数名称    | 是否必选 | 默认值                      | 类型  | 说明                                                         |
| :-----------: | -------- | --------------------------- | ----- | ------------------------------------------------------------ |
|    account    | 否       | topjs对象下的defaultAccount |Object| 节点账户对象。                                                |
| voteInfoArray | 是       | -                           | Array | Array数组，每个元素为Object，包含nodeAddress和voteCount，分别表示接受投票的节点账户地址和票数。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.voteNode({
    account: voter,
    voteInfoArray: [{
        nodeAddress: 'T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY',
        voteCount: 3030
    }]
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x00c43a3d08dc8d6470ac8d9c7bdbadf2d03bdd28752831bea39a04630bc773c76f34ca675f1d6b4acde841f1510fcd7ab19feffbea0822790ac1ca48a4a5e481a4",
        "confirm_action":"0x",
        "confirm_unit_height":5,
        "deposit":100000,
        "edge_nodeid":"T-0-LhDiNCG8e6wjYe32PGD7ndZu9PhVVvDiuj",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588830906,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":6507988663225353000,
        "last_trans_nonce":3,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":2,
        "send_unit_height":4,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-s-oedRLvZ3eM5y6Xsgo4t137An61uoPiM9vS-0261",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"set_vote",
            "action_param":"0x0100000026000000542d302d4c5555757636754c70556d376b7150594c73446739634b357977416e4c39706e6159d60b000000000000",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xb54866e6ca8d5b1f9903ccdf22e159491a44dad1b190dd1bac1726822f21db76",
        "transaction_len":0,
        "transaction_type":20,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588830905895"
}
```

### 取消投票

投票人可以随时将已经投到节点上的选票取消并收回，使节点上的选票减少，用户账户中未使用的选票增加。

每次取消投票的票数无限制，但时不能高于给节点投票的总数，否则取消投票将失败。

取消投票交易同样消耗gas资源。

给节点投票后，即使注销节点，选票也不会主动退还至您的账户， 取消投票需要您主动发起取消投票操作。

您可以批量取消节点投票。

**请求方法**

> topjs.unVoteNode

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|   参数名称    | 是否必选 | 默认值                      | 类型  | 说明                                                         |
| :-----------: | -------- | --------------------------- | ----- | ------------------------------------------------------------ |
|    account    | 否       | topjs对象下的defaultAccount |Object| 节点账户对象。                                                |
| voteInfoArray | 是       | -                           | Array | Array数组，每个元素为Object，包含nodeAddress和voteCount，分别表示投票的节点地址和票数。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.unVoteNode({
    account: voter,
    voteInfoArray: [{
        nodeAddress: 'T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY',
        voteCount: 1030
    }]
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x019da891dbe625780eff47a657dd0f63a8313a74bb01f0d65e3e4e4b05e3e39bc64423e58a92b8175d159bf942a66bb9befe61e8be7e5b197e5a31355e9defc493",
        "confirm_action":"0x",
        "confirm_unit_height":7,
        "deposit":100000,
        "edge_nodeid":"T-0-LLdWiAhUMyiXq39pUbSSRUdjNN6gQHb9bm",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588830987,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":371815998129595500,
        "last_trans_nonce":4,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":5,
        "send_unit_height":6,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-s-oedRLvZ3eM5y6Xsgo4t137An61uoPiM9vS-0261",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"abolish_vote",
            "action_param":"0x0100000026000000542d302d4c5555757636754c70556d376b7150594c73446739634b357977416e4c39706e61590604000000000000",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x686c8369da5f59bbf0cf9d31b7bbbbb929bde46fc0c459bd5ddd73b70b77de83",
        "transaction_len":0,
        "transaction_type":21,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588830986560"
}
```

### 获取投票者分红信息

您给节点投票之后，可以获取相应的投票分红，分红比例由被投票的节点设置。

投票者分红不是立刻可以查询，在投票之后的6小时可以查询投票者分红。

**请求方法**

> topjs.queryVoterDividend

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|  参数名称   | 参数名称（修改）    | 是否必选 | 默认值                      | 类型   | 说明             |
| :---------: | ------------------- | -------- | --------------------------- | ------ | ---------------- |
|   account   |                     | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。   |
| voteAddress | target_account_addr | 是       | -                           | String | 投票者账户地址。 |

**返回参数**

| 参数名称        | 参数名称（修改） | 类型   | 说明                                   |
| --------------- | ---------------- | ------ | -------------------------------------- |
| accumulated     |                  | String | 分红总数，单位uTOP。                   |
| last_claim_time |                  | String | 上次领取分红的时钟块高度。             |
| unclaimed       |                  | String | 未领取分红，单位uTOP。                 |
| node_rewards    | node_dividend    | List   | 该投票者对应每个节点的分红，单位uTOP。 |

**请求样例**

```javascript
topjs.queryVoterDividend({
    account: voter,
    voterAddress: voter.address
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "accumulated":4837691893,
        "last_claim_time":0,
        "node_rewards":[
            {
                "account":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
                "accumulated":4837691893,
                "last_claim_time":0,
                "unclaimed":4837691893
            }
        ],
        "unclaimed":4837691893
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588831534559"
}
```

### 领取投票者分红

分红发放频率由链上治理配置。

分红需要主动领取，节点领取后可通过查询账户余额变化来查看所获取的分红。

**请求方法**

> topjs.claimVoterDividend

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明           |
| :------: | -------- | --------------------------- | ------ | -------------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.claimVoterDividend({
    account: voter
}).then(console.log);
> result

```
**返回样例**

```javascript
{
    "data":{
        "authorization":"0x001c64442ca9b42d4e1b9eab02261ca83b96ded0a4e924a00e921b0c7c6a537f543943b550841df3b3d617f67ea5d1688b003b01b8d40e785da547f921266bb8f2",
        "confirm_action":"0x",
        "confirm_unit_height":13,
        "deposit":100000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588831582,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":11741470564636545000,
        "last_trans_nonce":7,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":12,
        "send_unit_height":12,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-s-oedRLvZ3eM5y6Xsgo4t137An61uoPiM9vS-0261",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"claim_reward",
            "action_param":"0x",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xd0c59b1847c8364b5fc9d94f3e041cdfb8347c4358b76f18b2a4a476fe0f4ded",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588831582423"
}
```

### 获取节点奖励信息

**请求方法**

> topjs.queryNodeReward

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|  参数名称   | 参数名称（修改）    | 是否必选 | 默认值                      | 类型   | 说明           |
| :---------: | ------------------- | -------- | --------------------------- | ------ | -------------- |
|   account   |                     | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。 |
| nodeAddress | target_account_addr | 是       | -                           | String | 节点账户地址。 |

**返回参数**

| 参数名称        |  类型   | 说明                     |
| --------------- | ------ | ------ |
| accumulated     |  String | 奖励总数，单位uTOP。        |
| last_claim_time |  String | 上次领取奖励的时钟块高度。 |
| unclaimed       |  String | 未领取奖励，单位uTOP。       |

**请求样例**

```javascript
topjs.queryNodeReward({
    account,
    nodeAddress: account.address
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "accumulated":173393974,
        "last_claim_time":0,
        "unclaimed":173393974
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588831250348"
}
```

### 领取节点奖励

奖励需要主动领取。

**请求方法**

> topjs.claimNodeReward

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型   | 说明           |
| :------: | -------- | --------------------------- | ------ | -------------- |
| account  | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.claimNodeReward({
    account
}).then(console.log);
```
返回样例

```javascript
{
    "data":{
        "authorization":"0x00a5c742e816bbe7adcd32dbd7b6683b93193478e265f01de30dde70df48e287b3453ba651e543918476b32cf39b259c7eacda9e6834751c77226be9d20a849f8b",
        "confirm_action":"0x",
        "confirm_unit_height":28,
        "deposit":100000,
        "edge_nodeid":"T-0-LLdWiAhUMyiXq39pUbSSRUdjNN6gQHb9bm",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588831423,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":9795182918351331000,
        "last_trans_nonce":13,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":4,
        "send_unit_height":27,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-s-oedRLvZ3eM5y6Xsgo4t137An61uoPiM9vS-0304",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"claim_node_reward",
            "action_param":"0x",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x36dff8cb3b26420f54a51500fc8767a6e452ae3042e7430837a51b6234bb38c5",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588831422942"
}
```

## 提案管理

### 提交提案

链上治理时，首先需要提交链上治理提案。

任何用户可以发起提案，只要质押一定的TOP token即可。

提醒：

> 提交提案需要质押至少100*10^6 uTOP token作为提案保证金，质押天数为30天，到期时，提案保证金会自动退回至您的账户中。

> 除了最低交易保证金100,000 uTOP token，调用Beacon系统合约交易，需要扣除100*10^6 uTOP token的交易手续费。

>  因此提交提案前请确保您的账户里至少有200.1*10^6 uTOP token的余额。

#### 链上参数修改提案

只有TCC委员对提案有表决权，对于不同级别的提案，表决通过的规则不同：

* Normal：需51%委员通过。

* Important：需51%委员通过，且弃权委员不超过25%。

* Critical：需2/3的委员通过，且反对委员不超过20%。

#### 社区基金管理提案

社区基金管理提案为"Critical"级别。

系统将治理奖励和零工作量节点奖励发放至社区基金账户，社区用户可以通过链上治理将账户中的余额转账至一个销毁账户地址，提案经过TCC表决通过后，销毁即生效。

说明：

> * 普通账户地址也可以给此社区基金账户转账，社区基金账户地址：T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0。
> * 销毁账户地址：T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug。

**请求方法**

> topjs.submitProposal

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

| 参数名称 | 是否必选 | 默认值                      | 类型 | 说明         |
| :------: | -------- | --------------------------- | ---- | ------------ |
| account  | 否       | topjs对象下的defaultAccount |Object| 提案发起者账户对象。 |
| proposal  |  是     | -                            | Object     | 提案对象。        |

**proposal**参数说明

| 参数名称               | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ---------------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| proposal_type          | 是       | -      | Uint8  | 提案类型：1--修改链上治理参数提案；2--社区基金管理提案。     |
| target                 | 是       | -      | String | 当提案类型为修改链上治理参数提案时，target为链上治理参数名称，链上治理参数请参见[链上治理参数说明](/zh/On-ChainGovernance/On-ChainGovernance parameters.md)；<br/>当提案类型为社区基金管理提案时，target为接受转账账户地址，销毁账户地址为：T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug。 |
| value                  | 是       | -      | String | 当target为链上治理参数时，value为修改后的值。<br/>当target为接受转账账户地址，value为转账金额，单位uTOP。 |
| proposal_deposit       | 是       | -      | Uint64 | 提案保证金，最低为100*10^6 uTOP。                            |
| effective_timer_height | 是       | -      | Uint64 | 提案通过后生效时钟高度。如生效始终高度小于提案通过时的始终高度，那么提案在通过后会立刻生效。 |

提案对象详细内容如下：

```javascript
{
    "proposalId":"sss",
    "chainTimerHeight":40,
    "deposit":400,
    "modificationDescription":"ttt",
    "newValue":"26",
    "origValue":"10000",
    "parameter":"archive_deposit",
    "priority":3,
    "proposalClientAddress":"T-0-1Kc3sQi7wiX9STHjCYMpxbER9daPXc7wNe",
    "updateType":"update_action_parameter"
}
```

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.submitProposal({
    account,
    proposal: {
        "proposalId":"sss",
        "chainTimerHeight":40,
        "deposit":400,
        "modificationDescription":"ttt",
        "newValue":"26",
        "origValue":"10000",
        "parameter":"archive_deposit",
        "priority":3,
        "proposalClientAddress":"T-0-1Kc3sQi7wiX9STHjCYMpxbER9daPXc7wNe",
        "updateType":"update_action_parameter"
    }
}).then(console.log);
> result

```
**返回样例**

```javascript
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00fc066e98e6ca6892ff2b2ffc78e0725794b159bdee0a6585eeb8cc863428c7a44f7ec8041fc3a0f43107e436d72c78cc45fcd439b6bf4e3d1762d66b655a74f4",
        "confirm_action":"0x",
        "confirm_unit_height":10,
        "deposit":300000,
        "edge_nodeid":"T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588769691,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"1497501931578263534",
        "last_trans_nonce":5,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":11,
        "send_unit_height":9,
        "source_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-x-qZV6Nm6HdynbTPHwaGWj96cZyevzsyWHsU",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"add_proposal",
            "action_param":"0x030000007373730f000000617263686976655f6465706f7369740500000031303030300200000032360300000074747426000000542d302d314b633373516937776958395354486a43594d707862455239646150586337774e6590010000000000002800000000000000170000007570646174655f616374696f6e5f706172616d657465720300",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x4499aa9543113abb4f13ffd1aa140aea4d4229ce99e671de89b7dd7188f91024",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0xd43ca59bf026cde0"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588769691942"
}
```

### 撤回提案

提案只能由对应的提案者撤回。

**请求方法**

> topjs.withdrawProposal

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|  参数名称  | 参数名称（修改） | 是否必选 | 默认值                      | 类型   | 说明           |
| :--------: | ---------------- | -------- | --------------------------- | ------ | -------------- |
|  account   |                  | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。 |
| proposalId | proposal_id      | 是       | -                           | String | 提案ID。       |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.withdrawProposal({
    account,
    proposalId: 'sss'
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00cac1a1d194604d234385cf80ab9fc305750b0c7c8a8e51896be1a21418fe4703761288287c5a6cbca41bc4a07c17530e40ddb6147614e1e827a3e2d6e5cc5779",
        "confirm_action":"0x",
        "confirm_unit_height":12,
        "deposit":300000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588770120,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"15293280523810950624",
        "last_trans_nonce":6,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":14,
        "send_unit_height":11,
        "source_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-x-qZV6Nm6HdynbTPHwaGWj96cZyevzsyWHsU",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"vote_proposal",
            "action_param":"0x0300000073737327000000542d302d4c565a5945554b34316a3533524a55724764785954595357634d467456566d724435200100",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x6fb732f5df5a3fc824d19949fd2d5a79c0e03a1d66f61541373326abebfefe2a",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x2b0c8b513cfb0eb4"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588770120564"
}
```

### 获取提案详情

**请求方法**

> topjs.queryProposal

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 否       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|  参数名称  | 是否必选 | 默认值                      | 类型   | 说明           |
| :--------: | -------- | --------------------------- | ------ | -------------- |
|  account   | 否       | topjs对象下的defaultAccount | Object | 节点账户对象。 |
| proposalId | 是       | -                           | String | 提案ID。       |

**返回参数**(已根据最新数据结构修改)

| 参数名称               | 类型   | 说明                                                         |
| ---------------------- | ------ | ------------------------------------------------------------ |
| effective_timer_height | Uint64 | 提案通过后生效时钟高度。如生效始终高度小于提案通过时的始终高度，那么提案在通过后会立刻生效。 |
| expire_time            | String | 提案失效时间，提案在259200个时钟高度内没有被TCC通过或者否决，那么提案将失效。 |
| priority               | Uint8  | 提案优先级：1--Normal；2--Important；3--Critical。<br/>只有TCC委员对提案有表决权，对于不同级别的提案，表决通过的规则不同：<br/>Normal：需51%委员通过。<br/>Important：需51%委员通过，且弃权委员不超过25%。<br/>Critical：需2/3的委员通过，且反对委员不超过20%。 |
| proposal_account_addr  | String | 提案发起者账户地址。                                         |
| proposal_deposit       | Uint64 | 提案保证金，最低为100*10^6 uTOP。                            |
| proposal_id            | String | 提案ID，系统自动生成，唯一。                                 |
| proposal_type          | Uint8  | 提案类型：1--修改链上治理参数提案；2--社区基金管理提案。     |
| target                 | String | 当提案类型为修改链上治理参数提案时，target为链上治理参数名称，链上治理参数请参见[链上治理参数说明](/zh/On-ChainGovernance/On-ChainGovernance parameters.md)；<br/>当提案类型为社区基金管理提案时，target为接受转账账户地址，销毁账户地址为：T-b-gkhLhFJXVN3ZPQYZxphja93BEUtwKRdden。 |
| value                  | String | 当target为链上治理参数时，value为修改后的值。<br/>当target为接受转账账户地址，value为转账金额，单位uTOP。pro |
| voting_status          | Uint16 | 该提案投票表决状态：0--未开始；8--进行中；9--失败；10--成功。 |

**请求样例**

```javascript
topjs.queryProposal({
    account,
    proposalId: 'sss'
}).then(console.log);
```

**返回样例**

```javascript
{ data:
   { chain_timer_height: 40,
     cosigning_status: 6,
     deposit: 400,
     end_time: '1591954215',
     modification_description: 'ttt',
     new_value: '26',
     orig_value: '10000',
     parameter: 'archive_deposit',
     priority: 3,
     proposal_client_address: 'T-0-1Kc3sQi7wiX9STHjCYMpxbER9daPXc7wNe',
     proposal_id: 'sss',
     voting_status: 0 },
  errmsg: 'ok',
  errno: 0,
  sequence_id: '1589367145432' }
```

### TCC表决提案

对提案投票前，可先获取提案详细信息了解提案。

只有TCC委员有表决权， 对于不同级别的提案，表决通过的规则不一样。

提案表决通过后，且没有被否决，将形成立法命令，发给全网节点。

提案被表决通过后，系统将自动删除提案，无法查询提案。

**请求方法**

> topjs.tccVote

**请求参数**

|  参数名称   | 是否必选 | 默认值                   | 类型     | 说明           |
| :---------: | -------- | ------------------------ | -------- | -------------- |
| argsObjects | 是       | 参见“argsObject参数说明” | Object   | 账户对象。     |
|  callback   | 否       | -                        | Function | 方法回调函数。 |

**argsObjects**参数说明

|       参数名称        |     参数名称（修改）     | 是否必选 | 默认值                      | 类型    | 说明           |
| :-------------------: | --------------------------- | ------- | -------------- | -------------- | -------------- |
|        account        |                | 否       | topjs对象下的defaultAccount |Object| 节点账户对象。  |
|      proposalId       | proposal_id | 是       | -                           | String  | 提案ID。        |
| proposalClientAddress | proposer_account_addr | 是       | -                           | String  | 提案客户端地址。 |
|        option         | opinion | 是       | -                           | Boolean | 表决意见：true--赞成；false--反对。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.tccVote({
    account,
    proposalId: 'sss',
    proposalClientAddress: 'T-0-LVZYEUK41j53RJUrGdxYTYSWcMFtVVmrD5',
    option: true
}).then(console.log);
```
**返回样例**

```javascript
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00cac1a1d194604d234385cf80ab9fc305750b0c7c8a8e51896be1a21418fe4703761288287c5a6cbca41bc4a07c17530e40ddb6147614e1e827a3e2d6e5cc5779",
        "confirm_action":"0x",
        "confirm_unit_height":12,
        "deposit":300000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588770120,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"15293280523810950624",
        "last_trans_nonce":6,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":14,
        "send_unit_height":11,
        "source_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-x-qZV6Nm6HdynbTPHwaGWj96cZyevzsyWHsU",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"vote_proposal",
            "action_param":"0x0300000073737327000000542d302d4c565a5945554b34316a3533524a55724764785954595357634d467456566d724435200100",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x6fb732f5df5a3fc824d19949fd2d5a79c0e03a1d66f61541373326abebfefe2a",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x2b0c8b513cfb0eb4"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588770120564"
}
```

## 工具方法

### 解析出转账交易体中的amount和note数据

解析出转账交易体中的"amount"和"note"数据。

**请求方法**

> topjs.utils.decodeActionParam

**请求参数**

| 参数名称 | 是否必选 | 默认值 | 类型 | 说明 |
| :------: | -------- | ------ | ---- | ---- |
|action_param|是| -        |HEX|交易体对象中target_action下的action_param属性值，交易体中该值为序列化后的十六进制值。|

**返回参数**

| 参数名称 | 参数名称（修改） | 类型 | 说明 |
| -------- | ---- | ---- | ---- |
| coinType | symbol |String|币类型，空即为“TOP”。|
| amount   |    |Uint64|金额，单位uTOP。|
| note     |      |String|备注。|

**示例代码**

```javascript
const d = await topjs.getTransaction();
const actionParamObj = topjs.utils.decodeActionParam(d.data.target_action.action_param);
> actionParamObj 
{
    "coinType": "",
    "amount": 110,
    "note": "transfer note"
}
```

------------------------------------------------------------

### 判断交易是否成功

通过判断交易返回对象的exec_status属性是否为1来确定交易是否成功，1表示成功，其他表示失败。

下面以转账交易为例。

**转账交易示例代码**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.transfer({
    account,
    to: 'T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd',
    amount: 140,
    data: 'hello top'
}).then(result => {
    console.log('does tx Success > ',result.data.exec_status == 1)
});
> result 
does tx Success >  true
```

## 交易体对象说明

所有交易体对象一致，如下表所示。

| 参数名称           |                      |                     |                          | 类型   | 说明                                                         |
| ------------------ | -------------------- | ------------------- | ------------------------ | ------ | ------------------------------------------------------------ |
| original_tx_info   |                      |                     |                          | Object | 原始交易信息。                                               |
|                    | authorization        |                     |                          | String | 交易体签名。                                                 |
|                    | challenge_proof      |                     |                          | String | 预留字段，默认为空字符串。                                   |
|                    | ext                  |                     |                          | String | 预留字段，用于扩展，默认为空字符串。                         |
|                    | from_ledger_id       |                     |                          | Uint16 | 预留字段，默认为"0"。                                        |
|                    | last_tx_hash         |                     |                          | String | 交易发送方上次交易的hash，用于交易的排序和去重。             |
|                    | last_tx_nonce        |                     |                          | Uint64 | 交易发送方上次交易的nonce，用于交易的排序和去重。            |
|                    | note                 |                     |                          | String | 交易备注。                                                   |
|                    | send_timestamp       |                     |                          | Uint64 | 交易发送时间戳GMT。                                          |
|                    | to_ledger_id         |                     |                          | Uint16 | 预留字段，默认为"0"。                                        |
|                    | tx_action            |                     |                          | Object | 交易action，包括"source_action"及"target_action"。           |
|                    |                      | receiver_action     |                          | Object | 交易接受方执行内容。                                         |
|                    |                      |                     | action_authorization     | String | action签名，json结构，当交易为部署合约交易时，此处会显示合约的公钥信息，公钥用来验证合约账户与交易发送方账户是否匹配。 |
|                    |                      |                     | action_ext               | String | 预留扩展字段，默认为空字符串。                               |
|                    |                      |                     | action_hash              | Uint32 | 整个action的xxhash32。默认为"0"，暂未使用。                  |
|                    |                      |                     | action_name              | String | 调用合约时，合约的函数名。系统合约函数请参见“[系统合约函数](/zh/Interface/SmartContractInterface/SystemContractFunction.md)”。 |
|                    |                      |                     | action_param             | String | 接收方执行内容。不同action type执行内容的序列化请参见“[action param序列化](/zh/Interface/RPC-API/sendTransaction/action-param-serialization.md)”。 |
|                    |                      |                     | action_size              | Uint16 | action对象的大小。                                           |
|                    |                      |                     | action_type              | Uint16 | 接收方执行类型，不同的交易类型对应不同的action type，具体请参见“[tx_type与action_type说明](/zh/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)”。<br/>xaction_type_asset_out                = 0,    // 资产转出<br/>xaction_type_create_contract_account    = 3,    // 创建合约账户  <br/>xaction_type_run_contract              = 5,    // 调用智能合约<br/>xaction_type_asset_in                = 6,    // 资产转入<br/>xaction_type_pledge_token_vote          = 21,   //锁定TOP token兑换选票<br/>    xaction_type_redeem_token_vote          = 22,   // 赎回兑换选票的TOP token<br/>    xaction_type_pledge_token               = 23,   //锁定TOP token兑换gas<br/>    xaction_type_redeem_token               = 24,   //解锁兑换gas的TOP token |
|                    |                      |                     | tx_receiver_account_addr | String | 交易接受方账户地址。                                         |
|                    |                      | sender_action       |                          | Object | 交易发送方执行内容。                                         |
|                    |                      |                     | action_authorization     | String | action签名，json结构。                                       |
|                    |                      |                     | action_ext               | String | 预留扩展字段，默认为空。                                     |
|                    |                      |                     | action_hash              | Uint32 | 整个action的xxhash32。默认为"0"，暂未使用。                  |
|                    |                      |                     | action_name              | String | 预留字段，默认为空字符串。                                   |
|                    |                      |                     | action_param             | String | 发送方执行内容。不同action type执行内容的序列化请参见“[action param序列化](/zh/Interface/RPC-API/sendTransaction/action-param-serialization.md)”。 |
|                    |                      |                     | action_size              | Uint16 | action对象的大小。                                           |
|                    |                      |                     | action_type              | Uint16 | 发送方执行类型，不同的交易类型对应不同的action type，具体请参见“[tx_type与action_type说明](/zh/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)”。<br/>xaction_type_asset_out                  = 0,    // 资产转出。<br/>xaction_type_source_null =1,          // 源端不执行操作 |
|                    |                      |                     | tx_sender_account_addr   | String | 交易发送方账户地址。                                         |
|                    | tx_deposit           |                     |                          | Uint32 | 交易保证金，单位uTOP。                                       |
|                    | tx_expire_duration   |                     |                          | Uint16 | 交易到期时长，超过则被丢弃，默认100s。                       |
|                    | tx_hash              |                     |                          | String | 交易hash的十六进制。                                         |
|                    | tx_len               |                     |                          | Uint16 | 交易结构的长度。                                             |
|                    | tx_random_nonce      |                     |                          | Uint32 | 随机数字。默认为"0"，暂未使用。                              |
|                    | tx_structure_version |                     |                          | String | 交易结构版本号。默认为"0"，暂未使用。                        |
|                    | tx_type              |                     |                          | Uint16 | 交易类型，不同的交易类型，action中action_param（执行内容）及action type（执行类型）不同。<br/>xtransaction_type_create_contract_account      = 1,    // 创建合约账户 <br/>xtransaction_type_run_contract                           = 3,    // 调用智能合约<br/>xtransaction_type_transfer                                   = 4,    // 转账<br/>xtransaction_type_lock_token                               = 12,    // 锁定TOP token <br/>支持3种锁定方式：<br/>1.时间锁定。到期之后，系统会将账户锁定金额返回给账户。<br/>2.单个签名锁定。<br/>3.多个签名锁定。多个签名（最多8个）锁定一笔金额。<br/>xtransaction_type_unlock_token                             = 13,    // 解锁TOP token  <br/>xtransaction_type_vote                                             = 20, //投票<br/>xtransaction_type_abolish_vote                               = 21,//取消投票<br/>xtransaction_type_pledge_token_gas                      = 22,   // 锁定TOP token兑换gas<br/>xtransaction_type_redeem_token_gas                    = 23,   // 赎回兑换gas锁定的TOP token<br/>xtransaction_type_pledge_token_disk                     = 24,   // 锁定TOP token兑换disk<br/>xtransaction_type_redeem_token_disk                    = 25,   // 赎回兑换disk锁定的TOP token<br/>xtransaction_type_pledge_token_vote                     = 27,   // 锁定TOP token兑换选票<br/>xtransaction_type_redeem_token_vote                    = 28,   // 赎回兑换选票锁定的TOP token |
| tx_consensus_state |                      |                     |                          | Object | 交易共识结果。<br>跨账户交易会进行三次共识，所以会返回三个unit的信息；单账户交易只返回只在交易发送账户下进行一次共识，所以只返回"confirm_unit_info"。 |
|                    | confirm_unit_info    |                     |                          | Object | 交易第三次共识产生的unit block。                             |
|                    |                      | exec_status         |                          | String | 交易最终共识结果：success--成功；failure--失败。             |
|                    |                      | height              |                          | Uint64 | 交易第三次共识产生的unit block高度。                         |
|                    |                      | recv_tx_exec_status |                          | String | 交易接收方共识结果：success--成功；failure--失败。<br/>交易接收方共识失败或拒绝执行，通常在执行合约交易的时候会出现拒绝共识的情况。例如，用户智能合约，节点保证金低于最低要求，合约将执行失败。 |
|                    |                      | tx_exec_status      |                          | String | 交易发送方共识状态：success--成功；failure--失败。           |
|                    |                      | unit_hash           |                          | Uint64 | 交易第三次共识产生的unit block对应的hash。                   |
|                    |                      | used_deposit        |                          | Uint32 | 交易第三次共识结束后，扣除发送方账户的交易保证金，单位uTOP。 |
|                    |                      | used_disk           |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_gas            |                          | Uint32 | 交易第三次共识结束后（应用合约交易），扣除的gas资源，单位Tgas。 |
|                    | recv_unit_info       |                     |                          | Object | 交易第二次共识产生的unit block。                             |
|                    |                      | height              |                          | Uint64 | 交易第二次共识产生的unit block高度。                         |
|                    |                      | unit_hash           |                          | Uint64 | 交易第二次共识产生的unit block对应的hash。                   |
|                    |                      | used_deposit        |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_disk           |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_gas            |                          | Uint32 | 合约愿意为交易发送方扣除的gas，单位Tgas。                    |
|                    | send_unit_info       |                     |                          | Object | 交易第一次共识产生的unit block。                             |
|                    |                      | height              |                          | Uint64 | 交易第一次共识产生的unit block高度。                         |
|                    |                      | tx_fee              |                          | Uint64 | 对于调用Beacon系统合约交易，系统自动从交易发送方账户中扣除100*10^6 uTOP token作为交易手续费，并销毁。 |
|                    |                      | unit_hash           |                          | Uint64 | 交易第一次共识产生的unit block对应的hash。                   |
|                    |                      | used_deposit        |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_disk           |                          | Uint32 | 当前默认为"0"。                                              |
|                    |                      | used_gas            |                          | Uint32 | 交易第一次共识扣除的gas，单位Tgas。                          |

**请求样例**

```javascript
await topjs.updateNonceAndLastHash(account);
topjs.transfer({
    account,
    to: 'T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd',
    amount: 140,
    data: 'hello top'
}).then(console.log);
```

**返回样例**

```javascript
{
    "data":{
        "authorization":"0x00d0ed8bf78517cd811c01d044e9b70336009d8caf5d6b3102ede80d9965eb4ee56328a9d6e841e9c910b17b85a74d3a041abf99e6b7589ba36b2c29cbae340681",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":100000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588822094,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":10138221756255519000,
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":1,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LUUuv6uLpUm7kqPYLsDg9cK5ywAnL9pnaY",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c000000000000001500000068656c6c6f20746f70206861686168206861686168",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c000000000000001500000068656c6c6f20746f70206861686168206861686168",
            "action_size":0,
            "action_type":6
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xc46e4945ae8bd11172f27ea78974f2161daffc55e6f9dbe38f5f2082b2d667f1",
        "transaction_len":0,
        "transaction_type":4,
        "tx_exec_status":1,
        "version":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588822094439"
}
```

## 示例代码

### 示例合约

```map.lua
function init()
    create_key('temp_1')
    create_key('temp_2')
    hcreate('hmap')
    set_key('temp_1', '0')
    set_key('temp_2', '0')
    hset('hmap', 'key', 'val')
    hcreate('empty_map')
    create_key('map_len')
    create_key('map_str')

    lcreate('mlist')
    rpush('mlist', '44')
end

function opt_map(key, value)
    hset('hmap', tostring(key), tostring(value))
    lpush("mlist", tostring(value))
end

function check_map(key)
    local map_len = hlen('hmap')
    set_key('temp_1', tostring(map_len))
    local map_str = hget('hmap', tostring(key))
    set_key('temp_2', tostring(map_str))
    hdel('hmap', tostring(key))
end

function get_empty_map()
    set_key('map_len', tostring(hlen('empty_map')))
    set_key('map_str', tostring(hget('empty_map', 'unexist')))
end

function get_empty_key()
    set_key('map_str', tostring(hget('empty_map', '')))
end

function del_empty_key()
    hdel('hmap', '')
    set_key('map_len', tostring(hlen('empty_map')))
end

function del_not_exist_key()
    hdel('hmap', 'unexist')
    set_key('map_len', tostring(hlen('empty_map')))
end

```