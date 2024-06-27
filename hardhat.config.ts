
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// https://github.com/projectsophon/hardhat-circom
import "hardhat-circom";
// environment variables
require("dotenv").config();
// circuits
import circuits = require('./circuits.config.json')

// set env var to the root of the project
process.env.BASE_PATH = __dirname;

// tasks
import "./tasks/newcircuit.ts"

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url:'https://eth-sepolia.g.alchemy.com/v2/MJHkQbH5P_Hk-Jk7E9QJOZWq_-f753CN',
      accounts: [`87b01750c34c59c18bd3dd8d6969a2eaec40068c0963a3bb03b09609aafe319b`],
    },
  },
  etherscan: {
    apiKey: '2BZ71SZGZ9B8Z1FMWUJPG2CYBURA8DPSQH',
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: JSON.parse(JSON.stringify(circuits))
  },
};

export default config;
