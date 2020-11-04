## Overview

The functions provided by the TOP Network platform contract are node registration, node voting, node access, node election, and chain governance.

The Platform contract functions are shown is the following table.

| Function Name                            | Description                        |
| ---------------------------------------- | ---------------------------------- |
| [nodeJoinNetwork](#节点入网)             | Run node joining network contract. |
| [submitProposal](#提交提案)              | Submit proposal.                   |
| [withdrawProposal](撤销提案)             | Withdraw proposal.                 |
| [tccVote](#TCC委员表决提案)              | TCC vote on proposal.              |
| [registerNode](#节点注册)                | Register node.                     |
| [unregisterNode](#节点注销)              | Unregister node.                   |
| [setDividendRatio](#设置节点分红比例)    | Set node dividend ratio.           |
| [setNodeName](#设置节点昵称)             | Set node name.                     |
| [redeemNodeDeposit](#赎回节点注册保证金) | Redeem node registration deposit.  |
| [updateNodeType](#更新节点类型)          | Update node type.                  |
| [stakeDeposit](#增加节点保证金)          | Increase node deposit.             |
| [unstakeDeposit](#减少节点保证金)        | Decrease node deposit.             |
| [voteNode](#给节点投票)                  | Vote on node.                      |
| [unvoteNode](#取消节点投票)              | Unvote on node.                    |
| [claimNodeReward](#领取节点奖励)         | Claim node rewards.                |
| [claimVoterDividend](#领取投票者分红)    | Claim node dividend.               |

## API Instructions

### Node Join Network

**Function Name**

`nodeJoinNetwork`

**Request Parameters**

| Parameter Name | Required | Default Name | Parameter Type | Description |
| ----------- | -------- | ------ | ------------- | ------------ |
| node_account_addr | Yes    |  -    |  String        | Node account address. |
| network_id | Yes    |  -    |  Set<uint32> | The ID of the network the node has joined. Default to "0", that is, the mainchain network. |

**Response Parameters**

None.

### Submit Proposal

**Function Name**

`submitProposal`

**Request Parameters**

| Parameter Name         | Required | Default Value | Parameter Type | Description                                                  |
| ---------------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| proposal_type          | Yes      | -             | Uint8          | Proposal Type：1--on-chain governance parameter modification proposal；2--community fund management proposal. |
| target                 | Yes      | -             | String         | On-Chain Parameter Modification Proposal:Target is on-chain governance parameter,more about on-chain governance parameter please refer to [On-Chain Governance Prarameters](/en/On-ChainGovernance/On-ChainGovernanceParameters) .<br/>Community Fund Management Proposal:Target is burn account address:target is T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug. |
| value                  | Yes      | -             | String         | When target is on-chain governance parameter,value=new parameter value.<br/>When target is burn account address,value=transferd amount,the unit is uTOP. |
| proposal_deposit       | Yes      | -             | Uint64         | Proposal deposit,the minimum is 100*10^6 uTOP.               |
| effective_timer_height | Yes      | -             | Uint64         | Proposal effective clock height. If the clock height is less than the clock height at which the proposal was approved, the proposal will take effect immediately. |

**Response Parameters**

None.

### Withdraw Proposal

**Function Name**

`withdrawProposal`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description  |
| -------------- | -------- | ------------- | -------------- | ------------ |
| proposal_id    | Yes      | -             | String         | Proposal ID. |

**Response Parameters**

None.

### TCC Vote Proposal

**Function Name**

`tccVote`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description |
| -------- | -------- | ------ | ---- | ---- |
| proposal_id  | Yes    |  -   |  String    | Proposal ID. |
| tcc_account_addr | Yes    |  -    |  String   | TCC member account address. |
| opinion | Yes    |  -    |  Bool    | true or false. |

**Response Parameters**

None.


### Register Node

**Function Name**

`registerNode`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description |
| -------- | -------- | ------ | ---- | ---- |
| node_type  | Yes |  -   |  String    | The node type includes edge node, validator and advance node. The advance node can perform roles as archive, validator, and auditor.<br/>You can register as one of the three types.<br/>After registering as an advance node, what kind of work role the node is elected depends on the votes it receives:<br/>If the advance node is to be elected as the role of auditor, archive, REC or ZEC, the votes must be greater than or equal to the actual registration deposit of the node (Here, the node deposit is calculated by TOP, not utop).<br/>When the votes falls below the actual pledge deposit, the advance node can only be elected as validator.<br/>Caution：<br/>Node's votes must be voted by other nodes or by this node himself. |
| nodename | Yes    |  -    | String | Node nick name，4-16 characters, letters, Numbers or underscores, no repetition allowed. |
| node_sign_key | Yes    |  -    | String | You can use the the node account's public key as the node sign key when registering node.<br/>It is recommended that you create a pair of asset-free public-private key pairs to protect your account assets better, the private key is used to sign the node when it is working after they have have been elected into the network.<br/>Please enter the corresponding public key (Base64), which can be used by other nodes for decryption. |

**Response Parameters**

None.

### Unregister Node

**Function Name**

`unregisterNode`

**Request Parameters**

None.

**Response Parameters**

None.


### Set Dividend Ratio

**Function Name**

`setDividendRatio`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description |
| -------- | -------- | ------ | ---- | ---- |
| dividend_ratio | Yes    |  -   |  Integer  | Dividend ratio, value∈[0,100]. |

**Response Parameters**

None.

### Set Node Name

**Function Name**

`setNodeName`

**Request Parameters**

| Parameter Name | Required | Default Name | Parameter Type | Description |
| -------- | -------- | ------ | ---- | ---- |
| nodename | Yes |  -   |  String    | Node name. |

**Response Parameters**

None.

### Redeem Node Registration Deposit

**Function Name**

`redeemNodeDeposit`

**Request Parameters**

None.

**Response Parameters**

None.

### Update Node Type

**Function Name**

`updateNodeType`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description |
| -------------- | -------- | ------------- | -------------- | ----------- |
| node_type      | Yes      | -             | String         | Node type.  |

**Response Parameters**

None.

### Increase Node Deposit

**Function Name**

`stakeDeposit`

**Request Parameters**

None.

**Response Parameters**

None.

### Decrease Node Deposit

**Function Name**

`unstakeDeposit`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description |
| -------- | -------- | ------ | ---- | ---- |
| unstake_deposit  | Yes    |  -   |  Uint64    | Decreased deposit, the unit is uTOP. |

**Response Parameters**

None.

### Vote on Node

**Function Name**

`voteNode`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description |
| -------- | -------- | ------ | ---- | ---- |
| vote_info  | Yes  |  -   |  std::map<std::string, uint64>    | The target account address for the vote(string), number of votes(Uint64). |

**Response Parameters**

None.

### Unvote on Node

**Function Name**

`unvoteNode`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type                | Description                                                  |
| -------------- | -------- | ------------- | ----------------------------- | ------------------------------------------------------------ |
| vote_info      | Yes      | -             | std::map<std::string, uint64> | Account address be voted on(string), number of cancelled votes.(Uint64). |

**Response Parameters**

None.

### Claim Node Reward

**Function Name**

`claimNodeReward`

**Request Parameters**

None.

**Response Parameters**

None.

### Claim Voter Dividend

**Function Name**

`claimVoterDividend`

**Request Parameters**

None.

**Response Parameters**

None.