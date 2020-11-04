# RPC API

## Overview

RPC API is provided by TOP Network to the community to interact with the chain, including sending transactions and retrieving information on the chain: transaction information, node information, mainchain information, etc.

## Connect to RPC API

Caution:

> It is suggested that you connect to the creation edge node of TOP Network. If you use your own edge node, your edge node may be rotated out during node election due to the rotation mechanism of TOP Network, which will make your edge node unavailable and result in the failure of transaction sending.

You can use standard HTTP requests to connect to an Edge node to use RPC API, please use the Edge node official domain name:

## Request Instructions

Sample:

```
auto account_info_response = client.request("POST", "/", transaction_info_request);
```

**Request Approach**: POST.

**Request Path**: /, root path.

**Request Body** : "transaction_info_request" is the request body,  please refer to [Methods](#Methods).

### Request Body

#### Public Request Parameters

| Parameter Name      | Required | Default Value | Parameter Type | Description                                                  |
| ------------------- | -------- | ------------- | -------------- | ------------------------------------------------------------ |
| target_account_addr | Yes      | -             | String         | Extension field, not currently in use, you can fill in any account address. |
| body                | Yes      | -             | Object         | The body defines business parameters, the JSON format needs to be serialized into String format. |
| method              | Yes      | -             | String         | Request method.                                              |
| sequence_id         | Yes      | -             | String         | Client sequence ID, incremental.                             |
| identity_token      | Yes      | -             | String         | Please get the identity token before interacting with the chain.<br/>The identity token is different for each account.<br/>This field is not  validated. |
| version             | Yes      | 1.0           | String         | RPC API version.                                             |

### Request Sample

Take getting account transaction information as an example:

```
target_account_addr=T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn&
body={
"params" : {
    "account_addr" : "T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn",
    "tx_hash" : "0x8aa1e7082af07bf22840a1526745c484a5a20115d8e92cff2d9ed413128ac2b4"
   }
}&
method=getTransaction&
sequence_id=22&
identity_token=&
version=1.0
```

#### Methods

| Method             | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| requestToken       | Please get the identity token before interacting with the chain.<br/>The identity token is different for each account. |
| sendTransaction    | Transfer, staking, node registration, voting,claiming rewards, etc. |
| getAccount         | Get account information on the chain.                        |
| getTransaction     | Get transaction details.                                     |
| getBlock           | Get block by account address.                                |
| getStandbys        | Get candidate nodes.                                         |
| getCGP             | Get on-chain governance parameters.                          |
| getChainInfo       | Get the mainchain information.                               |
| queryNodeInfo      | Get node information by account address.                     |
| queryNodeReward    | Get node reward.                                             |
| listVoteUsed       | Get the distribution of node used votes.                     |
| queryVoterDividend | Get voter dividend.                                          |
| queryProposal      | Get proposal details.                                        |

## Error Code

RPC Standard Errors

| Error Code | Error Type                     | Return Message                                               | Description                                                  |
| :--------- | :----------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| -32700     | Parse error.                   | body json parse error json parse errorrpc param error        | Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text. |
| -32602     | Miss params or invalid params. | miss param params account_addr or account_addr is not valid<br/>miss param params amount or amount is not valid<br/>miss param params last_hash or last_hash is not valid<br/>miss param params nonce or nonce is not valid<br/>miss param params data or data is not valid<br/>miss param params tx_deposit or tx_deposit is not valid<br/>miss param params to_ledger_id or to_ledger_id is not valid<br/>miss param params from_ledger_id or from_ledger_id is not valid<br/>miss param params tx_type or tx_type is not valid<br/>miss param params tx_len or tx_len is not valid<br/>miss param params send_timestamp or send_timestamp is not valid<br/>miss param params tx_random_nonce or tx_random_nonce is not valid<br/>miss param params last_tx_nonce or last_tx_nonce is not valid<br/>miss param params challenge_proof or challenge_proof is not valid<br/>miss param sender_action<br/>miss param receiver_action<br/>miss param sender_action action_hash<br/>miss param sender_action action_type<br/>miss param sender_action action_size<br/>miss param sender_action account_addr<br/>miss param sender_action action_name<br/>miss param sender_action action_param<br/>miss param sender_action action_authorization<br/>miss param receiver_action action_hash<br/>miss param receiver_action action_type<br/>miss param receiver_action action_size<br/>miss param receiver_action account_addr<br/>miss param receiver_action action_name<br/>miss param receiver_action action_param<br/>miss param receiver_action action_authorization<br/>miss param method or method is not valid<br/>miss param version or version is not valid <br/>miss param sequence_id or version is not valid<br/>msg list is empty | Miss method parameter(s) or invalid method parameter(s) (parameter type error). |

Custom Errors

| Error Code | Error Type                        | Return Message                                               | Description                                                  |
| :--------- | :-------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 0          | Transaction delivery status.      | OK                                                           | When the transaction is delivered successfully, it enters into consensus, which does not represent the final consensus status of the transaction. The final status of the transaction consensus needs to be inquired through the transaction hash. |
| 1          | Business related parameter error. | version must be 1.0 now                                      | RPC API current version is 1.0.                              |
|            |                                   | transaction hash error                                       | -                                                            |
|            |                                   | transaction sign error                                       | -                                                            |
|            |                                   | str+ length is not correct                                   | String length error.                                         |
| 2          | Unknown error                     | unknown exception                                            | -                                                            |
| 3          | Shard execution error.            | account not found on chain                                   | -                                                            |
|            |                                   | account address or transaction hash error/does not exist     | This transaction was not found on the chain (the transaction is neither in the transaction pool nor in the block, possibly the account address or hash error/does not exist). |
|            |                                   | account address does not exist or block height does not exist<br/> | Block does not exist (possibly account address or block height does not exist). |
|            |                                   | unknown msg type<br/>                                        | Messages other than transactions and queries were sent.      |
|            |                                   | request time out                                             | -                                                            |