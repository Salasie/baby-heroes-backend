// scripts/interact.js
const { ethers } = require("hardhat");

async function main() {
    console.log('Getting the non fun token contract...\n');

    const contractAddress = '0x3F826Df804B0444dCD37a820a2c0ea7c26f66bD4'; // put contract address here

    const nonFunToken = await ethers.getContractAt('MyNFTRenato', contractAddress);
    const signers = await ethers.getSigners();

    //console.log(signers)
    //console.log(nonFunToken)

    console.log(await nonFunToken.mintNFT2("0xf52c4171F7e0Ae53F23f2E01fD316C97206bE9e8"))
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });