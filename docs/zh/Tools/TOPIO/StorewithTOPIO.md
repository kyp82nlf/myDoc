# TOPIO数据存储

## 概述

本章将指导您如何存储链上数据及管理数据库。

节点入网后，TOPIO将自动同步链上数据至节点本地数据库。

## 数据库目录

提醒：

> 建议您不要修改数据库目录名称及目录下的文件名称，否则将导致TOPIO部分功能无法正常使用！

TOPIO数据目录如下图所示。

![Snap52](StorewithTOPIO.assets/Snap52-1600310027938.jpg)

db：存储所有链上数据；log：存储TOPIO运行过程中的日志；keystore：存储账户、公私钥对keystore文件，keystore文件目录可自行另外指定。

## 数据库管理

提供链数据库备份、还原功能。

### 备份数据库

#### 请求方式

```
topio db backup
```

#### 请求参数

| 参数名称  | 是否必选 | 默认值 | 类型 | 说明                 |
| --------- | -------- | ------ | ---- | -------------------- |
| backupdir | 是       | -      | Text | 数据库备份目标路径。 |

#### 选项

| 选项名称  | 值   | 类型 | 说明                               |
| --------- | ---- | ---- | ---------------------------------- |
| -h,--help | -    | -    | 查看命令帮助。                     |
| -d,--dir  | -    | TEXT | 数据库源路径，默认为当前数据路径。 |

#### 请求样例

以下请求样例中，数据库源路径为"/root/Topnetwork"，数据库备份路径为"/home/cathy2"。

```
topio db backup -d /root/Topnetwork /home/cathy2
```

#### 返回样例

##### 成功返回

```
Database backup operating successfully.
DBversion : 1
```

##### 失败返回

```
Backup failed
Error: the /home/db or /home/pdb does not exist.
```

### 还原数据库

提醒：

> 还原的目标路径必须为空。

还原数据库前，使用命令`topio db list_dbversion`查询备份路径下所有的数据库版本。

选择一个版本，还原至一个空的路径下。如不指定版本，则默认还原最新版本。

```
[root@localhost topio-0.0.0.0-debug]# topio db list_dbversion /home/cathy2
DBversion:1,timestamp:2020-06-05 07:04:02.
DBversion:2,timestamp:2020-06-05 07:07:29.
```

#### 请求方式

```
topio db restore
```

#### 请求参数

| 参数名称  | 是否必选 | 默认值 | 类型 | 说明           |
| --------- | -------- | ------ | ---- | -------------- |
| backupdir | 是       | -      | Text | 数据库源路径。 |

#### 选项

| 选项名称       | 值   | 类型    | 说明                                           |
| -------------- | ---- | ------- | ---------------------------------------------- |
| -h,--help      | -    | -       | 查看命令帮助。                                 |
| -d,--dir       | -    | Text    | 数据库还原的目标路径，必须为空。               |
| -D,--DBversion | -    | Integer | 备份的数据库版本，如不指定，默认还原最新版本。 |

#### 请求样例

将路径`/home/cathy2`中的数据库版本"2"还原至路径`/home/peter2`下。

```
topio db restore -d /home/peter2 /home/cathy2 -D 2
```

#### 返回样例

##### 成功返回

```
Database restore operating successfully.
```

##### 失败返回

```
Restore failed
Error: The target dir for restore is not empty, please input a empty one.
```