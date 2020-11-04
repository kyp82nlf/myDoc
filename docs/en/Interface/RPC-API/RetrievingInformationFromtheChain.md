# Retrieving Information From the Chain

Query interfaces support to retrieve information from the chain.

| Method             | Description                              |
| ------------------ | ---------------------------------------- |
| getAccount         | Get account information on the chain.    |
| getTransaction     | Get transaction details.                 |
| getBlock           | Get block by account address.            |
| getStandbys        | Get candidate nodes.                     |
| getCGP             | Get on-chain governance parameters.      |
| getChainInfo       | Get the mainchain information.           |
| queryNodeInfo      | Get node information by account address. |
| queryNodeReward    | Get node reward.                         |
| listVoteUsed       | Get the distribution of node used votes. |
| queryVoterDividend | Get voter dividend.                      |
| queryProposal      | Get proposal details.                    |

## Interface Instructions

### The Premise 

Before retrieving information on the chain, please make sure that you have an account on the chain, and have sent transactions before.

### Get Transaction

**Request Method**

`getTransaction`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Descripiton                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr   | Yes      | -             | String         | The account address that stores the data being queried, transacton sender's account address or receiver's account address. |
| tx_hash        | Yes      | -             | String         | The latest transaction hash of the account which can be retrieved via `get account`. |

**返回参数**

| Parameter Name     |                      |                     |                          | Parameter Name | Description                                                  |
| ------------------ | -------------------- | ------------------- | ------------------------ | -------------- | ------------------------------------------------------------ |
| original_tx_info   |                      |                     |                          | Object         | Original transaction information.                            |
|                    | authorization        |                     |                          | String         | Transaction body signature.                                  |
|                    | challenge_proof      |                     |                          | String         | The reserve parameter, default to empty string.              |
|                    | ext                  |                     |                          | String         | The reserve parameter, default to empty string.              |
|                    | from_ledger_id       |                     |                          | Uint16         | The reserve parameter, default to "0".                       |
|                    | last_tx_hash         |                     |                          | String         | The hash of the previous transaction ,used for transaction sorting and removing duplicates. |
|                    | last_tx_nonce        |                     |                          | Uint64         | The nonce of the previous transaction ,used for transaction sorting and removing duplicates. |
|                    | note                 |                     |                          | String         | Transaction note.                                            |
|                    | send_timestamp       |                     |                          | Uint64         | Transaction send timestamp.                                  |
|                    | to_ledger_id         |                     |                          | Uint16         | The reserve parameter, default to "0".                       |
|                    | tx_action            |                     |                          | Object         | Transaction action, including "source_action" and "target_action"。 |
|                    |                      | receiver_action     |                          | Object         | Transaction receiver action.                                 |
|                    |                      |                     | action_authorization     | String         | Action signature, JSON structure. When the transaction is deploying application contract, the public key of the contract is displayed here. The public key is used to verify whether the contract account matches the account of the transaction sender. |
|                    |                      |                     | action_ext               | String         | The reserve parameter, default to empty string.              |
|                    |                      |                     | action_hash              | Uint32         | xxhash32 of the action.Default to "0".Temporary unused.      |
|                    |                      |                     | action_name              | String         | The name of contract function.<br/>The system smart contract function,please refer to [System Smart Contract API](/en/Smart Contract/SystemContractAPI.md). |
|                    |                      |                     | action_param             | String         | The transaction receiver action.The parameter serialization of different action,please refer to [Action Param Serialization](docs- en/Interface/RPC-API/sendTransaction/action-param-serialization.md). |
|                    |                      |                     | action_size              | Uint16         | Action size.                                                 |
|                    |                      |                     | action_type              | Uint16         | Different transaction type correspond to different receiver action type, please refer to [TX Type and Action Type](docs- en/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md).<br/>xaction_type_create_contract_account    = 3,    <br/>xaction_type_run_contract              = 5,    <br/>xaction_type_asset_in                = 6,    <br/>xaction_type_pledge_token_vote          = 21,   <br/>xaction_type_redeem_token_vote          = 22,<br/>xaction_type_pledge_token               = 23,   <br/>xaction_type_redeem_token               = 24, |
|                    |                      |                     | tx_receiver_account_addr | String         | Transaction receiver account address.                        |
|                    |                      | sender_action       |                          | Object         | Transaction sender action.                                   |
|                    |                      |                     | action_authorization     | String         | Action signature, JSON structure.                            |
|                    |                      |                     | action_ext               | String         | The reserve parameter, default to empty string.              |
|                    |                      |                     | action_hash              | Uint32         | xxhash32 of the action. Default to "0".Temporary unused.     |
|                    |                      |                     | action_name              | String         | The reserve parameter, default to empty string.              |
|                    |                      |                     | action_param             | String         | The transaction sender action.The parameter serialization of different action,please refer to [Action Param Serialization](docs- en/Interface/RPC-API/sendTransaction/action-param-serialization.md). |
|                    |                      |                     | action_size              | Uint16         | Action size.                                                 |
|                    |                      |                     | action_type              | Uint16         | Different transaction types correspond to different sender action types, please refer to [TX Type and Action Type](docs- en/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md).<br/>xaction_type_asset_out                  = 0,    <br/>xaction_type_source_null =1, |
|                    |                      |                     | tx_sender_account_addr   | String         | Transaction sender account address.                          |
|                    | tx_deposit           |                     |                          | Uint32         | Transaction deposit. The unit is uTOP.                       |
|                    | tx_expire_duration   |                     |                          | Uint16         | If the transaction expires, it will be discarded with the default time of 100s. |
|                    | tx_hash              |                     |                          | String         | The hexadecimal of the transaction hash.                     |
|                    | tx_len               |                     |                          | Uint16         | Transaction size.                                            |
|                    | tx_random_nonce      |                     |                          | Uint32         | Random nonce. Default to "0".Temporary unused.               |
|                    | tx_structure_version |                     |                          | String         | Transaction structure version.Default to "0". Temporary unused. |
|                    | tx_type              |                     |                          | Uint16         | Transaction type.<br/>Different transaction types have different action param and action type in action.<br/>xtransaction_type_create_contract_account      = 1, <br/>xtransaction_type_run_contract                           = 3,<br/>xtransaction_type_transfer                                   = 4,<br/>xtransaction_type_vote                                             = 20, <br/>xtransaction_type_abolish_vote                               = 21,<br/>xtransaction_type_pledge_token_gas                      = 22,  <br/>xtransaction_type_redeem_token_gas                    = 23,   <br/>xtransaction_type_pledge_token_vote                     = 27,<br/>xtransaction_type_redeem_token_vote                    = 28, |
| tx_consensus_state |                      |                     |                          | Object         | Transaction consensus status.                                |
|                    | confirm_unit_info    |                     |                          | Object         | Unit block generated in the third round of consensus.        |
|                    |                      | exec_status         |                          | String         | Final consensus status of the transaction: success or failure. |
|                    |                      | height              |                          | Uint64         | The height of the unit block which is generated in the third round of consensus. |
|                    |                      | recv_tx_exec_status |                          | String         | Consensus status of transaction receiver: success/failure.<br/>Fail or refuse to consensus, usually occurs in contract transaction. |
|                    |                      | tx_exec_status      |                          | String         | Consensus status of transaction sender: success/failure.     |
|                    |                      | unit_hash           |                          | String         | The hash of the unit block which is generated in the third round of consensus. |
|                    |                      | used_deposit        |                          | Uint32         | After the third round of consensus, the transaction deposit of the sender's account will be deducted if the gas is not enough. The unit is uTOP. |
|                    |                      | used_disk           |                          | Uint32         | Default to "0".                                              |
|                    |                      | used_gas            |                          | Uint32         | Deducted gas from sender account after the third round of consensus. The unit is Tgas.<br/>If the contract account has paid part of the gas, then the rest of the whole gas consumed by the transaction is deducted after this round of consensus; If the contract account is unable to pay its share of gas, then the whole gas consumed by the transaction is deducted. |
|                    | recv_unit_info       |                     |                          | Object         | Unit block generated in the second round of consensus.       |
|                    |                      | height              |                          | Uint64         | The height of the unit block which is generated in the second round of consensus. |
|                    |                      | unit_hash           |                          | String         | The hash of the unit block which is generated in the second round of consensus. |
|                    |                      | used_deposit        |                          | Uint32         | Default to "0".                                              |
|                    |                      | used_disk           |                          | Uint32         | Default to "0".                                              |
|                    |                      | used_gas            |                          | Uint32         | Deducted gas after the second round of consensus. The unit is Tgas. |
|                    | send_unit_info       |                     |                          | Object         | Unit block generated in the round of consensus.              |
|                    |                      | height              |                          | Uint64         | The height of the unit block which is generated in the first round of consensus. |
|                    |                      | tx_fee              |                          | Uint64         | The system will automatically deduct 100*10^6 uTOP tokens from the transaction sender's account as the transaction fee for running Root-Beacon system contract (registration node related, proposal related, starting node process) and burn it. |
|                    |                      | unit_hash           |                          | String         | The hash of the unit block which is generated in the first round of consensus. |
|                    |                      | used_deposit        |                          | Uint32         | Default to "0".                                              |
|                    |                      | used_disk           |                          | Uint32         | Default to "0".                                              |
|                    |                      | used_gas            |                          | Uint32         | Deducted gas after the first round of consensus. The unit is Tgas.<br/>For cross-account transactions that do not run application contract, the gas consumed by the transaction shall be borne by the sender. If the sender account gas is sufficient, the gas required by the transaction will be deducted after the first round of consensus. If the sender account gas is insufficient, the system will deduct all the gas available in the sender's account after first round of consensus, and the system will deduct the sender transaction deposit to exchange gas to pay the remaining cost after the third round of consensus. |

**Request Sample**

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

**Response Schema**

Different transaction information is returned according to the different status of the transaction, as follows.

* Successful

Caution：

> * If the transaction is a single-account transaction, there is only one round of consensus under the transaction sender. Only the information of "confirm_unit_info" is returned in the result.
> * If the transaction is an across-account transaction, there are three rounds of consensuse in total. The information of the three consensus, including "confirm_unit_info (the second round of consensus under the sender) ", "recv_unit_info(consensus under the receiver)" and "send_unit_info" (the first round of consensus under the sender) are returned in the result. 

1.The transaction is in the block, but not in the transaction pool, and the transaction status is "confirmed." The original transaction information and all block information, will be written as shown below.

Determine whether the transaction is successful or not according to the parameter "exec_status":

(1)When the value of exec_status is "success", it proves that the transaction is finally successful.

(2)When the value of exec_status is "failure", the transaction fails. At this time, the value of recv_tx_exec_status is "failure", indicating that the consensus under the receiver is failed.

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
               "tx_receiver_account_addr" : "T-0-La8cTjNyTEmspAyTbXEsMhRPN6U9A7JRvH"
            },
            "sender_action" : {
               "action_authorization" : "",
               "action_ext" : "",
               "action_hash" : 0,
               "action_name" : "",
               "action_param" : "0x000000001027000000000000",
               "action_size" : 78,
               "action_type" : 0,
               "tx_sender_account_addr" : "T-0-LSiFkNdXxRh9KyrYDsDEX2QJrnCCUScMqB"
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

The transaction is both in the block and the transaction pool, the transaction status is "pending". The original transaction information and some valid block information are returned by the query.

As shown below, the transaction completes the first round of consensus and returns a valid information of "send_unit_info" when the second and third rounds of consensus have not yet been successful.

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

3.The transaction is not in the block, but in the transaction pool, the transaction status is "pending." Only the original transaction information is returned, and the transaction consensus status is "null", as shown below.

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

* Failed

The transaction is neither in the block nor in the transaction pool.

```
{
   "errmsg" : "transaction not found",
   "errno" : 11,
   "sequence_id" : "20"
}
```

### Get Account

**Request Method**

`getAccount`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr   | Yes      | -             | String         | The account address that stores the data being queried. You can enter the account address on the chain you are currently using. |

**Response Parameters**

| Parameters Name         | Parameter  Type | Description                                                  |
| ----------------------- | --------------- | ------------------------------------------------------------ |
| account_addr            | String          | Normal user account address or contract account address.     |
| available_gas           | Uint64          | The available gas of the account address. The unit is Tgas.  |
| balance                 | Uint64          | The balance of the account address. The unit is uTOP.        |
| burned_token            | Uint64          | All burned TOP tokens of the account address. The unit is uTOP. |
| cluster_id              | Uint8           | cluster ID。                                                 |
| created_time            | Uint64          | The clock height when the account created on the blockchain. |
| disk_staked_token       | Uint64          | The amount of locked TOP tokens to exchange disk. The unit is uTOP. |
| gas_staked_token        | Uint64          | The amount of locked TOP tokens to exchange gas. The unit is uTOP. |
| group_id                | Uint8           | group ID。                                                   |
| latest_tx_hash          | String          | The hash of the latest successful transaction.               |
| latest_tx_hash_xxhash64 | String          | The xx64hash of the latest successful transaction.           |
| latest_unit_height      | Uint64          | The unit block height of the latest successful transaction.  |
| lock_balance            | Uint64          | Locked TOP tokens used for application contract transactions. Unit of measurement is uTOP<br/>When running applicaiton contract, the transaction sender can transfer TOP tokens to the contract account at the same time. If the contract fails to execute, the transferred TOP tokens needs to be returned to the sender. Therefore, the transferred money should be locked before running the contract successfully. |
| lock_deposit_balance    | Uint64          | Application contract transaction costs are related to the CPU time and transaction size.The costs of the application contract transactions cannot be determined at the beginning of the transaction. The method is to lock part of the transaction deposit of the transaction sender. At the third round of consensus of the transaction, according to the final execution of the application contract, the transaction deposit of the sender is deducted to pay for the costs. Measured in uTOP. |
| lock_gas                | Uint64          | Application contract transaction costs are related to the CPU time and transaction size.The costs of the application contract transactions cannot be determined at the beginning of the transaction. The method adopted is to freeze part of the gas of the transaction sender. At the third round of consensus of the transaction, according to the final execution of the application contract, the gas of the sender is deducted to pay for the costs. Measured in Tgas. |
| nonce                   | Uint64          | The nonce of the latest successful transaction. Unique in the global network. |
| total_free_gas          | Uint64          | Total free gas of the account address. Measured in Tgas.<br/>At present, when the account balance ≥100*10^6 uTOP, the system will give the account 25,000 Tgas for free. This value changes along with the on-chain governance parameters changes. |
| total_gas               | Uint64          | Total gas of the account address. Measured in Tgas.          |
| total_stake_gas         | Uint64          | Total gas obtained by locking TOP Tokens. Measured in Tgas.  |
| unlock_disk_staked      | Uint64          | TOP tokens to exchange disk in unlock. After initiating the unlock, we need to wait 24 hours for the unlocked amount to arrive in the account. |
| unlock_gas_staked       | Uint64          | TOP tokens to exchange gas in unlock. After initiating the unlock, we need to wait 24 hours for the unlocked amount to arrive in the account. |
| unused_vote_amount      | Uint64          | Unused vote amount of the account.                           |
| vote_staked_token       | Uint64          | TOP tokens to exchange votes in lock.                        |
| zone_id                 | Uint8           | zone ID.                                                     |

To query application contract account information, return the following two parameters in addition to the above parameters.

| Parameter Name          | Parameter Name | Description                                                  |
| ----------------------- | -------------- | ------------------------------------------------------------ |
| contract_code           | String         | Application contract code.                                   |
| contract_parent_account | String         | Contract parent account that deployed the application contract. |

**Request Sample**

```
account_address=T-0-LVb72cJ9LzaQbdR41Zvx7dsAL1oDFFGQrJ&
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

**Response Schema**

* Successful

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

* Failed

```
{
   "errmsg" : "account not found on chain",
   "errno" : 11,
   "sequence_id" : "38"
}
```

### Get Block By Account Address

Get block by account address.

The premise of retrieving block information is that the account has sent the transaction and the transaction was consensused successfully.

**Request Method**

`getBlock`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr   | Yes      | -             | String         | The account address that stores the data being queried.<br/>Use the ordinary account address to retrieve the unit block, such as"T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT".<br/>Use the table block account address to retrieve the unit block, such as"T-a-gRD2qVpp2S7UpjAsznRiRhbE1qNnhMbEDp@0". |
| height         | Yes      | -             | String/Uint64  | The latest block height(String) or the specific block height(Uint64). |

**Request Parameters**

* unit block

| Parameter Name |                   |                 |                     |                     | Parameter Name  | Description                                                  |
| -------------- | ----------------- | --------------- | ------------------- | ------------------- | --------------- | ------------------------------------------------------------ |
| body           |                   |                 |                     |                     | Object          |                                                              |
|                | fullunit          |                 |                     |                     | Object          | To save data storage space, every 21 lightunits are packaged as a fullunit, and the 21 lightunits are cleared. |
|                | lightunit         |                 |                     |                     | Object          |                                                              |
|                |                   | lightunit_input |                     |                     | Object          | Transaction information in lightunit.                        |
|                |                   |                 | txs                 |                     | Object          | The transaction information packaged in this block,the structured is a map array, and the key of the map is a transaction hash, such as: 6e734fed40b907bb64d257968e6a46a79c4ca144088d330b674cc8b545350324 |
|                |                   |                 |                     | recv_tx_exec_status | Uint8           | Consensus status of the transaction receiver: 1-- success; 2-- failure. The second round of consensus fails or refuses to execute, which usually occurs when the in contract transaction. |
|                |                   |                 |                     | send_tx_lock_gas    | Uint64          | In a application contract transaction, the gas that the transaction sender can pay for the transaction receiver. |
|                |                   |                 |                     | tx_exec_status      | Uint8           | Sender's transaction consensus status, 1-- Success; 2 - fail. |
|                |                   |                 |                     | tx_consensus_phase  | Uint8           | Transaction consensus phase:1--self；2--send；3--recv。<br/>enum_transaction_subtype_self      = 1,  // self operate<br/>enum_transaction_subtype_send      = 2,  // send to other account<br/>enum_transaction_subtype_recv      = 3,  // receive from other account<br/>enum_transaction_subtype_recv_ack  = 4(confirm),  // receive ack from other account |
|                |                   |                 |                     | used_tx_deposit     | Uint32          | Consumed transaction deposit，the unit is uTOP。             |
|                |                   |                 |                     | used_disk           | Uint32          | Consumed disk resource.                                      |
|                |                   |                 |                     | used_gas            | Uint32          | Consumed gas resource，the unit is Tgas。                    |
|                |                   | lightunit_state |                     |                     | Object          | Changes in status caused by transactions in the lightunit block. |
|                |                   |                 | balance_change      |                     | Uint64          | Balance change.                                              |
|                |                   |                 | native_property     |                     | Key-value Array | Account native property. If the property is null, it indicates that the property has not been set this time, and is equivalent to 0 in calculation. |
|                |                   |                 | custom_property_key |                     | String Array    | Get the list of custom property names with changes,only returning keys. |
| hash           |                   |                 |                     |                     | String          | The hexadecimal string of this block hash.                   |
| header         |                   |                 |                     |                     | Object          |                                                              |
|                | auditor_xip       |                 |                     |                     | String          | Auditor leader node of this block(xip).                      |
|                | timerblock_height |                 |                     |                     | Uint64          | Clock block height.                                          |
|                | validator         |                 |                     |                     | String          | Validator leader node of this block.                         |
|                | validator_xip     |                 |                     |                     | String          | Validator leader node of this block(xip).                    |
| height         |                   |                 |                     |                     | Uint64          | Block height.                                                |
| owner          |                   |                 |                     |                     | String          | The unit block owner.                                        |
| prev_hash      |                   |                 |                     |                     | String          | The hexadecimal of the hash of the previous block.           |
| timestamp      |                   |                 |                     |                     | Uint64          | Block time stamp(GMT).                                       |

* table block

| Parameter Name |           |                   |                      | Parameter Type | Description                                                  |
| -------------- | --------- | ----------------- | -------------------- | -------------- | ------------------------------------------------------------ |
| tableblock     |           |                   |                      | Object         | The tableblock contains multiple units. When there is no new transaction on the chain for a long time, the latest height data of the tableblock is "null". |
|                | units     | lightunit_input   |                      | Object         | Tableblock stores information of unit blocks.                |
|                |           |                   | is_contract_create   | Bool           | Transactions created by contract.                            |
|                |           |                   | last_tx_nonce        | String         | Nonce of previous transaction.                               |
|                |           |                   | tx_sender_locked_gas | Uint64         | In a application contract transaction, the gas that the transaction sender can pay for the transaction receiver. |
|                |           |                   | tx_consensus_phase   | Uint8          | Transaction consensus  phase:1（self）,2（send）,3（recv）<br/>enum_transaction_subtype_self      = 1,  // self operate<br/>enum_transaction_subtype_send      = 2,  // send to other account<br/>enum_transaction_subtype_recv      = 3,  // receive from other account<br/>enum_transaction_subtype_recv_ack  = 4(confirm),  // receive ack from other account |
|                |           | lightunit_state   |                      | Object         | Please refer to the unit block parameter description.        |
|                |           | unit_height       |                      | Uint64         | Unit block height.                                           |
|                | hash      |                   |                      | String         | The hexadecimal string of this block hash.                   |
|                | header    |                   |                      | Object         |                                                              |
|                |           | auditor_xip       |                      | String         | Auditor leader node of this block(xip).                      |
|                |           | timerblock_height |                      | Uint64         | Clock block height.                                          |
|                |           | auditor           |                      | String         | Auditor leader node of this block.                           |
|                |           | validator_xip     |                      | String         | Validator leader node of this block(xip).                    |
|                | height    |                   |                      | Uint64         | Block height.                                                |
|                | owner     |                   |                      | String         | The table block owner.                                       |
|                | prev_hash |                   |                      | String         | The hexadecimal of the hash of the previous block.           |
|                | timestamp |                   |                      | Uint64         | Block time stamp(GMT).                                       |

**Request Sample**

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
    "account_addr" : "T-a-gRD2qVpp2S7UpjAsznRiRhbE1qNnhMbEDp@0",
    "height" : 264
   }
}&
method=getBlock&
sequence_id=5&
identity_token=&
version=1.0
```

**Response Schema**

* Successful

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
                           "send_tx_lock_Tgas" : 0,
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
                           "sender_tx_locked_gas" : 0,
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

* Failed

Account address error.

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

### Get Standbys

Includes all nodes information in the candidate pool contract on the Root-Beacon, including information of nodes those have been elected as the edge, archive, Sub-Beacon, Root-Beacon.

**Request**

`getStandbys`

**Request Parameters**

| Parameter Name    | Required | Default Value | Parameter Type | Description                                                  |
| ----------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr      | Yes      | -             | String         | The account address that stores the data being queried. You may use the "node registration" contract account address: T-21-38DSqqwBWkHKxkVuCq3htW47BGtJRCM2paf@0. |
| node_account_addr | No       | -             | String         | Candidate node account address. If not specified, all candidate nodes are queried by default. |

**Response Parameters**

| Parameter Name       | Parameter Type | Description                                                  |
| -------------------- | -------------- | ------------------------------------------------------------ |
| node_sign_key        | String         | Public key of account or asset-free public-private key pair used when registering node. |
| node_account_address | String         | Node account address.                                        |
| program_version      | String         | Version of TOP Network mainchain.                            |
| stake                | Unit64         | Node comprehensive stake.                                    |

**Response Schema**

* Successful

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

* Failed

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "50"
}
```

### Get On-chain Governance Parameters

**Request Method**

`getCGP`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr   | Yes      | -             | String         | The account address that stores the data being queried. You may use the "on-chain governance" contract account address: T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0. |

**Response Parameters**

The query returns the latest values of the parameters, the description and initial values of the parameters please refer to [On-chain Governance Parameters](/en/On-ChainGovernance/On-ChainGovernanceParameters.md).

**Request Sample**

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

**Response Schema**

* Successful

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

* Failed

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "5"
}
```

### Get ChainInfo

**Request Method**

`getChainInfo`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr   | Yes      | -             | String         | The account address that stores the data being queried. You can enter the account address on the chain you are currently using. |

**Response Parameters**

| Parameter Name         | Parameter Type | Description                               |
| ---------------------- | -------------- | ----------------------------------------- |
| first_timerblock_hash  | String         | Hash of the first clock block.            |
| first_timerblock_stamp | Uint64         | Generation time of the first clock block. |
| version                | String         | Mainchain version.                        |

**Request Sample**

```
account_address=T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn&
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

**Response Schema**

* Successful

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

* Failed

None.

### Query Node Information

**Request Method**

`queryNodeInfo`

**Request Parameters**

| Parameter Name    | Required | Default Value | Parameter Type | Description                                                  |
| ----------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr      |          |               |                | The account address that stores the data being queried. You may use the "node registration" contract account address: T-21-38DSqqwBWkHKxkVuCq3htW47BGtJRCM2paf@0. |
| node_account_addr | No       | -             | String         | Node account address, if not specified, all nodes are queried by default. |

**Response Parameters**

| Parameter Name       | Parameter Type | Description                                                  |
| -------------------- | -------------- | ------------------------------------------------------------ |
| account_addr         | String         | Node account address.                                        |
| auditor_credit       | String         | Auditor credit.                                              |
| auditor_stake        | Uint64         | Auditor stake: auditor stake=(node deposit+vote amount)*auditor credit |
| dividend_ratio       | Integer        | Dividend ratio, percentage%, value[0,100]。                  |
| network_id           | String         | A value of 0 indicates that the node joins the mainchain network. |
| node_deposit         | Uint64         | Node deposit(uTOP).                                          |
| nodename             | String         | Node name.                                                   |
| registered_node_type | String         | Registered node type:<br/>edge, validator, advance.          |
| node_sign_key        | String         | Public key used in registering node.                         |
| validator_credit     | String         | Validator credit.                                            |
| validator_stake      | Uint64         | Validator stake: validator stake=(node deposit+vote amount)/2 |
| vote_amount          | Uint64         | Total number of votes received from voting.                  |

**Request Sample**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT",
    "node_account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4"
   }
}&
method=queryNodeInfo&
sequence_id=4&
identity_token=&
version=1.0
```

**Response Schema**

* Successful

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

* Failed

The node has not been registered.

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "8"
}
```

### Query Node Reward

**Request Method**

`queryNodeReward`

**Request Parameters**

| Parameter Name    | Required | Default Value | Parameter Type | Description                                                  |
| ----------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr      | Yes      | -             | String         | The account address that stores the data being queried. You may use the "shard claim node reward" contract account address: T-2-MT3itmNbWs4XYn8R1NUcoucmppJwN7qE69. |
| node_account_addr | No       | -             | String         | Node account address, if not specified, all nodes reward are queried by default. |

**Response Parameters**

| Parameter Name  | Parameter Type | Description                                         |
| --------------- | -------------- | --------------------------------------------------- |
| accumulated     | Uint64         | Total amount of node reward.The unit is uTOP.       |
| issue_time      | Uint64         | The height of the clock when the reward is issued.  |
| last_claim_time | Uint64         | Clock height of the last time to claim node reward. |
| unclaimed       | Uint64         | Unclaimed reward.The unit is uTOP.                  |

**Request Sample**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT",
    "node_account_addr" : ""
   }
}&
method=queryNodeReward&
sequence_id=4&
identity_token=&
version=1.0
```

**Response Schema**

* Successful

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

* Failed

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "10"
}
```

### List Vote Used

**Request Method**

`listVoteUsed`

**Request Parameters**

| Parameter Name    | Required | Default Value | Parameter Type | Description                                                  |
| ----------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr      | Yes      | -             | String         | The account address that stores the data being queried. You may use the "vote" contract account address: T-2-MVfDLsBKVcy1wMp4CoEHWxUeBEAVBL9ZEa. |
| node_account_addr | Yes      | -             | String         | Node account address to be queried.                          |

**Response Parameters**

| Parameter Name | Parameter Type | 说明                                                         |
| -------------- | -------------- | ------------------------------------------------------------ |
| vote_infos     | Map Array      | Account address of node be voted(String); Amount of votes(Integer). |

**Request Sample**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT",
    "node_account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4"
   }
}&
method=listVoteUsed&
sequence_id=4&
identity_token=&
version=1.0
```

**Response Schema**

* Successful

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

* Failed

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "12"
}
```

### Query Voter Dividend

**Request Method**

`queryVoterDividend`

**Request Parameters**

| Parameter Name    | Required | Default Value | Parameter Type | Description                                                  |
| ----------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| account_addr      |          |               |                | The account address that stores the data being queried. You may use the "shard claim node reward" contract account address: T-2-MVfDLsBKVcy1wMp4CoEHWxUeBEAVBL9ZEa. |
| node_account_addr | Yes      | -             | String         | Voter account address.                                       |

**Response Parameters**

| Parameter Name  |                 | Parameter Type | Description                                                  |
| --------------- | --------------- | -------------- | ------------------------------------------------------------ |
| accumulated     |                 | Uint64         | Total amount of voter dividend.The unit is uTOP.             |
| last_claim_time |                 | Uint64         | Clock height of the last time to claim voter dividend.       |
| node_dividend   |                 | List           | Dividend information of the node being voted.                |
|                 | account_addr    | String         | Account address of the node being voted.                     |
|                 | accumulated     | Uint64         | The dividend given to the voter by the node be voted.The unit is uTOP. |
|                 | last_claim_time | Uint64         | The height of the clock at which the dividend of the node was last claimed. |
|                 | unclaimed       | Uint64         | The unclaimed dividend given to the voter by the node be voted.The unit is uTOP. |
| unclaimed       |                 | Uint64         | The total amount of dividends the voter has not claimed.The unit is uTOP. |

**Request Sample**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT",
    "node_account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4"
   }
}&
method=queryVoterDividend&
sequence_id=4&
identity_token=&
version=1.0
```

**Reponse Schema**

* Successful

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

* Failed

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "14"
}
```

### Query Proposal

**Request Method**

`queryProposal`

**Request Parameters**

| Parameter Name | Required | 默认值 | 类型   | 说明                                                         |
| -------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| account_addr   | Yes      | -      | String | The account address that stores the data being queried. You may use the "on-chain governance" contract account address: T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0. |
| proposal_id    | No       | -      | String | Proposal ID, if not specified, all proposals are queried by default. |

**Response Parameters**

| Parameter Name         | Parameter Type | Description                                                  |
| ---------------------- | -------------- | ------------------------------------------------------------ |
| effective_timer_height | Uint64         | Proposal effective clock height. If the clock height is less than the clock height at which the proposal was voted through, the proposal will take effect immediately. |
| expire_time            | String         | Proposal expiration time. If the proposal is not approved or rejected by TCC within 259,200 clock height, the proposal will become invalid. |
| priority               | Uint8          | Proposal priority: 1--Normal；2--Important；3--Critical。<br/>Only the TCC members have the right to vote on a proposal. For proposals of different levels, the voting rules are different:<br/>Normal: Approval by 51% of members is required.<br/>Important: It shall be approved by 51% of the members, and no more than 25% of the members shall abstain.<br/>Critical: Two-thirds of the committee members are required to approve, and no more than 20% of the members are opposed. |
| proposal_account_addr  | String         | The account address of the initiator of proposal.            |
| proposal_deposit       | Uint64         | Proposal deposit,the minimum is 100*10^6 uTOP。              |
| proposal_id            | String         | Proposal ID, automatically generated by the system, unique.  |
| proposal_type          | Uint8          | Proposal Type：1--on-chain parameter modification proposal；2--community fund management proposal. |
| target                 | String         | On-Chain Governance Parameter Modification Proposal: Target is on-chain governance parameter, more about on-chain governance parameter please refer to [On-Chain Governance Prarameters](/en/On-ChainGovernance/On-ChainGovernanceParameters) ;<br/>Community Fund Management Proposal: Target is burn account address: T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug. |
| value                  | String         | When target is on-chain governance parameter, value=new parameter value.<br/>When target is burn account address, value=transferd amount, the unit is uTOP. |
| voting_status          | Uint16         | Voting status of the proposal: 0-- not begun; 8-- In progress; 9 - failure; 10 - success. |

**Request Sample**

```
target_account_addr=T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT&
body={
"params" : {
    "account_addr" : "T-0-Lh2X4xGs4C88JuPqwNcBwWugZw7Hd3TytT",
    "node_account_addr" : "T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4"
   }
}&
method=queryProposal&
sequence_id=4&
identity_token=&
version=1.0
```

**Responses Schema**

* Successful

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

* Failed

```
{
	"data": null,
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "16"
}
```

