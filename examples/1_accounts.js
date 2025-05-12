const {ethers} = require('ethers')

const INFURA_ID = "" ;
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);
const address = '0xbEb5Fc579115071764c7423A4f12eDde41f106Ed';

const main = async () => {

const balance = await provider.getBalance(address)
console.log(` ETH balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH`)
}

main()