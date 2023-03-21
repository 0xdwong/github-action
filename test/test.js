const { expect } = require('chai');
const { ethers, waffle } = require('hardhat');

let contractInstance;
let accounts = [];
let owner;

async function init() {
    accounts = await ethers.getSigners();
    owner = accounts[0];

    const Test = await ethers.getContractFactory('Test');
    contractInstance = await Test.deploy();
    await contractInstance.deployed();
}

describe('Test', () => {

    before(async() => {
        await init();
    });

    describe('foo', () => {
        it('should-be-empty-string', async() => {
            let foo = await contractInstance.foo();
            expect(foo).to.be.equal('');
        });
    })

    describe('setFoo', () => {
        it('should-be-bar', async() => {
            await contractInstance.connect(owner).setFoo();

            let foo = await contractInstance.foo();

            expect(foo).to.be.equal('bar');
        });
    })

});