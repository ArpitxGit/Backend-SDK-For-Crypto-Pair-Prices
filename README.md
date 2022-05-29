# Backend-SDK-For-Crypto-Pair-Prices
Backend SDK through which anyone can integrate/calculate multiple crypto pair prices.

### Using Http web3 provider:: to continuosly query the blockchain :-
=> quering the blockchain every second to see if there is a price change and then calculating the price change through reserves.

### Used Infura for node to connect to Blockchain :-
=> Go to infura, sign up, then copy the URL of http from there, we will be needing this URL in our .env file.

### Used uniswap pair contract api for interaction with uniswap pair contract from here:-
https://docs.uniswap.org/protocol/V2/reference/smart-contracts/pair.


Steps to run the code ::

1. Clone this repo 
2. create an .env and paste this ```HTTP_URL = "paste here the http endpoint from infura" ```
3. ```npm i```
4. ```node index.js```
