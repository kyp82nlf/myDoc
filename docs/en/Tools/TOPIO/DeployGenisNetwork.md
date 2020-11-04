# 部署区块链创世网络

本章指导开发者搭建自己的区块链创世网络。

![Snap23](DeployGenisNetwork.assets/Snap23.jpg)

## 配置服务器

以一组auditor group和validator group组网所需最小节点数为例，需要6台服务器。

## 创建节点账户

使用TOPIO创建6个账户，作为创世节点的账户，每个节点一个账户，创建账户参见“[topcl使用指南](/zh/Tools/TOPIO/topcl/Overview.md)”中“钱包功能”。

提醒：

> 创建好账户后，请记录好账户地址信息和公钥信息，以及保管好账户keystore文件。以下修改代码文件需要账户地址信息及公钥。

## 配置代码文件

配置节点账户信息，如下所示。

	修改 src/xtopcom/xloader/src/xgenesis_info.cpp 中 "seedNodes": {} 里面的内容为自己的节点信息
	格式：  
		 "节点key文件账号": "节点key账号的公钥",
	示例：
		"T-0-LcgrWxjyTH5UZHmTkS9Ts37f4h5K3F7bhf": "BJQpY8mHym+xrG1z3Sw+r/umqyPw9zzkP4qlYW1OSiVcjlfOeHbM0bFKEMDasmCzEl10DMtVY02fieuNU/o9HOs=",
		"T-0-LaiG9nMSbECa6TfNm3E79R7a74e9Ko6Geq": "BDJljlevRsiUWuxonkMlyIf6vtjhwMnM99+XFerki0h4UzcN7uUpP4pUAVv3ug+7hDIMWlqGANDbXURDROG6YXg=",
		"T-0-LTFduhTjgX8TbVz1iFaXP5prAgRDZ3KApk": "BNh5qfUzu+fOo/5079y7rzN9aActta0Cd4sgk4pbywntlsRfDHcYXqzoQDX9Dg0lwXA86qmfCAh4e6TyByby6rk=",
		"T-0-LNoVsDBY7ic45uAvxb5Va7tiERiESAPKgp": "BFjqv747ToChrfHGG967wO90djgjUdkGX+L0hLQ5ZeXDcTOLvuazKm1HT8aYWh+y8nCb2H6Ph+a+Hoao5Fojhsk=",
		"T-0-LPchAA1XgQaYdevQuvGrUVAveN5qmk1unS": "BPXYtuN42t7VNxorNz/KKAatDGTe5nITZwVDpjBbYDoPzvvIU1HpR/PoAOk4fLqAuwr3KcD1AqGl6W08TZJ8Dbg=",
		"T-0-LVU44DqUKoUu9oE8hETXmZNNGDVGYybDrm": "BIF8AQRzX8RwVXt3/HevdSQi8iSrt18UUIsk9yPwBpnmZBmhAdV5CH7KAo2TBGKV1ahRG4dEo11Fc4M9ooFTiLk="

### 配置节点IP

修改 src/xtopcom/xdata/xpredefined_configurations.h 中 XDECLARE_CONFIGURATION(platform_public_endpoints的值。

示例：

```
ip:端口,IP:端口 

165.227.86.174:9000,64.227.17.254:9000,64.227.24.230:9000,165.22.43.219:9000,104.131.78.154:9000,167.172.115.77:90=00
```

### 配置集群选举参数

提醒：

> 不同集群的轮换周期最好在10min（60个时钟高度）以上。


	修改 src/xtopcom/xdata/xpredefined_configurations.h 中参数的值如下
	   "auditor_group_count":1,
	   "validator_group_count":1,
	   "min_election_committee_size":"3",
	   "max_election_committee_size":"3",
	   "min_auditor_group_size":"3",
	   "max_auditor_group_size":"3",
	   "min_validator_group_size":"3",
	   "max_validator_group_size":"3",
	   "zone_election_trigger_interval":47,   // 共识集群轮换触发间隔（时钟高度）
	   "cluster_election_interval":91,    // 共识集群轮换周期（时钟高度）
	   "rec_election_interval":"147",    // rec集群轮换周期（时钟高度）
	   "zec_election_interval":"101",    // zec集群轮换周期（时钟高度）
以上配置完成后，开始编译打包TOPIO安装文件及部署组网。

## 编译打包TOPIO安装文件

debug版本：./build.sh noratelimit metrics workload_test 
编译完，获取当前目录下的 topio-版本号-debug.tar.gz 文件
编译参数说明：

* noratelimit //解除请求频率的限制
* workload_test //工作量统计
* release

## 部署组网

将TOPIO安装文件（topio-XXX-tar.gz 文件）上传到各节点机器的自定义目录下。

启动xnode进程后，等待3~5min后，执行如下命令进行组网状态检查：

```
 netstat -anp |grep xtop
```

如端口"19081"启用。

