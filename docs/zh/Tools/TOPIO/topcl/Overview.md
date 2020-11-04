# topcl使用指南

## 概述

topcl是TOP Network提供给社区的一款账户管理、与链进行交互的命令行客户端。

您可以通过topcl与链进行交互，包括管理账户/keys、查询链上账户、区块、链信息，发送交易、节点staking、节点投票、节点注册等。

说明：

> * 客户端的所有交互操作，输入结束以Enter键确认即可。

> * 返回的数据格式为json格式。

## 查看topcl帮助信息

启动topcl后，执行`help`查看topcl版本、命令等信息。

```
NAME:
    topcl

COPYRIGHT:
    Copyright 2018-2020 The TOP Network Authors

USAGE:
    command [options] [arguments...] subcommand [subcommand options] [arguments...]

VERSION:
    1.1.0

COMMANDS:
    help                            Show a list of commands.
    get                             Retrieve information from the blockchain.
    sendtx                          Send transaction to the blockchain.
    system                          Interact with system contracts.
    wallet                          Create and manage accounts and public-private key pairs.

OPTIONS:
    -h --help                       Show a list of commands.
```

### 命令说明

| 命令   | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| help   | 查看topcl帮助信息。                                          |
| wallet | 账户和公私钥对管理，包括创建账户、创建公私钥对、设置默认账户、列出现有账户及公司要对、重置账户、公私钥keystore文件密码。具体请参见[钱包功能](docs/Tools/TOPIO/wallet.md)。 |
| get    | 获取链上信息，包括账户、区块、链上治理参数、主链、交易信息。 |
| sendtx | 在链上发送交易，包括部署、调用智能合约，staking、转账。      |
| system | 和系统合约交互，包括节点注册、节点投票、领取节点奖励/投票者分红、发起提案等。 |

### 选项说明

| 选项      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| -h,--help | 查看wallet、get、sendtx、system的命令列表，例如`wallet -h`。 |

