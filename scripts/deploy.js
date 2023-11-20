const { ethers } = require("hardhat");

async function main() {
  // Obtén la cuenta del desplegador
  const [deployer] = await ethers.getSigners();

  console.log("Desplegando contratos con la cuenta:", deployer.address);

  // Obtén la fábrica del contrato MyNFTRenato
  const MyNFTRenato = await ethers.getContractFactory("MyNFTRenato");

  // Despliega el contrato
  const myNFT = await MyNFTRenato.deploy(deployer.address);

  await myNFT.waitForDeployment();

  console.log("Contrato MyNFTRenato desplegado en la dirección:", myNFT.target);
}

// Ejecuta la función principal
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

/*

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const address = "0x058fa1d6076bd66efb5685cbcda2509c76d9b137cf959abbc40e6f119447073d";
  const MyNFTRenato = await hre.ethers.deployContract("MyNFTRenato", [address], {
    value: 0,
  });
  await MyNFTRenato.waitForDeployment();

  console.log(
    `Deployed to ${MyNFTRenato.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


*/

/*
const hre = require("hardhat");
async function main() {

  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MyNFT = await hre.ethers.getContractFactory("MyNFTRenato")

  console.log("1");
  

  // Start deployment, returning a promise that resolves to a contract object
  //const myNFT = await MyNFT.deploy()
  const myNFT = await MyNFT.deploy("0x058fa1d6076bd66efb5685cbcda2509c76d9b137cf959abbc40e6f119447073d")

  console.log("2");
  await myNFT.deployed()
  console.log("Contract deployed to address:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

  */

  /*
const { network } = require("hardhat");

module.exports = async (hre) => {
    const { deploy } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();
    const chainId = network.config.chainId;
    
    const MyNFTRenato = await deploy("MyNFTRenato", {
        from: deployer,
        log: true,
        args: ["0x058fa1d6076bd66efb5685cbcda2509c76d9b137cf959abbc40e6f119447073d"],
        waitConfirmations: chainId == 31337 ? 1 : 6,
    });
};

module.exports.tags = ["all", "MyNFTRenato"];

*/

/*
const { HardhatRuntimeEnvironment } = require("hardhat/types") ;
const { DeployFunction } = require("hardhat-deploy/types") ;

module.exports = async (hre) => {
  const { deploy } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();
  
  await deploy("MyNFTRenato", {
      from: deployer,
      log: true,
      args: ["0x058fa1d6076bd66efb5685cbcda2509c76d9b137cf959abbc40e6f119447073d"],
  });
};


module.exports.tags = ["MyNFTRenato"];
*/
/*
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();

  await deploy('Token', {
    from: deployer,
    args: [tokenOwner],
    log: true,
  });
};
export default func;
func.tags = ['Token'];

*/