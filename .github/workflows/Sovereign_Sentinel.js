/**
 * @title ANBSN Sovereign Multi-Provider Sentinel
 * @author 0.0.7 World Leader
 * @notice Upgrades the "Default Provider" logic to a Sovereign Fallback system.
 * @dev Based on Ethers.js Default/Fallback Provider documentation.
 */

const { ethers } = require("ethers");

/**
 * @notice Creates a high-availability connection.
 * Even if the world's "Default" fails, the Sovereign Naira stays online.
 */
async function initializeSovereignSentinel() {
    console.log("------------------------------------------");
    console.log("0.0.7 PROTOCOL: SENTINEL ACTIVATED");
    console.log("MODE: HIGH-AVAILABILITY FALLBACK");
    console.log("------------------------------------------");

    const primaryRPC = process.env.SOVEREIGN_RPC;
    const backupRPC = "https://cloudflare-eth.com"; // A stable public backup

    try {
        // We use the logic from your picture but upgrade it to a FallbackProvider.
        // This ensures the 1 Trillion Naira is never "offline."
        const provider = new ethers.providers.FallbackProvider([
            {
                provider: new ethers.providers.JsonRpcProvider(primaryRPC),
                priority: 1,
                stallTimeout: 2000 // 2 seconds to respond or we switch
            },
            {
                provider: new ethers.providers.JsonRpcProvider(backupRPC),
                priority: 2
            }
        ]);

        const blockNumber = await provider.getBlockNumber();
        console.log(`SENTINEL STATUS: Watching Block #${blockNumber}`);
        console.log("STATUS: MULTI-LAYER FREQUENCY SECURED");
        console.log("------------------------------------------");

        return provider;
    } catch (error) {
        console.error("SENTINEL ERROR: Critical connection failure.");
        return null;
    }
}

if (typeof module !== "undefined") {
    module.exports = { initializeSovereignSentinel };
                }
