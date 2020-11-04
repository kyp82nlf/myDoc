# Action Param Serialization

## xtransaction_type_create_contract_account

### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| symbol         | Yes      | TOP           | String         | Token symbol.                                                |
| amount         | Yes      | -             | Uint64         | Transfered amount to the application contract. The default unit is uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

### Receiver Action Param Serialization

receiver action type: xaction_type_create_contract_account

Serialize the values of the parameters "gas_limit" and "contract_code" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| gas_limit      | Yes      | -             | Uint64         | Upper limit of gas that the contract is willing to pay for each transaction from the sender. The unit is Tgas. |
| contract_code  | Yes      | -             | String         | Application contract code.                                   |

**Sample**

```
top::base::xstream_t stream(top::base::xcontext_t::instance());
stream << gas_limit;
stream << contract_code;
std::string code_stream((char*)stream.data(), stream.size());
```

## xtransaction_type_transfer

### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                    |
| -------------- | -------- | ------------- | -------------- | ---------------------------------------------- |
| symbol         | Yes      | TOP           | String         | Token symbol.                                  |
| amount         | Yes      | -             | Uint64         | Transfer-out amount. The default unit is uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

### Receiver Action Param Serialization

receiver action type: xaction_type_asset_in

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                   |
| -------------- | -------- | ------------- | -------------- | --------------------------------------------- |
| symbol         | Yes      | TOP           | String         | Token symbol.                                 |
| amount         | Yes      | -             | Uint64         | Transfer-in amount. The default unit is uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

## xtransaction_type_vote

Please make sure that you have enough unused votes in your node account before voting. You can use the `get Account` command to query. If you do not have enough votes in your account, you can exchange votes by command  `sendtx stakeVote`.

Node accounts on the chain can vote nodes and obtain rewards:

* You can vote for any node that contains the role of "auditor" (that is, an advance node).
* The minimum number of votes voting on a node for the first time is 10,000, and the subsequent cumulative votes are unlimited.
* A single account can vote for a maximum of 1000 nodes currently.
* After voting on a node, a portion of the reward won by the node will be given to the voter.

### Sender Action Param Serialization

sender action type: xaction_type_source_null

No serialization parameter。

### Receiver Action Param Serialization

receiver ation type: xaction_type_run_contract

Serializes the value of the parameter "vote_infos".

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type          | Description                                                  |
| -------------- | -------- | ------------- | ----------------------- | ------------------------------------------------------------ |
| vote_infos     | Yes      | -             | Map<std::string,uint64> | Account address of node be voted(String); Amount of votes(Integer). |

**Sample**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, vote_infos);
```

## xtransaction_type_abolish_vote

A voter may cancel and withdraw votes at any time that has already been vote on a node.

The number of votes for each cancellation operation is unlimited, but cannot exceed the total number of votes vote on the nodes, otherwise the cancellation operation will fail.

After voting on the node, even if the node is unregistered, the votes will not be returned to your account. You need to initiate the cancellation operation.

You can cancel voting on nodes in bulk.

### Sender Action Param Serialization

sender action type: xaction_type_source_null

No serialization parameter.

### Receiver Action Param Serialization

receiver ation type: xaction_type_run_contract

Serializes the value of the parameter "vote_infos".

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type          | Description                                                  |
| -------------- | -------- | ------------- | ----------------------- | ------------------------------------------------------------ |
| vote_infos     | Yes      | -             | Map<std::string,uint64> | Account address of node be voted(String)；Amount of votes(Integer). |

**Sample**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, vote_infos);
```

## xtransaction_type_pledge_token_gas

The exchange price for gas is:

![Snap56](action-param-serialization.assets/Snap56.jpg)

### Sender Action Param Serialization

sender action type: xaction_type_source_null

No serialization parameter.

### Receiver Action Param Serialization

receiver ation type: xaction_type_pledge_token

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                          |
| -------------- | -------- | ------------- | -------------- | ------------------------------------ |
| symbol         | Yes      | TOP           | String         | Token symbol.                        |
| amount         | Yes      | -             | Uint64         | Locked TOP tokens. The unit is uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

## xtransaction_type_redeem_token_gas

After initiating the unlock, you have to wait 24 hours and send a transaction (not a query) before the unlocked TOP tokens are received.

### Sender Action Param Serialization

sender action type: xaction_type_source_null

No serialization parameter.

### Receiver Action Param Serialization

receiver action type: xaction_type_redeem_token

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                            |
| -------------- | -------- | ------------- | -------------- | -------------------------------------- |
| symbol         | Yes      | TOP           | String         | Token symbol.                          |
| amount         | Yes      | -             | Uint64         | Unlocked TOP tokens. The unit is uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

## xtransaction_type_pledge_token_vote

Rules for exchanging votes:

locked TOP tokens=votes_amount / [ 1.04^(lock_duration / 30 - 1) ], lock_duration < 570；

locked TOP tokens=vote_amount / 2,                       lock_duration >= 570。

The longer the lock duration is, the fewer TOP tokens are locked for the same number of votes.

### Sender Action Param Serialization

sender action type: xaction_type_source_null

No serialization parameter.

### Receiver Action Param Serialization

receiver action type: xaction_type_pledge_token_vote

Serialize the values of the parameters "vote_amount" and "lock_duration" in order.

**Serialized Parameters**

| Parameter Name | Required | 默认值 | 类型   | 说明                                                         |
| -------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| vote_amount    | Yes      | -      | Uint64 | Amount of votes to be exchanged, at least 10,000 at a time.  |
| lock_duration  | Yes      | -      | Uint16 | TOP token lock duration, the unit is "day".<br/>The lock duration must be at least 30 days and must be an integer multiple of 30. |

**Sample**

```
xaction_pledge_token_vote_param pledge_vote_param(this, vote_amount, lock_duration);
        std::string param = pledge_vote_param.create();
```

## xtransaction_type_redeem_token_vote

During the lock duration, the TOP tokens cannot be unlocked, only the TOP tokens at its expiry can be unlocked.

The TOP tokens that are locked corresponding votes that are already in use cannot be unlocked.

After initiating the unlock process, the locked TOP tokens will be returned to the account immediately.

### Sender Action Param Serialization

sender action type: xaction_type_source_null

### Receiver Action Param Serialization

receiver action type: receiver ation type:xaction_type_pledge_token_vote

Serialize the values of the parameters "vote_amount".

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                        |
| -------------- | -------- | ------------- | -------------- | -------------------------------------------------- |
| vote_amount    | Yes      | -             | Uint64         | Votes amount, unlock the corresponding TOP tokens. |

**Sample**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, vote_amount);
```

## xtransaction_type_run_contract

### Run Application Smart Contract

#### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| symbol         | Yes      | TOP           | String         | Token symbol。                                               |
| amount         | Yes      | -             | Uint64         | Amount transferred to the application smart contract account, the unit is uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

#### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the following parameters in order.

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| contract_addr  | Yes      | -             | String         | The contract account address created by deploying contract,begins with the symbol "T-3". |
| contract_func  | Yes      | -             | String         | The name of the contract function.                           |
| param          | Yes      | -             | String         | Parameter type and parameter value. Format:Parameter Type1,Parameter Value1\|Parameter Type2,Parameter Value2\|Parameter Type2,Parameter Value2, example: 1,1\|2,a\|3.true.<br/>1--Unit64, the parameter value is integer ;<br/>2--String, the parameter value is an arbitrary string;<br/>3--Bool, the parameter value must be "true" or "false"。 |

**Sample**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        if (network_ids.empty()) {
            target_action_name = "register_node";
            param_t = stream_params(stream_t, contract_addr, contract_func, param_type,param);
```

### Run Platform Smart Contract

| Function Name                             | Dscription            |
| ----------------------------------------- | --------------------- |
| [registerNode](#registerNode)             | Register Node.        |
| [unregisterNode](#unregisterNode)         | Unregister Node.      |
| [redeemNodeDeposit](#redeemNodeDeposit)   | Redeem node deposit.  |
| [updateNodeType](#updateNodeType)         | Update node type.     |
| [unstakeDeposit](#unstakeDeposit)         | Unstake Deposit.      |
| [stakeDeposit](#stakeDeposit)             | Stake Deposit.        |
| [setNodeName](#setNodeName)               | Set node name.        |
| [setDividendRatio](#setDividendRatio)     | Set dividend ratio.   |
| [claimNodeReward](#claimNodeReward)       | Claim node reward.    |
| [claimVoterDividend](#claimVoterDividend) | Claim voter dividend. |
| [submitProposal](#submitProposal)         | Submit proposal.      |
| [withdrawProposal](#withdrawProposal)     | Withdraw proposal.    |
| [tccVote](#tccVote)                       | TCC vote on proposal. |

#### registerNode

TOP Network currently has three types of nodes: edge node, validator node, and advance node. You can register as one of these three types of nodes.

Advance nodes can perform multiple roles in different networks: validator, auditor, archive, Root-Beacon and Sub-Beacon. 

An advance node, however, cannot be auditor and validator in auditor group and the validator group under its jurisdiction at the same time.

The minimum registration deposit of each node is shown in the table below.

| Node Type | Minimum Registration Deposit |
| --------- | ---------------------------- |
| edge      | 100,000*10^6 uTOP            |
| validator | 500,000*10^6 uTOP            |
| advance   | 1,000,000*10^6 uTOP          |

Caution：

> After the node registration (including the first registration and re-registration after unregistration), xnode needs to be started before node joining the TOP Network physical Network and entering the candidate pool to wait for the election. Start xonde please refer to [start TOPIO](/en/Tools/TOPIO/StartTOPIO.md) .

##### Sender Action Param Serialization

sender action type:xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                             |
| -------------- | -------- | ------------- | -------------- | --------------------------------------- |
| symbol         | Yes      | TOP           | String         | Token symbol.                           |
| amount         | Yes      | -             | Uint64         | Registration deposit. The unit is uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the parameters "node_type", "nodename" and "node_sign_key" in order.

**Serialized Parameters**

| Parameter Name   | Required | Default  Value | Parameter Type | Description                                                  |
| ---------------- | -------- | -------------- | -------------- | ------------------------------------------------------------ |
| register_deposit | Yes      | -              | Uint64         | Node registration deposit. The unit is uTOP。                |
| node_type        | Yes      | -              | String         | The node type includes edge node, validator and advance node. The advance node can perform roles as archive, validator, and auditor.<br/>You can register as one of the three types.<br/>After registering as an advance node, what kind of work role the node is elected depends on the votes it receives:<br/>If the advance node is to be elected as the role of auditor, archive, REC or ZEC, the votes must be greater than or equal to the actual registration deposit of the node (Here, the node deposit is calculated by TOP, not utop).<br/>When the votes falls below the actual pledge deposit, the advance node can only be elected as validator.<br/>Caution：<br/>Node's votes must be voted by other nodes or by this node himself. |
| nodename         | Yes      | -              | String         | Node nickname, 4-16 characters, letters, Numbers or underscores. |
| node_sign_key    | Yes      | -              | String         | You can use the the node account's public key as the node sign key when registering node.<br/>It is recommended that you create a asset-free public-private key pair to protect your account assets better, the private key is used to sign the node when it is working after is has been elected into the network. Create public-private key pair Algorithms please refer to [Account Protocol](/en/AboutTOPNetwork/Protocol/AccountProtocol.md).<br/>Please enter the corresponding public key (Base64), which can be used by other nodes for decryption. |

**Sample**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        if (network_ids.empty()) {
            target_action_name = "register_node";
            param_t = stream_params(stream_t, node_type, nodename, node_sign_key);
```

#### unregisterNode

The TOP Network nodes need to unregister first before exiting the network.

* Node unregistration needs to initiate by the node voluntarily.

* After the unregistration , the node registration deposit will not be immediately returned to the node account and will be locked for a period of time. If the node make malicious, the lock period will be extended.

* After the expiration of the locked registration deposit, the node shall redeem the deposit voluntarily, and the system will not automatically return it.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description   |
| -------------- | -------- | ------------- | -------------- | ------------- |
| symbol         | Yes      | TOP           | String         | Token symbol. |
| amount         | Yes      | -             | Uint64         | 0             |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

No serialization parameter.

#### redeemNodeDeposit

After the unregistration , the node registration deposit will not be immediately returned to the node account and will be locked down for 72 hours. If the node makes malicious, the lock period will be extended.

After the expiration of the locked registration deposit, the node shall redeem the deposit voluntarily, and the system will not automatically return it.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description   |
| -------------- | -------- | ------------- | -------------- | ------------- |
| symbol         | Yes      | TOP           | String         | Token symbol. |
| amount         | Yes      | -             | Uint64         | 0             |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

No serialization parameter.

#### updateNodeType

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Before updating the node type, please execute `System queryNodeInfo` to inquire whether the node deposit balance meets the minimum registeration deposit requirement for the new node type. If the not, the corresponding deposit difference shall be pledged when updating.

If the node deposit balance is greater than or equal to the minimum registration deposit for the new type node, you can continue to increase the deposit for the node or not when the node type is updated.

Updating a node type can also be done with the command `system registerNode`. If the new type node requires more registration deposit,the deposit difference will need to be increased when re-registering.

Similarly, if the node deposit balance is greater than or equal to the minimum registration deposit for the new type node, you can continue to increase the deposit for the node or not when you re-register the node.

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description              |
| -------------- | -------- | ------------- | -------------- | ------------------------ |
| symbol         | Yes      | TOP           | String         | Token symbol.            |
| amount         | Yes      | -             | Uint64         | Increased deposit(uTOP). |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the parameters "node_type" .

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------ |
| node_type      | Yes      | -             | String         | New node type: edge, advance or validator. |

**Sample**

```
 std::string param_t;
		top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        target_action_name = "update_node_type";
        param_t = stream_params(stream_t,node_type);
```

#### unstakeDeposit

You can reduce the node deposit at any time. Reducing the deposit will not change the type of node you registered. But the reduction of the deposit will fail if the node's deposit balance is lower than the minimum deposit requirement for the current type of node.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description   |
| -------------- | -------- | ------------- | -------------- | ------------- |
| symbol         | Yes      | TOP           | String         | Token symbol. |
| amount         | Yes      | -             | Uint64         | 0             |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the parameters "unstake_deposit".

**Serialized Parameters**

| Parameter Name  | Required | Default Value | Parameter Type | Description            |
| --------------- | -------- | ------------- | -------------- | ---------------------- |
| unstake_deposit | Yes      | -             | Uint64         | Reduced deposit(uTOP). |

**Sample**

```
 std::string param_t;
		top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        target_action_name = "unstake_deposit";
        param_t = stream_params(stream_t,unstake_deposit);
```

#### stakeDeposit

You can increase the node deposit to improve your comprehensive stake at any time.

Increasing the node deposit does not change the type of node you have registered.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                          |
| -------------- | -------- | ------------- | -------------- | ------------------------------------ |
| symbol         | Yes      | TOP           | String         | Token symbol。                       |
| amount         | Yes      | -             | Uint64         | Increased deposit. The unit is uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

No serialization parameter.

#### setNodeName

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description   |
| -------------- | -------- | ------------- | -------------- | ------------- |
| symbol         | Yes      | TOP           | String         | Token symbol. |
| amount         | Yes      | -             | Uint64         | 0             |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the parameters "nodename"

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| nodename       | Yes      | -             | String         | Node nick name，4-16 characters, letters, Numbers or underscores. |

**Sample**

```
  std::string param_t;
		top::base::xstream_t stream_t(top::base::xcontext_t::instance());
        target_action_name = "set_nodekname";
        param_t = stream_params(stream_t, nodename);
```

#### setDividendRatio

Once the dividend ratio is set, all the rewards you received, including the work rewards and your own voting rewards, will be distributed to the voter account that supports you according to the dividend ratio you set.

You can change the dividend ratio every 14 days.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description    |
| -------------- | -------- | ------------- | -------------- | -------------- |
| symbol         | Yes      | TOP           | String         | Token symbol。 |
| amount         | Yes      | -             | Uint64         | 0              |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the parameters "dividend_ratio".

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                   |
| -------------- | -------- | ------------- | -------------- | ----------------------------- |
| dividend_ratio | Yes      | -             | Integer        | Dividend ratio, value[0,100]. |

**Sample**

```
 top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, dividend_ratio);
```

#### claimNodeReward

You can use `system queryNodeReward` to query the node reward before you claim the node reward.

Node reward can be claimed at most once every 24 hours, and each time the amount of reward should be ≥1,000*10^6 uTOP tokens.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description    |
| -------------- | -------- | ------------- | -------------- | -------------- |
| symbol         | Yes      | TOP           | String         | Token symbol。 |
| amount         | Yes      | -             | Uint64         | 0              |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

No serialization parameter.

#### claimVoterDividend

The system will settle voter dividends every 24 hours and automatically distribute voter dividends to the dividend pool.

The voter can apply for withdrawal once within 24 hours, and the withdrawal will be received immediately after the application is initiated. If the withdrawal amount is less than 10*10^6 uTOP tokens, the withdrawal will fail.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description    |
| -------------- | -------- | ------------- | -------------- | -------------- |
| symbol         | Yes      | TOP           | String         | Token symbol。 |
| amount         | Yes      | -             | Uint64         | 0              |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

No serialization parameter.

#### submitProposal

When governing on the chain, you need to submit an on-chain governance proposal  first .

Any user can submit a proposal as long as a certain TOP tokens are pledged.

Caution:

>  You must pledge at least 100*10^6 uTOP tokens as proposal deposit for 30 days before submitting a proposal. When it expires, the proposal deposit will be returned to your account automatically.
>
>  In addition to the minimum transaction deposit of 100,000 uTOP tokens, the transaction fee of 100*10^6 uTOP tokens shall be deducted for running Root-Beacon system contract transaction.
>
>  So make sure you have at least 200.1*10^6 uTOP tokens balance in your account before submitting your proposal.

##### On-Chain Governance Parameter Modification Proposals

Only the TCC members have the right to vote on a proposal. For proposals of different levels, the voting rules are different:

* Normal: Approval by 51% of members is required.

* Important: It shall be approved by 51% of the members, and no more than 25% of the members shall abstain.

* Critical: Two-thirds of the committee members are required to approve, and no more than 20% of the members are opposed.

##### Community Fund Management Proposal

Community fund management proposal is "critical" level.

The system will issue governance rewards and zero workload rewards to the community fund account, community users can transfer these rewadrs to the burn account via community fund management proposal .Once the proposal has been voted through by TCC, the burn will take effect.

Catuion:

> * community fund account address: T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0.
> * burn account address: T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                    |
| -------------- | -------- | ------------- | -------------- | ---------------------------------------------- |
| symbol         | Yes      | TOP           | String         | Token symbol.                                  |
| amount         | Yes      | -             | Uint64         | Proposal deposit,the minimum is 100*10^6 uTOP. |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the following parameters in order.

**Serialized Parameters**

| Parameter Name         | Required | Default Value | Parameter Type | Description                                                  |
| ---------------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| proposal_type          | Yes      | -             | Uint8          | Proposal Type: 1--on-chain governance parameter modification proposal；2--community fund management proposal. |
| target                 | Yes      | -             | String         | On-Chain Parameter Modification Proposal: Target is on-chain governance parameter, more about on-chain governance parameter please refer to [On-Chain Governance Prarameters](/en/On-ChainGovernance/On-ChainGovernanceParameters) .<br/>Community Fund Management Proposal: Target is the burn account address: T-!-Ebj8hBvoLdvcEEUwNZ423zM3Kh9d4nL1Ug. |
| value                  | Yes      | -             | String         | When target is on-chain governance parameter, value=new parameter value.<br/>When target is burn account address, value=transferd amount, the unit is uTOP. |
| effective_timer_height | Yes      | -             | Uint64         | Proposal effective clock height. If the clock height is less than the clock height at which the proposal was approved, the proposal will take effect immediately. |

**Sample**

```
std::string param_t = stream_params(stream_t,
                                      target, value,
                                            proposal_type,
                                      effective_timer_height);
```

#### withdrawProposal

A proposal can only be withdrawn by it's sponsor.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description   |
| -------------- | -------- | ------------- | -------------- | ------------- |
| symbol         | Yes      | TOP           | String         | Token symbol. |
| amount         | Yes      | -             | Uint64         | 0             |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the parameters "proposal_id".

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                            |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------ |
| proposal_id    | Yes      | -             | String         | Proposal ID, can be queried by `system queryProposal`. |

**Sample**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, proposal_id);
```

#### tccVote

You can get detailed information about the proposal before you vote on a proposal.

Only the TCC members have the right to vote on a proposal. For proposals of different levels, the voting rules are different.

After the proposal is voted through, a legislative order will be formed and sent to all nodes of the network.

After a proposal is voted through, the system will automatically delete the proposal, unable to query the proposal.

##### Sender Action Param Serialization

sender action type: xaction_type_asset_out

Serialize the values of the parameters "symbol" and "amount" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description   |
| -------------- | -------- | ------------- | -------------- | ------------- |
| symbol         | Yes      | TOP           | String         | Token symbol. |
| amount         | Yes      | -             | Uint64         | 0             |

**Sample**

```
xaction_asset_out_param asset_out_param(this, "", amount);
std::string param = asset_out_param.create();
```

##### Receiver Action Param Serialization

receiver action type: xaction_type_run_contract

Serialize the values of the parameters "proposal_id", "account_addr" and "opinion" in order.

**Serialized Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                                                  |
| -------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| proposal_id    | Yes      | -             | String         | Proposal ID, can be queried by `system queryProposal`.       |
| account_addr   | Yes      | -             | String         | Voting account address, that is, TCC member account address. |
| opinion        | Yes      | -             | Boolean        | Vote opinion: true or false.                                 |

**Sample**

```
top::base::xstream_t stream_t(top::base::xcontext_t::instance());
		std::string param_t = stream_params(stream_t, proposal_id,account_addr,opinion);
```
