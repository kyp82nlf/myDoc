# Node Penalty System

## Overview

The system has corresponding penalties for malicious nodes or nodes:

| Malicious Behavior    | Description of Malicious Behavior                            | Node Penalty System                                          |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Validator Fall behind | In a penalty period (24 hours), the validator signing rate of a node ≤ 0%, and its signing rate ranking ≤ the bottom 10% of all validators. | When the Validator's credit score is minus 0.02.<br/>The deposit pending period will increase to 12 days based on the original 24 hours. |
| Auditor Fall behind   | In a penalty period (24 hours), a node's auditor signing rate ≤ 0%, and its signing rate ranking ≤ the bottom 10% of all auditors. | When the Auditor credit score is minus 0.01.<br/>The deposit pending period will increase to 12 days. |

**Block Sign Rate**

The shard will periodically report the actual votes in the signed table in node as well as the voting times of the signed table to ZEC, then ZEC will caculates the sign rate of each node.

Validator Sign Rate = Times the node actually voted to sign the table block / Times the node should vote to sign the table block

Auditor Sign Rate = Times the node actually voted to sign the table block / Times the node should vote to sign the table block

When counting the sign rate, there is no need to distinguish rounds or tables. Just summarize the node addresses directly which can reduce the data bulk

**Block sign rate ranking**

When calculating the validator and auditor sign rate ranking, sorting is based on the node's signing rate.
