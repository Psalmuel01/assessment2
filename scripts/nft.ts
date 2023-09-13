import { ethers } from "hardhat";

async function main() {
  const psalmuel = await ethers.deployContract("Psalmuel", []);

  await psalmuel.waitForDeployment();

  console.log(`Psalmuel deployed to ${psalmuel.target}`);
  //0x26F2f9995D136c1717dfad0443442fD4755Bff0a

  // const psalmuel = await ethers.getContractAt("Psalmuel", "0xdE3018dAa16d9f943ba4127f6507899020c27c9B")

  const [signer] = await ethers.getSigners();
  const _to = signer;
  const _tokenId = 1;
  const _URI = "ipfs://QmPBv2N4d1oRvVFs8HzexSSdCLMDy5KrYPQEMwuThzS4FE";
  await psalmuel.mint(_to, _tokenId, _URI);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
