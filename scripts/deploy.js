const { ethers, network } = require("hardhat");
const { writeAddr } = require('./recoder.js');

async function main() {
    let [owner] = await ethers.getSigners();
    let contractName = 'Test';
    const contract = await ethers.getContractFactory(contractName);

    let params = [];
    const instance = await contract.deploy();
    await instance.deployed();
    console.log("Test contract deployed to:", instance.address);
    // await writeAddr(instance.address, contractName, network.name);

    if (!['hardhat', 'local'].includes(network.name)) {
        console.log(`Please verify: npx hardhat verify ${instance.address} --network ${network.name}`);
    }
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });