# Request Identity Token

Please get the identity token before interacting with the chain.<br/>The identity token is different for each account.

Please create an account on the chain before requesting the identity token:

1. Create an local account，please refer to [Account Protocol](/en/AboutTOPNetwork/Protocol/AccountProtocol.md).

2. Create the account on the chain via transferring TOP tokens to the local account by an account have enough balance on the chain.

**Request Method**

`requestToken`

**Request Parameters**

None.

**Response Parameters**

| Parameter Name     | Parameter Type | Description                                                  |
| ------------------ | -------------- | ------------------------------------------------------------ |
| secret_key         | String         | Secret key.                                                  |
| signature_method   | String         | Signature method.                                            |
| signature_ver_code | String         | Signature method version.                                    |
| identity_token     | String         | Identity token, used to interact with the chain. This parameter is required for all subsequent requests. |

**Request Sample**

```
target_account_addr=T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn&
body=null&
method=requestToken&
sequence_id=22&
identity_token=&
version=1.0
```

**Response Schema**

* Successful

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

* Failed

None.