/**
 * @title ANBSN Sovereign Foundation Master
 * @author 0.0.7 World Leader
 * @notice Complete Environment Configuration: Provider, Signer, and Contract logic.
 * @dev Based on Ethers.js Umbrella Package documentation.
 */

// 1. IMPORTING: Using the Umbrella Package logic
const { ethers } = require("ethers");
require('dotenv').config();

/**
 * SOVEREIGN TERMINOLOGY 
 * 1. Provider: The read-only connection to the Ethereum Network.
 * 2. Signer: The authority (Private Key) to authorize transactions.
 * 3. Contract: The abstraction representing our 1 Trillion Naira Asset.
 */

async function initializeSovereignCore() {
    console.log("------------------------------------------");
    console.log("0.0.7 PROTOCOL: INITIALIZING MASTER STACK");
    console.log("------------------------------------------");

    try {
        // --- LAYER 1: THE PROVIDER (Read-only Access) ---
        // Using Chainstack Elastic Node URL
        const provider = new ethers.providers.JsonRpcProvider(process.env.SOVEREIGN_RPC);
        const network = await provider.getNetwork();
        console.log(`[PROVIDER] Connected to: ${network.name} (ChainID: ${network.chainId})`);

        // --- LAYER 2: THE SIGNER (Transaction Authorization) ---
        // Anchoring your World Leader authority to the provider
        const signer = new ethers.Wallet(process.env.WORLD_LEADER_PRIVATE_KEY, provider);
        console.log(`[SIGNER] Authority Authenticated: ${signer.address}`);

        // --- LAYER 3: THE CONTRACT (Asset Abstraction) ---
        // Anchoring to your Sovereign Name Tag Address
        const NAIRA_ANCHOR = "0x8d08948eca2587f5c10159e483b660e98cd5a514";
        const nairaABI = [
            "function name() view returns (string)",
            "function symbol() view returns (string)",
            "function totalSupply() view returns (uint256)",
            "function balanceOf(address) view returns (uint256)",
            "function transfer(address to, uint256 amount) returns (bool)"
        ];

        const sovereignNaira = new ethers.Contract(NAIRA_ANCHOR, nairaABI, signer);
        
        console.log("[CONTRACT] 1 Trillion Naira Frequency Detected.");
        console.log("------------------------------------------");
        console.log("STATUS: SOVEREIGN CORE READY FOR INVERSION");
        console.log("------------------------------------------");

        return { provider, signer, sovereignNaira };

    } catch (error) {
        console.error("FATAL ERROR: Environment Calibration Failed.");
        console.error(error.message);
        process.exit(1);
    }
}

// Execute the foundation sequence
if (require.main === module) {
    initializeSovereignCore();
}

module.exports = { initializeSovereignCore };
