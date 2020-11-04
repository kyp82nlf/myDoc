# Economic Model

## Overview

The monetary policy of the TOP ecosystem was designed with real-world considerations in mind. As with all real-world monetary policies, there are mechanisms for both inflation and deflation in the TOP Network ecosystem. 

## TOP Token Supply

TOP Token is the token of TOP Network blockchain ecosystem, which is used to pay nodes that provide resource and serve as the carrier of value exchange.

The total initial max supply of TOP tokens is 20 Billion. However, this number changes from both inflationary and deflationary mechanisms. 

TOP Network ensures a healthy monetary policy through reward allocation and inflation offset mechanisms.

### Reward Allocation

38% of the 20 billion is reserved for the reward when system creation, and the annual issue is 8% of the remaining of the reserved reward . As the remaining of the reserved reward decreases year by year, the issue ratio also decreases year by year. When the issue ratio is reduced to less than 2%, then it will be fixed at 2% of $20 billion per year.

Formula of annual total reward ratio:
Year Total Reward=max(8% of the remaining reserved reward at the beginning of the year, 2%*20 billion).

For example, first year total reward ratio=38%*8% = 3.04%, the following year total reward ratio = (38%-3.04%) * 8% = 2.7968%.

The system sets the incremental TOP Tokens issued each year as the reward pool. The 20% of reward pool is node vote reward, 76% is node workload reward, 4% is on-chain governance committee reward.

Nodes have set dividend ratio. All the rewards it receives will be distributed to the voter's account that supports it according to the dividend ratio.

### Inflation Offset Mechanisms

To offset the inflation associated with mining rewards, TOP adds several means of burning tokens. Burning means to remove tokens from the supply forever, which is a deflationary mechanism. There are several instances of this in the TOP ecosystem.

On TOP, users can issue TEP-10 Native tokens. Unlike contract tokens, these tokens live on-chain in a similar manner to the main TOP token. If TOP token is the ”world reserve currency,” TEP-10 tokens are like smaller regional currencies traded against TOP. To issue a TEP-10 token, the user must deposit a sum of TOP tokens. These tokens are burned, thus lowering the total supply.
Transaction fees are also burned. In other blockchains such as Bitcoin and Etheruem, one of the the main source of miner income is transaction fees. On TOP, miners receive enough rewards from tokens issued for block rewards, and so all transaction fees can be burned.

For most transactions, there are no fees. However, TOP does charge accounts handling fees when sending some types of special transactions to the Root-Beacon chain. For instance, node registration, which require Root-Beacon Chain transactions, charge a small handling fee which is burned. As for regular transactions, if an account runs out of gas, a small fee is charged and burned to offset the missing gas requirement.