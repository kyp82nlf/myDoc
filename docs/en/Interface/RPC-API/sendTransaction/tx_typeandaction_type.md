# tx_type and action_type

The action_type in the sender action and receiver action for each transaction type is different when creating the transaction.

Caution:

> When creating a transaction, make sure that tx_type, sender action_type and receiver action_type are configured according to the following, otherwise the transaction will fail.

| Transaction Name         | tx_type                                      | sender_action action_type   | receiver_action action_type             | Note                                                         |
| ------------------------ | -------------------------------------------- | --------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| Create contract account. | 1: xtransaction_type_create_contract_account | 0: xaction_type_asset_out   | 3: xaction_type_create_contract_account |                                                              |
| Run contract.            | 3: xtransaction_type_run_contract            | 0: xaction_type_asset_out   | 5: xaction_type_run_contract            | Running contract transactions includes:<br/>Register node；<br/>Ungister node；<br/>Redeem node deposit；<br/>Update node type；<br/>Unstake deposit；<br/>Stake deposit；<br/>Set node name；<br/>Set dividend ratio；<br/>Claim node reward；<br/>Claim node dividend<br/>Submit proposal；<br/>Withdraw proposal；<br/>TCC vote on proposal. |
| Transfer                 | 4: xtransaction_type_transfer                | 0: xaction_type_asset_out   | 6: xaction_type_asset_in                |                                                              |
| Vote node.               | 20: xtransaction_type_vote                   | 1: xaction_type_source_null | 5: xaction_type_run_contract            |                                                              |
| Unvote node.             | 21: xtransaction_type_abolish_vote           | 1: xaction_type_source_null | 5: xaction_type_run_contract            |                                                              |
| Stake gas.               | 22: xtransaction_type_pledge_token_gas       | 1: xaction_type_source_null | 21: xaction_type_pledge_token           |                                                              |
| Unstake gas.             | 23: xtransaction_type_redeem_token_gas       | 1: xaction_type_source_null | 22: xaction_type_redeem_token           |                                                              |
| Stake votes.             | 27: xtransaction_type_pledge_token_vote      | 1: xaction_type_source_null | 23: xaction_type_pledge_token_vote      |                                                              |
| Unstake votes.           | 28: xtransaction_type_redeem_token_vote      | 1: xaction_type_source_null | 24: xaction_type_pledge_token_vote      |                                                              |

**Action**

| Action Name                          | Functions                                                    | Parameters                                                   |
| ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| xaction_type_source_null             | The source side does not perform operations.                 | None.                                                        |
| xaction_type_asset_out               | Assets off.                                                  | symbol, amount                                               |
| xaction_type_create_contract_account | Create application contract account.                         | gas_limit(The upper limit of the gas fee that the user is willing to pay for the transaction.), contract code |
| xaction_type_run_contract            | Run contract(include platform contract and appliacation contract) | action_name(function name), action_param                     |
| xaction_type_asset_in                | Assets in.                                                   | symbol, amount                                               |
| xaction_type_pledge_token            | Lock TOP tokens to get gas.                                  | symbol, amount(Locked TOP tokens)                            |
| xaction_type_redeem_token            | Unlock TOP tokens for getting gas.                           | symbol, amount(Unlocked TOP tokens)                          |
| xaction_type_pledge_token_vote       | Lock TOP toeks to get votes.                                 | vote_amount, lock_duration                                   |
| xaction_type_redeem_token_vote       | Unlock TOP tokens for getting votes.                         | vote_amount(Amount of redeemed votes.)                       |