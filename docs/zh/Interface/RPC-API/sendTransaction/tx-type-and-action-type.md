# tx_type与action_type说明

创建交易时，不同交易类型，对应的sender_action及receiver action中action_type不同。

提醒：

> 创建交易时，请确保tx_type与sender action type以及receiver action type按照以下表格进行配置，否则交易将失败。

| 交易名称                | 交易类型（tx_type）                          | 发送方执行类型（sender_action action_type） | 接收方执行类型（receiver_action action_type） | 备注                                                         |
| ----------------------- | -------------------------------------------- | ------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| 创建用户合约            | 1: xtransaction_type_create_contract_account | 0: xaction_type_asset_out                   | 3: xaction_type_create_contract_account       |                                                              |
| 调用合约                | 3: xtransaction_type_run_contract            | 0: xaction_type_asset_out                   | 5: xaction_type_run_contract                  | 调用合约交易包括：<br/>注册节点；<br/>注销节点；<br/>赎回节点保证金；<br/>更新节点类型；<br/>减少节点保证金；<br/>增加节点保证金；<br/>设置节点昵称；<br/>设置分红比例；<br/>领取节点奖励；<br/>领取投票者分红；<br/>提交提案；<br/>撤回提案；<br/>TCC表决提案。 |
| 转账                    | 4: xtransaction_type_transfer                | 0: xaction_type_asset_out                   | 6: xaction_type_asset_in                      |                                                              |
| 投票                    | 20: xtransaction_type_vote                   | 1: xaction_type_source_null                 | 5: xaction_type_run_contract                  |                                                              |
| 取消投票                | 21: xtransaction_type_abolish_vote           | 1: xaction_type_source_null                 | 5: xaction_type_run_contract                  |                                                              |
| 锁定TOP token兑换gas    | 22: xtransaction_type_pledge_token_gas       | 1: xaction_type_source_null                 | 21: xaction_type_pledge_token                 |                                                              |
| 解锁兑换gas的TOP token  | 23: xtransaction_type_redeem_token_gas       | 1: xaction_type_source_null                 | 22: xaction_type_redeem_token                 |                                                              |
| 锁定TOP token兑换选票   | 27: xtransaction_type_pledge_token_vote      | 1: xaction_type_source_null                 | 23: xaction_type_pledge_token_vote            |                                                              |
| 解锁兑换选票的TOP token | 28: xtransaction_type_redeem_token_vote      | 1: xaction_type_source_null                 | 24: xaction_type_pledge_token_vote            |                                                              |

**action说明**

| action                               | 功能                         | 参数                                                         |
| ------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| xaction_type_source_null             | 源端不执行操作               | 无。                                                         |
| xaction_type_asset_out               | 资产转出                     | symbol（代币符号）、amount（转出币的数量）                   |
| xaction_type_create_contract_account | 创建合约账户（部署合约）     | gas_limit（一次合约调用中，用户合约愿意付出的gas费用上限）、contract code（合约代码） |
| xaction_type_run_contract            | 调用合约                     | action_name（执行合约的函数名）、action_param（执行合约的参数） |
| xaction_type_asset_in                | 资产转入                     | symbol（代币符号）、amount（转入币的数量）                   |
| xaction_type_pledge_token            | 锁定TOP token兑换资源（gas)  | symbol（代币符号）、amount（锁定币的数量）                   |
| xaction_type_redeem_token            | 解锁兑换资源(gas)的TOP token | symbol（代币符号）、amount（解锁币的数量）                   |
| xaction_type_pledge_token_vote       | 锁定TOP token兑换选票        | vote_amount（兑票数）、lock_duration（TOP token锁定期）      |
| xaction_type_redeem_token_vote       | 解锁兑换选票的TOP token      | vote_amount（赎回票数）                                      |