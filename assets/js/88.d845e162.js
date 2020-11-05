(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{480:function(t,_,v){"use strict";v.r(_);var n=v(18),e=Object(n.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"交易协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交易协议"}},[t._v("#")]),t._v(" 交易协议")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("p",[t._v("交易是指启动从一个账户到另一个帐户的资产转移的命令。交易还可以包含在处理交易时将被触发的操作。")]),t._v(" "),v("p",[t._v("动作(Action)：一个动作可以是一个内置的系统功能，比如Hash和投票，或者是一个自定义的智能合约。用户可以通过发送交易或消息来触发动作。")]),t._v(" "),v("p",[t._v("消息(Message)：消息就是对账户属性发起操作的指令。消息的数据包含属性、动作、输入参数和输出参数。为安全起见，消息不能更改账户余额。")]),t._v(" "),v("p",[t._v("消息是一种特殊的交易。一个发送高频消息的账户会受到流量控制，必须支付gas费，否则账户所有者可能被迫执行工作证明(POW)。")]),t._v(" "),v("h2",{attrs:{id:"交易对象数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交易对象数据结构"}},[t._v("#")]),t._v(" 交易对象数据结构")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th"),t._v(" "),v("th",[t._v("是否必选")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("authorization")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("交易体签名。采用ECDSA数字签名算法。")])]),t._v(" "),v("tr",[v("td",[t._v("challenge_proof")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("预留字段，空字符串。")])]),t._v(" "),v("tr",[v("td",[t._v("ext")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("预留字段，空字符串。")])]),t._v(" "),v("tr",[v("td",[t._v("from_ledger_id")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v('预留字段，为"0"。')])]),t._v(" "),v("tr",[v("td",[t._v("last_tx_hash")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v('交易发送方上次交易的xx64hash，用于交易的排序和去重。"0x"开头的hash。')])]),t._v(" "),v("tr",[v("td",[t._v("last_tx_nonce")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint64")]),t._v(" "),v("td",[t._v("交易发送方上次交易的nonce，用于交易的排序和去重。")])]),t._v(" "),v("tr",[v("td",[t._v("note")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("交易备注。")])]),t._v(" "),v("tr",[v("td",[t._v("to_ledger_id")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v('预留字段，为"0"。')])]),t._v(" "),v("tr",[v("td",[t._v("receiver_action")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("交易接受方执行内容。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_authorization")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("action签名，json结构，当交易为部署合约交易时，此处需要输入合约的公钥信息，公钥用来验证合约账户与交易发送方账户是否匹配。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_ext")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("预留扩展字段，空字符串。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_hash")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint32")]),t._v(" "),v("td",[t._v('整个action的xxhash32。默认为"0"，暂未使用。')])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_name")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("调用合约时，合约的函数名。系统合约函数请参见"),v("RouterLink",{attrs:{to:"/zh/AboutTOPNetwork/Protocol/TransactionProtocol/docs-cn/SmartContract/SystemContractFunction.html"}},[t._v("系统合约函数")]),t._v("。非合约交易时，默认为空。")],1)]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_param")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("接收方执行内容。不同action type执行内容的序列化请参见"),v("RouterLink",{attrs:{to:"/zh/AboutTOPNetwork/Protocol/TransactionProtocol/docs-cn/Interface/RPC-API/sendTransaction/action-param-serialization.html"}},[t._v("action param序列化")]),t._v("。")],1)]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_size")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("action对象的大小。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_type")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("接收方执行类型，不同的交易类型对应不同的action type，具体请参见"),v("RouterLink",{attrs:{to:"/zh/AboutTOPNetwork/Protocol/TransactionProtocol/docs-cn/Interface/RPC-API/sendTransaction/tx-type-and-action-type.html"}},[t._v("tx_type与action_type说明")]),t._v("。"),v("br"),t._v("xaction_type_create_contract_account    = 3,    // 创建用户合约账户  "),v("br"),t._v("xaction_type_run_contract              = 5,    // 调用智能合约"),v("br"),t._v("xaction_type_asset_in                = 6,    // 资产转入"),v("br"),t._v("xaction_type_pledge_token_vote          = 21,   //锁定TOP token兑换选票"),v("br"),t._v("    xaction_type_redeem_token_vote          = 22,   // 解锁兑换选票的TOP token"),v("br"),t._v("    xaction_type_pledge_token               = 23,   //锁定TOP token兑换gas"),v("br"),t._v("    xaction_type_redeem_token               = 24,   //解锁兑换gas的TOP token")],1)]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("tx_receiver_account_addr")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("交易接受方账户地址。")])]),t._v(" "),v("tr",[v("td",[t._v("send_timestamp")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint64")]),t._v(" "),v("td",[t._v("交易发送时间戳GMT。")])]),t._v(" "),v("tr",[v("td",[t._v("sender_action")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("交易发送方执行内容。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_authorization")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("action签名，json结构。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_ext")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("预留扩展字段，空字符串。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_hash")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint32")]),t._v(" "),v("td",[t._v('整个action的xxhash32。默认为"0"，暂未使用。')])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_name")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("预留字段，空字符串。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_param")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("发送方执行内容。不同action type执行内容的序列化请参见"),v("RouterLink",{attrs:{to:"/zh/AboutTOPNetwork/Protocol/TransactionProtocol/docs-cn/Interface/RPC-API/sendTransaction/action-param-serialization.html"}},[t._v("action param序列化")]),t._v("。")],1)]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_size")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("action对象的大小。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("action_type")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("发送方执行类型，不同的交易类型对应不同的action type，具体请参见"),v("RouterLink",{attrs:{to:"/zh/AboutTOPNetwork/Protocol/TransactionProtocol/docs-cn/Interface/RPC-API/sendTransaction/tx-type-and-action-type.html"}},[t._v("tx_type与action_type说明")]),t._v("。"),v("br"),t._v("xaction_type_asset_out                  = 0,    // 资产转出。"),v("br"),t._v("xaction_type_source_null =1,          // 源端不执行操作")],1)]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("tx_sender_account_addr")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("交易发送方账户地址。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_deposit")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint32")]),t._v(" "),v("td",[t._v("交易保证金，最低为0.1*10^6 uTOP。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_expire_duration")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易到期时长，超过则被丢弃，默认100s。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_hash")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("交易hash的十六进制。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_len")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易大小。交易消耗的gas与交易大小相关。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_random_nonce")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint32")]),t._v(" "),v("td",[t._v('随机数字。预留字段，为"0"。')])]),t._v(" "),v("tr",[v("td",[t._v("tx_structure_version")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v('交易结构版本号。默认为"0"，暂未使用。')])]),t._v(" "),v("tr",[v("td",[t._v("tx_type")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易类型，不同的交易类型，action中action_param（执行内容）及action type（执行类型）不同。"),v("br"),t._v("xtransaction_type_create_contract_account      = 1,    // 创建合约账户 "),v("br"),t._v("xtransaction_type_run_contract                           = 3,    // 调用智能合约"),v("br"),t._v("xtransaction_type_transfer                                   = 4,    // 转账"),v("br"),t._v("xtransaction_type_vote                                             = 20,   //投票"),v("br"),t._v("xtransaction_type_abolish_vote                               = 21,   //取消投票"),v("br"),t._v("xtransaction_type_pledge_token_gas                      = 22,   // 锁定TOP token兑换gas"),v("br"),t._v("xtransaction_type_redeem_token_gas                    = 23,   // 解锁兑换gas锁定的TOP token"),v("br"),t._v("xtransaction_type_pledge_token_vote                     = 27,   // 锁定TOP token兑换选票"),v("br"),t._v("xtransaction_type_redeem_token_vote                    = 28,   // 解锁兑换选票锁定的TOP token")])])])]),t._v(" "),v("h2",{attrs:{id:"tx-type与action-type说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tx-type与action-type说明"}},[t._v("#")]),t._v(" tx_type与action_type说明")]),t._v(" "),v("p",[t._v("创建交易时，不同交易类型，对应的sender_action及receiver action中action_type不同。")]),t._v(" "),v("p",[t._v("提醒：")]),t._v(" "),v("blockquote",[v("p",[t._v("创建交易时，请确保tx_type与sender action type以及receiver action type按照以下表格进行配置，否则交易将失败。")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("交易名称")]),t._v(" "),v("th",[t._v("交易类型（tx_type）")]),t._v(" "),v("th",[t._v("发送方执行类型（sender_action action_type）")]),t._v(" "),v("th",[t._v("接收方执行类型（receiver_action action_type）")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("创建用户合约")]),t._v(" "),v("td",[t._v("1: xtransaction_type_create_contract_account")]),t._v(" "),v("td",[t._v("0: xaction_type_asset_out")]),t._v(" "),v("td",[t._v("3: xaction_type_create_contract_account")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("调用合约")]),t._v(" "),v("td",[t._v("3: xtransaction_type_run_contract")]),t._v(" "),v("td",[t._v("0: xaction_type_asset_out")]),t._v(" "),v("td",[t._v("5: xaction_type_run_contract")]),t._v(" "),v("td",[t._v("调用合约交易包括："),v("br"),t._v("调用用户合约交易;"),v("br"),t._v("调用系统合约交易："),v("br"),t._v("注册节点；"),v("br"),t._v("注销节点；"),v("br"),t._v("赎回节点保证金；"),v("br"),t._v("更新节点类型；"),v("br"),t._v("减少节点保证金；"),v("br"),t._v("增加节点保证金；"),v("br"),t._v("设置节点昵称；"),v("br"),t._v("设置分红比例；"),v("br"),t._v("领取节点奖励；"),v("br"),t._v("领取投票者分红；"),v("br"),t._v("提交提案；"),v("br"),t._v("撤回提案；"),v("br"),t._v("TCC表决提案。")])]),t._v(" "),v("tr",[v("td",[t._v("转账")]),t._v(" "),v("td",[t._v("4: xtransaction_type_transfer")]),t._v(" "),v("td",[t._v("0: xaction_type_asset_out")]),t._v(" "),v("td",[t._v("6: xaction_type_asset_in")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("投票")]),t._v(" "),v("td",[t._v("20: xtransaction_type_vote")]),t._v(" "),v("td",[t._v("1: xaction_type_source_null")]),t._v(" "),v("td",[t._v("5: xaction_type_run_contract")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("取消投票")]),t._v(" "),v("td",[t._v("21: xtransaction_type_abolish_vote")]),t._v(" "),v("td",[t._v("1: xaction_type_source_null")]),t._v(" "),v("td",[t._v("5: xaction_type_run_contract")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("锁定TOP token兑换gas")]),t._v(" "),v("td",[t._v("22: xtransaction_type_pledge_token_gas")]),t._v(" "),v("td",[t._v("1: xaction_type_source_null")]),t._v(" "),v("td",[t._v("23: xaction_type_pledge_token")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("解锁兑换gas的TOP token")]),t._v(" "),v("td",[t._v("23: xtransaction_type_redeem_token_gas")]),t._v(" "),v("td",[t._v("1: xaction_type_source_null")]),t._v(" "),v("td",[t._v("24: xaction_type_redeem_token")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("锁定TOP token兑换选票")]),t._v(" "),v("td",[t._v("27: xtransaction_type_pledge_token_vote")]),t._v(" "),v("td",[t._v("1: xaction_type_source_null")]),t._v(" "),v("td",[t._v("21: xaction_type_pledge_token_vote")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("解锁兑换选票的TOP token")]),t._v(" "),v("td",[t._v("28: xtransaction_type_redeem_token_vote")]),t._v(" "),v("td",[t._v("1: xaction_type_source_null")]),t._v(" "),v("td",[t._v("22: xaction_type_redeem_token_vote")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[v("strong",[t._v("action说明")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("action")]),t._v(" "),v("th",[t._v("功能")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("xaction_type_source_null")]),t._v(" "),v("td",[t._v("源端不执行操作")]),t._v(" "),v("td",[t._v("无。")])]),t._v(" "),v("tr",[v("td",[t._v("xaction_type_asset_out")]),t._v(" "),v("td",[t._v("资产转出")]),t._v(" "),v("td",[t._v("symbol（代币符号）、amount（转出币的数量）")])]),t._v(" "),v("tr",[v("td",[t._v("xaction_type_create_contract_account")]),t._v(" "),v("td",[t._v("创建合约账户（部署合约）")]),t._v(" "),v("td",[t._v("gas_limit（一次合约调用中，用户合约愿意付出的gas费用上限）、contract code（合约代码）")])]),t._v(" "),v("tr",[v("td",[t._v("xaction_type_run_contract")]),t._v(" "),v("td",[t._v("调用合约")]),t._v(" "),v("td",[t._v("action_name（执行合约的函数名）、action_param（执行合约的参数）")])]),t._v(" "),v("tr",[v("td",[t._v("xaction_type_asset_in")]),t._v(" "),v("td",[t._v("资产转入")]),t._v(" "),v("td",[t._v("symbol（代币符号）、amount（转入币的数量）")])]),t._v(" "),v("tr",[v("td",[t._v("xaction_type_pledge_token")]),t._v(" "),v("td",[t._v("锁定TOP token兑换资源（gas)")]),t._v(" "),v("td",[t._v("symbol（代币符号）、amount（锁定币的数量）")])]),t._v(" "),v("tr",[v("td",[t._v("xaction_type_redeem_token")]),t._v(" "),v("td",[t._v("解锁兑换资源(gas)的TOP token")]),t._v(" "),v("td",[t._v("symbol（代币符号）、amount（解锁币的数量）")])]),t._v(" "),v("tr",[v("td",[t._v("xaction_type_pledge_token_vote")]),t._v(" "),v("td",[t._v("锁定TOP token兑换选票")]),t._v(" "),v("td",[t._v("vote_amount（兑票数）、lock_duration（TOP token锁定期）")])]),t._v(" "),v("tr",[v("td",[t._v("xaction_type_redeem_token_vote")]),t._v(" "),v("td",[t._v("解锁兑换选票的TOP token")]),t._v(" "),v("td",[t._v("vote_amount（赎回票数）")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);