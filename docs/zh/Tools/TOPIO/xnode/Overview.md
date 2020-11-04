# xnode使用指南

## 概述

xnode是使用节点主程序的入口应用，同时集成了节点网络信息查询、节点进程守护等功能。

xnode支持操作不同节点，方便您管理名下多个节点。

## 查看xnode帮助信息

执行`xnode -h`或者`xnode help`查看xnode帮助信息。

```
$> xnode -h
NAME:
    xnode

USAGE:
    xnode command [arguements...]

COMMANDS:
    help                         Show a list of commands and options.
    net                          query interface for network-layer.
```

## 命令说明

| 命令 | 说明                 |
| ---- | -------------------- |
| help | 查看xnode帮助信息。  |
| net  | 提供网络层查询功能。 |
