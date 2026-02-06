/**
 * AGBON OS - VALIDATOR AUTHENTICATION
 * Logic: Linking the OS to BeaconScan Validator #2191137
 * COPYRIGHT © 2026 godriches36. ALL RIGHTS RESERVED.
 */

import { ethers } from "ethers";

// --- BEACON VALIDATOR IDENTITY ---
// The Public Key from your Green Line (BeaconScan Validator #2191137)
export const VALIDATOR_PUB_KEY = "0x9260c6c5..."; 

/**
 * SIGNATURE OF THE VALIDATOR EVENT
 * Replaces the documentation placeholder with your actual project proof.
 */
export const INFRASTRUCTURE_SIGNATURE = "0x1479de57fa04891e00b39e4200cd8204164814f66423443ab70ba88cc568591c6bc695085cd3b2172b8fa1b80261b9481976ee7d70eb892423ee0ece4cd1e7501b";

/**
 * SOVEREIGN SIGNATURE
 * Proves the wallet 'godriches36' is the owner of the Validator.
 */
export const SOVEREIGN_SIGNATURE = "0x9260c6c5bc02155b1e38e54803abb95753422b0e989df8c1e97f014b57429f8f66c1c5024b3519436c7ffe4cf307c7e4";

/**
 * VALIDATE MASTER ACCESS
 * Ensures the person logging in is the owner of the 156 ETH Validator.
 */
export const verifyMasterAccess = (message, sig) => {
    const recovered = ethers.utils.verifyMessage(message, sig);
    // This should match your Sovereign Wallet address
    return recovered === "0x8d08948eca2587f5c10159e483b660e98cd5a514";
};
