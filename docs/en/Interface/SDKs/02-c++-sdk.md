# C++ SDK

## 概述

该项目是TOP Network官方 `C++ SDK`。

目前支持: 

链基础操作、账户管理、用户智能合约部署及调用、节点操作、Staking、提案管理以及交易相关工具等。

| 接口                                              | 描述                          |
| :------------------------------------------------ | :---------------------------- |
| [topc.genAccount()](#根据私钥生成account账户对象) | 根据私钥生成account账户对象。 |
| [topc.passport()](#获取链上访问token)             | 获取链上访问token。           |
| [topc.getChainInfo()](#获取主链信息)              | 获取主链信息。                |
| [topc.getAccount()](#查询链上账户信息)            | 查询链上账户信息。            |
| [topc.transfer()](#转账)                          | 转账。                        |
| [topc.getTransaction()](#查询账户交易详情)        | 查询账户交易详情。            |
| [topc.stakeGas()](#锁定TOP token兑换gas)          | 锁定TOP token兑换gas。        |
| [topc.unStakeGas()](#解锁兑换gas的TOP token)      | 解锁兑换gas的TOP token。      |
| [topc.deployContract()](#部署用户智能合约)        | 部署用户智能合约。            |
| [topc.callContract()](#调用用户智能合约)          | 调用用户智能合约。            |
| [topc.getProperty()](#获取属性)                   | 获取属性。                    |
| [topc.registerNode()](#注册节点)                  | 注册节点。                    |
| [topc.queryNodeInfo()](#获取节点信息)             | 获取节点信息。                |
| [topc.unRegisterNode()](#注销节点)                | 注销节点。                    |
| [topc.redeemNodeDeposit()](#赎回节点保证金)       | 赎回节点保证金。              |
| [topc.stakeVote()](#锁定TOP_token兑换选票)        | 锁定TOP token兑换选票。       |
| [topc.unStakeVote()](#解锁兑换选票的TOP_token)    | 解锁兑换选票的TOP token。     |
| [topc.voteNode()](#节点投票)                      | 节点投票。                    |
| [topc.unVoteNode()](#取消投票)                    | 取消投票。                    |
| [topc.listVoteUsed()](#获取投票列表)              | 获取投票列表。                |
| [topc.queryVoterDividend()](#获取投票者分红信息)  | 获取投票者分红信息。          |
| [topc.claimVoterDividend()](#领取投票者分红)      | 领取投票者分红。              |
| [topc.queryNodeReward()](#获取节点奖励信息)       | 获取节点奖励信息。            |
| [topc.claimNodeReward()](#领取节点奖励)           | 领取节点奖励。                |
| [topc.submitProposal()](#提交提案)                | 提交提案。                    |
| [topc.withdrawProposal()](#撤回提案)              | 撤回提案。                    |
| [topc.queryProposal()](#获取提案详情)             | 获取提案详情。                |
| [topc.tccVote()](#TCC表决提案)                    | TCC表决提案。                 |

## 链基础操作

### 根据私钥生成account账户对象

本地根据私钥生成账户对象，对象中包含私钥、公钥、地址等参数。

**请求方法**

> topc.genAccount

**请求参数**

| 参数名称   | 是否必选 | 默认值 | 类型   | 说明   |
| ---------- | -------- | ------ | ------ | ------ |
| privateKey | 是       | -      | String | 私钥。 |

**返回参数**

| 参数名称           | 类型   | 说明                                                         |
| ------------------ | ------ | ------------------------------------------------------------ |
| address            | String | 账户地址。                                                   |
| privateKey         | String | 私钥。                                                       |
| publicKey          | String | 公钥。                                                       |
| token              | String | 身份令牌,用于和主链节点交互，每次请求都需要该参数。需要调用“topc.passport"接口获取，只需获取一次。 |
| nonce              | Number | 交易序号，唯一。                                             |
| last_hash          | String | 最新共识成功的交易hash。                                     |
| last_hash_xxhash64 | String | 最新共识成功的交易xx64hash。                                 |
| last_unit_height   | Number | 最新共识成功的交易的unit block高度。                         |
| balance            | Number | 账户余额，单位uTOP。                                         |

本地生成account主要用于生成公私钥和地址，其他参数，除了“token"，均为初始值，需调用`topc.getAccount`方法获取链上真实值。

**请求样例**

```c++
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    std::string account = sdk.genAccount();
    auto ai = sdk.getAccount(account);
}
```
**返回样例**
```cpp
{
    "address":"T-0-LazNzvyHLptzdPFkaynNHKqDY4qXZ2gCVh",
    "addressType":"0",
    "balance":0,
    "lastUnitHeight":0,
    "netType":0,
    "nonce":0,
    "privateKey":"f71f5cc46a2b42d6be2e6f98477313292bd4781d106c4129470dc6dc3d401702",
    "privateKeyBytes":"9x9cxGorQta+Lm+YR3MTKSvUeB0QbEEpRw3G3D1AFwI=",
    "publicKey":"04448e3fa705b052680e51b4a003115b96934596b74199630e3595799af54debfa88a718f5ba0c9961ef1ffa9767eeaa5a0600a8316db0b9a825ff1cd51af6bf75",
    "sequenceId":"1589367728156",
    "token":"ec86ec80-76a9-48a1-9175-e692503c6609"
}
```


### 获取链上访问token

根据账户获取token（身份令牌），每个账户token不同。在后续所有的请求中，都需要token参数。

**请求方法**

> topc.passport

**请求参数**

| 参数名称 | 是否必选 | 默认值 |  类型   | 说明       |
| :------: | :------: | :----: | :-----: | ---------- |
| account  |    是    |   -    | Account | 账户对象。 |

**返回参数**

返回值中包含token字段，已直接放入account对象中，供后续调用时使用。

| 参数名称           | 类型   | 说明                                                     |
| ------------------ | ------ | -------------------------------------------------------- |
| secret_key         | String | 密钥key。                                                |
| signature_method   | String | 签名方法。                                               |
| signature_ver_code | String | 签名方法版本号。                                         |
| token              | String | 身份令牌，用于和主链节点交互，后续所有请求都需要该参数。 |

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    auto token = sdk.passport(account);
}
```

**返回样例**

``` cpp
{
    "data":{
        "secret_key":"87246dba-a35c-4f90-9fd5-19ae7f121e17",
        "signature_method":"hmac_sha2",
        "signature_ver_code":"1.0",
        "token":"95f74105-f7eb-4864-8685-45aa2e59641f"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588759729699"
}
```

### 获取主链信息
**请求方法**

> topc.getChainInfo

**请求参数**

| 参数名称 | 是否必选 | 默认值 |  类型   | 说明       |
| :------: | :------: | :----: | :-----: | ---------- |
| account  |    是    |   -    | Account | 账户对象。 |

**返回参数**

| 参数名称               | 类型   | 说明                   |
| ---------------------- | ------ | ---------------------- |
| first_timerblock_hash  | String | 第一个时钟块hash。     |
| first_timerblock_stamp | String | 第一个时钟块生成时间。 |
| version                | String | 版本。                 |

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    auto info = sdk.getChainInfo(account);
}
```

**返回样例**

``` cpp
{
    "data":{
        "first_timerblock_hash":"1828311c9f2ecdec97601b50627a051d398ef027a66ea45134924de96ce1b8b1",
        "first_timerblock_stamp":"0",
        "version":"0.0.0.1"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588759599134"
}
```

## 账户管理

### 查询链上账户信息
当一个用户发送交易至链上时，必须要使用该用户最新的"nonce"和"last_hash_xxhash64"，这两个属性可以从该方法的返回值中获取。

**请求方法**

> topc.getAccount

**请求参数**

| 参数名称 | 是否必选 | 默认值 |  类型   | 说明       |
| :------: | :------: | :----: | :-----: | ---------- |
| account  |    是    |   -    | Account | 账户对象。 |

**返回参数**

| 字段                 | 类型   | 说明                                                         |
| -------------------- | ------ | ------------------------------------------------------------ |
| account              | String | 账户地址,返回的"last_hash_xxhash64"和"nonce"自动赋值到account账户对象中。 |
| balance              | Number | 账户余额，单位uTOP。                                         |
| disk_balance         | Number | 兑换disk锁定的TOP token，单位uTOP。                          |
| freeze               | Number | 冻结金额，单位uTOP。                                         |
| last_hash            | String | 最新共识成功的交易hash                                       |
| last_hash_xxhash64   | String | 最新共识成功的交易xx64hash。                                 |
| last_unit_height     | Number | 最新共识成功的交易的unit block高度。                         |
| lock_balance         | Number | 锁定的TOP token，单位uTOP，主要用于合约交易。<br/>发送应用合约交易的时候，发送方可同时给合约转账，如果合约执行失败，转账款需要退还给发送方，所以在合约执行成功前，将转账款锁定。 |
| lock_deposit_balance | Number | 应用合约交易费与执行合约交易占用的CPU时长以及交易大小相关，无法在交易开始确定合约的交易费用。采取的方法是冻结一部分应用合约交易保证金，在交易第三次共识的时候，根据合约的最终执行情况，扣除发送方交易保证金，单位uTOP。 |
| lock_gas             | Number | 应用合约交易费与执行合约交易占用的CPU时长以及交易大小相关，无法在交易开始确定合约的交易费用。采取的方法是冻结一部分应用合约交易消耗的gas，在交易第三次共识的时候，根据合约的最终执行情况，扣除发送方交易消耗的gas，单位Tgas。 |
| nonce                | Number | 该账户最新共识成功的交易序号，唯一。                         |
| gas_balance          | Number | 兑换gas锁定的TOP token，单位uTOP。                           |
| unvote_num           | Number | 未使用选票数量。                                             |
| vote_balance         | Number | 兑换选票锁定的TOP token，单位uTOP。                          |

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    auto info = sdk.getAccount(account);
}
```
**返回样例**

``` cpp
{
    "data":{
        "account":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
        "balance":1000000000000,
        "disk_balance":0,
        "freeze":0,
        "last_hash":"0xa23d7cbfdadb31054cce5bccb581851410de1869ad2946b80d04f54636e873e9",
        "last_hash_xxhash64":"0xa7d202eab92c6fcd",
        "last_unit_height":1,
        "lock_balance":0,
        "lock_deposit_balance":0,
        "lock_gas":0,
        "nonce":1,
        "random_seed":"",
        "random_seed_xxhash64":16953585426035106365,
        "gas_balance":0,
        "unvote_num":0,
        "vote_balance":0
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588760076241"
}
```

### 转账

发起转账交易前，发起人的账户余额应该大于100,000uTOP token，这100,000uTOP token将用作交易保证金。

**请求方法**

> topc.transfer

**请求参数**

| 参数名称 | 是否必填 | 默认值   | 类型          | 说明                                                         |
| :------: | -------- | -------- | ------------- | ------------------------------------------------------------ |
| account  | 是       | -        | Object        | 发送交易前，需要先获取最新的nonce和last_hash_xxhash64赋值与需要使用的account对象中，可直接调用"topjs.updateNonceAndLastHash"方法，将自动把这两个参数放入account对象中。 |
|    to    | 是       | -        | String        | 交易接收账户地址，为普通账户或者合约账户。<br/>接收者地址在"target_action"对象下的"account_addr"属性中。 |
|   note   | 否       | 空字符串 | String        | 备注。                                                       |
|  amount  | 是       | -        | String/Number | 转账金额，单位uTOP。                                         |

**返回参数**

返回交易结果对象,请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    auto from = "T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6"; // 发送账户
    auto to = "T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd"; // 接收账户
    uint64_t amount = 100; // 转账金额，utop
    string memo = "haha"; // 备注
    uint64_t tx_deposit = 100000; // 交易保证金，utop(最少100000)
    auto info = sdk.transfer(from, to, amount, memo, tx_deposit);
}
```
**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00f5d3be03b45817c06d449f8a21318b45e375fc2dcbcfee053473033983ee32e6597234e325c6e37d08b299871db0777f05697cfb9a26f74d5ee06c7e8c733d16",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":300000,
        "edge_nodeid":"T-0-LLdWiAhUMyiXq39pUbSSRUdjNN6gQHb9bm",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588760296,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"12092731156595503053",
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":2,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c0000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c0000000000000000000000",
            "action_size":0,
            "action_type":6
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x93f906ca10e244af90e987682823d16dc710bc909122397fb1c4364ab85cdb55",
        "transaction_len":0,
        "transaction_type":4,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0xc19069fcbb5042dc"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588760296370"
}
```

### 查询账户交易详情
**请求方法**

> topc.getTransaction

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型    | 说明       |
| :------: | -------- | ------ | ------- | ---------- |
| account  | 是       | -      | Account | 账户对象。 |
|  txHash  | 是       | -      | String  | 交易hash。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV";
    string tx_hash = "0x643272262b8d538157f5edfa5f79c513c2611f9e9f00c022d4de804ae43db92e";
    auto info = sdk.getTransaction(account, tx_hash);
}
```

**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00ea9c525b98e16c27595135e34766587b8e95b7420c2e16e84bb4d4951e507dbc798c01992deb392b7bc5e531b3a86c243228baa5969330361a17baa87a599a17",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":300000,
        "edge_nodeid":"T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588754140,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"14691461833372860945",
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":1,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LQLVH8qhrMJ7brteS2omHbnrQ6MqqLtUVv",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c0000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c0000000000000000000000",
            "action_size":0,
            "action_type":6
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x643272262b8d538157f5edfa5f79c513c2611f9e9f00c022d4de804ae43db92e",
        "transaction_len":0,
        "transaction_type":4,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x1e6cee790ec1c86a"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588754140136"
}
```

### 锁定TOP_token兑换gas

**请求方法**

> topc.stakeGas

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型       | 说明     |
| :------: | -------- | ------ | ---------- | -------- |
| account  | 是       | -      | Account    | 账户对象。 |
|  amount  | 是       | -      | Uint64 | 锁定金额，单位uTOP。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string from = "T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV";
    string to = "T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV";
    uint64_t amount = 100;
    auto info = sdk.stakeGas(from, to, amount);
}
```

**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00ea9c525b98e16c27595135e34766587b8e95b7420c2e16e84bb4d4951e507dbc798c01992deb392b7bc5e531b3a86c243228baa5969330361a17baa87a599a17",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":300000,
        "edge_nodeid":"T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588754140,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"14691461833372860945",
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":1,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LQLVH8qhrMJ7brteS2omHbnrQ6MqqLtUVv",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c0000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c0000000000000000000000",
            "action_size":0,
            "action_type":6
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x643272262b8d538157f5edfa5f79c513c2611f9e9f00c022d4de804ae43db92e",
        "transaction_len":0,
        "transaction_type":4,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x1e6cee790ec1c86a"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588754140136"
}
```
### 解锁兑换gas的TOP_token
**请求方法**

> topc.unStakeGas

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型       | 说明     |
| :------: | -------- | ------ | ---------- | -------- |
| account  | 是       | -      | Account    | 账户对象。 |
|  amount  | 是       | -      | Uint64 | 解锁金额，单位uTOP。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string from = "T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV";
    string to = "T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV";
    uint64_t amount = 100;
    auto info = sdk.unStakeGas(from, to, amount);
}
```

**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00ea9c525b98e16c27595135e34766587b8e95b7420c2e16e84bb4d4951e507dbc798c01992deb392b7bc5e531b3a86c243228baa5969330361a17baa87a599a17",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":300000,
        "edge_nodeid":"T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588754140,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"14691461833372860945",
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":1,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LQLVH8qhrMJ7brteS2omHbnrQ6MqqLtUVv",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c0000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-0-LiC6tHMcmS8Qpn6LQuWcLRXjvGuYXQGthd",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x000000008c0000000000000000000000",
            "action_size":0,
            "action_type":6
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0x643272262b8d538157f5edfa5f79c513c2611f9e9f00c022d4de804ae43db92e",
        "transaction_len":0,
        "transaction_type":4,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x1e6cee790ec1c86a"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588754140136"
}
```
## 用户智能合约部署和调用

### 部署用户智能合约
部署应用合约，部署合约前，发起人的账户余额应该大于100,000uTOP token，这100,000uTOP token将用作交易保证金。

**请求方法**

> topc.deployContract

**请求参数**

|   参数名称   | 是否必填 | 默认值   | 类型       | 说明                                                         |
| :----------: | -------- | -------- | ---------- | ------------------------------------------------------------ |
|   account    | 是       | -        | Account    | 账户对象。                                                    |
| contractCode | 是       | -        | String     | 合约代码。                                                    |
|   deposit    | 是      | - | Uint64 | 转入合约账户的金额，单位uTOP。<br/>部署合约会创建一个合约账户，您可以同时向此账户中转账，也可以不转。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    uint64_t gas_limit = 0;
    uint64_t amount = 100;
    string contract_path = "/home/test.lua";
    uint64_t tx_deposit = 100000;
    string account = "T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6";
    auto info = sdk.deployContract(account, gas_limit, amount, contract_path, tx_deposit);
}
```
**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x006f59eea35f67e5a9c4ec88cb6572aebda2b497215b41709d043ea1e1033887855c1d421a7a4bbf501240921e27ad3617ecf03861e7971020d0a44b5c2065ced2",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":300000,
        "edge_nodeid":"T-0-LLdWiAhUMyiXq39pUbSSRUdjNN6gQHb9bm",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588765776,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"7956124735939529368",
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":1,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000c80000000000000000000000",
            "action_size":0,
            "action_type":3
        },
        "success":true,
        "target_action":{
            "account_addr":"T-3-MXrp9MAxk3WKe4Bn5obqmnUBhCyCavXRiR",
            "action_authorization":"0x0443620d0332d0b80a097fc2976064478316af5763d81872aa36a8a1d59743ec8ef24b437fbeb2a26a563aeb663713d6fb7c79261f8df3ed72435242d5e4e9a12a",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x0000000000000000aa04000066756e6374696f6e20696e697428290d0a202020206372656174655f6b6579282774656d705f3127290d0a202020206372656174655f6b6579282774656d705f3227290d0a202020206372656174655f6b6579282774656d705f6127290d0a20202020686372656174652827686d617027290d0a202020207365745f6b6579282774656d705f31272c2027736627290d0a202020207365745f6b6579282774656d705f32272c2027616227290d0a202020207365745f6b6579282774656d705f61272c202761636227290d0a20202020687365742827686d6170272c20276b6579272c202776616c27290d0a20202020686372656174652827656d7074795f6d617027290d0a202020206372656174655f6b657928276d61705f6c656e27290d0a202020206372656174655f6b657928276d61705f73747227290d0a0d0a202020206c63726561746528276d6c69737427290d0a20202020727075736828276d6c697374272c2027343427290d0a656e640d0a0d0a66756e6374696f6e206f70745f6d6170286b65792c2076616c7565290d0a20202020687365742827686d6170272c20746f737472696e67286b6579292c20746f737472696e672876616c756529290d0a202020206c7075736828226d6c697374222c20746f737472696e672876616c756529290d0a656e640d0a0d0a66756e6374696f6e20636865636b5f6d6170286b6579290d0a202020206c6f63616c206d61705f6c656e203d20686c656e2827686d617027290d0a202020207365745f6b6579282774656d705f31272c20746f737472696e67286d61705f6c656e29290d0a202020206c6f63616c206d61705f737472203d20686765742827686d6170272c20746f737472696e67286b657929290d0a202020207365745f6b6579282774656d705f32272c20746f737472696e67286d61705f73747229290d0a202020206864656c2827686d6170272c20746f737472696e67286b657929290d0a656e640d0a0d0a66756e6374696f6e206765745f656d7074795f6d617028290d0a202020207365745f6b657928276d61705f6c656e272c20746f737472696e6728686c656e2827656d7074795f6d6170272929290d0a202020207365745f6b657928276d61705f737472272c20746f737472696e6728686765742827656d7074795f6d6170272c2027756e6578697374272929290d0a656e640d0a0d0a66756e6374696f6e206765745f656d7074795f6b657928290d0a202020207365745f6b657928276d61705f737472272c20746f737472696e6728686765742827656d7074795f6d6170272c2027272929290d0a656e640d0a0d0a66756e6374696f6e2064656c5f656d7074795f6b657928290d0a202020206864656c2827686d6170272c202727290d0a202020207365745f6b657928276d61705f6c656e272c20746f737472696e6728686c656e2827656d7074795f6d6170272929290d0a656e640d0a0d0a66756e6374696f6e2064656c5f6e6f745f65786973745f6b657928290d0a202020206864656c2827686d6170272c2027756e657869737427290d0a202020207365745f6b657928276d61705f6c656e272c20746f737472696e6728686c656e2827656d7074795f6d6170272929290d0a656e640d0a",
            "action_size":0,
            "action_type":3
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xd285e2a9afc3f68bf7cc9c047a44c18d666a353125ce8a59d9223e852dd4104c",
        "transaction_len":0,
        "transaction_type":1,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x65731493f625f6f2"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588765776137"
}
```

### 调用用户智能合约

调用应用合约，调用合约前，发起人的账户余额应该大于100,000uTOP token，这100,000uTOP token将用作交易保证金。

**请求方法**

> topc.callContract

**请求参数**

|    参数名称     | 是否必填 | 默认值 | 类型    | 说明                                    |
| :-------------: | -------- | ------ | ------- | --------------------------------------- |
|     account     | 是       | -      | Account | 账户对象。                              |
| contractAddress | 是       | -      | String  | 合约地址。                              |
|   actionName    | 是       | -      | String  | 方法名。                                |
| contractParams  | 是       | -      | List    | 调用参数（包括String、Long、Boolean）。 |

**返回参数**

调用合约接口，无法直接返回调用结果，请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6";
    string contract = "T-3-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6";
    string func = "add";
    string params = "1,1|1,2";
    auto info = sdk.callContract(account, contract, func, params);
}
```


### 获取属性

合约中保存的数据，会作为属性保存在合约账户中，可通过"getProperty"获取。

**请求方法**

> topc.getProperty

**请求参数**

|    参数名称     | 是否必填 | 默认值 | 类型                              | 说明             |
| :-------------: | -------- | ------ | --------------------------------- | ---------------- |
|     account     | 是       | -      | Account                           | 账户对象。       |
| contractAddress | 是       | -      | String                            | 合约地址。       |
|    dataType     | 是       | -      | String、Map、List                 | 目标属性的类型。 |
|     params      | 是       | -      | List（包括String、Long、Boolean） | key。            |

**返回参数**

| 参数名称       | 类型 | 说明                                                         |
| -------------- | ---- | ------------------------------------------------------------ |
| property_value | List | 结果数组，获取List数据时，直接返回List中所有数据，返回值为ASCII码。 |

**请求样例**

dataType和params分别为目标属性的类型和key，dataType参数共有三种类型，分别为String、Map、List，故分别实现了getStringProperty、getMapProperty、getListProperty三个获取方法。
``` cpp
暂无
```
**返回样例**

``` cpp

```

## 节点操作

### 注册节点

TOP Network目前有三种类型的节点：边缘(edge)节点、验证(validator)节点、高级(advance)节点。

其中高级节点可在不同的网络里同时担任多个角色：验证(validator)、审计(auditor)、存档(archive)。

一个高级节点在一个cluster中，不可以在auditor group及其下辖validator group中同时分别担任审计(auditor)、验证角色(validator)。

以下是节点入网的最低保证金要求。

| 节点角色                  | 保证金                   |
| ------------------------- | ------------------------ |
| 边缘节点（edge Node）     | 100,000*10^6uTOP token   |
| 验证节点（validator Node) | 500,000*10^6uTOP token   |
| 审计节点（auditor Node)   | 1,000,000*10^6uTOP token |
| 存档节点(archive Node)    | 1,000,000*10^6uTOP token |

**请求方法**

> topc.registerNode

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型       | 说明                             |
| :------: | -------- | ------ | ---------- | -------------------------------- |
| account  | 是       | -      | Account    | 账户对象。                        |
| mortgage | 是       | -      | Uint64 | 节点质押金，单位uTOP。              |
| nodeType | 是       | -      | String     | 节点类型，包括edge（边缘节点）、validator（验证节点）、advance（高级节点），高级节点兼具archive（存档）、validator（验证）、auditor（审计）角色。<br/>您可以注册成为三种类型中的一种。<br/>注册成为高级节点后，advance节点被选举为何种工作角色取决于节点的选票：<br/>advance节点被选举为audtior、archive、REC、ZEC角色，节点所获得的选票需要大于等于节点实际质押的保证金（此处节点保证金以TOP计算，非uTOP）。<br/>当选票低于实际质押保证金时，advance节点只能被选为validator。<br/>说明：<br/>节点选票须由接受投票而得，可以由其他节点投票，也可由本账户投票。 |
| node_sign_key | 是 | - | String | 您可以使用节点账户公私钥对作为节点注册的node key，此处直接传入节点账户的公钥。<br/>为了更好地保护您的账户资产，建议您创建一对无资产的公私钥对，在节点注册入网后，节点工作时使用该私钥为节点签名。<br/>此处请输入对应的公钥，其他节点可使用该公钥进行解密。 |

**返回参数**

请参见[交易体对象说明](#交易提对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    uint64_t mortgage = 40000;
    string role = "edge";
    string nick_name = "haha";
    auto info = sdk.registerNode(account, mortgage, role, nick_name);
}
```

**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00a0dc5e8bbdb4f63e354119a9101b705b80f20e4d16cc9dcb98bb2ee108bd60441f3e2ce8f6067547ebaa0fb4d11a8cc58ec1823623216007c7edd6ff8e4bd381",
        "confirm_action":"0x",
        "confirm_unit_height":7,
        "deposit":300000,
        "edge_nodeid":"T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588766661,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"11985866310940465391",
        "last_trans_nonce":3,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":2,
        "send_unit_height":6,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x0000000040420f000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "success":true,
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
        "transaction_hash":"0xf8da83a36446f91b775eff12aa7acf2dfd2ac7b251c433ca45f5aa60b8e506c7",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0xd288e4db15c7346f"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588766661700"
}
```
### 获取节点信息

**请求方法**

> topc.queryNodeInfo

**请求参数**

|  参数名称   | 是否必填 | 默认值 | 类型    | 说明       |
| :---------: | -------- | ------ | ------- | ---------- |
|   account   | 是       | -      | Account | 账户对象。 |
| nodeAddress | 是       | -      | String  | 节点地址。 |

**返回参数**

| 参数名称                    | 类型   | 说明                                                         |
| --------------------------- | ------ | ------------------------------------------------------------ |
| m_account                   | String | 节点账户地址。                                               |
| m_account_mortgage          | Number | 节点保证金，单位uTOP。                                       |
| m_audit_vote_stake          | Number | auditor节点权益(stake)=（节点保证金+节点得票总数）*（信誉分分子/信誉分分母） |
| m_credit_denominator        | Number | 信誉分分母。                                                 |
| m_credit_numerator          | Number | 信誉分分子。                                                 |
| m_registered_role           | Number | 节点角色，存在四种基本角色：edge、auditor、validator、archive。<br/>其中每个角色对应的十六进制值分别为：<br/>edge: 0x00008000；<br/>auditor: 0x00002001；<br/>validator: 0x00002002；<br/>archive: 0x00004000。<br/>一个节点可以有多个角色，例如m_registed_role：8194，8194的十六进制值=0x2002，故改节点角色validator。<br/>边缘节点：32768;<br/>验证节点：8194;<br/>高级节点（auditor、validator、archive）：32771。 |
| m_support_ratio_denominator | Number | 支持率分母。                                                 |
| m_support_ratio_numerator   | Number | 支持率分子。                                                 |
| m_validate_vote_stake       | Number | validator节点权益(stake)=（节点保证金+节点得票总数）/2       |
| m_vote_amount               | Number | 节点得票总数。                                               |
| network_id                  | Number | 查询节点经过选举后，加入的具体某种网络ID。                   |
| nickname                    | String | 节点昵称。                                                   |

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    string target = "";
    auto info = sdk.queryNodeInfo(account, target);
}
```

**返回样例**

``` cpp
{
    "data":{
        "m_account":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
        "m_account_mortgage":"1000000",
        "m_audit_vote_stake":"0",
        "m_credit_denominator":"1000000",
        "m_credit_numerator":"100000",
        "m_registered_role":"24579",
        "m_support_ratio_denominator":"100",
        "m_support_ratio_numerator":"90",
        "m_validate_vote_stake":"0",
        "m_vote_amount":"0",
        "network_id":"0 "
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588766666904"
}
```
### 注销节点
在TOP Network主网的节点要退出主网， 需要先发起节点注销。

- 节点注销只能节点自己发起。
- 节点注销后， 保证金不会立马退回到节点账号上， 会被锁定一段时间，如果节点作恶，锁定期会延长。
- 锁定的保证金到期后需要节点账号主动发起赎回保证金的操作，不会自动退回。

**请求方法**

> topc.unRegisterNode

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型    | 说明       |
| :------: | -------- | ------ | ------- | ---------- |
| account  | 是       | -      | Account | 账户对象。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    auto info = sdk.unRegisterNode(account);
}
```

**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x012aff5ea78974767d2a00a9c20e031d1ef1d5de53f581a858771cf1580ef95d9f015b4cc3b41395a9fd610c607fe8c39a9e628bf86ce3b8cf9326b811061d7cc4",
        "confirm_action":"0x",
        "confirm_unit_height":9,
        "deposit":300000,
        "edge_nodeid":"T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588766920,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"15170626974411863151",
        "last_trans_nonce":4,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":3,
        "send_unit_height":8,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
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
        "transaction_hash":"0x00bd0dd5f79defda3e613028093911500537d3354ce218f16eaa51d7f5ec6600",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x7bab201d8d8ca546"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588766920590"
}
```
### 赎回节点保证金
锁定的保证金到期后需要节点账号主动发起赎回保证金的操作，不会自动退回。

**请求方法**

> topc.redeemNodeDeposit

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型    | 说明       |
| :------: | -------- | ------ | ------- | ---------- |
| account  | 是       | -      | Account | 账户对象。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    auto info = sdk.redeemNodeDeposit(account);
}
```

**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x012aff5ea78974767d2a00a9c20e031d1ef1d5de53f581a858771cf1580ef95d9f015b4cc3b41395a9fd610c607fe8c39a9e628bf86ce3b8cf9326b811061d7cc4",
        "confirm_action":"0x",
        "confirm_unit_height":9,
        "deposit":300000,
        "edge_nodeid":"T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588766920,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"15170626974411863151",
        "last_trans_nonce":4,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":3,
        "send_unit_height":8,
        "source_action":{
            "account_addr":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
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
        "transaction_hash":"0x00bd0dd5f79defda3e613028093911500537d3354ce218f16eaa51d7f5ec6600",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x7bab201d8d8ca546"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588766920590"
}
```

## staking

### 锁定TOP_token兑换选票

TOP Network链上的账户可以给在线节点（需包含"auditor"角色）投票，获取收益。

账户投票前需要质押TOP token以兑换成选票。

兑票时要输入锁定期，不同的锁定期兑票比例不一样，锁定期越长，相同额度的TOP token会兑换到更多的选票。

**请求方法**

> topc.stakeVote

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型       | 说明                |
| :------: | -------- | ------ | ---------- | ------------------- |
| account  | 是       | -      | Account    | 账户对象            |
|  amount  | 是       | -      | Uint64 | 锁定TOP token的数量，单位uTOP。 |
| lockTime | 是       | -      | Uint64 | TOP token锁定期，锁定期单位：天。<br/>兑票规则：<br/>votes_amount / [ 1.04^(lock_duration / 30 - 1) ], duration < 570；<br/>vote_amount / 2,                        lock_duration >= 570。<br/>锁定期最少为30天，且必须为30的整数倍。锁定期越长，相同的兑票数量锁定越少的TOP token。 |
|   note   | 否       | 空字符   | String     | 备注。               |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    uint64_t amount = 10000;
    uint16_t lockTime = 30;
    auto info = sdk.stakeVote(account, amount, lockTime);
}
```
**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x012bb8a3a78038edc15d81addfd99cc983f669185863c4be7dbbba9f3cabf5573051263a76cb11e1b52d128976674a483349b186931bb81b731c2af3db665002eb",
        "confirm_action":"0x",
        "confirm_unit_height":2,
        "deposit":300000,
        "edge_nodeid":"T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588768160,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"12464100923886554053",
        "last_trans_nonce":1,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_unit_height":2,
        "send_unit_height":2,
        "source_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x12270000000000001e0000000000",
            "action_size":0,
            "action_type":21
        },
        "success":true,
        "target_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
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
        "transaction_hash":"0x64d3c2972795c0db29caa9b5ed85cd3320091004b9e9872e9010b09be8e1246f",
        "transaction_len":0,
        "transaction_type":27,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0xe35817d74716f127"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588768160325"
}
```

### 解锁兑换选票的TOP_token
锁定期内的TOP token不能赎回，只能赎回到期的TOP token。

已经被使用的选票对应质押的TOP token不能被赎回。

**请求方法**

topc.unStakeVote

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型       | 说明                |
| :------: | -------- | ------ | ---------- | ------------------- |
| account  | 是       | -      | Account    | 账户对象。           |
|  amount  | 是       | -      | Uint64 | 选票数量，解锁相应的TOP token。 |
|   note   | 是       | -      | String     | 备注。               |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    uint64_t amount = 10000;
    auto info = sdk.unStakeVote(account, amount);
}
```
**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00f2633d26f13986ed32d9a0ee063828887ff3938b8b31993a67d9cc0a62828cab14f22603d20b17284e5059e16d2457560cfcbc092df63136e805e09619cb4f59",
        "confirm_action":"0x",
        "confirm_unit_height":3,
        "deposit":300000,
        "edge_nodeid":"T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588768163,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"16381869857938272551",
        "last_trans_nonce":2,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_unit_height":3,
        "send_unit_height":3,
        "source_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000e80300000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
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
        "transaction_hash":"0x7e9f57e6692966d93990916b963b6c60779ea1ee3d6b0933613ae9f551c1cd75",
        "transaction_len":0,
        "transaction_type":28,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x95712606cc2753f7"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588768163623"
}
```

### 节点投票

TOP Network链上账户可以给在线节点投票，获取收益：

- 您可以给任意一个包含"auditor"角色的节点（即advance节点）投票。
- 投到一个节点上的起投票数10,000票，后续累加投票无限制。
- 给节点投票后，节点获取的奖励会有一部分分给投票者。

**请求方法**

> topc.voteNode

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型                    | 说明                       |
| :------: | -------- | ------ | ----------------------- | -------------------------- |
| account  | 是       | -      | Account                 | 投票者账户对象。            |
| voteInfo | 是       | -      | Map<String, Uint64> | key：接受投票节点地址；value：票数。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    map<string, uint64_t> voteInfo;
    voteInfo["T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc"] = 1000;
    auto info = sdk.voteNode(account, voteInfo);
}
```
**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x0047c376a41f7da68ac2e30d893f9ed82b1d070c380e59d027020c9fbf0d3199430a1ca5d6bb72447a1b85fe86a6383fb835fb1bb17f76b01e40935a3ffe3aefc4",
        "confirm_action":"0x",
        "confirm_unit_height":5,
        "deposit":300000,
        "edge_nodeid":"T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588768166,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"10768429994656355319",
        "last_trans_nonce":3,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":2,
        "send_unit_height":4,
        "source_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-s-oedRLvZ3eM5y6Xsgo4t137An61uoPiM9vS-0071",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"set_vote",
            "action_param":"0x0100000026000000542d302d4c5261467961475a31697366634b6e684c78504c6f655046556d59326979464776368813000000000000",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xdb60d808df0365dc6325f3bb3493e4b7859a82aaa95d3e0aebd52d06957b21eb",
        "transaction_len":0,
        "transaction_type":20,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x53b0ea03c2bb2d68"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588768166952"
}
```

### 取消投票

投票人可以随时将已经投到节点上的选票取消并收回，使节点上的选票减少，用户账户中未使用的选票增加。

每次取消投票的票数无限制，但时不能高于给节点投票的总数，否则取消投票将失败。

取消投票交易同样消耗gas资源。

给节点投票后，即使注销节点，选票也不会主动退还至您的账户， 取消投票需要您主动发起取消投票操作。

您可以批量取消节点投票。

**请求方法**

> topc.unVoteNode

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型                    | 说明                       |
| :------: | -------- | ------ | ----------------------- | -------------------------- |
| account  | 是       | -      | Account                 | 投票者账户对象。            |
| voteInfo | 是       | -      | Map<String, Uint64> | key：接受投票节点账户地址；value：票数。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    map<string, uint64_t> voteInfo;
    voteInfo["T-0-LZyAmi5D54R3vfSFMthjtgKmB69qyinUEc"] = 1000;
    auto info = sdk.unVoteNode(account, voteInfo);
}
```
**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x0005694eff2952d5fbcc19777bef569f0b21a25d98f46fa59a5c95194348764ea429239e2c22a6f2d1633618e13b42f9fe5c31d7c179fc1aa5a6ca9b08af36cd49",
        "confirm_action":"",
        "deposit":300000,
        "expire_duration":100,
        "ext":"",
        "fire_timestamp":1588768170,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"0x95712606cc2753f7",
        "last_trans_nonce":3,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "public_key":"0x0409197c92c3649f0d724a8f333a7d923fd069aa964b1dfb1c6646f51a434b41b1d22467a584fd36ead10127b803eb5ceea3c13569a505fddcfa6cc03a069ea4e4",
        "source_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
            "action_authorization":"",
            "action_ext":"",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "target_action":{
            "account_addr":"T-s-oedRLvZ3eM5y6Xsgo4t137An61uoPiM9vS",
            "action_authorization":"",
            "action_ext":"",
            "action_hash":0,
            "action_name":"abolish_vote",
            "action_param":"0x0100000026000000542d302d4c5261467961475a31697366634b6e684c78504c6f655046556d5932697946477636c800000000000000",
            "action_size":0,
            "action_type":5
        },
        "to_account_id":0,
        "to_network_id":0,
        "trans_random_nounce":0,
        "transaction_hash":"0xa90c6b70fb009410da9219cf08590fa95440f51d232c550287c4c324ca428f27",
        "transaction_len":0,
        "transaction_type":21,
        "version":0,
        "xx64Hash":"0xcc475592e9ed7597"
    },
    "errmsg":"transaction not find",
    "errno":11,
    "sequence_id":"1588768170023"
}
```

### 获取投票者分红信息
您给节点投票之后，可以获取相应的投票分红，分红比例由被投票的节点设置。

投票者分红不是立刻可以查询，在投票之后的6小时可以查询投票者分红。

**请求方法**

> topc.queryVoterDividend

**请求参数**

|  参数名称   | 是否必填 | 默认值 | 类型    | 说明             |
| :---------: | -------- | ------ | ------- | ---------------- |
|   account   | 是       | -      | Account | 投票者账户对象。 |
| nodeAddress | 是       | -      | String  | 投票者账户地址。 |

**返回参数**

| 参数名称        | 类型   | 说明                                   |
| --------------- | ------ | -------------------------------------- |
| accumulated     | String | 分红总数，单位uTOP。                   |
| last_claim_time | String | 上次领取分红的时钟块高度。             |
| unclaimed       | String | 未领取分红，单位uTOP。                 |
| node_rewards    | List   | 该投票者对应每个节点的分红，单位uTOP。 |

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    string target = "T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6";
    auto info = sdk.queryVoterDividend(account, target);
}
```
**返回样例**

``` cpp
{
    "data":{
        "accumulated":2791642992,
        "last_claim_time":0,
        "node_rewards":[
            {
                "account":"T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6",
                "accumulated":2791642992,
                "last_claim_time":0,
                "unclaimed":2791642992
            }
        ],
        "unclaimed":2791642992
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588769031342"
}
```

### 领取投票者分红

分红发放频率由链上治理配置。

分红需要主动领取，节点领取后可通过查询账户余额变化来查看所获取的分红。

**请求方法**

> topc.claimVoterDividend

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型    | 说明             |
| :------: | -------- | ------ | ------- | ---------------- |
| account  | 是       | -      | Account | 投票者账户对象。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    auto info = sdk.claimVoterDividend(account);
}
```
**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x00dd2c16b7456ec01d9370cee2803d5c4d3a8faa1ee4b6ced86bde44db362b35773ea492b33756d3654c90acdad5a23a626a9216577f86547597dfb7aa61412ee4",
        "confirm_action":"0x",
        "confirm_unit_height":7,
        "deposit":300000,
        "edge_nodeid":"T-0-LhDiNCG8e6wjYe32PGD7ndZu9PhVVvDiuj",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588769031,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"6030577202921942376",
        "last_trans_nonce":4,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":9,
        "send_unit_height":6,
        "source_action":{
            "account_addr":"T-0-LRPGQpZh3Z91woem3ucVMbXFq7qMdnPnCs",
            "action_authorization":"0x",
            "action_ext":"0x",
            "action_hash":0,
            "action_name":"",
            "action_param":"0x00000000000000000000000000000000",
            "action_size":0,
            "action_type":0
        },
        "success":true,
        "target_action":{
            "account_addr":"T-s-oedRLvZ3eM5y6Xsgo4t137An61uoPiM9vS-0071",
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
        "transaction_hash":"0xcf78b78a45376f6e4c9fdc600cd81d162b11ebfa8bca869540a28211feaa6426",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0x14c832129a2f07ee"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588769031385"
}
```

### 获取节点奖励信息

**请求方法**

> topc.queryNodeReward

**请求参数**

|  参数名称   | 是否必填 | 默认值 | 类型    | 说明           |
| :---------: | -------- | ------ | ------- | -------------- |
|   account   | 是       | -      | Account | 节点账户对象。 |
| nodeAddress | 是       | -      | String  | 节点账户地址。 |

**返回参数**

| 参数名称        | 类型   | 说明                       |
| --------------- | ------ | -------------------------- |
| accumulated     | String | 奖励总数，单位uTOP。       |
| last_claim_time | String | 上次领取奖励的时钟块高度。 |
| unclaimed       | String | 未领取奖励，单位uTOP。     |

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    string target = "";
    auto info = sdk.queryNodeReward(account);
}
```
**返回样例**

``` cpp
{
    "data":{
        "accumulated":1044217044,
        "last_claim_time":0,
        "unclaimed":1044217044
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588768679934"
}
```

### 领取节点奖励

奖励需要主动领取。

**请求方法**

> topc.claimNodeReward

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型    | 说明           |
| :------: | -------- | ------ | ------- | -------------- |
| account  | 是       | -      | Account | 节点账户对象。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    auto info = sdk.claimNodeReward(account);
}
```

**返回样例**

``` cpp
{
    "data":{
        "authority_keys":"",
        "authorization":"0x0015ded9273b4e49810d64c429b1ff45d2b7ac51e0304e892885b822086f4d1a303fa04cc5274eb74b72763e63a964c3048ca956fce9e197d46bed6e168ffd99bd",
        "confirm_action":"0x",
        "confirm_unit_height":13,
        "deposit":300000,
        "edge_nodeid":"T-0-Lhk63ZFE9N6Mux1H55DhBTCGc9Ph5C4UUV",
        "exec_status":1,
        "expire_duration":100,
        "ext":"0x",
        "fire_timestamp":1588768839,
        "flag":0,
        "from_account_id":0,
        "from_network_id":0,
        "hash_work_proof":0,
        "last_trans_hash":"4601754188051036350",
        "last_trans_nonce":6,
        "last_unit_hash":0,
        "last_unit_hight":0,
        "parent_account":"",
        "recv_tx_exec_status":1,
        "recv_unit_height":16,
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
        "success":true,
        "target_action":{
            "account_addr":"T-s-oedRLvZ3eM5y6Xsgo4t137An61uoPiM9vS-0261",
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
        "transaction_hash":"0xa89410368852b5464b384dac841a52de0276fa4ca13c83c71200f9cabe181377",
        "transaction_len":0,
        "transaction_type":3,
        "tx_exec_status":1,
        "version":0,
        "xx64Hash":"0xa39e2fe261541e78"
    },
    "errmsg":"ok",
    "errno":0,
    "sequence_id":"1588768839268"
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

> topc.submitProposal

**请求参数**

| 参数名称 | 是否必填 | 默认值 | 类型     | 说明                        |
| :------: | -------- | ------ | -------- | --------------------------- |
| account  | 是       | -      | Account  | 提案发起者account账户对象。 |
| proposal | 是       | -      | Proposal | 提案对象。                  |

**proposal**参数说明

| 参数名称               | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ---------------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| proposal_type          | 是       | -      | Uint8  | 提案类型：1--修改链上治理参数提案；2--社区基金管理提案。     |
| target                 | 是       | -      | String | 当提案类型为修改链上治理参数提案时，target为链上治理参数名称，链上治理参数请参见[链上治理参数说明](/zh/On-ChainGovernance/On-ChainGovernance parameters.md)；<br/>当提案类型为社区基金管理提案时，target为接受转账账户地址，销毁账户地址为：T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug。 |
| value                  | 是       | -      | String | 当target为链上治理参数时，value为修改后的值。<br/>当target为接受转账账户地址，value为转账金额，单位uTOP。 |
| proposal_deposit       | 是       | -      | Uint64 | 提案保证金，最低为100*10^6 uTOP。                            |
| effective_timer_height | 是       | -      | Uint64 | 提案通过后生效时钟高度。如生效始终高度小于提案通过时的始终高度，那么提案在通过后会立刻生效。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    string proposal_id              = "aaa";
	string parameter                = "archive_deposit";
	string orig_value               = "10000";
	string new_value                = "2";
	string modification_description = "sample";
	string proposal_client_address  = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
	uint64_t deposit = 400;
    uint64_t chain_timer_height = 40;
    string update_type = "update_action_parameter";
    uint16_t priority = 3;
    auto info = sdk.submitProposal(account,
                                   proposal_id, parameter,
			                       orig_value, new_value,
			                       modification_description,
		                           proposal_client_address,
			                       deposit, chain_timer_height, update_type, priority);
}
```
**返回样例**

``` cpp
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

> topc.withdrawProposal

**请求参数**

|  参数名称  | 是否必填 | 默认值 | 类型    | 说明       |
| :--------: | -------- | ------ | ------- | ---------- |
|  account   | 是       | -      | Account | 账户对象。 |
| proposalId | 是       | -      | String  | 提案ID。   |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    string proposal_id = "aaa";
    auto info = sdk.withdrawProposal(account, proposal_id);
}
```
**返回样例**

``` cpp
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

> topc.queryProposal

**请求参数**

|  参数名称  | 是否必填 | 默认值 | 类型    | 说明       |
| :--------: | -------- | ------ | ------- | ---------- |
|  account   | 是       | -      | Account | 账户对象。 |
| proposalId | 是       | -      | String  | 提案id。   |

**返回参数**

| 参数名称       | 类型 | 说明       |
| -------------- | ---- | ---------- |
| property_value | HEX  | 提案内容。 |

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    string proposal_id = "aaa";
    auto info = sdk.queryProposal(account, proposal_id);
}
```

**返回样例**

``` cpp
{
    "chainTimerHeight":40,
    "deposit":400,
    "modificationDescription":"ttt",
    "newValue":"26",
    "origValue":"10000",
    "parameter":"archive_deposit",
    "priority":3,
    "proposalClientAddress":"T-0-1Kc3sQi7wiX9STHjCYMpxbER9daPXc7wNe",
    "proposalId":"sss"
}
```

### TCC表决提案

对提案投票前，可先获取提案详细信息了解提案。

只有TCC委员有表决权， 对于不同级别的提案，表决通过的规则不一样。

提案表决通过后，且没有被否决，将形成立法命令，发给全网节点。

提案被表决通过后，系统将自动删除提案，无法查询提案。

**请求方法**

topc.tccVote

**请求参数**

|       参数名称        | 是否必填 | 默认值 | 类型    | 说明                                |
| :-------------------: | -------- | ------ | ------- | ----------------------------------- |
|        account        | 是       | -      | Account | 投票者账户对象。                    |
|      proposalId       | 是       | -      | String  | 提案ID。                            |
| proposalClientAddress | 是       | -      | String  | 提案客户端地址。                    |
|        option         | 是       | -      | Boolean | 表决意见：true--赞成；false--反对。 |

**返回参数**

请参见[交易体对象说明](#交易体对象说明)。

**请求样例**

``` cpp
#include "topc.h"

using namespace top;
int main(){
    topc sdk;
    string account = "T-0-LQ6aNWJJpZ8QHZ8D3xprHU18NXB6ksxz2R";
    string proposal_id = "aaa";
    string proposal_client_address = "T-0-Lh5GLYuH3Lf5h1zRoNYdpBgB918BYxJXDc";
    bool option = false;
    auto info = sdk.tccVote(account, proposal_id, proposal_client_address, option);
}
```
**返回样例**

``` cpp
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
 解析出转账交易体中的amount和note数据，并赋值在“TransferActionParam”对象中。

**请求方法**
TransferActionParam.decode
**请求参数**
|       参数名称        | 是否必填 | 默认值 | 类型    | 说明           |
| :-------------------: | -------- | ------ | ------- | -------------- |
|        actionParam        | 是       | -      | String | 参数内容。 |
**返回参数**
无返回，数据直接对象体中
**请求样例**

``` cpp

```
**返回样例**
无

### 判断交易是否成功
xTransaction.isSuccess 判断交易是否成功。
以转账交易为例，返回的对象中，获取XTransaction对象，该对象有个方法为.isSuccess()，返回true则表示交易成功，否则为交易失败。

``` cpp

```

**返回样例**

```cpp
transfer hash >> 0x0f44e9a100758e08838a46fe8443b0865252226e5579a1f2250f46972d6506b7 >> is success > true
```

### 交易体对象说明

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

**返回样例**

```cpp
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

## 代码示例

opt_map 合约：
```lua
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
