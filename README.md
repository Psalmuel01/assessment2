# My NFT Project

## Overview

My NFT Project is a demonstration of how to create and deploy an ERC-721 compliant NFT contract, mint NFTs, and make them visible on OpenSea.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Minting NFTs](#minting-nfts)
  - [Interacting with the Contract](#interacting-with-the-contract)
- [Configuration](#configuration)
- [Deployment](#deployment)
  - [Deploying to Testnet](#deploying-to-testnet)
  - [Deploying to Mainnet](#deploying-to-mainnet)
- [Metadata](#metadata)
- [OpenSea Integration](#opensea-integration)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed
- An Ethereum wallet with test Ether (for deploying to testnets)

### Installation

1. Clone this repository to your local machine:

   git clone https://github.com/your-username/my-nft-project.git
   cd my-nft-project

2. Install project dependencies:

   npm install

## Usage

### Minting NFTs

To mint your own NFTs, follow these steps:

1. Deploy the contract to a testnet or the Ethereum mainnet (see Deployment).

2. Interact with the contract using a tool like Hardhat or a Dapp frontend.

3. Call the mint function, specifying the recipient's address and a unique token ID.

### Interacting with the Contract

You can interact with the deployed contract programmatically using the provided Ethereum contract address. Here's how you can do it:

1. Connect to the Ethereum network using a library like ethers.js.

2. Use the contract's ABI and address to create an instance of the contract.

3. Call functions such as mint, balanceOf, or tokenURI to interact with the NFTs.

## Configuration

The project can be configured by modifying the contract's deploy code, specifically the _URI parameter, to customize metadata URIs.

## Deployment

### Deploying to Testnet

To deploy the contract to a testnet (e.g. Sepolia), follow these steps:

Configure your Hardhat network settings in hardhat.config.ts.

Run the deployment script:

npx hardhat run scripts/deploy.ts --network sepolia

### Deploying to Mainnet

To deploy the contract to the Ethereum mainnet, update the network settings in hardhat.config.ts and run the deployment script with the desired network.

## Metadata

The NFT metadata is hosted on Pinata, and the URI is set to the Pinata Gateway URL. Each NFT's metadata is represented by a CID on IPFS.

## OpenSea Integration

This project supports integration with OpenSea. Once your NFT contract is deployed and verified on a public network, you can create an OpenSea collection and add your contract's address. Users can then explore and trade your NFTs on OpenSea.