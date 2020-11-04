# Start TOPIO

## Overview

Please install TOPIO before starting it. After the installation is complete, start TOPIO by executing the following command:

```
topio
```

Abount command line options, please refer to [TOPIO Command-line Options](/en/Tools/TOPIO/Command-line_Options.md).

Support to start TOPIO in different modes:

* Enter topcl

Entry topcl interactive environment.

* Start xnode

Start xnode only.

* Console Mode

Start xnode meanwhile entering TOPIO interactive environment.

* Attach Mode

Connect to the xnode running on local node server meanwhile entering TOPIO interactive environment. 

caution:

> The following samples uses the root user account. If you have a normal user account (sudo permissions are required), prefix all commands with "sudo".

### Enter topcl

Under TOPIO, execute the following command to enter the topcl interactive environment.

`topio topcl`

After starting topcl, you can interact with the blockchain: sending transactions, registering nodes, node staking, etc.

For more functions and usage of topcl, please refer to [topcl Instructions](/en/Tools/TOPIO/topcl/Overview.md).

### Exit topcl

Executing the following command to exit topcl.

`exit`、`q`、`quit`、`logout`。

### Start xnode

Before starting the xnode, please register the node first. For details, please refer to [System Transactions](/en/Tools/TOPIO/topcl/SystemTransactions.md).

After the node registration is completed and xnode has started, the node can join TOP Network physical network and enter the candidate pool to wait for election.

Caution:

> In order to run multiple node processes locally, you must create separate data directory for each node and specify the local service port. If only one node process is running locally, there is no need to specify a data directory and a local service port.

Execute the following command under TOPIO.

```
topio --account_addr T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4 -k /root/Topnetwork/keystore/T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW --password 123456789jjj --datadir home/cathy3 --admin_http_port 56391
```

The optional description is shown in the following table.

| Option Name       | Default Value | Type   | Description                                                  |
| ----------------- | ------------- | ------ | ------------------------------------------------------------ |
| --account_addr    | -             | String | Node account address.                                        |
| -k,--keystore     | -             | String | The keystore file path of the node sign key must be set when registering this node. For example, if the node account public-private key pair is used as the node sign key, the node account keystore file path is stored here. If a public-private key pair is used as the node sign key, the public-private key pair keystore file path is stored here.<br/>If you did not set node sign key when registering the node, the system uses the account public key as node sign key by default, then here is the account keystore file path. |
| -p,--password     | -             | String | The password of the account keystore file or the public-private key pair keystore file corresponding to the node sign key. |
| -d,--datadir      | -             | String | Specify the data directory for the node. If not specified, the data directory of the node the default to "root/Topnetwork". If you specify the data directory "/home/cathy3," the keystore file and blockchain data are stored in this directory. |
| --admin_http_port | 8000          | String | Local server port. If not specified, the default is "8000".  |

If the following "exited with signal" prompt is printed on the startup page, xnode fails to start. If there is no prompt below,xnode gets successfully started.

![image-20200817104508449](StartTOPIO.assets/image-20200817104508449.png)

### Stop xnode

Execute the following command to stop xnode.

```
[root@Jiao ~/top/xchain/cbuild/bin/Linux]# topio -s stop
signal:stop
env home:/root
found runing xnode_pid:28795
will send SIGKILL signal to pid:28795
done signal operations
```

Or use "Ctrl+C" and the Linux command `kill` to stop xnode.

### Retrieve Node Network Information

You need to use TOPIO console mode or attach mode to enter the interactive environment to query the network information after the node joins the network.

For details, please refer to [Retrieve Node Network Information](/en/Tools/TOPIO/xnode/RetrieveNodeNetworkInformation.md).

### Console Mode

Start xnode meanwhile entering TOPIO interactive environment at the same time.

If you have started xnode in the local background, you should stop xnode before using the console mode.

#### Enter Console Mode

Caution:

> In order to run multiple node processes locally, you must create separate data directory for each node and specify the local service port. If only one node process is running locally, there is no need to specify a data directory and a local service port.

Execute the following command to en entry console mode.

```
topio --account_addr T-0-LKXjgwdL9bTwADL89cBp7L2ze3wqiNmRB4 -k /root/Topnetwork/keystore/T-0-LWkTjhseZj7tPZkXwifoTPm2dUJY63jdEd --password 123456789jjj --datadir home/cathy3 --admin_http_port 56391 --console
```

The optional description is shown in the following table.

| Option Name       | Default Value | Type   | Description                                                  |
| ----------------- | ------------- | ------ | ------------------------------------------------------------ |
| --account_addr    | -             | String | Node account address.                                        |
| -k,--keystore     | -             | String | The keystore file path of the node sign key must be set when registering this node. For example, if the node account public-private key pair is used as the node sign key, the node account keystore file path is stored here. If a public-private key pair is used as the node sign key, the public-private key pair keystore file path is stored here.<br/>If you did not set node sign key when registering the node, the system uses the account public key as node sign key by default, then here is the account keystore file path. |
| -p,--password     | -             | String | The password of the account keystore file or the public-private key pair keystore file corresponding to the node sign key. |
| -d,--datadir      | -             | String | Specify the data directory for the node. If not specified, the data directory of the node the default to "root/Topnetwork". If you specify the data directory "/home/cathy3", the keystore file and blockchain data are stored in this directory. |
| --admin_http_port | 8000          | String | Local server port. If not specified, the default is "8000".  |

#### Console Help

Execute `help` to view console help.

```
NAME:
    console

USAGE:
    command [arguments...]

COMMANDS:
    help                     Show a list of commands and options.
    topcl                    A command line interface to interact with the blockchain and manage accounts.
    xnode                    Xnode is the core service daemon that runs on every TOP Network node.
```

#### Console Command

| Command | Description                                                  |
| ------- | ------------------------------------------------------------ |
| help    | Show a list of console commands and options.                 |
| topcl   | Command line client for account management and interaction with the blockchain.<br/>Caution<br/>You need to add "topcl" before the topcl's command in console mode, such as "topcl wallet list". |
| xnode   | xnode is an entry application of the node process, and integrates the functions of node network information query,node process daemon,data synchronization and so on.<br/>Caution:<br/>You need to add "xnode" before the xnode's command to use xnode command in console mode, such as "xnode net joined". |

#### Exit Console Mode

Use the following methods to exit the console mode.

* Ctrl+C.

* Execute commond: `exit`、`q`、`quit`、`logout`.

### Attach Mode

Connect to the xnode running on local node server meanwhile entering TOPIO interactive environment. 

If you have started xnode in the local background, you can use attach mode to connect to the local node directly. 

Caution：

> Before entering attach mode, make sure that the local server is running xnode.

#### Enter Attach Mode

Under TOPIO, execute the following command to connect to xnode running on local server, the default server port is "8000".

```
topio attach
```

If a different service port is specified when the node process is started, you need to enter the corresponding service port when connecting to the specified node process.

```
topio attach --admin_http_port 56391
```

#### Attach Help

Execute `help` to view attach help.

```
NAME:
    attach

USAGE:
    command [arguments...]

COMMANDS:
    help                     Show a list of commands and options.
    topcl                    A command line interface to interact with the blockchain and manage accounts.
    xnode                    Xnode is the core service daemon that runs on every TOP Network node.
```

#### Attach command

| Command | Description                                                  |
| ------- | ------------------------------------------------------------ |
| help    | Show a list of console commands and options.                 |
| topcl   | Command line client for account management and interaction with the blockchain.<br/>Caution<br/>You need to add "topcl" before the topcl's command in attach mode, such as "topcl wallet list" 。 |
| xnode   | xnode is an entry application of the node process, and integrates the functions of node network information query,node process daemon,data synchronization and so on.<br/>Caution:<br/>You need to add "xnode" before the xnode's command to use xnode command in attach mode, such as "xnode net joined". |

#### Exit Attach Mode

Use the following methods to exit the console mode.

* Ctrl+C.

* Execute commond: `exit`、`q`、`quit`、`logout`.
