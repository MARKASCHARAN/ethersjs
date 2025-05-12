const { ethers } = require("ethers");

const INFURA_ID = "";

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`);

const account1 = "0x3CCd00Da039d68d6F169e11A7739ea4d6Be96159";

const account2 = "0x23646131b3f5aB80DBFfbdB478bBDc17fB9B9FC7";


const privateKey1 = "";

const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {

    const senderBalanceBefore = await provider.getBalance(account1);
    const recieverBalanceBefore = await provider.getBalance(account2);

    console.log(`Sender address: ${account1}`);
    console.log(`Sender balance before transaction: ${ethers.utils.formatEther(senderBalanceBefore)}`);
    console.log(`Receiver address: ${account2}`);
    console.log(`Receiver balance before transaction: ${ethers.utils.formatEther(recieverBalanceBefore)}`);

    const txn = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.001")
    })

    await txn.wait();
    console.log(txn);

    const senderBalanceAfter = await provider.getBalance(account1);
    const recieverBalanceAfter = await provider.getBalance(account2);
    console.log(`Sender address: ${account1}`);
    console.log(`Sender balance after transaction: ${ethers.utils.formatEther(senderBalanceAfter)}`);
    console.log(`Receiver address: ${account2}`);
    console.log(`Receiver balance after transaction: ${ethers.utils.formatEther(recieverBalanceAfter)}`);

}

main()