# Distributed Stroage

## Overview

Blockchains are very inefficient databases. Storing a large file on a blockchain will always cost far more than a centralized counterpart, largely due to the extreme redundancy blockchains employ. However,almost all applications produce and must store large amounts of files or data. Using a blockchain for
all storage needs would be prohibitively expensive for DApp developers, and would increase the size of the blockchain astronomically. This is why many DApps on other blockchain systems resort to using centralized storage solutions. To account for this, TOP Network provides distributed storage options which allow large amounts of data to be stored in a decentralized manner, without storing everything directly on-chain.

## Distributed File Storage

Applications developers often need to host large files which cannot be uploaded to the blockchain. TOP Network provides a distributed file storage network similar to IPFS as part of the core infrastructure. As with IPFS, files are segmented and encrypted and then stored redundantly across several nodes. Hashes of these chunks are stored on-chain to ensure authenticity and to prevent tampering. TOP Network’s networking
infrastructure is well suited for this kind of application, as this type of distributed file storage makes heavy use of DHTs to store and access file chunks.。

## Distributed Database

File storage is not quite the same as a database. Databases store related data in a structured format.TOP Network’s infrastructure includes a distributed database system allowing DApp developers to store more complicated forms of data in a decentralized manner. Each account has an associated mini NoSQL like database stored on-chain. These mini databases can store multiple complex data structures, such as Hash Maps, Lists, and so on.