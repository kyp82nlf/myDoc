(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{536:function(t,_,v){"use strict";v.r(_);var a=v(18),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"发送交易"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发送交易"}},[t._v("#")]),t._v(" 发送交易")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("p",[t._v("sendtx命令支持发送交易，包括转账、节点staking（锁定TOP token获取gas、锁定TOP token获取选票）、部署/调用用户智能合约等。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("功能")]),t._v(" "),v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("转账")]),t._v(" "),v("td",[v("a",{attrs:{href:"#%E8%BD%AC%E8%B4%A6"}},[t._v("sendtx transfer")])]),t._v(" "),v("td",[t._v("转账，从一个账户转至另外一个账户。")])]),t._v(" "),v("tr",[v("td",[t._v("Staking")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("锁定TOP token兑换gas。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"#%E9%94%81%E5%AE%9ATOP_token%E5%85%91%E6%8D%A2gas"}},[t._v("sendtx stakeGas")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"#%E9%94%81%E5%AE%9ATOP_token%E5%85%91%E6%8D%A2%E9%80%89%E7%A5%A8"}},[t._v("sendtx stakeVote")])]),t._v(" "),v("td",[t._v("锁定TOP token兑换选票。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"#%E8%A7%A3%E9%94%81%E5%85%91%E6%8D%A2gas%E7%9A%84TOP_token"}},[t._v("sendtx unstakeGas")])]),t._v(" "),v("td",[t._v("解锁兑换gas的TOP token。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"#%E8%A7%A3%E9%94%81%E5%85%91%E6%8D%A2%E9%80%89%E7%A5%A8%E7%9A%84TOP_token"}},[t._v("sendtx unstakeVote")])]),t._v(" "),v("td",[t._v("解锁兑换选票的TOP token。")])]),t._v(" "),v("tr",[v("td",[t._v("用户智能合约")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2%E7%94%A8%E6%88%B7%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6"}},[t._v("sendtx deployContract")])]),t._v(" "),v("td",[t._v("部署用户智能合约。")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("a",{attrs:{href:"#%E8%B0%83%E7%94%A8%E7%94%A8%E6%88%B7%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6"}},[t._v("sendtx runContract")])]),t._v(" "),v("td",[t._v("调用用户智能合约。")])])])]),t._v(" "),v("h2",{attrs:{id:"查看sendtx所有命令及帮助"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看sendtx所有命令及帮助"}},[t._v("#")]),t._v(" 查看sendtx所有命令及帮助")]),t._v(" "),v("p",[t._v("使用"),v("code",[t._v("sendtx -h")]),t._v(" 或者"),v("code",[t._v("sendtx --help")]),t._v("查看sendtx所有命令。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("COMMANDS:\n    runContract                     Send a transaction to a contract to execute it.\n    deployContract                  Create a contract account and publish code on it.\n    stakeGas                        Lock TOP tokens to get gas.\n    stakeVote                       Lock TOP tokens to get votes.\n    transfer                        Transfer TOP tokens from account to account.\n    unstakeGas                      Unstake gas from your account and unlock TOP tokens.\n    unstakeVote                     Unstake votes from your account and unlock TOP tokens.\n\nOPTIONS:\n    -h --help                       Show a list of commands or help for one command.\n")])])]),v("p",[t._v("使用"),v("code",[t._v("sendtx stakeVote -h")]),t._v("或者"),v("code",[t._v("sendtx stakeVote --help")]),t._v("查看子命令"),v("code",[t._v("stakeVote")]),t._v("的帮助。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Lock TOP tokens to get votes.\n\nUSAGE:\n    sendtx stakeVote votes_num lock_duration\n\nOPTIONS:\n    -h --help                       Show help information for one command.\n\nEXAMPLE:\n    sendtx stakeVote 1000 30\n")])])]),v("h2",{attrs:{id:"交易费用说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交易费用说明"}},[t._v("#")]),t._v(" 交易费用说明")]),t._v(" "),v("p",[t._v("TOP Network链上发送交易会消耗一定的gas资源，如果账户余额大于等于100*10^6 uTOP，系统会免费赠与25,000 Tgas。")]),t._v(" "),v("p",[t._v("每笔交易至少需要100,000 uTOP token作为交易保证金，否则交易将被丢弃。")]),t._v(" "),v("p",[t._v("在账户gas资源充足的情况下，交易保证金在交易成功后会立即退回到您的账户。如gas资源不足以支付交易费用，则需要从交易保证金中扣除一笔费用用来兑换gas资源以支付交易费用，扣除的TOP token将被销毁。")]),t._v(" "),v("p",[t._v("如交易保证金也不足以兑换足够的gas资源，那么交易最终将失败。")]),t._v(" "),v("p",[t._v("交易所消耗的资源详细信息请参见"),v("RouterLink",{attrs:{to:"/zh/Tools/TOPIO/topcl/docs-cn/AboutTOPNetwork/Protocol/ResourceModel.html"}},[t._v("资源模型")]),t._v("。")],1),t._v(" "),v("p",[t._v("::: 在TOPIO中，账户余额、交易保证金等TOP token单位为uTOP，1TOP=1*10^6 uTOP。 :::")]),t._v(" "),v("h2",{attrs:{id:"转账"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#转账"}},[t._v("#")]),t._v(" 转账")]),t._v(" "),v("p",[t._v("将TOP token从一个账户发送到另外一个账户。")]),t._v(" "),v("p",[v("strong",[t._v("请求方式")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx transfer\n")])])]),v("p",[v("strong",[t._v("请求参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("是否必选")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("account_addr")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("目标账户地址，为普通账户或者合约账户。")])]),t._v(" "),v("tr",[v("td",[t._v("amount")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("转账金额，单位：uTOP。转账金额需＞0。")])])])]),t._v(" "),v("p",[v("strong",[t._v("选项")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选项名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-t,--tx_deposit")]),t._v(" "),v("td",[t._v("10,0000 uTOP")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("交易保证金，默认为10,0000 uTOP。")])]),t._v(" "),v("tr",[v("td",[t._v("-n,--note")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("转账备注。")])]),t._v(" "),v("tr",[v("td",[t._v("-h,--help")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("查看命令帮助信息。")])])])]),t._v(" "),v("p",[v("strong",[t._v("返回参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("tx_hash")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("本次交易hash，可用于查询交易结果。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_size")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易大小，交易消耗的gas和交易大小相关。")])])])]),t._v(" "),v("p",[v("strong",[t._v("请求样例")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx transfer T-0-LXC1xmtn1bXB9CAinqNoDtQJCz1Mu9CXfK 20\n")])])]),v("p",[v("strong",[t._v("返回样例")])]),t._v(" "),v("p",[t._v("返回交易的hash及交易大小，通过"),v("code",[t._v("get transaction")]),t._v("或者"),v("code",[t._v("get account")]),t._v("查询交易是否成功以及账户余额是否有相应变化从而判断转账是否成功。")]),t._v(" "),v("ul",[v("li",[t._v("成功返回")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "8",\n\t"tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0x34ca8f317107ce6b01c933b017f28e6cf0f84f2e31627a8349f167c1aa9ade10",\n\t"tx_size": 306\n}\n')])])]),v("p",[t._v("例如：转账账户原来有1,000,000,000,000uTOP余额，给另外一个账户转账20uTOP。")]),t._v(" "),v("p",[t._v("发起转账命令后，使用"),v("code",[t._v("get account")]),t._v("查询账户信息，账户余额减少20uTOP。")]),t._v(" "),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询此次交易，最终共识成功。")]),t._v(" "),v("ul",[v("li",[t._v("失败返回")])]),t._v(" "),v("p",[t._v("交易失败的情况下，同样返回交易大小和交易hash。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "4",\n\t"tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0xc73f6295bc5b6be1ace273d59504f4c97d1b01cd2d3301c47cf042e28795e35b",\n\t"tx_size": 306\n}\n')])])]),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识失败，使用"),v("code",[t._v("get account")]),t._v("查询账户，余额无变化，则转账失败。")]),t._v(" "),v("h2",{attrs:{id:"staking"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[t._v("#")]),t._v(" Staking")]),t._v(" "),v("h3",{attrs:{id:"锁定top-token兑换gas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁定top-token兑换gas"}},[t._v("#")]),t._v(" 锁定TOP_token兑换gas")]),t._v(" "),v("p",[t._v("兑换gas的汇率为：")]),t._v(" "),v("p",[v("img",{attrs:{src:"sendtx.assets/Snap55.jpg",alt:"Snap55"}})]),t._v(" "),v("p",[t._v("此兑换率随着系统中锁定的TOP tokens变化而变化。")]),t._v(" "),v("p",[t._v("一个普通账户24小时内可以获得的gas不超过200,000Tgas，大约可以发起800条交易。")]),t._v(" "),v("p",[t._v("一个合约账户24小时内可以获得的gas不超过10,000,000Tgas，大约可以执行4万条交易，使用4秒CPU。")]),t._v(" "),v("p",[t._v("账户24小时内最多可兑换的gas=24小时内可以获得的gas上限-24小时内免费gas。")]),t._v(" "),v("p",[v("strong",[t._v("请求方式")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx stakeGas\n")])])]),v("p",[v("strong",[t._v("请求参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("是否必选")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("account_addr")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("锁定TOP token账户地址。")])]),t._v(" "),v("tr",[v("td",[t._v("locked_utop")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("兑换gas锁定的TOP token金额，单位uTOP。")])])])]),t._v(" "),v("p",[v("strong",[t._v("选项")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选项名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-h,--help")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("查看命令帮助信息。")])])])]),t._v(" "),v("p",[v("strong",[t._v("返回参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("tx_hash")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("本次交易hash，可用于查询交易结果。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_size")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易大小，交易消耗的gas和交易大小相关。")])])])]),t._v(" "),v("p",[v("strong",[t._v("请求样例")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx stakeGas T-0-LQHpzTF1jjj8ie4g7SYPCPvi5D5c2Q3nP5 1000\n")])])]),v("p",[v("strong",[t._v("返回样例")])]),t._v(" "),v("ul",[v("li",[t._v("成功返回")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "13",\n\t“tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0x16f7ba7580fd23b1c900323937b099c9e73c5d14df787c58de8f4388820ff1ba",\n\t"tx_size": 306\n}\n')])])]),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识成功，使用"),v("code",[t._v("get account")]),t._v('查看账户"total_gas"、"available_gas"有相应变化，则兑换gas成功。')]),t._v(" "),v("ul",[v("li",[t._v("失败返回")])]),t._v(" "),v("p",[t._v("将账户余额全部锁定获取gas，返回：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Error! Exception Thrown stoi\n")])])]),v("h3",{attrs:{id:"锁定top-token兑换选票"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁定top-token兑换选票"}},[t._v("#")]),t._v(" 锁定TOP_token兑换选票")]),t._v(" "),v("p",[t._v("兑票规则：")]),t._v(" "),v("p",[t._v("locked TOP token=votes_amount / [ 1.04^(lock_duration / 30 - 1) ], duration < 570；")]),t._v(" "),v("p",[t._v("locked TOP token=vote_amount / 2,                       lock_duration >= 570。")]),t._v(" "),v("p",[t._v("::: 锁定期越长，相同的兑票数量锁定越少的TOP token。 :::")]),t._v(" "),v("p",[v("strong",[t._v("请求方式")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx stakeVote\n")])])]),v("p",[v("strong",[t._v("请求参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("是否必选")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("vote_amount")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("Uint 64")]),t._v(" "),v("td",[t._v("兑票数量，每次兑票1,000票起兑。")])]),t._v(" "),v("tr",[v("td",[t._v("lock_duration")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("Uint 16")]),t._v(" "),v("td",[t._v("TOP token锁定期，锁定期单位：天。"),v("br"),t._v("锁定期最少为30天，且必须为30的整数倍。")])])])]),t._v(" "),v("p",[v("strong",[t._v("选项")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选项名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-h,--help")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("查看命令帮助信息。")])])])]),t._v(" "),v("p",[v("strong",[t._v("返回参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("tx_hash")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("本次交易hash，可用于查询交易结果。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_size")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易大小，交易消耗的gas和交易大小相关。")])])])]),t._v(" "),v("p",[v("strong",[t._v("请求样例")])]),t._v(" "),v("p",[t._v("兑换10000张票，锁定期30天，请求命令如下所示。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx stakeVote 10000 30\n")])])]),v("p",[v("strong",[t._v("返回样例")])]),t._v(" "),v("ul",[v("li",[t._v("成功返回")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "25",\n\t"tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0x14a3301e093d27e351b4cfe036456419830d4f43ba6938fe91e6641b1c8e90aa",\n\t"tx_size": 284\n}\n')])])]),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识成功，使用"),v("code",[t._v("get account")]),t._v('查看账户余额"balance"、"unused_vote_amount"、"vote_staked_token"有相应发生变化，则成功兑换选票。')]),t._v(" "),v("ul",[v("li",[t._v("失败返回")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "28",\n\t"tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0x3eadada0895b86aa502627f89406d07f085681381648aa1479fbc5f183dc93ea",\n\t"tx_size": 284\n}\n')])])]),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识失败，"),v("code",[t._v("get account")]),t._v("查看账户余额无变化，则兑换选票失败。")]),t._v(" "),v("h3",{attrs:{id:"解锁兑换gas的top-token"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解锁兑换gas的top-token"}},[t._v("#")]),t._v(" 解锁兑换gas的TOP_token")]),t._v(" "),v("p",[t._v("发起解锁后，需要等待24小时，并由锁定账户发起一笔交易后，解锁的金额才会到账。")]),t._v(" "),v("p",[v("strong",[t._v("请求方式")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx unstakeGas\n")])])]),v("p",[v("strong",[t._v("请求参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("是否必选")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("account_addr")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("需要解锁TOP token的账户地址。")])]),t._v(" "),v("tr",[v("td",[t._v("unlocked_utop")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("解锁的TOP token金额，单位为uTOP。")])])])]),t._v(" "),v("p",[v("strong",[t._v("选项")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选项名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-h,--help")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("查看命令帮助信息。")])])])]),t._v(" "),v("p",[v("strong",[t._v("返回参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("tx_hash")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("本次交易hash，可用于查询交易结果。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_size")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易大小，交易消耗的gas和交易大小相关。")])])])]),t._v(" "),v("p",[v("strong",[t._v("请求样例")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx unstakeGas T-0-LQHpzTF1jjj8ie4g7SYPCPvi5D5c2Q3nP5 1000\n")])])]),v("p",[v("strong",[t._v("返回样例")])]),t._v(" "),v("ul",[v("li",[t._v("成功返回")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "30",\n\t"tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0xb83f304a26d2ffe6a3b59eb01fd5269218367481c55b4ec15d60abdc6129380d",\n\t"tx_size": 306\n}\n')])])]),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识成功，使用"),v("code",[t._v("get account")]),t._v('查看账户"available_gas"有相应变化，则成功解锁TOP token。')]),t._v(" "),v("ul",[v("li",[t._v("失败返回")])]),t._v(" "),v("p",[t._v("同样返回交易hash和交易大小，根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识失败，则解锁TOP token失败。")]),t._v(" "),v("h3",{attrs:{id:"解锁兑换选票的top-token"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解锁兑换选票的top-token"}},[t._v("#")]),t._v(" 解锁兑换选票的TOP_token")]),t._v(" "),v("p",[t._v("锁定期内的TOP token不能解锁，只能解锁到期的TOP token。")]),t._v(" "),v("p",[t._v("已经被使用的选票对应锁定的TOP token不能被解锁。")]),t._v(" "),v("p",[t._v("发起解锁后，解锁的金额将立刻到账。")]),t._v(" "),v("p",[v("strong",[t._v("请求方式")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx unstakeVote\n")])])]),v("p",[v("strong",[t._v("请求参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("是否必选")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("votes_num")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("选票数量，解锁相应的TOP  token。")])])])]),t._v(" "),v("p",[v("strong",[t._v("选项")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选项名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-h,--help")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("查看命令帮助信息。")])])])]),t._v(" "),v("p",[v("strong",[t._v("返回参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("tx_hash")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("本次交易hash，可用于查询交易结果。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_size")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易大小，交易消耗的gas和交易大小相关。")])])])]),t._v(" "),v("p",[v("strong",[t._v("请求样例")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx unstakeVote 200\n")])])]),v("p",[v("strong",[t._v("返回样例")])]),t._v(" "),v("ul",[v("li",[t._v("成功返回")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "7",\n    "tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0x6e74dd5860873cd9bf0dc14f5312aac93bcbbec2a92372c783fffb7fc1f7c902",\n\t"tx_size": 306\n}\n')])])]),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识成功，使用"),v("code",[t._v("get account")]),t._v('查看账户余额"balance"及选票"unused_vote_amount"有相应变化，则成功解锁TOP token。')]),t._v(" "),v("ul",[v("li",[t._v("失败返回")])]),t._v(" "),v("p",[t._v("解锁超过总票数的TOP token返回：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "17",\n\t"tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0x68c925994cb066d11ed946f7e6ef8ec5e62f3554ac7370c82442f8e8b5d067ed",\n\t"tx_size": 284\n}\n')])])]),v("h2",{attrs:{id:"用户智能合约"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户智能合约"}},[t._v("#")]),t._v(" 用户智能合约")]),t._v(" "),v("h3",{attrs:{id:"部署用户智能合约"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#部署用户智能合约"}},[t._v("#")]),t._v(" 部署用户智能合约")]),t._v(" "),v("p",[v("strong",[t._v("请求方式")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx deployContract\n")])])]),v("p",[v("strong",[t._v("请求参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("是否必选")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("gas_limit")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("Uint64")]),t._v(" "),v("td",[t._v("合约愿意为交易发送方付出的每笔交易的gas费用上限，单位Tgas。")])]),t._v(" "),v("tr",[v("td",[t._v("amount")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("Uint64")]),t._v(" "),v("td",[t._v("转入合约账户的金额，单位uTOP。"),v("br"),t._v("部署合约会创建一个合约账户，您可以同时向此账户中转账，也可以不转。"),v("br"),t._v("如果希望合约账户能得到免费的gas，那么向合约账户中的转账金额须大于等于100*10^6 uTOP token。")])]),t._v(" "),v("tr",[v("td",[t._v("contract_path")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("合约代码文件路径。")])])])]),t._v(" "),v("p",[v("strong",[t._v("选项")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选项名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-h,--help")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("查看命令帮助信息。")])]),t._v(" "),v("tr",[v("td",[t._v("-t,--tx_deposit")]),t._v(" "),v("td",[t._v("100,000uTOP token")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("交易保证金，单位：uTOP。默认为100,000uTOP token。")])])])]),t._v(" "),v("p",[v("strong",[t._v("返回参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("tx_hash")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("本次交易hash，可用于查询交易结果。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_size")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易大小，交易消耗的gas和交易大小相关。")])]),t._v(" "),v("tr",[v("td",[t._v("contract_account")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v('部署合约创建的合约账户地址，以"T-3"为标识开头。')])])])]),t._v(" "),v("p",[v("strong",[t._v("请求样例")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx deployContract 100 1000 /home/git/TopPyFrame/apitest/lua_script/create_key_rename.lua \n")])])]),v("p",[v("strong",[t._v("返回样例")])]),t._v(" "),v("ul",[v("li",[t._v("成功返回")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('contract account: T - 3 - Ma6xiGnaK2Szr6kQvnJvmJa5zw5s5Cb8RJ {\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "25",\n\t"tips": "Please use command \'get transaction\' to query transaction status later on!!!"\n\t"tx_hash": "0x572bcc1ac187ff0bd924b826728566f92cbceca74be4382eee1d6cdc53272dec",\n\t"tx_size": 367\n}\n')])])]),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识成功，则成功部署用户合约。")]),t._v(" "),v("ul",[v("li",[t._v("失败返回")])]),t._v(" "),v("p",[t._v("同样返回交易hash和交易大小，根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识失败，则部署用户合约失败。")]),t._v(" "),v("h3",{attrs:{id:"调用用户智能合约"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调用用户智能合约"}},[t._v("#")]),t._v(" 调用用户智能合约")]),t._v(" "),v("p",[t._v("提醒：")]),t._v(" "),v("blockquote",[v("p",[t._v("调用用户合约前，您可以使用"),v("code",[t._v("get account")]),t._v("查询合约函数名称及参数类型相关信息。")])]),t._v(" "),v("p",[v("strong",[t._v("请求方式")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx runContract\n")])])]),v("p",[v("strong",[t._v("请求参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("是否必选")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("amount")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("Uint64")]),t._v(" "),v("td",[t._v('调用用户合约时，向用户智能合约账户中转账的金额，单位uTOP。如不转账，请输入"0"。')])]),t._v(" "),v("tr",[v("td",[t._v("contract_addr")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v('用户智能合约账户地址，以"T-3"为标识开头。')])]),t._v(" "),v("tr",[v("td",[t._v("contract_func")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("调用合约的函数名称。")])]),t._v(" "),v("tr",[v("td",[t._v("param_type")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("当前支持以下参数类型："),v("br"),t._v("1--Unit64；"),v("br"),t._v("2--String；"),v("br"),t._v("3--Bool。")])]),t._v(" "),v("tr",[v("td",[t._v("param_value")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("参见说明")]),t._v(" "),v("td",[t._v("当参数类型为1--Unit64时，参数值为整数型；"),v("br"),t._v("当参数类型为2--String时，参数值为任意字符串；"),v("br"),t._v('当参数类型为3--Bool时，参数值必须为"true"或者"false"。')])])])]),t._v(" "),v("p",[v("strong",[t._v("选项")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选项名称")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-h,--help")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("查看命令帮助信息。")])]),t._v(" "),v("tr",[v("td",[t._v("-t,--tx_deposit")]),t._v(" "),v("td",[t._v("100,000 uTOP token")]),t._v(" "),v("td",[t._v("Uint64")]),t._v(" "),v("td",[t._v("交易保证金，单位：uTOP。如不填，默认为100,000 uTOP token。")])])])]),t._v(" "),v("p",[v("strong",[t._v("返回参数")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("tx_hash")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("本次交易hash，可用于查询交易结果。")])]),t._v(" "),v("tr",[v("td",[t._v("tx_size")]),t._v(" "),v("td",[t._v("Uint16")]),t._v(" "),v("td",[t._v("交易大小，交易消耗的gas和交易大小相关。")])])])]),t._v(" "),v("p",[v("strong",[t._v("请求样例")])]),t._v(" "),v("p",[t._v("示例1：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx runContract 1000 T-3-MbEfwERMNw9c4oKbLtfkWBkL2KFRsahEDe set_key 1,1|2,a|3,true\n")])])]),v("p",[t._v('调用的合约函数名称为"set_key"；')]),t._v(" "),v("p",[t._v('"1,1"表示参数1类型为“Uint64整数型”，值为"1"、"2,a"表示参数2类型为"String"，值为"a"、"3,true"表示参数3类型为"Bool"，值为"true"。')]),t._v(" "),v("p",[t._v("示例2 ：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("sendtx runContract 1000 T-3-MnyWSV2r64tWe92vKb4ivGitK8noAcBVFQ add 1,1|1,2\n")])])]),v("p",[t._v('调用的合约函数名称为"add";')]),t._v(" "),v("p",[t._v('"1,1"表示参数1类型为“Uint64整数型”，值为"1"、"1,2"表示参数2类型为“Uint64整数型”，值为"2"。')]),t._v(" "),v("p",[v("strong",[t._v("返回样例")])]),t._v(" "),v("ul",[v("li",[t._v("成功返回")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "1",\n\t"tips": "Please use command \'get transaction\' to query transaction status later on!!!",\n\t"tx_hash": "0x9d093200beceab10f693a733553daa5e633ffc7bf2c6a546b700dec1ab6da4a8",\n\t"tx_size": 316\n}\n')])])]),v("p",[t._v("根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识成功，则成功调用用户合约。")]),t._v(" "),v("ul",[v("li",[t._v("失败返回")])]),t._v(" "),v("p",[t._v("同样返回交易hash和交易大小，根据交易hash，使用"),v("code",[t._v("get transaction")]),t._v("查询交易，最终共识失败，则调用用户合约失败。")])])}),[],!1,null,null,null);_.default=e.exports}}]);