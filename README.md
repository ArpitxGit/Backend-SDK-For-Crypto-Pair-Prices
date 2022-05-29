# Backend-SDK-For-Crypto-Pair-Prices
Backend SDK through which anyone can integrate/calculate multiple crypto pair prices.

### Using Http web3 provider:: to continuosly query the blockchain :-
=> quering the blockchain every second to see if there is a price change and then calculating the price change through reserves.

### Used Infura for node to connect to Blockchain :-
=> Go to infura, sign up, then copy the URL of http from there, we will be needing this URL in our .env file.

### Used uniswap pair contract api for interaction with uniswap pair contract from here:-
https://docs.uniswap.org/protocol/V2/reference/smart-contracts/pair.

### For any pair we need address of the pair contract from here:- https://v2.info.uniswap.org/pairs 
###### ex :: this is the web link of ETH-USDT Pair :- https://v2.info.uniswap.org/pair/0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
the end part of the link is the address of the respective pair contract ```0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852```


##### Steps to run the code ::

1. Clone this repo 
2. Paste infura end point url in .env file
3. ```npm i```
4. ```node index.js```

### Output:-

##### Of a single pair ::-

https://user-images.githubusercontent.com/75042859/170857845-f5bd3e37-efc3-4450-b338-83b898722722.mp4

##### Of five pairs ::-

https://user-images.githubusercontent.com/75042859/170857863-429a3e45-f2a7-4a34-ad07-3fce51e9d7e1.mp4

### RESULT :-

uering the blockchain every secondto see if there is a price change and then we are calculating the price change based on the reserves.

# Tried to optimise:-
By subscribing to blockchain events and then wait for the reserves of pair changes and then recalculate the price according to that.
Using sync event that gets emitted everytime when reserves got updated from unisawp/smartcontract/pair documentation.
So declared a contract object using web socket provider.

### Result :-
Worked for a single pair, first printing block number and then the pricing.

https://user-images.githubusercontent.com/75042859/170858786-16875cd8-3339-41ad-aa15-c851ac9f6f85.mp4

But started having issues when applied to all five pairs, resulting in mixed outputs, same outputs for all pairs, overall not correct outputs. So commented-out the working web socket provider part in the code as it was working only for a single pair in index.js.
