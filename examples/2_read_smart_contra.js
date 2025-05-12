const { ethers } = require('ethers')

const INFURA_ID = '';

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address = '0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419';

const ERC20_ABI = [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function totalSupply() view returns (uint256)",
        "function balanceOf(address) view returns (uint256)",
        " function isOwner() view returns (bool)",
]

const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
   const name = await contract.name()
   const symbol = await contract.symbol()
   const totalSupply = await contract.totalSupply()
   const balance = await contract.balanceOf(address)
   const isOwner = await contract.isOwner()

   console.log(`\nContract Address : ${address}`)
   console.log(`\nETH balance : ${ethers.utils.formatEther(balance)}`)
   console.log(`\nName : ${name}`)
   console.log(`\nSymbol : ${symbol}`)
    console.log(`\nTotal Supply : ${totalSupply}`)
    console.log(`\nIs Owner : ${isOwner}`)
}

main()


