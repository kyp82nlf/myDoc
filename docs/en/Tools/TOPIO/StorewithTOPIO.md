# Store with TOPIO

## Overview

This chapter will show you how to store data with TOPIO and manage the database.

After the node joined the network ,TOPIO will synchronize the data on the chain automatically.

## Database directory

TOPIO database directory shown as below.

Caution:

> It is recommended that you do not modify the directory name and file name under the database directory, otherwise some of the TOPIO functions will not be able to be used properly!



![Snap52](StorewithTOPIO.assets/Snap52.jpg)

db: Store all the data on the chain.

log: Store the logs during TOPIO runing.

keystore: Store account and public-private key pair keystore file. The keystore file directory can be specified separately.

## Database Management

Provide the chain database backup and restoring function.

### Backup Database

**Request**

`topio db backup`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                |
| -------------- | -------- | ------------- | -------------- | -------------------------- |
| backupdir      | Yes      | -             | Text           | Database backup directory. |

**Options**

| Option Name | Value | Type | Description                                                  |
| ----------- | ----- | ---- | ------------------------------------------------------------ |
| -h,--help   | -     | -    | Help for the command.                                        |
| -d,--dir    | -     | TEXT | Database source directory, the default is the current data directory. |

**Request Sample**

In the following request sample, the database source directory is "/root/topnetwork", and the database backup directory is "/home/cathy2".

```
topio db backup -d /root/Topnetwork /home/cathy2
```

**Response**

* Successful 

```
Database backup operating successfully.
DBversion : 1
```

* Failed

```
Backup failed
Error: the /home/db or /home/pdb does not exist.
```

### Restore Database

Caution：

> The target directory to restore the database must be empty.

Execute the command `topio DB list_dbVersion` to retrieve all database versions under the backup directory before restoring the database.

Select a version and restore to an empty directory. If no version is specified, the latest version is restored by default.

```
[root@localhost topio-0.0.0.0-debug]# topio db list_dbversion /home/cathy2
DBversion:1,timestamp:2020-06-05 07:04:02.
DBversion:2,timestamp:2020-06-05 07:07:29.
```

**Request**

`topio db restore`

**Request Parameters**

| Parameter Name | Required | Default Value | Parameter Type | Description                           |
| -------------- | -------- | ------------- | -------------- | ------------------------------------- |
| backupdir      | Yes      | -             | Text           | The backup directory of the database. |

**Options**

| Option Name    | Value | Type    | Description                                                  |
| -------------- | ----- | ------- | ------------------------------------------------------------ |
| -h,--help      | -     | -       | View command help.                                           |
| -d,--dir       | -     | Text    | The target directory for the database restore, and must be empty. |
| -D,--DBversion | -     | Integer | The backed up database version, if not specified, restores the latest version by default. |

**Request Sample**

```
topio db restore -d /home/peter2 /home/cathy2 -D 2
```

**Response**

* Successful

```
Database restore operating successfully.
```

* Failed

```
Restore failed
Error: The target dir for restore is not empty, please input a empty one.
```