# On-chain Governance Parameters

## Beacon系统合约交易费

| 参数名称      | 创世初始值       | 治理Range    | 参数/初始值说明              | 表决级别 |
| ------------- | ---------------- | ------------ | ---------------------------- | -------- |
| beacon_tx_fee | 100,000,000 uTOP | [0，正无穷） | 调用Beacon系统合约的服务费。 | normal   |

## 资源(gas)

| 参数名称                      | **创世初始值**               | **治理Range** | **参数/初始值说明**                                          | **级别** |
| ----------------------------- | ---------------------------- | ------------- | ------------------------------------------------------------ | -------- |
| total_gas_shard(24h)          | 2,160,000,000,000Tgas        | （0，正无穷） | 24小时单片总gas。<br/>按照validator推荐节点配置2核，100M带宽计算： 总CPU对应gas=3600s*24h*1000000us*2core/0.04=1.08*10^12Tgas； 总NET对应gas=12.5MB/s*3600h*24小h*10^6MB*1=1.08*10^12Tgas； 所以24小时单片总gas=2.16*10^12Tgas | normal   |
| min_free_gas_balance          | 100,000,000 uTOP             | （0，正无穷） | 一个账户如需要免费赠与gas，则账户中至少有100,000,000 uTOP的余额。<br/>防止恶意节点spam。 | normal   |
| free_gas                      | 25,000 Tgas                  | （0，正无穷） | 一个账户最多一天可以被免费赠与25,000Tgas。<br/>一天可以免费发起50笔转账交易 | normal   |
| tx_deposit_gas_exchange_ratio | 100 uTOP/Tgas                | （0，正无穷） | 交易保证金抵扣gas的gasprice。                                | normal   |
| cpu_gas_exchange_ratio        | 40ns                         | （0，正无穷） | 1Tgas 可以消耗的CPU ns数。<br/>初始值说明：按100M带宽（1s传输12.5 MB）算，1MB需要占用系统0.02 us，由于CPU是双核，所以1Tgas=0.02us*2core=0.04us=40ns | Normal   |
| usedgas_decay_cycle           | 8641个时钟块（24h多10s）     | （0，正无穷） | 已使用gas衰减为0的时长。                                     | Normal   |
| single_tx_max_cpu_time        | 0.1s                         | （0，正无穷） | 单交易允许执行最大CPU时长。                                  | Normal   |
| min_tx_deposit                | 100,000 uTOP                 | （0，正无穷） | 交易保证金最低值。                                           | Normal   |
| unlock_gas_staked_delay_time  | 8641个时钟块（24小时多10秒） | （0，正无穷） | 解锁gas锁定金delay到账的时间。<br/>避免投机者快进快出，让gas的分配剧烈波动。 | Normal   |
| max_gas_account               | 200,000Tgas                  | （0，正无穷） | 一个普通账户单日最大使用的gas。<br/>大约可以发起800条交易。  | Normal   |
| max_gas_contract              | 10,000,000Tgas               | （0，正无穷） | 一个合约账户单日最大使用的gas。<br/>大约可以执行4万条交易，使用4秒CPU。 | Normal   |
| initial_total_locked_token    | 10,000,000,000,000 uTOP      |               | 系统初始化总gas锁定金额。<br/>gasprice=系统总gas/总gas锁定金额， 该值用来形成初始gasprice，使其不至于0。 | normal   |

## 节点注册

| 参数名称                       | **创世初始值**      | **治理Range** | **字段/初始值说明**           | **级别**  |
| ------------------------------ | ------------------- | ------------- | ----------------------------- | --------- |
| min_edge_deposit               | 100,000*10^6 uTOP   | （0,正无穷）  | edge节点最低保证金。          | normal    |
| min_validator_deposit          | 500,000,000,000uTOP | （0,正无穷）  | validator节点最低保证金。     | normal    |
| min_archive_deposit            | 500,000*10^6 uTOP   | （0,正无穷）  | archive节点最低保证金。       | normal    |
| min_auditor_deposit            | 1,000,000*10^6 uTOP | （0,正无穷）  | auditor节点最低保证金。       | normal    |
| dividend_ratio_change_interval | 14d                 | （0,正无穷）  | 分红比例修改时间间隔。        | normal    |
| min_mainnet_active_archives    | 1                   | [0，正无穷）  | 主网激活archive最低节点数。   | important |
| min_mainnet_active_auditors    | 128                 | [0，正无穷）  | 主网激活auditor最低节点数。   | important |
| min_mainnet_active_edges       | 1                   | [0，正无穷）  | 主网激活edge最低节点数。      | important |
| min_mainnet_active_votes       | 0                   | [0，正无穷）  | 主网激活最低总票数。          | important |
| min_mainnet_active_validators  | 512                 | [0，正无穷）  | 主网激活最低validator节点数。 | important |

## 兑票与投票

| 参数名称              | 创世初始值 | 治理Range    | 字段/初始值说明                                              | 级别   |
| --------------------- | ---------- | ------------ | ------------------------------------------------------------ | ------ |
| min_stake_votes_num   | 10,000     | [0，正无穷） | 1万票起兑，最低兑票数。                                      | normal |
| min_votes_num         | 0          | [0，正无穷） | 最低票数。<br/>在一笔交易中，给每个节点增加的票数和取消的票数必须大于该值。 | normal |
| max_vote_nodes_num    | 1,000      | [0，正无穷） | 最大投票节点数。<br/>限制单个账户投票节点数，而不是单个交易投票节点数。 | normal |
| votes_report_interval | 30时钟块   | [0，正无穷） | 票数上报周期。<br/>投票、撤票触发票数上报周期的检查，满足周期就上报。 | normal |

## 增发与奖励

| 参数名称                      | 创世初始值 | 治理Range    | 字段/初始值说明                                              | 级别      |
| ----------------------------- | ---------- | ------------ | ------------------------------------------------------------ | --------- |
| total_issuance                | 200亿      |              | TOP token最初最大发行总量。                                  | critical  |
| additional_issue_year_ratio-  | 8%         | [0，100%]    | 年总奖励比例/年初剩余预留奖励比例。<br/>总奖励比例逐年递减，下年奖励比例=max( 第n年年初剩余预留奖励比例*8%, 2%）首年比例为38%*8%=3.04%第二年总奖励比例=（38%-3.04%）*8%=2.7968%，以此类推 | critical  |
| min_ratio_annual_total_reward | 2%         | [0，100%]    | 年总奖励最低比例：200亿的2%。                                | critical  |
| vote_reward_ratio             | 20%        | [0，100%]    | 节点选票奖励占总奖励比。所有得票节点按照得票占比分总奖励     | critical  |
| governance_reward_ratio       | 4%         | [0，100%]    | 链上治理委员奖励占总奖励比。                                 | critical  |
| edge_reward_ratio             | 3%         | [0，100%]    | edge节点工作奖励占总奖励比。                                 | critical  |
| auditor_reward_ratio          | 10%        | [0，100%]    | auditor节点工作奖励占总奖励比。                              | critical  |
| validator_reward_ratio        | 60%        | [0，100%]    | validator节点工作奖励占总奖励比。                            | critical  |
| archive_reward_ratio          | 3%         | [0，100%]    | archive节点工作奖励占总奖励比。                              | critical  |
| reward_issue_interval         | 24h        | (0，正无穷） | 奖励计算与发放周期。<br/>按照奖励计算当时节点的选票情况分配节点奖励和投票者奖励，不关注过程中的票数变化。 | normal    |
| workload_timer_interval       | 18个时钟块 |              | 检查是否有需要下发奖励的定时器时间。<br/>系统定时检查是否存在待下发的奖励数据和奖励金额，如果存在，每次取20条交易下发，现状共有1024条节点奖励数据+1024条投票者奖励数据+1024条奖励增发到table，3分钟检查一次，每次发20条，那么共450分钟。 | normal    |
| task_num_per_round            | 16         |              | 每次下发的奖励笔数。<br/>系统定时检查是否存在待下发的奖励数据和奖励金额，如果存在，每次取20条交易下发，现状共有1024条节点奖励数据+1024条投票者奖励数据+1024条奖励增发到table，3分钟检查一次，每次发20条，那么共450分钟。 | normal    |
| workload_per_tx               | 1          |              | 作为leader出的table block中每多装一笔交易算几个工作量        | normal    |
| workload_per_tableblock       | 2          |              | 作为leader每出一个table block算几个工作量。                  | normal    |
| workload_report_interval      | 3h         | [0，正无穷） | 工作量上报周期。<br/>该值要小于奖励周期，最好跨选举周期，要避免给beacon太大压力。不仅仅上报工作量，还会将gas抵押金一起上报。 | important |
| schedule_table_num_per_clock  | 4          |              | 每个时钟块调度table 合约检查是否满足工作量上报条件的table数量。<br/>共256个table，每个时钟块（10秒）检查四个table，那么共需要640秒。 | normal    |
| shard_zero_workload           | 0          | [0，正无穷） | validator 集群工作小于等于该值时，集群按零工作量计算。       |           |
| cluster_zero_workload         | 0          | [0，正无穷） | auditor 集群工作小于等于该值时，集群按零工作量计算。         |           |

##  节点惩罚与信誉分奖励

| 参数名称                                       | 创世初始值                     | 治理Range     | 字段/初始值说明                                              | 级别   |
| ---------------------------------------------- | ------------------------------ | ------------- | ------------------------------------------------------------ | ------ |
| sign_table_blocks_report_interval              | 311个时钟块(51m50s)            | （0，正无穷） | 签块数上报周期。                                             | normal |
| min_table_block_report                         | 32个                           | （0，正无穷） | 签块数上报最低table块。<br/>在没有用户交易的情况下，工作量上报和签块数上报交易会在shard产生8+8个table块。 | normal |
| punish_interval_time_block                     | 8641个时钟块（24小时多10秒）   | （0，正无穷） | 惩罚周期_时钟块                                              | normal |
| punish_interval_table_block                    | 147456个table块                | （0，正无穷） | 惩罚周期_table 块。<br/>签块数上报需要满足table块大于阈值，如果小于阈值（视为零工作量）不会上报，因此一个惩罚周期24小时内一个table会有0~8次（24/3）上报，全网交易少的时候，不适合对签块数低的节点进行惩罚，因此8*签块数上报最低table块*1024个table=8*32*1024=262144个table块。 | Normal |
| sign_block_publishment_threshold_value         | 0%                             | [0%，100%]    | 签块率惩罚阈值。<br/>签块率：应该出块数/实际出块数（当选为leader的次数）。对签块率＜0（即掉线）的节点进行惩罚；适用于auditor和validator。 | Normal |
| sign_block_ranking_publishment_threshold value | 100,000/1,000,000（10%）       | [0%，100%]    | 签块率排名惩罚阈值。<br/>适用于auditor和validator，排名＜后10%*总节点数 的节点可能会被惩罚。 | Normal |
| min_credit                                     | 0.1                            | [0.1,1]       | 节点最小信誉分。<br/>适用于auditor和validator，该值是新节点注册的初始值，惩罚信誉分扣分不得低于该值。 | normal |
| backward_validator_slash_credit                | 0.1                            | [0,1]         | validator落后罚没信誉分。<br/>因为惩罚周期内节点正常工作，可以增加0.03分，所以落后惩罚0.1分，相当于落后一次需要3.3天补救。 | Normal |
| backward_auditor_slash_credit                  | 0.1                            | [0,1]         | auditor落后罚没信誉分。<br/>因为惩罚周期内节点正常工作，可以增加0.03分，所以落后惩罚0.1分，相当于落后一次需要3.3天补救。 | Normal |
| sign_block_ranking_reward_threshold value      | 0%                             |               | 签块率排名奖励阈值。对签块数＞0的节点进行信誉分奖励。        |        |
| sign_block_reward_threshold value              | 80                             |               | 签块率奖励阈值。<br/>对排名＜前80%*总节点数 的节点进行信誉分奖励；适用于auditor和validator。 |        |
| award_validator_credit                         | 0.03                           | [0,1]         | validator增加的信誉分。<br/>每24小时增加0.03分，从0.1分增加到1分，需要正常工作30天。 |        |
| ward_auditor_credit                            | 0.03                           | [0,1]         | auditor增加的信誉分。<br/>每24小时增加0.03分，从0.1分增加到1分，需要正常工作30天。 |        |
| backward_node_lock_duration_increment          | 103681个时钟块（12天多10秒）   | [0,正无穷）   | 节点落后增加锁定期。<br/>初始值说明，一个节点连续30天落后，就会达到最大锁定期1年。 | normal |
| max_nodedeposit_lock_duration                  | 3153593个时钟块（365天少70秒） | [0,正无穷）   | 节点保证金最大锁定期。<br/>节点每次作恶，会增加保证金的质押时间，直到增加到最大值。 | normal |

## 白名单

| 参数名称         | 创世初始值       | **治理Range** | **字段/初始值说明** | 级别   |
| ---------------- | ---------------- | ------------- | ------------------- | ------ |
| toggle_whitelist | true             | false or true | 默认打开白名单。    | normal |
| whitelist        | genesis accounts | -             | 白名单列表。        | normal |

## 链上治理

| 参数名称                 | 创世初始值       | 治理Range | 参数/初始值说明          | 级别     |
| ------------------------ | ---------------- | --------- | ------------------------ | -------- |
| cgc_proposal_expire_time | 259200时钟块     |           | 提案超时时间30天。       | critical |
| tcc_member_number        | 7                |           | TCC成员数量。            | critical |
| min_cgc_proposal_deposit | 100,000,000 uTOP |           | normal提案质押金最低值。 | normal   |

## 选举

| 参数名称                                                     | 创世初始值                                  | 治理Range | 参数/初始值说明                                              | 级别     |
| ------------------------------------------------------------ | ------------------------------------------- | --------- | ------------------------------------------------------------ | -------- |
| rec_election_interval                                        | 60480时钟周期（逻辑时间7天：7*24*60*60/10） |           | REC group选举周期。                                          | normal   |
| zec_election_interval                                        | 8640时钟周期（逻辑时间1天：1*24*60*60/10）  |           | ZEC group选举周期。                                          | normal   |
| zone_election_trigger_interval                               | 31时钟周期                                  |           | zone选举触发周期（创世前）。                                 | normal   |
| edge_election_interval                                       | 360时钟周期                                 |           | edge选举周期。                                               | normal   |
| archive_election_interval                                    | 360时钟周期                                 |           | archive选举周期。                                            | normal   |
| cluster_election_interval                                    | 71时钟周期                                  |           | consensus cluster选举周期（创世前）。                        | normal   |
| auditor_group_count                                          | 2                                           |           | 上线后共2个auditor group。                                   | normal   |
| validator_group_count                                        | 4                                           |           | 验证者group数，上线后共4个validator group。                  | critical |
| election_rotation_count_ratio                                | 16%                                         |           | 最大轮换个数为当前group_size的大小比例。                     | normal   |
| cluster_election_minimum_rotation_ratio                      | 33%                                         |           | 对于consensus节点选举，当可选入节点数<=66%*当前group_size时，需要选入选出。 | normal   |
| min_auditor_group_size                                       | 64                                          |           | auditor group最小节点个数，与root节点数一致。                | normal   |
| max_auditor_group_size                                       | 128                                         |           | auditor group最大节点个数。                                  | normal   |
| min_validator_group_size                                     | 32                                          |           | validator group最小节点个数，与root节点数一致，首轮轮换节点数为5,4个shard对应20个，≤auditor stake 组内节点数。 | normal   |
| max_validator_group_size                                     | 128                                         |           | validator group最大节点个数。                                | normal   |
| min_election_committee_size                                  | 32                                          |           | REC group最小节点个数，与root节点数一致。                    |          |
| max_election_committee_size                                  | 256                                         |           | REC group最大节点个数。                                      |          |
| max_auditor_rotation_count                                   | 2                                           |           | 每个auditor group在轮换时，更新集群数。                      | normal   |
| max_edge_group_size                                          | 512                                         |           | edge group最大节点数。                                       | normal   |
| max_archive_group_size                                       | 512                                         |           | archive group最大节点数。                                    | normal   |
| rec_standby_pool_update_interval                             | 10                                          |           | REC备选池定时刷新间隔（触发时会同步注册合约的最新节点信息）。 |          |
| zec_standby_pool_update_interval                             | 59                                          |           | ZEC备选池定时刷新间隔（触发时会获取rec备选池最新可信高度）。 |          |
| cross_reading_rec_standby_pool_contract_height_step_imitation | 2                                           |           | ZEC备选池获取rec备选池可信高度时的最大步长限制。             |          |
| cross_reading_rec_standby_pool_contract_logic_timeout_limitation | 137                                         |           | ZEC备选池获取rec备选池可信高度的超时时间。                   |          |

## stake

| 参数名称                  | 创世初始值 | 治理Range | 参数/初始值说明                                              | 级别   |
| ------------------------- | ---------- | --------- | ------------------------------------------------------------ | ------ |
| max_validator_stake       | 24,500,000 |           | validator stake最大值，当validator stake达到最大值时，更多的保证金或票数都不再计算。 | normal |
| auditor_nodes_per_segment | 27         |           | auditor stake分组后组内节点数。                              | normal |

##  共识

| 参数名称                             | 创世初始值  | 治理Range | 意义描述                                                     | 级别      |
| ------------------------------------ | ----------- | --------- | ------------------------------------------------------------ | --------- |
| tx_send_timestamp_tolerances         | 5mins       |           | 发送交易fire时间戳允许的误差时间，即允许钱包客户端和各个节点之间的时钟误差，大于该误差的交易被丢弃。 | important |
| custom_property_alias_name_max_len   | 32 bytes    |           | 账户别名属性最大字节长度。                                   | important |
| custom_property_name_max_len         | 16 bytes    |           | 属性名称最大字节长度。                                       | important |
| custom_property_max_number           | 128         |           | 用户自定义属性最大数量。                                     | critical  |
| application_contract_code_max_len    | 32768 bytes |           | 用户合约代码最大字节长度。                                   | important |
| fullunit_contain_of_unit_num         | 21          |           | 每隔21个块产生一个fullunit。                                 | important |
| tableblock_batch_unit_max_num        | 64          |           | table block最多打包的unit数量。                              |           |
| contract_transaction_size            | 8           |           | 合约一次可以调多少合约。                                     | critical  |
| unitblock_confirm_tx_batch_num       | 8           |           | 区块中打包确认交易数据。                                     |           |
| unitblock_recv_transfer_tx_batch_num |             |           | 区块中接收转账交易打包数量。                                 |           |
| unitblock_send_transfer_tx_batch_num | 3           |           | 区块中发送交易打包数量。                                     |           |