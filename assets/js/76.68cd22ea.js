(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{467:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet"}},[e._v("#")]),e._v(" Wallet")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Wallet lets you create & manage local accounts and public-private key pairs, set up default account, list all existing accounts and key pairs and reset keystore file password.")]),e._v(" "),a("h2",{attrs:{id:"wallet-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet-commands"}},[e._v("#")]),e._v(" Wallet Commands")]),e._v(" "),a("p",[e._v("Enter TOPIO or topcl to view the wallet commands. This chapter takes the example of using the wallet commands under topcl.")]),e._v(" "),a("p",[e._v("Execute "),a("code",[e._v("wallet -h")]),e._v(" or "),a("code",[e._v("wallet --help")]),e._v(" view all wallet commands.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COMMANDS:\n    createAccount                   Create and manage accounts and public-private key pairs.\n    createAccountKeystore           Create account keystore file by private key.\n    createKey                       Create the public-private key pair.\n    createKeypairKeystore           Create public-private key pair keystore file by private key.\n    list                            List existing accounts and keys.\n    resetPassword                   Reset keystore file password.\n    setDefault                      Import the account keystore file to default account for sending transactions.\n\nOPTIONS:\n    -h --help                       Show a list of commands or help for one command.\n")])])]),a("p",[e._v("Execute "),a("code",[e._v("wallet createKey -h")]),e._v(" or "),a("code",[e._v("wallet createKey --help")]),e._v(" view help for subcommand "),a("code",[e._v("createKey")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$> wallet createkey -h\nCreate the public-private key pair.\n\nUSAGE:\n    createKey [options]\n\nOPTIONS:\n    -h --help                       Show help information for one command.\n    -d --dir                        [the keystore file storage path].\n\nEXAMPLE:\n    wallet createKey -d /home/ttt\n")])])]),a("h2",{attrs:{id:"command-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-instructions"}},[e._v("#")]),e._v(" Command Instructions")]),e._v(" "),a("h3",{attrs:{id:"create-an-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-account"}},[e._v("#")]),e._v(" Create an Account")]),e._v(" "),a("p",[e._v("Create a local account. Multiple accounts can be created at the same time.")]),e._v(" "),a("p",[e._v('Please remember your keystore file password. If the password is lost, you will not be able to use the account any more. And the system has no "Forget password" option, you can only retrieve the password through the password hint.')]),e._v(" "),a("p",[e._v("Caution:")]),e._v(" "),a("blockquote",[a("p",[e._v("The created account is a local one, which does not exist on the chain. To interact with the chain, you need to create a corresponding account on the chain.")]),e._v(" "),a("p",[e._v("You can create an account on the chain via transferring TOP tokens to the local account by an account with balance on the chain.")])]),e._v(" "),a("p",[a("strong",[e._v("Request")])]),e._v(" "),a("p",[a("code",[e._v("wallet createAccount")])]),e._v(" "),a("p",[a("strong",[e._v("Request Parameter")])]),e._v(" "),a("p",[e._v("None.")]),e._v(" "),a("p",[a("strong",[e._v("Options")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option Name")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-d，--dir")]),e._v(" "),a("td",[e._v("/root/Topnetwork/keystore")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v('The directory of account keystore file. If it is not specified, the default directory is "/root/Topnetwork/keystore" under Linux system.')])]),e._v(" "),a("tr",[a("td",[e._v("-h,--help")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Check the commands' help information.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Parameters")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter Name")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Publice Key")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Publice key which is used for encryption and signature verification.")])]),e._v(" "),a("tr",[a("td",[e._v("Account Address")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("You can share your public key and account address with anyone. Others need them to interact with you."),a("br"),e._v('The address created here is a normal user account address, beginning with a "T-0" identifier.')])]),e._v(" "),a("tr",[a("td",[e._v("Account Keystore File Path")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("The account keystore file stores information such as public and private keys and account addresses which are used to set up accounts. The private key is used for decryption and transaction signature."),a("br"),e._v("You must nerver share the private key and account keystore file with anyone! They control access to your funds!")])])])]),e._v(" "),a("p",[a("strong",[e._v("Request Sample")])]),e._v(" "),a("p",[a("code",[e._v("wallet createAccount")])]),e._v(" "),a("p",[a("strong",[e._v("Response")])]),e._v(" "),a("ul",[a("li",[e._v("Successful")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Please set a password for the account keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.\nOr Ctrl+D skips this step.\nSuccessfully create an account locally!\n\nYou can share your public key and account address with anyone.Others need them to interact with you!\nYou must nerver share the private key and account keystore file with anyone!They control access to your funds!\nYou must backup your account keystore file!Without the file,you’ll be impossible to access account funds!\nYou must remember your password!Without the password,it’s impossible to use the keystore file!\nPublic Key: BBtwShz7qgisA4RsjpvgmijBAAPlh9m/bRh2OsRLK7erroPUD0vFQcwWh4cwVlaIRugxq9b+L67JMztdLipeygc=\nAccount Address: T-0-LKQULGZTa6uGPDmEtLMaCLgy922NLQntNs\nAccount Keystore File Path: /root/Topnetwork/keystore/T-0-LKQULGZTa6uGPDmEtLMaCLgy922NLQntNs\n")])])]),a("ul",[a("li",[e._v("Failed")])]),e._v(" "),a("p",[e._v("Enter a password that does not meet the format.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Password error!\n")])])]),a("h3",{attrs:{id:"create-account-keystore-by-private-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-account-keystore-by-private-key"}},[e._v("#")]),e._v(" Create Account Keystore By Private Key")]),e._v(" "),a("p",[e._v("If you already have the TOP Network private key, you can create the account address and keystore file by the private key.")]),e._v(" "),a("p",[a("strong",[e._v("Request")])]),e._v(" "),a("p",[a("code",[e._v("wallet createAccountKeystore")])]),e._v(" "),a("p",[a("strong",[e._v("Request Parameters")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter Name")]),e._v(" "),a("th",[e._v("Required")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("private_key")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v('TOP Network Base64 private key(44 characters), such as "ViozcHV2UwMhzmwZRt1LOs05bxTfa + VevqynkjOAxAQ =".')])])])]),e._v(" "),a("p",[a("strong",[e._v("Options")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option Name")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-d，--dir")]),e._v(" "),a("td",[e._v("root/Topnetwork/keystore")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v('The directory of account keystore file. If it is not specified, the default directory is "/root/Topnetwork/keystore" under Linux system.')])]),e._v(" "),a("tr",[a("td",[e._v("-h,--help")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Check the commands' help information.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Parameter")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter Name")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Publice Key")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Publice key which is used for encryption and signature verification.")])]),e._v(" "),a("tr",[a("td",[e._v("Account Address")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("You can share your public key and account address with anyone. Others need them to interact with you."),a("br"),e._v('The address created here is a normal user account address, beginning with a "T-0" identifier.')])]),e._v(" "),a("tr",[a("td",[e._v("Account Keystore File Path")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("The account keystore file stores information such as public and private keys and account addresses which are used to set up accounts. The private key is used for decryption and transaction signature."),a("br"),e._v("You must nerver share the private key and account keystore file with anyone! They control access to your funds!")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Schema")])]),e._v(" "),a("ul",[a("li",[e._v("Successful")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Please set a password for the account keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.\nOr Ctrl+D skips this step.\nPlease Input Password Again\nPlease set a password hint! If don't, there will be no hint when you forget your password.\nbasketball\nSuccessfully create an account keystore file!\n\nYou can share your public key and account address with anyone.Others need them to interact with you!\nYou must nerver share the private key and account keystore file with anyone!They control access to your funds!\nYou must backup your account keystore file!Without the file,you’ll be impossible to access account funds!\nYou must remember your password!Without the password,it’s impossible to use the keystore file!\nPublic Key: BNIcSMpUK+IiR9I+UDz2EgCJn2WR7Ki+YB2PaZBYv7neWlR7oFdRLVb4tK9ZXY3hL/FOqgrUJz+9PHSKljL7u0Q=\nAccount Address: T-0-LW84Y6RjtsfRxUeoTs4SD3e9bbXY81BK1p\nAccount Keystore File Path: /root/Topnetwork/keystore/T-0-LW84Y6RjtsfRxUeoTs4SD3e9bbXY81BK1p\n")])])]),a("ul",[a("li",[e._v("Failed")])]),e._v(" "),a("p",[e._v("Enter a password that does not meet the format.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Password error!\n")])])]),a("h3",{attrs:{id:"create-public-private-key-pairs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-public-private-key-pairs"}},[e._v("#")]),e._v(" Create Public-private Key Pairs")]),e._v(" "),a("p",[e._v("You can use the public-private key pair of the node account as the node sign key when registering the node."),a("br"),e._v("It is recommended that you use "),a("code",[e._v("wallet createKey")]),e._v(" to create asset-free public and private key pairs to protect your account assets better, which are used to sign the nodes when they are working after they have been elected into the network.")]),e._v(" "),a("p",[a("strong",[e._v("Request")])]),e._v(" "),a("p",[a("code",[e._v("wallet createKey")])]),e._v(" "),a("p",[a("strong",[e._v("Request Parameters")])]),e._v(" "),a("p",[e._v("None.")]),e._v(" "),a("p",[a("strong",[e._v("Options")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option Name")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-d，--dir")]),e._v(" "),a("td",[e._v("root/Topnetwork/keystore")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v('The directory of public-private key pair keystore file. If it is not specified, the default directory is "/root/Topnetwork/keystore" under Linux system.')])]),e._v(" "),a("tr",[a("td",[e._v("-h,--help")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Check the commands' help information.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Parameter")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter Name")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Publice Key")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Public key is used for encryption and signature verification.")])]),e._v(" "),a("tr",[a("td",[e._v("Keystore File Path")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("The keystore file stores information such as public and private keys which is used for decryption and transaction signature."),a("br"),e._v("You must never share the private key and account keystore file with anyone!They control access to your funds!")])])])]),e._v(" "),a("p",[a("strong",[e._v("Request Sample")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wallet createKey\n")])])]),a("p",[a("strong",[e._v("Response Schema")])]),e._v(" "),a("ul",[a("li",[e._v("Successful")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Please set a password for the keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.\nOr Ctrl+D skips this step.\nSuccessfully create an key locally!\n\nYou can share your public key with anyone.Others need it to interact with you!\nYou must nerver share the private key and keystore file with anyone!They can use them to make the node malicious.\nYou must backup your keystore file!Without the file,you may not be able to send transactions.\nYou must remember your password!Without the password,it’s impossible to use the keystore file!\nPublic Key: BBYTqmkmNksMjX/ydgnixYP1fVmd0zHQGqW1xCBo4zXNrWf3H/XXqe+NsUkvrSuZ4wtDbJqdE7NDU752gMFd5+g=\nKeystore File Path: /root/Topnetwork/keystore/Lgq6CojT16wVRSCEuGcsQRPg8eRsz3auyJ\n")])])]),a("ul",[a("li",[e._v("Failed")])]),e._v(" "),a("p",[e._v("Enter a password that does not meet the format.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Password error!\n")])])]),a("h3",{attrs:{id:"create-keypair-keystore-by-private-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-keypair-keystore-by-private-key"}},[e._v("#")]),e._v(" Create Keypair Keystore by Private Key")]),e._v(" "),a("p",[e._v("If you already have the TOP Network private key, you can create the key pair keystore file by the private key.")]),e._v(" "),a("p",[a("strong",[e._v("Request")])]),e._v(" "),a("p",[a("code",[e._v("wallet createAccountKeystore")])]),e._v(" "),a("p",[a("strong",[e._v("Request Parameters")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter Name")]),e._v(" "),a("th",[e._v("Required")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("private_key")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v('TOP Network Base64 private key(44 characters), such as "ViozcHV2UwMhzmwZRt1LOs05bxTfa + VevqynkjOAxAQ =".')])])])]),e._v(" "),a("p",[a("strong",[e._v("Options")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option Name")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-d，--dir")]),e._v(" "),a("td",[e._v("root/Topnetwork/keystore")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v('The directory of account keystore file. If it is not specified, the default directory is "/root/Topnetwork/keystore" under Linux system.')])]),e._v(" "),a("tr",[a("td",[e._v("-h,--help")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Check the commands' help information.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Parameter")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter Name")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Publice Key")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Publice key which is used for encryption and signature verification.")])]),e._v(" "),a("tr",[a("td",[e._v("Account Address")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("You can share your public key and account address with anyone. Others need them to interact with you."),a("br"),e._v('The address created here is a normal user account address, beginning with a "T-0" identifier.')])]),e._v(" "),a("tr",[a("td",[e._v("Account Keystore File Path")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("The account keystore file stores information such as public and private keys and account addresses which are used to set up accounts. The private key is used for decryption and transaction signature."),a("br"),e._v("You must nerver share the private key and account keystore file with anyone! They control access to your funds!")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Schema")])]),e._v(" "),a("ul",[a("li",[e._v("Successful")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Please set a password for the keystore file. The password must consist of Numbers and Letters, 8 to 16 characters.\nOr Ctrl+D skips this step.\nPlease Input Password Again\nPlease set a password hint! If don't, there will be no hint when you forget your password.\nbasketball\nSuccessfully create a publice-private key pair keystore file!\n\nYou can share your public key and account address with anyone.Others need them to interact with you!\nYou must nerver share the private key and account keystore file with anyone!They control access to your funds!\nYou must backup your account keystore file!Without the file,you’ll be impossible to access account funds!\nYou must remember your password!Without the password,it’s impossible to use the keystore file!\nPublic Key: BNIcSMpUK+IiR9I+UDz2EgCJn2WR7Ki+YB2PaZBYv7neWlR7oFdRLVb4tK9ZXY3hL/FOqgrUJz+9PHSKljL7u0Q=\nKeystore File Path: /root/Topnetwork/keystore/LW84Y6RjtsfRxUeoTs4SD3e9bbXY81BK1p\n")])])]),a("ul",[a("li",[e._v("Failed")])]),e._v(" "),a("p",[e._v("Enter a password that does not meet the format.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Password error!\n")])])]),a("h3",{attrs:{id:"set-default-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-default-account"}},[e._v("#")]),e._v(" Set Default Account")]),e._v(" "),a("p",[e._v("The system uses the newest created account to send transactions.If restart TOPIO, you'll need to reset default account to send transactions.")]),e._v(" "),a("p",[e._v("If the new account does not exit on the blockchain,it is necessary to create the account on the blockchain via transferring TOP token to the local account by an account with balance on the blockchain.")]),e._v(" "),a("p",[a("strong",[e._v("Request")])]),e._v(" "),a("p",[a("code",[e._v("wallet setDefault")])]),e._v(" "),a("p",[a("strong",[e._v("Request Parameters")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter Name")]),e._v(" "),a("th",[e._v("Required")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("keystore_file_path")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("The account keystore file path.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Options")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option Name")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-h,--help")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Help for the command.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Parameters")])]),e._v(" "),a("p",[e._v("None.")]),e._v(" "),a("p",[a("strong",[e._v("Request Sample")])]),e._v(" "),a("p",[e._v("Caution:")]),e._v(" "),a("blockquote",[a("p",[e._v("Please use the account keyStore file. You will fail to set the default account if you use the public-private key pair keystore file.")])]),e._v(" "),a("p",[a("code",[e._v("wallet SetDefault /root/Topnetwork/keystore/T-0-LPXXAanpbjNPQ4ff4iosZYN5eNfWZWDLky")])]),e._v(" "),a("p",[a("strong",[e._v("Response Schema")])]),e._v(" "),a("ul",[a("li",[e._v("Successful")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("T-0-LQcciHQHgsL1dHhzN5vqQKfd8QxKhKrsbs: Set default account successfully.\n")])])]),a("ul",[a("li",[e._v("Failed")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Please Input Password.\nFile error! You are using the keystore file, please use the account keystore file to set the default account. \nFailed to set default account.\n")])])]),a("h3",{attrs:{id:"list-accounts-and-public-private-key-pairs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-accounts-and-public-private-key-pairs"}},[e._v("#")]),e._v(" List Accounts and Public-private Key Pairs")]),e._v(" "),a("p",[a("strong",[e._v("Request")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wallet list\n")])])]),a("p",[a("strong",[e._v("Request Parameters")])]),e._v(" "),a("p",[e._v("None.")]),e._v(" "),a("p",[a("strong",[e._v("Options")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-d，--dir")]),e._v(" "),a("td",[e._v("root/Topnetwork/keystore")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("List all accounts and public-private key pairs under the specified directory.")])]),e._v(" "),a("tr",[a("td",[e._v("-u,--using")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("List only the accounts that are being used to send the transaction.")])]),e._v(" "),a("tr",[a("td",[e._v("-h,--help")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Check the commands' help information.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Parameters")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter Name")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("account")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Account address.")])]),e._v(" "),a("tr",[a("td",[e._v("public key")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Base64-format public key of the account.")])]),e._v(" "),a("tr",[a("td",[e._v("account keystore file path")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Accout keystore file path.")])]),e._v(" "),a("tr",[a("td",[e._v("status")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v('Account usage status, currently in use is "Used as Default".')])]),e._v(" "),a("tr",[a("td",[e._v("public key")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Base64-format public key of the public-private key pair.")])]),e._v(" "),a("tr",[a("td",[e._v("keystore file path")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Public-private key pair keystore file path.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Request Sample")])]),e._v(" "),a("ul",[a("li",[e._v("List all accounts and public-private key pairs under the specified directory.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wallet list\n")])])]),a("ul",[a("li",[e._v('List the "Used as Default" accounts and public-private key pairs under the specified directory.')])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wallet list -d /home/cathytest -u\n")])])]),a("p",[a("strong",[e._v("Response Schema")])]),e._v(" "),a("ul",[a("li",[e._v("Successful")])]),e._v(" "),a("p",[e._v("List all accounts and public-private key pairs under the specified directory.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("account #0: T-0-LUGh8HG4sijgQKM14AWuka7vpLZLKwqmY7\naccount keystore file path: /root/Topnetwork/keystore/T-0-LUGh8HG4sijgQKM14AWuka7vpLZLKwqmY7\npublic key: BGU3wMJOO803a17V8R5dPtbnWKeMKDH9apltmNo2arqX2vo0sl4T21tLrO/D9NjEWHLR5iXUMFutPTaKO1wOT2I=\nstatus: Used as default\n\naccount #1: T-0-LSKvMt2gnwmbZEgki4iZH8iJS58Hg3A9eH\naccount keystore file path: /root/Topnetwork/keystore/T-0-LSKvMt2gnwmbZEgki4iZH8iJS58Hg3A9eH\npublic key: BMPTHPnnZqLhhpQi6gBj0c1UsySMvLIwNH7TXZn6XSKbAsYOdsaaqiOm3a5uCQt0htBo/6cbkFI3QvS5SHfjo88=\n\naccount #2: T-0-LbiRyAF5M5GEBaqsjweeDZT4pG6PckL44h\naccount keystore file path: /root/Topnetwork/keystore/T-0-LbiRyAF5M5GEBaqsjweeDZT4pG6PckL44h\npublic key: BG/sXAnHU+14C+ix4YecSJS4Zr8MN2AQxvrAnZk1UA7/rmF+GWQvsfxg8TY5y3WLmyipogg5gfUmM1S0cUae0Xc=\n\nkeystore file path: /root/Topnetwork/keystore/LgjBfaWcf7cqttx4fXcxNwSVcLiNb6UTa9\npublic key: BBaaDVVYtAIdhQ0UgbFI4CAmx+VMrOl1Hgc89EMPjDlWKKyLzF4koAlrdqexX4z96a5qBvY0z65pm+d292vXrsk=\n\nkeystore file path: /root/Topnetwork/keystore/LP1QSHaEBPS4P8N1FhGgjxoFJ2bRnNmiCZ\npublic key: BCJ6IIlnKlnvSBUHDIG6nTwDiHrsQX//Ff8MmZw5FfdyT8RG+WFZmKgWYy5XaVvj85SxHbAiEMZHAfLqGnt7+tc=\n\nkeystore file path: /root/Topnetwork/keystore/LbRE8FmDyNVMyznAa2ocMgmTVDwk3w4ZfV\npublic key: BDqUPFJydCmyITlsW0qnNnKSdVyj0hMjf4hpJOs9P9+dEri7rJPJBWRe3+06/ruhnXgQmcXgn9L1JLOks0+5RAQ=\n")])])]),a("p",[e._v('List the "Used as Default" accounts and public-private key pairs under the specified directory.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("account #0: T-0-LWjs6udfquYRdG41hdUBbofqr6qaHFZ8Eo\naccount keystore file path: /home/cathytest/T-0-LWjs6udfquYRdG41hdUBbofqr6qaHFZ8Eo\npublic key: BP4b6tSWio8EoSKafrlF04azPMmwZASAla4lQAtShInZj1qRmiMkxhhiIVgojCQN/wHQEnZJQDt6M3sjXlODlew=\nstatus: Used as default\n")])])]),a("ul",[a("li",[e._v("Failed")])]),e._v(" "),a("p",[a("code",[e._v("No Key Pair.")])]),e._v(" "),a("h3",{attrs:{id:"reset-keystore-file-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-keystore-file-password"}},[e._v("#")]),e._v(" Reset Keystore File Password")]),e._v(" "),a("p",[a("strong",[e._v("Request")])]),e._v(" "),a("p",[a("code",[e._v("wallet resetPassword")])]),e._v(" "),a("p",[a("strong",[e._v("Request Parameters")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameters Name")]),e._v(" "),a("th",[e._v("Required")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Parameter Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("keystore file path")]),e._v(" "),a("td",[e._v("是")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Keystore file path of the account or the public-privte key pair.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Option")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Option Name")]),e._v(" "),a("th",[e._v("Default Value")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-h,--help")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Check the commands' help information.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Response Parameters")])]),e._v(" "),a("p",[e._v("None.")]),e._v(" "),a("p",[a("strong",[e._v("Request Sample")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wallet resetPassword /root/Topnetwork/keystore/LgjBfaWcf7cqttx4fXcxNwSVcLiNb6UTa9\n")])])]),a("p",[a("strong",[e._v("Response Schema")])]),e._v(" "),a("ul",[a("li",[e._v("Successful")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Reset password successfully!\n")])])]),a("ul",[a("li",[e._v("Failed")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Invalid key - MAC mismatch\nPassword error！\nHint: \n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);