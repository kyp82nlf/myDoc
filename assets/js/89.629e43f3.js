(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{479:function(t,a,s){"use strict";s.r(a);var n=s(18),_=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"交易签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易签名"}},[t._v("#")]),t._v(" 交易签名")]),t._v(" "),s("p",[t._v("对交易签名前请将交易对象序列化。")]),t._v(" "),s("h3",{attrs:{id:"序列化交易对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#序列化交易对象"}},[t._v("#")]),t._v(" 序列化交易对象")]),t._v(" "),s("p",[t._v("交易对象数据结构请参见"),s("RouterLink",{attrs:{to:"/zh/AboutTOPNetwork/Protocol/TransactionProtocol/docs-cn/AboutTOPNetwork/Protocol/TransactionProtocol/TransactionProtocol.html"}},[t._v("交易协议")]),t._v("。")],1),t._v(" "),s("p",[t._v("将交易对象序列化，即按照固定顺序将交易对象中的参数转换成二进制数组。")]),t._v(" "),s("ul",[s("li",[t._v("交易对象中的参数主要有4个基础类型，分别是 Uint16, Uint32, Uint64, String。")]),t._v(" "),s("li",[t._v("由于Java中没有无符号类型，所以涉及数字一律用BigInteger类型，序列化时再转换。")]),t._v(" "),s("li",[t._v("序列化采用小端字节序(little endian)。")]),t._v(" "),s("li",[t._v("其他组合类型都需要拆分成基础类型处理，例如在JavaSDK的投票接口中，传入的是Map<String, BigInteger>对象，需拆分成String和Uint64拼接在一起。")])]),t._v(" "),s("p",[t._v("请按照下表中的顺序将参数序列化。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("参数类型")]),t._v(" "),s("th",[t._v("示例值")]),t._v(" "),s("th",[t._v("序列化值(Hex)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("tx_type")]),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("0x0400")])]),t._v(" "),s("tr",[s("td",[t._v("tx_len")]),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x0000")])]),t._v(" "),s("tr",[s("td",[t._v("tx_structure_version")]),t._v(" "),s("td",[t._v("Uint32")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("to_ledger_id")]),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x0000")])]),t._v(" "),s("tr",[s("td",[t._v("from_ledger_id")]),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x0000")])]),t._v(" "),s("tr",[s("td",[t._v("tx_deposit")]),t._v(" "),s("td",[t._v("Uint32")]),t._v(" "),s("td",[t._v("100000")]),t._v(" "),s("td",[t._v("0xa0860100")])]),t._v(" "),s("tr",[s("td",[t._v("tx_expire_duration")]),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("100")]),t._v(" "),s("td",[t._v("0x6400")])]),t._v(" "),s("tr",[s("td",[t._v("send_time_stamp")]),t._v(" "),s("td",[t._v("Uint64")]),t._v(" "),s("td",[t._v("1602820177")]),t._v(" "),s("td",[t._v("0x5118895f00000000")])]),t._v(" "),s("tr",[s("td",[t._v("tx_random_nonce")]),t._v(" "),s("td",[t._v("Uint32")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("last_tx_nonce")]),t._v(" "),s("td",[t._v("Uint64")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("0x0200000000000000")])]),t._v(" "),s("tr",[s("td",[t._v("last_tx_hash")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("0x2a21b09155cad8aa")]),t._v(" "),s("td",[t._v("0xaad8ca5591b0212a")])]),t._v(" "),s("tr",[s("td",[t._v("challenge_proof")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("ext")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("note")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"1231fsd"')]),t._v(" "),s("td",[t._v("0x0700000031323331667364")])]),t._v(" "),s("tr",[s("td",[t._v("sender_action")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("receiver_action")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("p",[t._v("sender action 参数序列化")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("参数类型")]),t._v(" "),s("th",[t._v("示例值")]),t._v(" "),s("th",[t._v("序列化值(Hex)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("action_hash")]),t._v(" "),s("td",[t._v("Uint32")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("action_type")]),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x0000")])]),t._v(" "),s("tr",[s("td",[t._v("action_size")]),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x0000")])]),t._v(" "),s("tr",[s("td",[t._v("tx_sender_account_addr")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6")]),t._v(" "),s("td",[t._v("0x26000000542d302d4c5261467961475a31697366634b6e684c78504c6f655046556d5932697946477636")])]),t._v(" "),s("tr",[s("td",[t._v("action_name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("action_param")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("0x000000008c00000000000000")]),t._v(" "),s("td",[t._v("0x0c000000000000008c00000000000000")])]),t._v(" "),s("tr",[s("td",[t._v("action_ext")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("action_authorization")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("0x00000000")])])])]),t._v(" "),s("p",[t._v("receiver action 参数序列化")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th"),t._v(" "),s("th",[t._v("参数类型")]),t._v(" "),s("th",[t._v("示例值")]),t._v(" "),s("th",[t._v("序列化值(Hex)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("action_hash")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Uint32")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("action_type")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("0x0000")])]),t._v(" "),s("tr",[s("td",[t._v("action_size")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Uint16")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0x0000")])]),t._v(" "),s("tr",[s("td",[t._v("tx_sender_account_addr")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("T-0-LazNzvyHLptzdPFkaynNHKqDY4qXZ2gCVh")]),t._v(" "),s("td",[t._v("0x26000000542d302d4c617a4e7a7679484c70747a6450466b61796e4e484b7144593471585a3267435668")])]),t._v(" "),s("tr",[s("td",[t._v("action_name")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("action_param")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("0x000000008c00000000000000")]),t._v(" "),s("td",[t._v("0x0c000000000000008c00000000000000")])]),t._v(" "),s("tr",[s("td",[t._v("action_ext")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td",[t._v("action_authorization")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("authorization")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('非部署用户合约交易：""')]),t._v(" "),s("td",[t._v("0x00000000")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("部署用户合约交易，需要传入用户合约公钥：")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("其中action_param序列化请参见"),s("RouterLink",{attrs:{to:"/zh/AboutTOPNetwork/Protocol/TransactionProtocol/docs-cn/AboutTOPNetwork/Protocol/TransactionProtocol/action-param-serialization.html"}},[t._v("action_param序列化")]),t._v("。")],1),t._v(" "),s("h3",{attrs:{id:"签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名"}},[t._v("#")]),t._v(" 签名")]),t._v(" "),s("p",[s("strong",[t._v("签名步骤")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("对序列化后的二进制数组进行SHA256 hash计算。")])]),t._v(" "),s("li",[s("p",[t._v("使用私钥对步骤1计算的结果进行签名。")])])]),t._v(" "),s("p",[s("strong",[t._v("签名算法")])]),t._v(" "),s("p",[t._v("ECDSA(secp256k1)")]),t._v(" "),s("p",[s("strong",[t._v("Java Demo Code")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dataBytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigInteger")]),t._v(" privateKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECKey")]),t._v(" ceKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromPrivate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("privateKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sha256Hash")]),t._v(" sha256Hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sha256Hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataBytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECDSASignature")]),t._v(" sig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ceKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sha256Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),t._v(" recId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ceKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findRecoveryId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sha256Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" authHex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytesToHex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytesToHex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toByteArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authHex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("130")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("recId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authHex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                authHex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" authHex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" authHex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("recId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            authHex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"01"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" authHex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            authHex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" authHex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" authHex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("签名后结果")])]),t._v(" "),s("p",[t._v("0x015c5be7876376b09297f9247e34e1e921474f2f66c61700e57832546e6c1de918136abe1a56c346ebf2dce9358941df89d02fd5274222435e7bd0f756de1adf83")])])}),[],!1,null,null,null);a.default=_.exports}}]);