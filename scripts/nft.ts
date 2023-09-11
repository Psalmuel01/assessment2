import { ethers } from "hardhat";

async function main() {
  //   const lockedAmount = ethers.parseEther("0.001");

  const baseURI = "ipfs://Qma645mWG2VdqfoznG7NoEkZFyhnarty5hjbfy6VoQbnHv";

  const psalmuel = await ethers.deployContract("Psalmuel", [baseURI]);

  await psalmuel.waitForDeployment();

  console.log(`Psalmuel deployed to ${psalmuel.target}`);
  // 0x9128CCc32d8569dC6e8B8DF7d7D5216ae432A784

  // const psalmuel = await ethers.getContractAt("Psalmuel", "0xdE3018dAa16d9f943ba4127f6507899020c27c9B")

  const [signer] = await ethers.getSigners();
  await psalmuel.safeMint(signer, 1);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
