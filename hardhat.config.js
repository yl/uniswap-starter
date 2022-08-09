require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require('hardhat-deploy');

const settings = { optimizer: { enabled: true, runs: 1000000 } };

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    mainnet: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.6.6',
        settings
      },
      {
        version: '0.8.9',
        settings
      }
    ]
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
  },
  verify: {
    etherscan: {
      apiKey: process.env.BSCSCAN_KEY
    },
  }
};
