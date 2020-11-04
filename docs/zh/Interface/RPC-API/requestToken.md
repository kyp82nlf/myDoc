# 获取访问链身份令牌

在与链交互前需要先获取身份令牌。

根据账户获取身份令牌（identity token），每个账户身份令牌不同。

获取身份令牌前，请先创建一个链上账户：

1.创建本地账户，创建本地账户请参见[账户协议](/zh/AboutTOPNetwork/Protocol/AccountProtocol.md)中“创建公私钥对算法”内容。

2.通过一个链上有余额的账户给此账户转账，即可在链上创建此本地账户对应的链上账户。

**请求方式**

`requestToken`

**请求参数**

无。

**返回参数**

| 参数名称           | 类型   | 说明                                                 |
| ------------------ | ------ | ---------------------------------------------------- |
| secret_key         | String | 私钥。                                               |
| signature_method   | String | 签名方法。                                           |
| signature_ver_code | String | 签名方法版本号。                                     |
| identity_token     | String | 身份令牌，用于和主链交互，后续所有请求都需要该参数。 |

**请求样例**

```
target_account_addr=T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn&
body=null&
method=requestToken&
sequence_id=22&
identity_token=&
version=1.0
```

**返回样例**

* 成功返回

```
{
	"data": {
		"secret_key": "539d7573-3687-467b-a080-a21be9f1a332",
		"signature_method": "hmac_sha2",
		"signature_ver_code": "1.0",
		"identity_token": "66e1aebc-5e42-451e-aea2-e75725dd26cb"
	},
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "1"
}
```

* 失败返回

无。