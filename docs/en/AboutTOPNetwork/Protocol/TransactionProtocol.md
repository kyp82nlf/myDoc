# Transaction 

## Overview

A transaction refers to an instruction that initiates an asset transfer from one account to another. A transaction can also contain an action that will be triggered when the transaction is being processed.

Action: An action provides flexible processing capabilities for a property. An action can be a built-in system function such as Hash and Vote, or a user-defined smart contract. Users can trigger an action by sending a transaction or a message.

Message: A message is an instruction that initiates an action on a property of an account. Data attached to a message contains the property, action, input parameters and output parameters. For security purposes, a message cannot alter the account balance.

A message is a special kind of transaction. An account sending high-frequency messages is subject to flow control and has to pay gas fees, or the account owner may be forced to perform proof of work (POW).

## Transaction Structure

| Parameter Name       |                          | Parameter Name | Description                                                  |
| -------------------- | ------------------------ | -------------- | ------------------------------------------------------------ |
| authorization        |                          | String         | Transaction body signature.                                  |
| challenge_proof      |                          | String         | The reserve parameter, default to empty string.              |
| ext                  |                          | String         | The reserve parameter, default to empty string.              |
| from_ledger_id       |                          | Uint16         | The reserve parameter, default to "0".                       |
| last_tx_hash         |                          | String         | The hash of the previous transaction ,used for transaction sorting and removing duplicates. |
| last_tx_nonce        |                          | Uint64         | The nonce of the previous transaction ,used for transaction sorting and removing duplicates. |
| note                 |                          | String         | Transaction note.                                            |
| to_ledger_id         |                          | Uint16         | The reserve parameter, default to "0".                       |
| receiver_action      |                          | Object         | Transaction receiver action.                                 |
|                      | action_authorization     | String         | Action signature, JSON structure. When the transaction is application contract deployment, the public key of the contract is displayed here. The public key is used to verify whether the contract account matches the account of the transaction sender. |
|                      | action_ext               | String         | The reserve parameter, default to empty string.              |
|                      | action_hash              | Uint32         | xxhash32 of the action.Default to "0".Temporary unused.      |
|                      | action_name              | String         | The name of contract function.<br/>The system smart contract function,please refer to [System Smart Contract API](/en/Smart Contract/SystemContractAPI.md). |
|                      | action_param             | String         | The transaction receiver action.The serialization of different action perform content please refer to [Action Param Serialization](docs- en/Interface/RPC-API/sendTransaction/action-param-serialization.md). |
|                      | action_size              | Uint16         | Action size.                                                 |
|                      | action_type              | Uint16         | Different transaction type correspond to different receiver action type, please refer to [TX Type and Action Type](docs- en/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md).<br/>xaction_type_asset_out                = 0,  <br/>xaction_type_create_contract_account    = 3,    <br/>xaction_type_run_contract              = 5,    <br/>xaction_type_asset_in                = 6,    <br/>xaction_type_pledge_token_vote          = 21,   <br/>xaction_type_redeem_token_vote          = 22,<br/>xaction_type_pledge_token               = 23,   <br/>xaction_type_redeem_token               = 24, |
|                      | tx_receiver_account_addr | String         | Transaction receiver account address.                        |
| send_timestamp       |                          | Uint64         | Transaction send timestamp.                                  |
| sender_action        |                          | Object         | Transaction sender action.                                   |
|                      | action_authorization     | String         | Action signature, JSON structure.                            |
|                      | action_ext               | String         | The reserve parameter, default to empty string.              |
|                      | action_hash              | Uint32         | xxhash32 of the action.Default to "0".Temporary unused.      |
|                      | action_name              | String         | The reserve parameter, default to empty string.              |
|                      | action_param             | String         | The transaction sender action.The serialization of different action perform content please refer to [Action Param Serialization](docs- en/Interface/RPC-API/sendTransaction/action-param-serialization.md). |
|                      | action_size              | Uint16         | Action size.                                                 |
|                      | action_type              | Uint16         | Different transaction types correspond to different sender action types, please refer to [TX Type and Action Type](docs- en/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md).<br/>xaction_type_asset_out                  = 0,    <br/>xaction_type_source_null =1, |
|                      | tx_sender_account_addr   | String         | Transaction sender account address.                          |
| tx_deposit           |                          | Uint32         | Transaction deposit.The unit is uTOP.                        |
| tx_expire_duration   |                          | Uint16         | If the transaction expires, it will be discarded with the default time of 100s. |
| tx_hash              |                          | String         | The hexadecimal of the transaction hash.                     |
| tx_len               |                          | Uint16         | Transaction size.                                            |
| tx_random_nonce      |                          | Uint32         | Random nonce.Default to "0".Temporary unused.                |
| tx_structure_version |                          | String         | Transaction structure version.Default to "0".Temporary unused. |
| tx_type              |                          | Uint16         | Transaction type.<br/>Different transaction types have different action param and action type in action.<br/>xtransaction_type_create_contract_account       = 1, <br/>xtransaction_type_run_contract                            = 3,<br/>xtransaction_type_transfer                                     = 4,<br/>xtransaction_type_vote                                             = 20, <br/>xtransaction_type_abolish_vote                               = 21,<br/>xtransaction_type_pledge_token_gas                      = 22,  <br/>xtransaction_type_redeem_token_gas                    = 23,   <br/>xtransaction_type_pledge_token_vote                     = 27,<br/>xtransaction_type_redeem_token_vote                    = 28, |

## Transaction Life Cycle

The transaction lifecycle is shown in the figure below.

![Snap47](TransactionProtocol.assets/Snap47-1599553864316.jpg)

1. After the client signs the transaction, the transaction will be directly sent to the Edge Network, to protect the Audit Network, Validate Network, Beacon Network and Sub-Beacon Network from attacks of flooding transactions.

2. After the transaction reaches the Edge Network, the transaction shall be sent to the corresponding Audit Network according to the shard where the transaction receiver's account is in.

3. After the transaction reaches the Audit Network, the transaction will be routed to the shard where the transaction receiver's account is in.

4. After the transaction reaches the shard of where the receiver's account is in, it kickstarts the transaction consensus. Want to know more about transaction consensus? Please refer to [Consensus Protocol](/en/AboutTOPNetwork/Protocol/ConsensusProtocol.md).

5. After the the transaction consensus is over, the data will be packaged into the block and stored in the database of all the nodes in the shard where the receiver's account is in and archive nodes.

