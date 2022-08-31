require('@nomicfoundation/hardhat-toolbox')
require('@nomiclabs/hardhat-etherscan')
// require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: '0.8.10',
    networks: {
        mumbai: {
            url: process.env.MUMBAI_URL,
            accounts: [process.env.PRI_KEE],
        },
    },
    etherscan: {
        apiKey: process.env.POLYGON_API_KEY,
    },
}
