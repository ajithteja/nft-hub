// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

const JAN_1ST_2030 = 1893456000; // Timestamp for January 1st, 2030
const ONE_GWEI = 1_000_000_000n; // One gwei in wei

module.exports = buildModule('LockModule', (m) => {
  const unlockTime = m.getParameter('unlockTime', JAN_1ST_2030);
  const lockedAmount = m.getParameter('lockedAmount', ONE_GWEI);

  const lock = m.contract('NFTHub', [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});
