const { ethers } = require("ethers");
const INFURA_ID = "abc";

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`);

const acnt1 = "";
const acnt2 = "";

const privateKey1 = "";

const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
    "function transfer(address to, uint amount) returns (bool)",
    "function balanceOf(address) view returns (uint256)"
];

const address = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

const contract = new ethers.Contract(address, ERC20_ABI, provider);


const main = async () => {

}

main()

