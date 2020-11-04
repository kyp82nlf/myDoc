# Smart Contract

## Overview

Smart contract is a programmable blockchain account, that is, under an account that stores a piece of code in the blockchain, when this account receives a transaction, it will calculate according to the built-in code and update the calculation results to blockchain database of this account.

## Contract Type

There are two kinds of contracts on the TOP Network chain. One is the native platform contract, which is developed in C++ language to realize the political and economic system and governance functions of the TOP Network chain; the other is the application contract, which is developed in Lua scripting language to realize specific application functions.

## Platform Smart Contract

The functions provided by the TOP Network platform contract are node registration, node voting, node access, node election, and chain governance.

| Platform Contract            | Deployment Location | Contract Account Address                   | Description                                                  | Triggered By The Clock |
| ---------------------------- | ------------------- | ------------------------------------------ | ------------------------------------------------------------ | ---------------------- |
| Election Related Contract    | Root-Beacon         | T-21-38PMFdqf8CxBgBAXrYtWuqd7i23z3C85KDq@0 | Root-Beacon elect Root-Beacon group contract.                | Y                      |
|                              |                     | T-21-38S9CXF7EFLUfk4ZTnwtjuLJgNu4Jf8Go4A@0 | Root-Beacon elect Sub-Beacon group contract.                 | Y                      |
|                              |                     | T-21-38NN9R9DoXrEhaEGKjGDzSmY1ZfgLqSetvQ@0 | Root-Beacon elect edge group contract.                       | Y                      |
|                              |                     | T-21-38TWCPmtZNavRWgTp9KF4CFt6kdCfFxP6EP@0 | Root-Beacon elect archive group contract.                    | Y                      |
|                              |                     | T-21-38M7UrM9d2o1J9v1SVRDPtSSMHr4Qsn96N4@0 | Root-Beacon candidate pool contract, including all candidate nodes and nodes have been elected as edge, archive, Root-Beacon and Sub-Beacon. | Y                      |
|                              | Sub-Beacon          | T-22-4uS5rwwKTQeeLPcNwb5VAeXbQhVAq5TiR3d@3 | Sub-Beacon elect auditor/validator group contract.           | Y                      |
|                              |                     | T-22-4uN3e6AujFyvDXY4h5t6or3DgKpu5rTKELD@3 | Shard association relationship contract.                     | N                      |
|                              |                     | T-22-4uCQ5Di2vZmPURNYVUuvWm5p7EaFQrRLs76@3 | Sub-Beacon candidate pool contract, including all candidate nodes and nodes have been elected as validator and auditor. | Y                      |
| On-chain Governance Contract | Root-Beacon         | T-21-38QMHWxXshXyZa1E48JU1LREu3UrT5KGD2U@0 | On-chain governance contract.                                | N                      |
| Registration Contract        | Root-Beacon         | T-21-38DSqqwBWkHKxkVuCq3htW47BGtJRCM2paf@0 | Node registration contract.                                  | N                      |
|                              | Sub-Beacon          | T-22-4uAt8Na2U1GUtWSHXJSqaJJBXunUX9WU9kB@0 | Process the workload data collected by shard, such as calculating individual node rewards. | Y                      |
|                              |                     | T-22-4uDhihoPJ24LQL4znxrugPM4eWk8rY42ceS@2 | Process the slash data collected by shard, such as calculating individual node slash. | Y                      |
| Shard Contract               | Validator Network   | T-2-MFGB3gFWSsMfEo9LrC7JEaj1gJTXaYfXny     | Shard workload statistics contract.                          | Y                      |
|                              |                     | T-2-ML7oBZbitBCcXhrJwqBhha2MUimd6SM9Z6     | Shard slash statistics.                                      | Y                      |
|                              |                     | T-2-MT3itmNbWs4XYn8R1NUcoucmppJwN7qE69     | Shard reward claiming.                                       |                        |
|                              |                     | T-2-MVfDLsBKVcy1wMp4CoEHWxUeBEAVBL9ZEa     | Vote on node.                                                | N                      |
| Reward Issue Contract        | Sub-Beacon          | T-22-4uBPYNoyqWBgKzNFnhjtFH5E5fuPZJAapji@1 | Issue TOP Token as a reward pool.                            | N                      |

## Application Smart Contract

### Developing Contract

Application smart contract only supports the Lua scripting language development, Lua API usage guidelines please see refer to [Lua API](/en/SmartContract/LuaAPI.md)。

### Deploying Contract

Use TOPIO, RPC API or TOP Network official SDK to deploy application smart contract.

TOPIO is a tool  with client operations(topcl) and node management(xnode) provided by TOP Network for community users. More about TOPIO, please refer to[TOPIO Instructions](/en/Tools/TOPIO/Overview.md)。

RPC API is provided by TOP Network to the community to interact with the chain, including sending transactions and retrieving information on the chain: transaction information, node information, mainchain information, etc. More about RPC API, please refet to [RPC API](/en/Interface/RPC-API/Overview.md)。

TOP Network Software Development Kit (SDK) encapsulates RPC API, smart contract, etc. It is the bridge between application and TOP Network blockchain. More about SDK, please refer to [SDKs](/en/Interface/SDKs/00-overview.md)。

### Running Contract

Use RPC API, TOP Network official SDK , TOPIO or other clients (such as wallet) to run application smart contract.