const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("uniswap", (m) => {
  const deployer = m.getAccount(1);

  const multicall = m.contract("Multicall");
  const weth = m.contract("WETH9");
  const factory = m.contract("UniswapV2Factory", [deployer]);
  const router = m.contract("UniswapV2Router", [factory, weth]);

  return { multicall, weth, factory, router };
});
