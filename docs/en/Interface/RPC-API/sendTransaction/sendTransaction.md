# Send Transactions

Support sending transactions, including transfer, node staking, node registration, node voting, node claiming rewards, etc.

Before sending transactions,make sure that:

1. You already have an account on the chain.

2. Get the identity token via  `requestToken`.

## Transaction Costs

Caution：

> In RPC, account balance, transaction deposit,etc.The unit is uTOP, 1TOP=1*10^6 uTOP.

Sending transactions on TOP Network chain consumes certain gas resources. If the account balance is greater than or equal to 100*10^6 uTOP, the system will give the account 25,000 Tgas for free.

Each transaction requires at least 100,000 uTOP as the transaction deposit, otherwise the transaction will be discarded.

If the account‘s gas resources are sufficient, the transaction deposit will be returned to your account immediately after the transaction is successful. If the account's gas resources are insufficient to pay the transaction costs, a fee shall be deducted from the transaction deposit to exchange gas resources to pay the transaction costs, and the deducted TOP tokens will be destroyed.

If the transaction deposit is not enough to exchange gas resources, the transaction will eventually fail.

For transactions that running the contracts deployed on the Root-beacon (registration node-related, proposal related, starting xnode), in addition to the minimum transaction deposit of 100,000 uTOP tokens, the system will automatically deduct the 100*10^6 uTOP tokens as transaction fee from the sender's account and then destroy it.

The resources consumed by transaction, please refer to [Resource Model](/en/AboutTOPNetwork/Protocol/ResourceModel.md).

More about Root-Beacon contract, please refer to [Smart Contract](/en/SmartContract/SmartContract.md).

## RPC Instructions

**Request Method**

`sendTransaction`

**Request Parameters**

| Parameter Name       |                          | Required | Parameter Name | Description                                                  |
| -------------------- | ------------------------ | -------- | -------------- | ------------------------------------------------------------ |
| authorization        |                          | Yes      | String         | Transaction body signature.                                  |
| challenge_proof      |                          | Yes      | String         | The reserve parameter, default to empty string.              |
| ext                  |                          | Yes      | String         | The reserve parameter, default to empty string.              |
| from_ledger_id       |                          | Yes      | Uint16         | The reserve parameter, default to "0".                       |
| last_tx_hash         |                          | Yes      | String         | The hash of the previous transaction, used for transaction sorting and removing duplicates. The "0x" hash. |
| last_tx_nonce        |                          | Yes      | Uint64         | The nonce of the previous transaction, used for transaction sorting and removing duplicates. |
| note                 |                          | Yes      | String         | Transaction note.                                            |
| to_ledger_id         |                          | Yes      | Uint16         | The reserve parameter, default to "0".                       |
| receiver_action      |                          | Yes      | Object         | Transaction receiver action.                                 |
|                      | action_authorization     | Yes      | String         | Action signature, JSON structure. When the transaction is application contract deployment, the public key of the contract is displayed here. The public key is used to verify whether the contract account matches the account of the transaction sender. |
|                      | action_ext               | Yes      | String         | The reserve parameter, default to empty string.              |
|                      | action_hash              | Yes      | Uint32         | xxhash32 of the action. Default to "0". Temporary unused.    |
|                      | action_name              | Yes      | String         | The name of contract function.<br/>The system smart contract function, please refer to [System Smart Contract API](/en/Smart Contract/SystemContractAPI.md). |
|                      | action_param             | Yes      | String         | The transaction receiver action. The serialization of different action perform content please refer to [Action Param Serialization](docs- en/Interface/RPC-API/sendTransaction/action-param-serialization.md). |
|                      | action_size              | Yes      | Uint16         | Action size.                                                 |
|                      | action_type              | Yes      | Uint16         | Different transaction type correspond to different receiver action type, please refer to [TX Type and Action Type](docs- en/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md).<br/>xaction_type_asset_out                = 0,  <br/>xaction_type_create_contract_account    = 3,    <br/>xaction_type_run_contract              = 5,    <br/>xaction_type_asset_in                = 6,    <br/>xaction_type_pledge_token_vote          = 21,   <br/>xaction_type_redeem_token_vote          = 22,<br/>xaction_type_pledge_token               = 23,   <br/>xaction_type_redeem_token               = 24, |
|                      | tx_receiver_account_addr | Yes      | String         | Transaction receiver account address.                        |
| send_timestamp       |                          | Yes      | Uint64         | Transaction send timestamp.                                  |
| sender_action        |                          | Yes      | Object         | Transaction sender action.                                   |
|                      | action_authorization     | Yes      | String         | Action signature, JSON structure.                            |
|                      | action_ext               | Yes      | String         | The reserve parameter, default to empty string.              |
|                      | action_hash              | Yes      | Uint32         | xxhash32 of the action.Default to "0". Temporary unused.     |
|                      | action_name              | Yes      | String         | The reserve parameter, default to empty string.              |
|                      | action_param             | Yes      | String         | The transaction sender action. The serialization of different action perform content please refer to [Action Param Serialization](docs- en/Interface/RPC-API/sendTransaction/action-param-serialization.md). |
|                      | action_size              | Yes      | Uint16         | Action size.                                                 |
|                      | action_type              | Yes      | Uint16         | Different transaction types correspond to different sender action types, please refer to [TX Type and Action Type](docs- en/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md).<br/>xaction_type_asset_out                  = 0,    <br/>xaction_type_source_null =1, |
|                      | tx_sender_account_addr   | Yes      | String         | Transaction sender account address.                          |
| tx_deposit           |                          | Yes      | Uint32         | Transaction deposit. The unit is uTOP.                       |
| tx_expire_duration   |                          | Yes      | Uint16         | If the transaction expires, it will be discarded with the default time of 100s. |
| tx_hash              |                          | Yes      | String         | The hexadecimal of the transaction hash.                     |
| tx_len               |                          | Yes      | Uint16         | Transaction size.                                            |
| tx_random_nonce      |                          | Yes      | Uint32         | Random nonce. Default to "0".Temporary unused.               |
| tx_structure_version |                          | Yes      | String         | Transaction structure version. Default to "0".Temporary unused. |
| tx_type              |                          | Yes      | Uint16         | Transaction type.<br/>Different transaction types have different action param and action type in action.<br/>xtransaction_type_create_contract_account      = 1, <br/>xtransaction_type_run_contract                           = 3,<br/>xtransaction_type_transfer                                   = 4,<br/>xtransaction_type_vote                                             = 20, <br/>xtransaction_type_abolish_vote                               = 21,<br/>xtransaction_type_pledge_token_gas                      = 22,  <br/>xtransaction_type_redeem_token_gas                    = 23,   <br/>xtransaction_type_pledge_token_vote                     = 27,<br/>xtransaction_type_redeem_token_vote                    = 28, |

**Response Parameters**

| Parameter Name | Parameter Type | Description                                                  |
| -------------- | -------------- | ------------------------------------------------------------ |
| tx_hash        | String         | The transaction hash which can be used to retrieve the transaction consensus status. |
| tx_size        | Uint16         | The gas consumed by transaction consensus is related to the transaction size. |

**Request Sample**

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

**Response Schema**

* Successful

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

Use`get transaction` to query the transaction details and final consensus status.

* Failed

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

In case of a transaction is failed, the transaction consensus final status will not be returned directly, and the transaction details need to be queried by `get Transaction` .
