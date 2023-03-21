const { ethers, network } = require("hardhat");


async function main() {
    let contractAddress = '';
    let params = [];
    await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments: params,
    })
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });