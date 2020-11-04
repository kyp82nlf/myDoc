# Vote

## Overview

The voting system of TOP Network follows the design ideas below:

* Every vote can only vote once.
* Protect the interests of voters: System distributes the dividend automatically.
* The longer you hold the TOP token, the more important your opinion is: the longer the lock up period is, the more voting tickets you will obtain.
* Voters participating in democracy have corresponding thresholds to ensure that the interests of voters are consistent with the community
* Active voters are suitable for direct democracy (direct voting). Voters that don't want to participate can delegate their votes to others.
* A miner/pool will have multiple nodes, and proxy voting can better distribute votes for miners and reduce voter costs.

## Roles Description

**Node**

You can obtain votes only when you register as an advance node. The advance node can set the dividend ratio and distribute rewards to nodes that vote you according to the dividend ratio.

The dividend ratio can be modified once in 14 days. The dividend ratio ranges from 0 to 100%. For example, when a node sets a node dividend ratio of 80%, it means that 80% of the node's reward will be distributed to other node accounts that vote for the advance node.

**Voter**

Any ordinary account holding a currency is a voter. The voter can vote for the node, or delegatethe vote, and therefore get the voter dividend.

The holder enters the lock-up period and the locked TOP amount to initiate a lock-to-coin exchange transaction. The transaction consumes gas resources as usual. After the transaction is successful, the corresponding number of TOPs under the account will be locked, and the number of unused tickets will increase.

## Stake TOP for Votes

If the converted votes from the current trading staking amount + original value of convertion lock amount<1000TOP, the convertion transaction fails.

The longer the lock-up period is, the less TOP token that needs to be staked for converting the same amount of votes will be.

1 TOP token is locked for 30 days to convert 1 vote ticket, and 60 days for 1.04 ticket. The unit is 30 days (less than 30 days is not counted). For each additional 30 days of lock-up period, 4% more can be exchanged until TOP: ticket =1:2.

Calculation method of converting:

Number of 1TOP redemption votes = min (1.04^(lock-in period/30-1), 2), where 1.04 is the "redemption rate factor".

Description:

> The TOP tokens staked for votes are locked in users' account, not transferred to the shard voting contract.

## Voting

Voters or voting representative can initiate voting transactions at any time.

The minimum votes ticket for voting is 10,000 and subsequent cumulative votes are unlimited.

Voting transactions consume gas resources as usual, and there is no additional service fee.

## Voting Penalty

If the system finds that a node has committed a serious malicious behavior, all votes on this node will be frozen for 30 days. Votes on the node will decrease, and the votes frozen in the contract will increase for voters. For details, please refer to [Node Penalty System](/en/Node/NodePunishment.md) .

## Voting Cancellation

Voters can cancel and withdraw the votes that have been voted to advance node at any time, so that the votes on the node are reduced and the unused votes in the user account increased.

There is no limit to the quantity of votes be canceled each time, but it cannot be higher than the total quantity of votes for the node, otherwise the cancellation of the vote will fail.

Cancelling voting transactions also consumes gas resources.

## Unlock TOP token

TOP token cannot be unlocked during the lockup period.

After initiating the unlock, we need to wait 24 hours for the unlocked amount to arrive in the account.

The locked TOP token corresponding to the used ballot cannot be unlocked.