# Backend-SDK-For-Crypto-Pair-Prices
Backend SDK through which anyone can integrate/calculate multiple crypto pair prices.

SDK is a set of software-building tools for a specific platform, including the building blocks, debuggers and, often, a framework or group of code libraries such as a set of routines specific to an operating system (OS).
Baically, SDKs are the origination sources for almost every program a modern user would interact with.


1> Using Http web3 provider:: to continuosly query the blockchain
=> quering the blockchain every second to see if there is a price change and then calculating the price change through reserves.

2> Using websockets:: more efficient
=> we can subsrcibe to contract events and then wait for when the reserves of pair changes and then recalculate the price according to that.

Used Infura for node to connect to Blockchain

Used uniswap pair contract api for interaction with uniswap pair contract from here https://docs.uniswap.org/protocol/V2/reference/smart-contracts/pair.

