# TOPIO命令行选项

```
HELP OPTIONS:
    -h --help                              print help info
    -v --version                           topio version

COMMANDS:
    wallet                                 Create and manage accounts.
    topcl                                  Enter topcl which is a command line interface to interact with the blockchain and manage accounts without starting xnode.
    console                                Enter the interactive shell environment with starting xnode.
    attach                                 Enter topcl which is a command line interface to interact with the blockchain and manage accounts without starting xnode.
    db                                     Manage the chain database.

START OPTIONS:
    -c --config_file         [value]       start with config file
       --chain_id            [value]       Network identifier (integer, 0=Rec, 1=MainChain ...) (default: 1)
       --datadir             [value]       Data directory for the databases and log (default: ~/Library/Topnetwork)
    -k --keystore            [value]       start with import keystore file
       --account_addr         [value]       when start topio with sub-keystore which not contain account, then main account is required
    -p --password            [value]       using password to decrypt keystore file
    -f --password_file       [value]       using password_file to decrypt keystore file
    -S --single_process                    start topio as single_process(default master+worker mode)
       --cpu_net_interval    [value]       the interval of monitoring cpu and net (default: 10)
       --ntp_interval        [value]       the interval of monitoring ntp (default: 10)
       --admin_http_port     [value]       Connect to Admin Http Server (default: 8000)


OTHER OPTIONS:
    -s --signal              [value]       send signal to a master process, choices: [stop, reload]

```

## 命令说明(COMMANDS)

| 命令    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| wallet  | 创建、管理本地账户及公私钥对。                               |
| topcl   | 进入topcl交互环境。                                          |
| console | 启动节点进程xnode，同时进入TOPIO交互环境。                   |
| attach  | 连接到本地节点服务器上正在运行的节点进程xnode，同时进入TOPIO交互环境。 |
| db      | 管理链数据库，包括备份、还原数据库。                         |

## 选项说明

### 帮助选项(HELP OPTIONS)

| 选项         | 说明                                                 |
| ------------ | ---------------------------------------------------- |
| -h,--help    | 查看帮助信息，包括命令列表及某个命令的具体使用帮助。 |
| -v,--version | 查看TOPIO版本。                                      |

### 启动选项(START OPTIONS)

启动TOPIO的时候可以使用短命令模式或者长命令模式，比如`-c `或者 `--config_file`。

help信息中"value"表示需要传入一个值作为参数。

| 选项                   | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| --datadir              | TOPIO数据目录，数据库(DB)和日志(log)等一切文件均在此目录产生，不同操作系统默认目录如下：<br/>Mac: $HOME/Library/Topnetwork；<br/>Unix: $root/Topnetwork；<br/>Windows: C:\Topnetwork。<br/>提醒：<br/>为了在本地运行多个节点进程，您必须确保每个节点都有一个单独的数据目录。 |
| -k,--keystore(-k)      | 无参数启动TOPIO，指定一个keystore文件即可（json格式，包含"public_key", “ciphertext（加密后的私钥）”等字段）。 |
| --accountAddr          | 节点账户地址。                                               |
| -p,--password(-p)      | 解密keystore文件。                                           |
| -f,--password_file(-f) | 指定密码文件，用来解密keystore文件。                         |
| -s,--single_process    | 单进程启动TOPIO，默认以多进程的方式启动。                    |
| --cpu_net_interval     | CPU和Net的监控间隔，默认10s。                                |
| --ntp_interval         | 时间同步间隔，默认10s。                                      |
| --admin_http_port      | 连接的节点端口号（默认8000）。                               |
| --bootnodes            | 种子节点，用于新节点加入P2P网络。格式：192.168.10.11:8000,192.168.30.10:8000。 |
| --net_port             | P2P网络传输层监听的端口，默认为"9000"。                      |

### 其他选项(OTHER OPTIONS)

| 选项        | 说明                                                |
| ----------- | --------------------------------------------------- |
| -s,--signal | 停止TOPIO主进程，分别使用命令 `-s stop/-s reload`。 |