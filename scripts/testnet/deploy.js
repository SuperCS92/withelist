// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const [deployer, user1, user2, user3] = await ethers.getSigners();
    console.log('Deploying contracts with account ',deployer.address)

    //first we need to deplo
    const Whitelist = await ethers.getContractFactory("Whitelist");
    const whitelist = await Whitelist.deploy();
    await whitelist.deployed();
    this.whitelist = whitelist;
    console.log("Whitelist deployed at address", whitelist.address);
    
    const WHITELISTED = await whitelist.WHITELISTED();

    console.log("WHITELISTED: ", WHITELISTED);
    const adminRole = await whitelist.getRoleAdmin(WHITELISTED);
    console.log("Admin Role: ", adminRole);
}

main();