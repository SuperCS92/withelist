require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const PRIVATE_KEY_TEST = process.env.PRIVATE_KEY_TEST;
const PRIVATE_KEY_DEPLOYMENT = process.env.PRIVATE_KEY_DEPLOYMENT;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const MUMBAI_RPC_URL2 = process.env.MUMBAI_RPC_URL2;
const MUMBAI_RPC_URL3 = process.env.MUMBAI_RPC_URL3;
const MUMBAI_RPC_URL_INFURA = process.env.MUMBAI_RPC_URL_INFURA;
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
        },
        localhost: {
        },
        mumbai: {
          url: MUMBAI_RPC_URL_INFURA,
          accounts: [PRIVATE_KEY_TEST],
          saveDeployments: true,
          gas: 2100000,
          gasPrice: 8000000000
      },
    //   polygon: {
    //     //url: 'https://polygon-mainnet.infura.io/v3/1b1cbd1f074746b9b2e7c49ece0d5f40',
    //     url: 'https://polygon-rpc.com/',
    //     accounts: [PRIVATE_KEY_DEPLOYMENT],
    //     saveDeployments: true,
    //     gas: 18100000,
    //     gasPrice: 144100000000
    // }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
      }
    ],
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    //apiKey: "NS29C9SIXKZ2E2HTP2GD9C8WPNT8RN231I" //kovan api key
    apiKey: "WJ4U4JXHW5CF6WQF212MDJB5XJX9N6TTQM"  //polygon-mumbai api key
  }
};
