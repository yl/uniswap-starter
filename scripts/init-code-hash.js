const { deployments, getNamedAccounts } = require('hardhat');

async function main() {
    const { read } = deployments;
    const { deployer } = await getNamedAccounts();
    const options = { from: deployer };

    const hash = await read('UniswapV2Factory', options, 'INIT_CODE_HASH');
    console.log(hash);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});