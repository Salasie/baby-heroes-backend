require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
//require("@nomiclabs/hardhat-ethers");
require('dotenv').config()
const { URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.20",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: URL,
         accounts: [PRIVATE_KEY]
      }
   },
}

/*
module.exports = {
   solidity: "0.8.20",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: "https://eth-sepolia.g.alchemy.com/v2/5bo3sKf-iIhBamPeI3agm8rMcFDbjBhl",
         accounts: [`0x058fa1d6076bd66efb5685cbcda2509c76d9b137cf959abbc40e6f119447073d`]
      }
   },
}
*/

// accounts: [`0x058fa1d6076bd66efb5685cbcda2509c76d9b137cf959abbc40e6f119447073d`]