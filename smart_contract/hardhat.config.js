//https://eth-ropsten.alchemyapi.io/v2/NMMd5GA9pw0Aux3DXgzYhOVjfwCpiJKs
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/NMMd5GA9pw0Aux3DXgzYhOVjfwCpiJKs",
      accounts: [
        "af5d86f306c0a394c362100294985fc9684fd6405f3cf25c17092109ccaf4cd3",
      ],
    },
  },
};
