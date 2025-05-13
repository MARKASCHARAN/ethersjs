const { ethers } = require("ethers");
const INFURA_ID = "";

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`);

const acnt1 = "0x3CCd00Da039d68d6F169e11A7739ea4d6Be96159";
const acnt2 = "0x23646131b3f5aB80DBFfbdB478bBDc17fB9B9FC7";

const privateKey1 = "";

const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
    "function transfer(address to, uint amount) returns (bool)",
    "function balanceOf(address) view returns (uint256)"
];

const address = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

const contract = new ethers.Contract(address, ERC20_ABI, provider);


const main = async () => {

const balance = await contract.balanceOf(acnt1);
console.log(`Balance of ${acnt1}: ${balance}`);
const balance2 = await contract.balanceOf(acnt2);
console.log(`Balance of ${acnt2}: ${balance2}`);

 const connectWallet = contract.connect(wallet)
 const txn =  await connectWallet.transfer(acnt2, balance);
 await txn.wait();
 console.log(txn);

 const balanceAfter1 = await contract.balanceOf(acnt1);
 console.log(`Balance of ${acnt1} after transfer: ${balanceAfter1}`);
 const balanceAfter2 = await contract.balanceOf(acnt2);
 console.log(`Balance of ${acnt2}: ${balanceAfter2}`);
}

main()

