module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, read } = deployments;
  const { deployer } = await getNamedAccounts();
  const options = { from: deployer, log: true };

  const multicall = await deploy('Multicall', options);

  const weth = await deploy('WETH9', options);

  const factory = await deploy('UniswapV2Factory', {
    args: [
      deployer
    ],
    ...options
  });

  const router = await deploy('UniswapV2Router02', {
    args: [
      factory.address,
      weth.address
    ],
    ...options
  });

  const hash = await read('UniswapV2Factory', options, 'INIT_CODE_HASH');
  console.log('INIT_CODE_HASH =', hash);
};

module.exports.tags = ['all', 'uniswap'];
