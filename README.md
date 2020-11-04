
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>docs_homepage</title>
<link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet">

</head>

  <style scoped >
  h1, h2 {
    font-weight: normal;
  }
  ul {
    /* list-style-type: none; */
    padding: 0;
    text-align: left;
  }
  li {
    display: block;
    margin: 0;
  }
  ul a {
      font-size:22px;
  font-family:SourceSansPro-Regular;
  font-weight:400;
  color:rgba(110,111,112,1);
  position: relative;
  padding-left: 10px;
  }
  li a::before {
    content: '';
    width:4px;
    height:4px;
    border-radius: 50%;
    background:#000000;
    position: absolute;
      /* display: block; */
      left: 0;
      top: 15px;
  }
  .content-title {
    font-size:22px;
    font-family:SourceSansPro-Bold;
    font-weight:bold;
    color:rgba(0,0,0,1);
    padding-bottom: 10px;
    border-bottom: 1px solid #979797;
    text-align:left;
    margin-bottom:10px;
  }
  .content-container .content-row {
  	display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-moz-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
  }
  .markdown-section h4 {
  	font-size: 1.5em;
  }
  .content-row-item {
  	width: 48%;
  	padding: 20px;
  	margin-bottom: 30px;
  }
  .content-row-item:nth-child(2n+1) {
  	background: linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%);
  	background: -webkit-linear-gradient(t157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%); /* Safari 5.1-6.0 */
    background: -o-linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%); /* Opera 11.1-12.0 */ 
    background: -moz-linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%); /* Firefox 3.6-15 */
    background: linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%); /* 标准语法 */
  }
  .content-row-item:nth-child(2n+2) {
  	background: linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%);
  	background: -webkit-linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%); /* Safari 5.1-6.0 */
    background: -o-linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%); /* Opera 11.1-12.0 */ 
    background: -moz-linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%); /* Firefox 3.6-15 */
    background: linear-gradient(157deg, rgba(252, 237, 219, 0.2) 0%, rgba(191, 143, 93, 0.2) 100%); /* 标准语法 */
  }
  .markdown-section a {
  	color: #666;
  }
  .close:not(:disabled):not(.disabled):focus, .close:not(:disabled):not(.disabled):hover {
    opacity: 1;
	}
	.close:not(:disabled):not(.disabled) {
    cursor: inherit;
	}
	.close {
    float: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.5;
    color: #000;
    text-shadow: inherit;
    opacity: 1;
	}
//.content-container .content-row:first-child {
//  margin-bottom: 40px;
//}
  @media screen and (max-width:576px) {
     .content-container {
    	margin:40px 0;
    }
    .content-container .content-row {
    	display: block;
    }
    .content-row-item {
	  	width: 100%;
	  	padding: 20px;
	  	margin-bottom: 30px;
	  }
  }
  </style>
  <body>
  <h1 align="center">TOP Network Developer Portal</h1>
  <div >Welcome to TOP Network Developer Center. 

TOP Network Chain is the first fully sharded public chain, entirely permissionless PoS chain.

The main chain of TOP Network adopts the capacity technology such as multi sharding, two-layer lattice based on DAG , and parallel hpBFT consensus mechanism, making the single-chain transaction processing capacity reaches 100,000 TPS.

The documents let you to understand TOP Network's ecology, technologies and tools, help you to interact with TOP Networks.</div> 

<div ></br></br>
<!--
  -->
  <h4>关于 TOP Network</h4>
  <div class="content-container" style="background-color: #f4f4f4;padding: 1.2rem 1.2rem 2.4rem;margin: 2.4rem 0;">
      <div class="row content-row">
        <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">认识 TOP Network</p>
              <div>
                  <div>
                      <a href="#//zh/AboutTOPNetwork/TOPNetworkPlatform">TOP Network 区块链平台</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/AboutTOPNetwork/TOPChainInfrastructure/Overview">TOP Network 基础设施层</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/AboutTOPNetwork/Protocol/OverView">TOP Network 协议</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/AboutTOPNetwork/Security">链安全</a>
                  </div>
              </div>
             <div>
                  <div>
                      <a href="#//zh/AboutTOPNetwork/TOPNetworkPlatform">查看全部</a>
                  </div>
              </div>
        </div>
          <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">TOP Network 节点</p>
              <div>
                  <div>
                      <a href="#//zh/Node/Overview">概述</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/Node/JoiningNetwork">节点入网</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/Node/NodeSignature">节点签名</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/Node/NodeElection">节点选举</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/Node/NodeReward">节点奖励</a>
                  </div>
              </div>
             <div>
                  <div>
                      <a href="#//zh/Node/Overview">查看全部</a>
                  </div>
              </div>
      </div>
  </div> <div class="row content-row">
        <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">智能合约</p>
              <div>
                  <div>
                      <a href="#//zh/SmartContract/SmartContract">概述</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/SmartContract/SystemContractAPI">系统智能合约 API</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/SmartContract/LuaAPI">应用智能合约 API</a>
                  </div>
              </div>
        </div>
          <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">链上治理</p>
              <div>
                  <div>
                      <a href="#//zh/On-ChainGovernance/Overview">概述</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/On-ChainGovernance/On-ChainGovernanceProposal">链上治理流程</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/On-ChainGovernance/On-ChainGovernanceParameters">链上治理参数</a>
                  </div>
              </div>
     </div>
  </div> <div class="row content-row">
        <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">RPC API</p>
              <div>
                  <div>
                      <a href="#//zh/Interface/RPC-API/Overview">概述</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/Interface/RPC-API/requestToken">获取链访问身份令牌</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="#//zh/Interface/RPC-API/sendTransaction/sendTransaction">发送交易</a>
                  </div>
              </div>
			  <div>
                  <div>
                      <a href="#//zh/Interface/RPC-API/get">查询链上信息</a>
                  </div>
              </div>
			</div>
		</div>
</div>
</div ></br></br>




<div ></br></br>
<!--
  -->
  <h4>About TOP Network</h4>
  <div class="content-container" style="background-color: #f4f4f4;padding: 1.2rem 1.2rem 2.4rem;margin: 2.4rem 0;">
      <div class="row content-row">
        <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">Understand TOP Network</p>
              <div>
                  <div>
                      <a href="/en/AboutTOPNetwork/Overview.md">Overview</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/AboutTOPNetwork/TOPNetworkPlatform.md">TOP Network Platform</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/AboutTOPNetwork/TOPChainInfrastructure/Overview.md">TOP Network Infrastructure</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/AboutTOPNetwork/Protocol/OverView.md">TOP Network Protocol</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/AboutTOPNetwork/Security.md">Security</a>
                  </div>
              </div>
             <div>
                  <div>
                      <a href="/en/AboutTOPNetwork/Glossary.md">View All</a>
                  </div>
              </div>
        </div>
          <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">TOP Network Node</p>
              <div>
                  <div>
                      <a href="/en/Node/Overview.md">Overview</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/Node/JoiningNetwork.md">Node Access&Exit</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/Node/NodeSignature.md">Node Signaure</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/Node/NodeElection.md">Node Election</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/Node/NodeReward.md">Node Reward System</a>
                  </div>
              </div>
             <div>
                  <div>
                      <a href="/en/Node/NodePublishment.md">View All</a>
                  </div>
              </div>
      </div>
  </div> <div class="row content-row">
        <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">Smart Contract</p>
              <div>
                  <div>
                      <a href="/en/SmartContract/SmartContract.md">Overview</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/SmartContract/SystemContractFunction.md">Platform Smart Contract API</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/SmartContract/LuaAPI.md">Application Smart Contract API</a>
                  </div>
              </div>
        </div>
          <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">On-chain governance</p>
              <div>
                  <div>
                      <a href="/en/On-ChainGovernance/Overview.md">Overview</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/On-ChainGovernance/On-ChainGovernanceProposal.md">On-Chain Governance Process</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/On-ChainGovernance/On-ChainGovernanceParameters.md">On-Chain Governance Parameters</a>
                  </div>
              </div>
     </div>
  </div> <div class="row content-row">
        <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">RPC API Reference</p>
              <div>
                  <div>
                      <a href="/en/Interface/RPC-API/Overview.md">Overview</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/Interface/RPC-API/requestToken.md">Request Token</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/en/Interface/RPC-API/sendTransaction/sendTransaction.md">Send Transactions</a>
                  </div>
              </div>
			  <div>
                  <div>
                      <a href="/en/Interface/RPC-API/RetrievingInformationFromtheChain.md">Retrieving Information From the Chain]</a>
                  </div>
              </div>
			</div>
		</div>
</div>
</div ></br></br>

<!--
  -->

  <h4>Tools</h4>
  <div class="content-container" style="background-color: #f4f4f4;padding: 1.2rem 1.2rem 2.4rem;margin: 2.4rem 0;">
      <div class="row content-row">
        <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">TOPIO</p>
              <div>
                  <div>
                      <a href="/zh/Tools/TOPIO/Overview.md">Overview</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/zh/Tools/TOPIO/InstallTOPIO.md">Install TOPIO</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/zh/Tools/TOPIO/QuickStart.md">Quick Start</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/zh/Tools/TOPIO/StartTOPIO.md">Start TOPIO</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/zh/Tools/TOPIO/Command-line_Options.md">Command-line Options</a>
                  </div>
              </div>
             <div>
                  <div>
                      <a href="/zh/Tools/TOPIO/topcl/Overview.md">View All</a>
                  </div>
              </div>
			</div>
          <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">SDKs</p>
              <div>
                  <div>
                      <a href="/zh/Interface/SDKs/00-overview.md">Overview</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/zh/Interface/SDKs/01-javascript-sdk.md">JavaScript SDK</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/zh/Interface/SDKs/03-java-sdk.md">Java SDK</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/zh/Interface/SDKs/02-c++-sdk">C++ SDK</a>
                  </div>
              </div>
      </div>
        </div>
       </div>

     </div>
</div>	
</div>
</div ></br></br>
<!--
  -->
  <h4>Access Guide</h4>
  <div class="content-container" style="background-color: #f4f4f4;padding: 1.2rem 1.2rem 2.4rem;margin: 2.4rem 0;">
      <div class="row content-row">
        <div class="content-row-item">
            <p class="content-title" style="border-bottom: 1px solid #979797;">Wallet Wallet Integration Guide</p>
              <div>
                  <div>
                      <a href="/zh/AccessGuide/WalletAccessGuide/Overview.md">Overview</a>
                  </div>
              </div>
              <div>
                  <div>
                      <a href="/zh/AccessGuide/WalletAccessGuide/SDKintegartion.md">SDK Integration</a>
                  </div>
              </div>
			</div>
      </div>
        </div>
       </div>
     </div>
</div>	  
			
  </body>
</html>

