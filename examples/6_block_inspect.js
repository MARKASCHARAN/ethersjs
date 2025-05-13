const {ethers} = require("ethers");


const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const main = async () =>{
    const block = await provider.getBlockNumber();
    console.log(block);

    const blockInfo = await provider.getBlock(block);
    console.log(blockInfo);
}

main()