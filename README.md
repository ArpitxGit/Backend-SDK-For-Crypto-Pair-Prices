# Backend-SDK-For-Crypto-Pair-Prices
Backend SDK through which anyone can integrate/calculate multiple crypto pair prices.

### Using Http web3 provider:: to continuosly query the blockchain :-
=> quering the blockchain every second to see if there is a price change and then calculating the price change through reserves.

### Used Infura for node to connect to Blockchain :-
=> Go to infura, sign up, then copy the URL of http from there, we will be needing this URL in our .env file.

### Used uniswap pair contract api for interaction with uniswap pair contract from here:-
https://docs.uniswap.org/protocol/V2/reference/smart-contracts/pair.


##### Steps to run the code ::

1. Clone this repo 
2. create an .env and paste this ```HTTP_URL = "paste here the http endpoint from infura" ```
3. ```npm i```
4. ```node index.js```

### Output:-

##### Of a single pair ::-

https://user-images.githubusercontent.com/75042859/170857845-f5bd3e37-efc3-4450-b338-83b898722722.mp4

##### Of five pairs ::-

https://user-images.githubusercontent.com/75042859/170857863-429a3e45-f2a7-4a34-ad07-3fce51e9d7e1.mp4

