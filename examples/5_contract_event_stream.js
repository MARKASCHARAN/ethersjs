const {ethers} = require("ethers");

const INFURA_ID = "";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address = "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419";

const ERC20_ABI = [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function totalSupply() view returns (uint256)",
        "function balanceOf(address) view returns (uint256)",
        " function isOwner() view returns (bool)",
        "event Transfer(address indexed from, address indexed to, uint amount)",
]



const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const block  = await provider.getBlockNumber();

    const transferEvents = await contract.queryFilter("Transfer", block - 10, block);
    console.log(transferEvents);
}

main()