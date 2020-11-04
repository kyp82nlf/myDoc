# Voter Dividend

## Overview

Advance nodes can set the dividend ratio, and distribute the total rewards of the nodes to the voting nodes that support themselves according to the dividend ratio.

The total reward includes all the rewards obtained by the node, which includes workload rewards, node vote rewards, and etc.

## Node Dividend Ratio

After registering, the auditor node can create the dividend ratio of the node reward (the default is 0%), and distribute the reward from the node to the nodes that vote for it in proportion.

The node can modify the dividend ratio every 14 days.

The dividend ratio ranges from 0 to 100%. For example, when a node sets a node dividend ratio of 80%, it means that 80% of the node's reward will be distributed to the users who voted for the node.

## Voter Dividend Rules

Reward objects: all voters。

Reward calculation and distribution period: 24 hours

Reward rules:

Node distributes rewards to all voters who support it according to the dividend ratio. A single voter will get the divides from the node according to the vote proportion.

Voter dividend formula:

Vote Dividend=(Votes/total votes of this node)*Total reward of this node* Ratio of node dividend

Among them, the total node reward refers to all the rewards obtained by a node (including but not limited to workload rewards and node vote rewards).

## Reward Withdrawal

The system settles voter rewards every 24 hours, and automatically distributes to the dividend pool.

If the withdrawal amount is less than 10 TOP, the withdrawal cannot be made. 