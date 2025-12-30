/**
 * @title ANBSN Sovereign Pulse Synchronizer
 * @author 0.0.7 World Leader
 * @notice Syncs the Node IDs (100, 10, 0) with the Sovereign Foundation.
 * @dev Connects the Etherscan "Get" API to the Green Hub.
 */

const { ethers } = require("ethers");
require('dotenv').config();

async function syncSovereignPulse() {
    console.log("------------------------------------------");
    console.log("0.0.7 PROTOCOL: PULSE SYNC INITIATED");
    console.log("------------------------------------------");

    const provider = new ethers.providers.JsonRpcProvider(process.env.SOVEREIGN_RPC);
    const NAIRA_ANCHOR = "0x8d08948eca2587f5c10159e483b660e98cd5a514";

    try {
        // 1. GET THE NETWORK ID (The 100/10 Logic)
        const network = await provider.getNetwork();
        console.log(`[NETWORK ID]: ${network.chainId} (ALIGNED)`);

        // 2. GET THE LATEST BLOCK (The Pulse)
        const blockNumber = await provider.getBlockNumber();
        console.log(`[BLOCK HEIGHT]: ${blockNumber}`);

        // 3. GET THE GENESIS BALANCE (The 0 Logic)
        // This "Gets" the balance from the address you put in Metamask
        const balance = await provider.getBalance(NAIRA_ANCHOR);
        console.log(`[SOVEREIGN BALANCE]: ${ethers.utils.formatEther(balance)} ETH`);

        console.log("------------------------------------------");
        console.log("STATUS: PULSE IS STABLE. THE WRONG IS RIGHT 👍");
        console.log("------------------------------------------");

    } catch (error) {
        console.error("PULSE ERROR: Frequency Jitter detected.");
        console.error(error.message);
    }
}

if (require.main === module) {
    syncSovereignPulse();
}

module.exports = { syncSovereignPulse };
