(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{528:function(t,a,e){"use strict";e.r(a);var r=e(18),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"部署区块链创世网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署区块链创世网络"}},[t._v("#")]),t._v(" 部署区块链创世网络")]),t._v(" "),e("p",[t._v("本章指导开发者搭建自己的区块链创世网络。")]),t._v(" "),e("p",[e("img",{attrs:{src:"DeployGenisNetwork.assets/Snap23.jpg",alt:"Snap23"}})]),t._v(" "),e("h2",{attrs:{id:"配置服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置服务器"}},[t._v("#")]),t._v(" 配置服务器")]),t._v(" "),e("p",[t._v("以一组auditor group和validator group组网所需最小节点数为例，需要6台服务器。")]),t._v(" "),e("h2",{attrs:{id:"创建节点账户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建节点账户"}},[t._v("#")]),t._v(" 创建节点账户")]),t._v(" "),e("p",[t._v("使用TOPIO创建6个账户，作为创世节点的账户，每个节点一个账户，创建账户参见"),e("RouterLink",{attrs:{to:"/zh/Tools/TOPIO/docs-cn/Tools/TOPIO/wallet.html"}},[t._v("TOPIO使用指南")]),t._v("中“钱包功能”内容。")],1),t._v(" "),e("p",[t._v("::: 提醒：")]),t._v(" "),e("p",[t._v("创建好账户后，请记录好账户地址信息和公钥信息，以及保管好账户keystore文件。以下修改代码文件需要账户地址信息及公钥。"),e("br"),t._v("\n:::")]),t._v(" "),e("h2",{attrs:{id:"配置代码文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置代码文件"}},[t._v("#")]),t._v(" 配置代码文件")]),t._v(" "),e("p",[t._v("配置节点账户信息，如下所示。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('修改 src/xtopcom/xloader/src/xgenesis_info.cpp 中 "seedNodes": {} 里面的内容为自己的节点信息\n格式：  \n\t "节点key文件账号": "节点key账号的公钥",\n示例：\n\t"T-0-LcgrWxjyTH5UZHmTkS9Ts37f4h5K3F7bhf": "BJQpY8mHym+xrG1z3Sw+r/umqyPw9zzkP4qlYW1OSiVcjlfOeHbM0bFKEMDasmCzEl10DMtVY02fieuNU/o9HOs=",\n\t"T-0-LaiG9nMSbECa6TfNm3E79R7a74e9Ko6Geq": "BDJljlevRsiUWuxonkMlyIf6vtjhwMnM99+XFerki0h4UzcN7uUpP4pUAVv3ug+7hDIMWlqGANDbXURDROG6YXg=",\n\t"T-0-LTFduhTjgX8TbVz1iFaXP5prAgRDZ3KApk": "BNh5qfUzu+fOo/5079y7rzN9aActta0Cd4sgk4pbywntlsRfDHcYXqzoQDX9Dg0lwXA86qmfCAh4e6TyByby6rk=",\n\t"T-0-LNoVsDBY7ic45uAvxb5Va7tiERiESAPKgp": "BFjqv747ToChrfHGG967wO90djgjUdkGX+L0hLQ5ZeXDcTOLvuazKm1HT8aYWh+y8nCb2H6Ph+a+Hoao5Fojhsk=",\n\t"T-0-LPchAA1XgQaYdevQuvGrUVAveN5qmk1unS": "BPXYtuN42t7VNxorNz/KKAatDGTe5nITZwVDpjBbYDoPzvvIU1HpR/PoAOk4fLqAuwr3KcD1AqGl6W08TZJ8Dbg=",\n\t"T-0-LVU44DqUKoUu9oE8hETXmZNNGDVGYybDrm": "BIF8AQRzX8RwVXt3/HevdSQi8iSrt18UUIsk9yPwBpnmZBmhAdV5CH7KAo2TBGKV1ahRG4dEo11Fc4M9ooFTiLk="\n')])])]),e("h3",{attrs:{id:"配置节点ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置节点ip"}},[t._v("#")]),t._v(" 配置节点IP")]),t._v(" "),e("p",[t._v("修改 src/xtopcom/xdata/xpredefined_configurations.h 中 XDECLARE_CONFIGURATION(platform_public_endpoints的值。")]),t._v(" "),e("p",[t._v("示例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ip:端口,IP:端口 \n\n165.227.86.174:9000,64.227.17.254:9000,64.227.24.230:9000,165.22.43.219:9000,104.131.78.154:9000,167.172.115.77:90=00\n")])])]),e("h3",{attrs:{id:"配置集群选举参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置集群选举参数"}},[t._v("#")]),t._v(" 配置集群选举参数")]),t._v(" "),e("p",[t._v("提醒：")]),t._v(" "),e("blockquote",[e("p",[t._v("不同集群的轮换周期最好在10min（60个时钟高度）以上。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('修改 src/xtopcom/xdata/xpredefined_configurations.h 中参数的值如下\n   "auditor_group_count":1,\n   "validator_group_count":1,\n   "min_election_committee_size":"3",\n   "max_election_committee_size":"3",\n   "min_auditor_group_size":"3",\n   "max_auditor_group_size":"3",\n   "min_validator_group_size":"3",\n   "max_validator_group_size":"3",\n   "zone_election_trigger_interval":47,   // 共识集群轮换触发间隔（时钟高度）\n   "cluster_election_interval":91,    // 共识集群轮换周期（时钟高度）\n   "rec_election_interval":"147",    // rec集群轮换周期（时钟高度）\n   "zec_election_interval":"101",    // zec集群轮换周期（时钟高度）\n')])])]),e("p",[t._v("以上配置完成后，开始编译打包TOPIO安装文件及部署组网。")]),t._v(" "),e("h2",{attrs:{id:"编译打包topio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译打包topio"}},[t._v("#")]),t._v(" 编译打包TOPIO")]),t._v(" "),e("p",[t._v("编译完成后，将TOPIO安装文件（topio-XXX-tar.gz 文件）上传到各节点机器的自定义目录下。")]),t._v(" "),e("h2",{attrs:{id:"部署组网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署组网"}},[t._v("#")]),t._v(" 部署组网")]),t._v(" "),e("p",[t._v("启动xnode进程，等待3~5min后，执行如下命令进行组网状态检查：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" netstat -anp |grep xtop\n")])])]),e("p",[t._v('如端口"19081"启用。')])])}),[],!1,null,null,null);a.default=s.exports}}]);