const Big = require("big.js"); // big.js to deal with large numbers
const blk = require("./blockchain"); //blockchain module

//Uniswap pair api for interaction with uniswap pair contract
const UniswapV2Pair = require("./abi/IUniswapV2Pair.json");

// define address of Pair contract
const PAIR_ADDR1 = "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc";
const PAIR_NAME1 = "ETH/USDC";

const PAIR_ADDR2 = "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11";
const PAIR_NAME2 = "ETH/DAI";

const PAIR_ADDR3 = "0x21b8065d10f73ee2e260e5b47d3344d3ced7596e";
const PAIR_NAME3 = "ETH/WISE";

const PAIR_ADDR4 = "0xbb2b8038a1640196fbe3e38816f3e67cba72d940";
const PAIR_NAME4 = "ETH/WBTC";

const PAIR_ADDR5 = "0xd3d2e2692501a5c9ca623199d38826e513033a17";
const PAIR_NAME5 = "ETH/UNI";

const INTERVAL = 2000; //in ms :: so after every 2 second we will get the value of tokens

// create web3 contract object:: passing the abi of the contract and the address of contract
const PairContractHTTP1 = new blk.web3http.eth.Contract(
    UniswapV2Pair.abi,
    PAIR_ADDR1
);

const PairContractHTTP2 = new blk.web3http.eth.Contract(
    UniswapV2Pair.abi,
    PAIR_ADDR2
);

const PairContractHTTP3 = new blk.web3http.eth.Contract(
    UniswapV2Pair.abi,
    PAIR_ADDR3
);

const PairContractHTTP4 = new blk.web3http.eth.Contract(
    UniswapV2Pair.abi,
    PAIR_ADDR4
);

const PairContractHTTP5 = new blk.web3http.eth.Contract(
    UniswapV2Pair.abi,
    PAIR_ADDR5
);

//object to store the state of blockchain,
//storing blocknumber and amount of token0 and token1 inside reserve state
// const state = {
//     blockNumber: undefined,
//     token0: undefined,
//     token1: undefined,
// };

// //function that'll be updated after every event
// const updateState2 = (data) => {
//     // update state
//     state.token0 = Big(data.returnValues.reserve0);
//     state.token1 = Big(data.returnValues.reserve1);
//     state.blockNumber = data.blockNumber;

//     // calculate price and print
//     console.log(
//         `${state.blockNumber} Price ${PAIR_NAME2} : ${state.token0
//             .div(state.token1)
//             .toString()}`
//     );
// };

// function to get reserves
//to get the amounts of tokens available in the pair conntract
//by calling the getReserve method
//and converting it to Big number format
const getReserves = async (ContractObj) => {
    // call getReserves function of Pair contract
    const _reserves = await ContractObj.methods.getReserves().call();

    // return data in Big Number
    return [Big(_reserves.reserve0), Big(_reserves.reserve1)];
};

// sleep function to pause program
//it will return a promise after a certain amount of time
const sleep = (timeInMs) =>
    new Promise((resolve) => setTimeout(resolve, timeInMs));

const mainHTTP1 = async () => {
    // check price continuously
    while (true) {
        // get reserves
        const [amtToken0, amtToken1] = await getReserves(PairContractHTTP1);

        // calculate price and print
        console.log(
            `Price ${PAIR_NAME1} : ${amtToken0.div(amtToken1).toString()}`
        );

        // wait for some time
        await sleep(INTERVAL);
    }
};

const mainHTTP2 = async () => {
    // check price continuously
    while (true) {
        // get reserves
        const [amtToken0, amtToken1] = await getReserves(PairContractHTTP2);

        // calculate price and print
        console.log(
            `Price ${PAIR_NAME2} : ${amtToken0.div(amtToken1).toString()}`
        );

        // wait for some time
        await sleep(INTERVAL);
    }
};

const mainHTTP3 = async () => {
    // check price continuously
    while (true) {
        // get reserves
        const [amtToken0, amtToken1] = await getReserves(PairContractHTTP3);

        // calculate price and print
        console.log(
            `Price ${PAIR_NAME3} : ${amtToken0.div(amtToken1).toString()}`
        );

        // wait for some time
        await sleep(INTERVAL);
    }
};

const mainHTTP4 = async () => {
    // check price continuously
    while (true) {
        // get reserves
        const [amtToken0, amtToken1] = await getReserves(PairContractHTTP4);

        // calculate price and print
        console.log(
            `Price ${PAIR_NAME4} : ${amtToken0.div(amtToken1).toString()}`
        );

        // wait for some time
        await sleep(INTERVAL);
    }
};

const mainHTTP5 = async () => {
    // check price continuously
    while (true) {
        // get reserves
        const [amtToken0, amtToken1] = await getReserves(PairContractHTTP5);

        // calculate price and print
        console.log(
            `Price ${PAIR_NAME5} : ${amtToken0.div(amtToken1).toString()}`
        );

        // wait for some time
        await sleep(INTERVAL);
    }
};

// const mainWSS2 = async () => {
//     // fetch current state of reserves
//     [state.token0, state.token1] = await getReserves(PairContractHTTP2);

//     // get current block number
//     state.blockNumber = await blk.web3http.eth.getBlockNumber();

//     // subscribe to Sync event of Pair
//     PairContractWSS2.events.Sync({}).on("data", (data) => updateState2(data));

//     // calculate price and print
//     console.log(
//         `${state.blockNumber} Price ${PAIR_NAME2} : ${state.token0
//             .div(state.token1)
//             .toString()}`
//     );
// };

// mainWSS2();


mainHTTP1();
mainHTTP2();
mainHTTP3();
mainHTTP4();
mainHTTP5();
