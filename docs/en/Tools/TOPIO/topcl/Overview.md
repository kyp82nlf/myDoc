# topcl Instructions

## Overview

topcl is a command line client that let's you manage your accounts and hels you interact with the blockchain.

It provides functions such as account /keys management, getting information from the blockchain, sending transactions, staking, voting and node registration.

Caution:

> * All interactive operations of the client, the end with Enter.
>
> * The returned data is JSON.

## topcl Help

After starting topcl, execute `help` to view the topcl version, command, and other information.

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

### topcl Commands

| Command | Description                                                  |
| ------- | ------------------------------------------------------------ |
| help    | Show a list of commans.                                      |
| wallet  | Create and manage accounts and public-private key pairs. For details, please refer to [wallet](/en/Tools/TOPIO/wallet.md). |
| get     | Retrieve information from the blockchain.                    |
| sendtx  | Send transaction to the blockchain.                          |
| system  | Interact with system contracts.                              |

### topcl Options

| Option    | Description                                      |
| --------- | ------------------------------------------------ |
| -h,--help | Show a list of commands or help for one command. |
