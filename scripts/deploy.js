const { ignition } = require('hardhat');
const uniswap = require('../ignition/modules/uniswap');
const token = require('../ignition/modules/token');

async function main() {
    const { multicall, weth, factory, router } = await ignition.deploy(uniswap);
    const hash = await factory.INIT_CODE_HASH();
    console.log('INIT_CODE_HASH=', hash);
}

main().catch(console.error);