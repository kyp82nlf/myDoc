# 编译TOPIO

本章指导您在Linux/unix环境中编译TOPIO。

如果您已经拥有一个可供执行的TOPIO程序包，您可以跳过本章。

## 应用开发环境依赖

编译前，需要在您的环境中安装依赖软件：

GCC（GNU Compiler Collection，GNU编译器套件）、CMake、libreadline.so。

### 依赖软件版本要求

| 软件名称       | 版本要求    |
| -------------- | ----------- |
| GCC            | 4.8.5       |
| CMake          | 3.0.0及以上 |
| libreadline.so | -           |

### 安装依赖软件

**安装GCC**

请参见GCC官方安装指南。

**安装CMake**

执行如下命令安装CMake。

```
sudo yum install  cmake3.x86_64
```

**安装libreadline.so**

```
sudo yum install readline-devel.x86_64
```

## 编译和安装

### 使用CMake

#### 编译、安装TOPIO

使用CMake，执行如下命令编译、安装TOPIO。

```
mkdir cbuild
cd cbuild
cmake3 .. -DXENABLE_TESTS=OFF -DXENABLE_CODE_COVERAGE=OFF 
make -j4
sudo make install
```

说明：

> 此处TOPIO的安装位置为：`/user/bin/topio`。

#### 更多编译参数

* 编译release版本：

```
-DCMAKE_BUILD_TYPE=Release
```

* 收集重要运行指标，例如吞吐量：

```
-DBUILD_METRICS=ON
```

* 开启edge节点交易限流：

```
-DXDISABLE_RATELIMIT=ON
```

#### 启动TOPIO

启动TOPIO前，请先执行如下命令：

```
ldconfig
```

启动TOPIO具体请参见[启动TOPIO](/zh/Tools/TOPIO/StartTOPIO.md)。

### 使用shell-script

#### 编译TOPIO

执行如下命令编译TOPIO：

```
sh build.sh
```

更多编译参数请参见[更多编译参数](#更多编译参数)。

#### 安装TOPIO

执行如下命令安装TOPIO：

```
sh build.sh install
```

#### 启动TOPIO

启动TOPIO前，请先执行如下命令：

```
ldconfig
```

启动TOPIO请参见[启动TOPIO](/zh/Tools/TOPIO/StartTOPIO.md)。

## 打包应用程序包

### 打包应用程序包

如果您想打包topio和复制到另一台机器，执行如下命令：

```
# for topio-0.0.0.0-debug.tar.gz
sh pack.sh

# for topio-0.0.0.0-release.tar.gz
sh pack.sh release
```

### 安装TOPIO

执行如下命令解压并安装TOPIO，具体请参见[安装TOPIO](/zh/Tools/TOPIO/InstallTOPIO.md)。

```
tar -zxvf topio-0.0.0.0-release.tar.gz
cd topio-0.0.0.0-release
sh install.sh
```

### 启动TOPIO

启动TOPIO请参见[启动TOPIO](/zh/Tools/TOPIO/StartTOPIO.md)。