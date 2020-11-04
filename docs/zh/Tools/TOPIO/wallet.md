# 钱包功能

## 概述

通过钱包功能，您可以创建、管理本地账户和公私钥对、列出所有现有账户和公私钥对、设置默认账户、重置账户keystore文件密码。

wallet命令如下表所示。

| 命令                                                         | 说明                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| [wallet createAccount](#创建账户)                            | 在本地创建账户。                     |
| [wallet createAccountKeystore](#根据私钥创建账户keystore文件) | 根据私钥创建账户地址及keystore文件。 |
| [wallet createKey](#创建公私钥对)                            | 创建公私钥对。                       |
| [wallet createKeypairKeystore](#根据私钥创建公私钥对keystore文件) | 根据私钥创建公私钥对及keystore文件。 |
| [wallet setDefault](#设置默认账户)                           | 设置默认账户，用来发送交易等。       |
| [wallet list](#列出已有账户及keystore文件)                   | 列出所有已有账户及keystore文件。     |
| [wallet resetPassword](#重置keystore文件密码)                | 重置keystore文件密码。               |

## 查看wallet所有命令及帮助

进入TOPIO或者topcl查看wallet命令，本章以在topcl下使用wallet命令为例。

使用`wallet -h   ` 者` wallet --help`查看wallet所有命令。

```
COMMANDS:
    createAccount                   Create and manage accounts and public-private key pairs.
    createAccountKeystore           Create account keystore file by private key.
    createKey                       Create the public-private key pair.
    createKeypairKeystore           Create public-private key pair keystore file by private key.
    list                            List existing accounts and keys.
    resetPassword                   Reset keystore file password.
    setDefault                      Import the account keystore file to default account for sending transactions.

OPTIONS:
    -h --help                       Show a list of commands or help for one command.
```

使用`wallet createKey -h`或者`wallet createKey --help`查看子命令`createKey`的帮助。

```
$> wallet createkey -h
Create the public-private key pair.

USAGE:
    createKey [options]

OPTIONS:
    -h --help                       Show help information for one command.
    -d --dir                        [the keystore file storage path].

EXAMPLE:
    wallet createKey -d /home/ttt
```

## 命令使用说明

### 创建账户

在本地创建账户，可同时创建多个账户。

请记住您的keystore文件密码，如果丢失了密码，您将无法使用该账户。且系统没有”忘记密码“选项，只可以通过密码提示找回密码。

提醒：

> 此处创建的账户是本地账户，在链上并不存在，与链交互需要创建此本地账户对应的链上账户，通过一个链上有余额的账户给此账户转账（可转入任意金额，非零，整数），即可在链上创建此本地账户对应的链上账户。

**请求方式**

```
wallet createAccount
```

**请求参数**

无。

**选项**

| 选项名称  | 默认值       | 类型   | 说明                                                         |
| --------- | ------------ | ------ | ------------------------------------------------------------ |
| -d,--dir  | 系统默认路径 | String | account keystore文件存储路径，如不指定，默认存储在系统默认路径下，Linux系统默认存放路径为“/root/Topnetwork/keystore”。 |
| -h,--help | -            | -      | 查看命令帮助信息。                                           |

**返回参数**

| 参数名称                   | 类型   | 说明                                                         |
| -------------------------- | ------ | ------------------------------------------------------------ |
| Publice Key                | String | 公钥，和私钥总是成对出现。<br/>用于加密及验签。              |
| Account Address            | String | 为了简便实用，采用“账户地址”替代公钥从而代表账户。<br/>您可以公开您的账户地址，其他人需要账户地址和您进行互动，例如给您的账号地址转账，或者您通过账号地址向别人发送一笔交易。<br/>此处创建的为普通用户账户地址，以"T-0"为标识开头。 |
| Account Keystore File Path | String | 账户keystore文件存储账户公私钥及账户地址等信息，用于设置发送交易账户等。<br/>私钥用于解密和交易签名。<br/>请安全保管您的私钥文件，不要与其他人分享您的私钥，以免造成资产损失！ |

**请求样例**

```
wallet createAccount
```

**返回样例**

* 成功返回

```
Please set a password for the account keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.
Or Ctrl+D skips this step.
Successfully create an account locally!

You can share your public key and account address with anyone.Others need them to interact with you!
You must nerver share the private key and account keystore file with anyone!They control access to your funds!
You must backup your account keystore file!Without the file,you’ll be impossible to access account funds!
You must remember your password!Without the password,it’s impossible to use the keystore file!
Public Key: BBtwShz7qgisA4RsjpvgmijBAAPlh9m/bRh2OsRLK7erroPUD0vFQcwWh4cwVlaIRugxq9b+L67JMztdLipeygc=
Account Address: T-0-LKQULGZTa6uGPDmEtLMaCLgy922NLQntNs
Account Keystore File Path: /root/Topnetwork/keystore/T-0-LKQULGZTa6uGPDmEtLMaCLgy922NLQntNs
```

* 失败返回

输入不符合格式要求的密码返回：

```
Password error!
```

### 根据私钥创建账户keystore文件

如果您已经拥有TOP Network私钥，支持根据私钥创建私钥对应的账户地址及keystore文件。

**请求方式**

```
wallet createAccountKeystore
```

**请求参数**

| 参数名称    | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ----------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| private_key | 是       | -      | String | TOP Network Base64私钥（44字符），例如"ViozcHV2UwMhzmwZRt1LOs05bxTfa+VevqynkjOAxAQ=" |

**选项**

| 选项名称  | 默认值       | 类型          | 说明                                                         |
| --------- | ------------ | ------------- | ------------------------------------------------------------ |
| -d,--dir  | 系统默认路径 | Base64 String | 账户keystore文件存储路径，如不指定，默认存储在系统默认路径下，Linux系统默认存放路径为"/root/Topnetwork/keystore"。 |
| -h,--help | -            | -             | 查看命令帮助信息。                                           |

**请求样例**

```
wallet createAccountKeystore ViozcHV2UwMhzmwZRt1LOs05bxTfa+VevqynkjOAxAQ=
```

**返回参数**

| 参数名称                   | 类型   | 说明                                                         |
| -------------------------- | ------ | ------------------------------------------------------------ |
| Publice Key                | String | 公钥，和私钥总是成对出现。<br/>用于加密及验签。              |
| Account Address            | String | 为了简便实用，采用“账户地址”替代公钥从而代表账户。<br/>您可以公开您的账户地址，其他人需要账户地址和您进行互动，例如给您的账号地址转账，或者您通过账号地址向别人发送一笔交易。<br/>此处创建的为普通用户账户地址，以"T-0"为标识开头。 |
| Account Keystore File Path | String | 账户keystore文件存储账户公私钥及账户地址等信息，用于设置发送交易账户等。<br/>私钥用于解密和交易签名。<br/>请安全保管您的私钥文件，不要与其他人分享您的私钥，以免造成资产损失！ |

**返回样例**

* 成功返回

```
Please set a password for the account keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.
Or Ctrl+D skips this step.
Please Input Password Again
Please set a password hint! If don't, there will be no hint when you forget your password.
basketball
Successfully create an account keystore file!

You can share your public key and account address with anyone.Others need them to interact with you!
You must nerver share the private key and account keystore file with anyone!They control access to your funds!
You must backup your account keystore file!Without the file,you’ll be impossible to access account funds!
You must remember your password!Without the password,it’s impossible to use the keystore file!
Public Key: BNIcSMpUK+IiR9I+UDz2EgCJn2WR7Ki+YB2PaZBYv7neWlR7oFdRLVb4tK9ZXY3hL/FOqgrUJz+9PHSKljL7u0Q=
Account Address: T-0-LW84Y6RjtsfRxUeoTs4SD3e9bbXY81BK1p
Account Keystore File Path: /root/Topnetwork/keystore/T-0-LW84Y6RjtsfRxUeoTs4SD3e9bbXY81BK1p
```

* 失败返回

```
Password error! 
```

### 创建公私钥对

为了更好地保护您的账户资产，建议您创建一对无资产的公私钥对，在节点注册入网后，节点工作时使用该私钥为节点签名。

**请求方式**

```
wallet createKey
```

**请求参数**

无。

**选项**

| 选项名称  | 默认值       | 类型   | 说明                                                         |
| --------- | ------------ | ------ | ------------------------------------------------------------ |
| -d,--dir  | 系统默认路径 | String | keystore文件存储路径，如不指定，默认存储在系统默认路径下，Linux系统默认存放路径为"/root/Topnetwork/keystore"。 |
| -h,--help | -            | -      | 查看命令帮助信息。                                           |

**返回参数**

| 参数名称           | 类型   | 说明                                                         |
| ------------------ | ------ | ------------------------------------------------------------ |
| Publice Key        | String | 公钥，和私钥总是成对出现。<br/>用于加密及验签。              |
| Keystore File Path | String | keystore文件存储公私钥等信息。<br/>私钥用于解密和交易签名。<br/>请安全保管您的私钥文件，不要与其他人分享您的私钥，以免造成资产损失！ |

**请求样例**

```
wallet createKey
```

**返回样例**

* 成功返回

```
Please set a password for the keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.
Or Ctrl+D skips this step.
Successfully create an key locally!

You can share your public key with anyone.Others need it to interact with you!
You must nerver share the private key and keystore file with anyone!They can use them to make the node malicious.
You must backup your keystore file!Without the file,you may not be able to send transactions.
You must remember your password!Without the password,it’s impossible to use the keystore file!
Public Key: BBYTqmkmNksMjX/ydgnixYP1fVmd0zHQGqW1xCBo4zXNrWf3H/XXqe+NsUkvrSuZ4wtDbJqdE7NDU752gMFd5+g=
Keystore File Path: /root/Topnetwork/keystore/Lgq6CojT16wVRSCEuGcsQRPg8eRsz3auyJ
```

* 失败返回

输入不符合格式要求的密码返回：

```
Password error!
```

### 根据私钥创建公私钥对keystore文件

如果您已经拥有TOP Network私钥，支持根据私钥创建私钥对应的公私钥对及keystore文件。

**请求方式**

```
wallet createKeypairKeystore
```

**请求参数**

| 参数名称    | 是否必选 | 默认值 | 类型          | 说明                                                         |
| ----------- | -------- | ------ | ------------- | ------------------------------------------------------------ |
| private_key | 是       | -      | Base64 String | TOP Network Base64私钥（44字符），例如"ViozcHV2UwMhzmwZRt1LOs05bxTfa+VevqynkjOAxAQ=" |

**选项**

| 选项名称  | 默认值       | 类型   | 说明                                                         |
| --------- | ------------ | ------ | ------------------------------------------------------------ |
| -d,--dir  | 系统默认路径 | String | keystore文件存储路径，如不指定，默认存储在系统默认路径下，Linux系统默认存放路径为"/root/Topnetwork/keystore"。 |
| -h,--help | -            | -      | 查看命令帮助信息。                                           |

**请求样例**

```
wallet createKeypairKeystore ViozcHV2UwMhzmwZRt1LOs05bxTfa+VevqynkjOAxAQ=
```

**返回参数**

| 参数名称           | 类型   | 说明                                                         |
| ------------------ | ------ | ------------------------------------------------------------ |
| Publice Key        | String | 公钥，和私钥总是成对出现。<br/>用于加密及验签。              |
| Keystore File Path | String | 账户keystore文件存储账户公私钥及账户地址等信息，用于设置发送交易账户等。<br/>私钥用于解密和交易签名。<br/>请安全保管您的私钥文件，不要与其他人分享您的私钥，以免造成资产损失！ |

**返回样例**

* 成功返回

```
Please set a password for the keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.
Or Ctrl+D skips this step.
Please Input Password Again
Please set a password hint! If don't, there will be no hint when you forget your password.
basketball
Successfully create a publice-private key pair keystore file!

You can share your public key and account address with anyone.Others need them to interact with you!
You must nerver share the private key and account keystore file with anyone!They control access to your funds!
You must backup your account keystore file!Without the file,you’ll be impossible to access account funds!
You must remember your password!Without the password,it’s impossible to use the keystore file!
Public Key: BNIcSMpUK+IiR9I+UDz2EgCJn2WR7Ki+YB2PaZBYv7neWlR7oFdRLVb4tK9ZXY3hL/FOqgrUJz+9PHSKljL7u0Q=
Keystore File Path: /root/Topnetwork/keystore/LW84Y6RjtsfRxUeoTs4SD3e9bbXY81BK1p
```

* 失败返回

输入不符合格式要求的密码返回：

```
Password error!
```

### 设置默认账户

系统默认使用最新创建的账户，如您重新启动TOPIO，需要重新设置账户，用于发送交易。

如重新设置的默认账户在链上不存在，需要创建此本地账户对应的链上账户，如用一个链上有余额的账户给此账户转账，即可在链上创建此本地账户对应的链上账户。

**请求方式**

```
wallet setDefault
```

**请求参数**

| 参数名称           | 是否必选 | 默认值 | 类型   | 说明                               |
| ------------------ | -------- | ------ | ------ | ---------------------------------- |
| keystore_file_path | 是       | -      | String | 账户所对应的keystore文件存储路径。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

无。

**请求样例**

提醒：

> 请使用账户所对应的keystore文件存储路径。如果使用公私钥对keystore文件存储路径，设置默认账户将失败。

```
wallet SetDefault /root/Topnetwork/keystore/T-0-LPXXAanpbjNPQ4ff4iosZYN5eNfWZWDLky
```

**返回样例**

* 成功返回

```
T-0-LQcciHQHgsL1dHhzN5vqQKfd8QxKhKrsbs: Set default account successfully.
```

* 失败返回

使用的是公私钥对keystore文件路径而非账户keystore文件路径，返回：

```
Please Input Password.
File error! You are using the keystore file, please use the account keystore file to set the default account. 
Failed to set default account.
```

### 列出已有账户及keystore文件

列出默认路径或者指定路径下所有账户及公私钥对。

**请求方式**

```
wallet list
```

**请求参数**

无。

**选项**

| 选项名称   | 默认值       | 类型   | 说明                                                         |
| ---------- | ------------ | ------ | ------------------------------------------------------------ |
| -d,--dir   | 系统默认路径 | String | 列出指定路径下的账户及公私钥对，如不指定，则列出默认路径下的账户及公私钥对。 |
| -u,--using | -            | -      | 只列出正在用来发送交易的账户。                               |
| -h,--help  | -            | -      | 查看命令帮助信息。                                           |

**返回参数**

| 参数名称                   | 类型   | 说明                                                    |
| -------------------------- | ------ | ------------------------------------------------------- |
| account                    | String | 账户地址。                                              |
| public key                 | String | 创建账户生成的base64格式公钥。                          |
| account keystore file path | String | 账户keystore文件存储路径。                              |
| status                     | String | 账户使用状态，当前默认使用账户状态为"Used as default"。 |
| public key                 | String | 创建公私钥对生成的base64格式公钥。                      |
| keystore file path         | String | 公私钥对keystore文件存储路径。                          |

**请求样例**

* 列出系统默认路径下所有账户及公私钥对。

```
wallet list
```

* 列出指定路径下“Used as default”账户。

```
wallet list -d /home/cathytest -u
```

**返回样例**

* 成功返回

查询默认路径下所有账户及公私钥对。

```
account #0: T-0-LUGh8HG4sijgQKM14AWuka7vpLZLKwqmY7
account keystore file path: /root/Topnetwork/keystore/T-0-LUGh8HG4sijgQKM14AWuka7vpLZLKwqmY7
public key: BGU3wMJOO803a17V8R5dPtbnWKeMKDH9apltmNo2arqX2vo0sl4T21tLrO/D9NjEWHLR5iXUMFutPTaKO1wOT2I=
status: Used as default

account #1: T-0-LSKvMt2gnwmbZEgki4iZH8iJS58Hg3A9eH
account keystore file path: /root/Topnetwork/keystore/T-0-LSKvMt2gnwmbZEgki4iZH8iJS58Hg3A9eH
public key: BMPTHPnnZqLhhpQi6gBj0c1UsySMvLIwNH7TXZn6XSKbAsYOdsaaqiOm3a5uCQt0htBo/6cbkFI3QvS5SHfjo88=

account #2: T-0-LbiRyAF5M5GEBaqsjweeDZT4pG6PckL44h
account keystore file path: /root/Topnetwork/keystore/T-0-LbiRyAF5M5GEBaqsjweeDZT4pG6PckL44h
public key: BG/sXAnHU+14C+ix4YecSJS4Zr8MN2AQxvrAnZk1UA7/rmF+GWQvsfxg8TY5y3WLmyipogg5gfUmM1S0cUae0Xc=

keystore file path: /root/Topnetwork/keystore/LgjBfaWcf7cqttx4fXcxNwSVcLiNb6UTa9
public key: BBaaDVVYtAIdhQ0UgbFI4CAmx+VMrOl1Hgc89EMPjDlWKKyLzF4koAlrdqexX4z96a5qBvY0z65pm+d292vXrsk=

keystore file path: /root/Topnetwork/keystore/LP1QSHaEBPS4P8N1FhGgjxoFJ2bRnNmiCZ
public key: BCJ6IIlnKlnvSBUHDIG6nTwDiHrsQX//Ff8MmZw5FfdyT8RG+WFZmKgWYy5XaVvj85SxHbAiEMZHAfLqGnt7+tc=

keystore file path: /root/Topnetwork/keystore/LbRE8FmDyNVMyznAa2ocMgmTVDwk3w4ZfV
public key: BDqUPFJydCmyITlsW0qnNnKSdVyj0hMjf4hpJOs9P9+dEri7rJPJBWRe3+06/ruhnXgQmcXgn9L1JLOks0+5RAQ=
```

查询指定路径下“Used as default”账户。

```
account #0: T-0-LWjs6udfquYRdG41hdUBbofqr6qaHFZ8Eo
account keystore file path: /home/cathytest/T-0-LWjs6udfquYRdG41hdUBbofqr6qaHFZ8Eo
public key: BP4b6tSWio8EoSKafrlF04azPMmwZASAla4lQAtShInZj1qRmiMkxhhiIVgojCQN/wHQEnZJQDt6M3sjXlODlew=
status: Used as default
```

* 失败返回

输入错误路径返回：

`No Key Pair.`

### 重置keystore文件密码

支持重置账户keystore和公私钥对keystore文件密码。

**请求方式**

```
wallet resetPassword
```

**请求参数**

| 参数名称           | 是否必选 | 默认值 | 类型   | 说明                                       |
| ------------------ | -------- | ------ | ------ | ------------------------------------------ |
| keystore file path | 是       | -      | String | 账户keystore或者公私钥对keystore文件路径。 |

**选项**

| 选项名称  | 默认值 | 类型 | 说明               |
| --------- | ------ | ---- | ------------------ |
| -h,--help | -      | -    | 查看命令帮助信息。 |

**返回参数**

无。

**请求样例**

```
wallet resetPassword /root/Topnetwork/keystore/LgjBfaWcf7cqttx4fXcxNwSVcLiNb6UTa9
```

**返回样例**

* 成功返回

```
Reset password successfully!
```

* 失败返回

输入错误旧密码返回：

```
Invalid key - MAC mismatch
Password error！
Hint: 
```

