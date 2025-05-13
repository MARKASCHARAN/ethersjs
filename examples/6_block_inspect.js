const {ethers} = require("ethers");

const INFURA_ID = "6903fada217248bd8292fd3068e4c27a";
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const main = async () =>{
    const block = await provider.getBlockNumber();
    console.log(block);

    const blockInfo = await provider.getBlock(block);
    console.log(blockInfo);
}

main()