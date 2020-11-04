# TOPIO Command-line Options

After TOPIO is installed, execute `TOPIO` under any directory to view the TOPIO command-line options.

```
HELP OPTIONS:
    -h --help                              print help info
    -v --version                           topio version

COMMANDS:
    wallet                                 Create and manage accounts.
    topcl                                  Enter topcl which is a command line interface to interact with the blockchain and manage accounts without starting xnode.
    console                                Enter the interactive shell environment with starting xnode.
    attach                                 Enter topcl which is a command line interface to interact with the blockchain and manage accounts without starting xnode.
    db                                     Manage  the  chain  database.

START OPTIONS:
    -c --config_file         [value]       start with config file
       --chain_id            [value]       Network identifier (integer, 0=Rec, 1=MainChain ...) (default: 1)
       --datadir             [value]       Data directory for the databases and log (default: ~/Library/Topnetwork)
    -k --keystore            [value]       start with import keystore file
       --account_addr        [value]       when start topio with sub-keystore which not contain account, then main account is required
    -p --password            [value]       using password to decrypt keystore file
    -f --password_file       [value]       using password_file to decrypt keystore file
    -S --single_process                    start topio as single_process(default master+worker mode)
       --cpu_net_interval    [value]       the interval of monitoring cpu and net (default: 10)
       --ntp_interval        [value]       the interval of monitoring ntp (default: 10)
       --admin_http_addr     [value]       Connect to Admin Http Server (default: 127.0.0.1)
       --admin_http_port     [value]       Connect to Admin Http Server (default: 8000)


OTHER OPTIONS:
    -s --signal              [value]       send signal to a master process, choices: [stop, reload]

```

## Commands

| Command | Description                                                  |
| ------- | ------------------------------------------------------------ |
| wallet  | Create and manage local accounts and public-private key pairs. |
| topcl   | Enter the topcl interactive environment.                     |
| console | Start xnode meanwhile entering TOPIO interactive environment. |
| attach  | Connect to the xnode running on local node server meanwhile entering TOPIO interactive environment. |
| db      | Manage the chain database including backing up and restoring the database. |

## Options

### Help Options

| Option       | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| -h,--help    | View help information: a list of commands and help for specific usage of a command. |
| -v,--version | View TOPIO version。                                         |

### Start Options

Start TOPIO using either short command or long mode, such as `-c ` or `--config_file `.

| Option                 | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| --datadir              | Data directory for the databases and log, the default directory of different operating systems is as follows:<br/>Mac: $HOME/Library/Topnetwork；<br/>Unix: $root/Topnetwork；<br/>Windows: C:\Topnetwork.<br/>Caution：<br/>In order to run multiple node processes locally, you must ensure that each node has a separate data directory. |
| --keystore(-k)         | Start TOPIO with importing keystore file (json format containing fields such as "public_key", "CipherText ", etc.). |
| --accountAddr          | Node account address.                                        |
| --password(-p)         | Use password  to decrypt the Keystore file.                  |
| --password_file(-f)    | Use password file to decrypt the keystore file.              |
| --multiple_process(-M) | Start TOPIO in single process mode, default is multi-process mode. |
| --cpu_net_interval     | CPU and Net monitoring interval(default:10s).                |
| --ntp_interval         | Time synchronization interval(default:10s) .                 |
| --admin_http_port      | Connect to Admin Http Server (default: 8000).                |
| --bootnodes            | Seed nodes used for new nodes to join the P2P network.Format:192.168.10.11:8000192168 30.10:8000. |
| --net_port             | P2P network listening port(default:9000).                    |

### Other Optiions

| Option      | Description                                               |
| ----------- | --------------------------------------------------------- |
| -s,--signal | Send signal to a master process, choices: [stop, reload]. |