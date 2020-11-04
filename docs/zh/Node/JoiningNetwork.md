# 节点入网与退网

## 概述

TOP Network主链是真正的去中心化、Permissionless（无许可）公链，您只要满足入网最低门槛，即可随时加入到网络中成为TOP Network节点，参与staking，TOP Network节点staking低风险、零花费且回报丰厚。

以下为您介绍TOP Network节点入网与节点退网。

## 节点入网

### 节点角色及入网门槛

#### 节点角色

TOP Network目前有三种类型的节点：edge（边缘节点）、validator（验证节点）、advance（高级节点）。

其中高级节点可在不同的网络里同时担任多个角色：验证(validator)、审计(auditor)、存档(archive)、Root-Beacon、Sub-Beacon。

提醒：

> 一个高级节点在一个cluster中，不可以在auditor group及其下辖validator group中同时分别担任审计(auditor)、验证角色(validator)。

各节点职责见下表。

| 节点角色            | 职责                                                         |
| ------------------- | ------------------------------------------------------------ |
| 边缘节点(edge)      | 边缘节点充当客户端的接入点，所有交易在被转发到路由网络和核心网络之前都会被先发送到边缘网络的边缘节点。保护共识节点免受DDoS及其他类似攻击。 |
| 验证节点(validator) | 验证节点组成了TOP Network链的分片，负责通过hpPBFT共识机制验证交易。 |
| 审计节点(auditor)   | 审计节点在TOP Network链中有几个职责。这些包括：跨分片同步、跨分片交易路由，同时参与参与TOP Network hpPBFT共识。 |
| 存档节点(archive)   | 存档节点存储TOP Network链的整个状态。这是他们的首要责任。除此之外，因为节点在分片和集群之间移动，存档节点帮助新节点同步当前区块链状态，并确保数据可用。 |
| Root-Beacon         | TOP Network的 Root-Beacon节点充当了系统的协调者和记账者等许多角色。它还处理节点注册和archive、edge、Root-Beacon 等选举，以及staking、投票和链上治理。Root-Beacon还通过定期产生时钟块，充当整个系统的全局时钟。 |
| Sub-Beacon          | TOP Network Sub-Beacon节点主要负责auditor、validator选举及工作量统计、审计、惩罚等工作。 |

#### 入网门槛

新节点必须通过REC(Root Election Contract)进行注册，并启动节点进程，才能使物理节点加入网络。

部署在Root-Beacon上的智能合约判断节点是否满足所选节点类型的最低要求。

您可以注册成为如下三种类型的节点：

edge（边缘节点）、validator（验证节点）、advance（高级节点）。

以下是各类型节点入网的最低要求。

| 节点角色            | 最低注册保证金      | 最低硬件配置                           |
| ------------------- | ------------------- | -------------------------------------- |
| 边缘节点(edge)      | 100,000*10^6 uTOP   | 2CPU/4GB men<br/>40GB SSD<br/>100Mb/s  |
| 验证节点(validator) | 500,000*10^6 uTOP   | 2CPU/4GB men<br/>60GB SSD<br/>100Mb/s  |
| 高级节点(advance)   | 1,000,000*10^6 uTOP | 4CPU/8GB men<br/>100GB SSD<br/>200Mb/s |

如注册保证金低于最低保证金要求，节点将注册失败。

节点入网最低保证金支持链上治理。

节点注册完成后，系统根据所注册节点的类型，ZEC(Zone Election Contract)将随机地将节点分类到集群或分片。

## 节点退网

节点需要先注销，节点向节点注册合约发起“节点注销”交易，支付Beacon交易费，注销节点，才可以退出物理网络和清算节点保证金。

如果系统发现某个节点未注销却不工作，就会对其进行惩罚。

Root-Beacon周期性查询节点注册合约内节点名单，将已经注销的节点踢出网络。

