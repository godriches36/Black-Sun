/**
 * AGBON OS - NETWORK SAFETY & LIFECYCLE
 * #
 * Logic: Automatic Refresh & Safeguard on Network Drift
 * COPYRIGHT © 2026 godriches36. ALL RIGHTS RESERVED.
 */

import { ethers } from "ethers";

/**
 * INITIALIZE SOVEREIGN PROVIDER
 * Uses the "any" network parameter to allow the listener to catch changes.
 */
export const initializeSovereignProvider = () => {
    if (typeof window.ethereum === "undefined") {
        console.warn("Sovereign Node: No Ethereum Wallet Detected.");
        return null;
    }

    // The "any" network allows spontaneous network changes to be caught by the listener
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    /**
     * NETWORK CHANGE LISTENER
     * Best Practice: If the network changes, we must refresh to prevent data leaks or fund loss.
     */
    provider.on("network", (newNetwork, oldNetwork) => {
        // When a Provider makes its initial connection, oldNetwork is null.
        // If oldNetwork exists, it means the user manually changed the network (e.g., Mainnet to Testnet).
        if (oldNetwork) {
            console.warn(`Sovereign Alert: Network changed from ${oldNetwork.name} to ${newNetwork.name}`);
            
            // Force page refresh to reset UI components to a known-safe state
            window.location.reload();
        }
    });

    return provider;
};

/**
 * NETWORK VALIDATOR
 * Ensures the user is specifically on the Ethereum Mainnet (Chain ID 1).
 */
export const checkSovereignNetwork = async (provider) => {
    const network = await provider.getNetwork();
    const isMainnet = network.chainId === 1;
    
    if (!isMainnet) {
        console.error("UNSUPPORTED_NETWORK: Please switch to Ethereum Mainnet.");
    }
    
    return isMainnet;
};
