/**
 * AGBON OS - SOVEREIGN SECURITY & ENCRYPTION
 * Documentation: https://docs.ethers.org/v5/concepts/best-practices/
 * Logic: Scrypt Key Derivation with Progress Monitoring
 * COPYRIGHT © 2026 godriches36. ALL RIGHTS RESERVED.
 */

import { ethers } from "ethers";

/**
 * SECURE WALLET ENCRYPTION
 * Uses the high-difficulty Scrypt algorithm to protect the Sovereign Private Key.
 */
export const encryptSovereignWallet = async (wallet, password, onProgress) => {
    console.log("Commencing High-Security Encryption...");
    
    // Using default high-security scrypt settings (N: 131072)
    // This makes it extremely expensive for attackers to brute-force.
    const json = await wallet.encrypt(password, (progress) => {
        if (onProgress) {
            // progress is a number between 0 and 1
            const percent = Math.floor(progress * 100);
            onProgress(percent);
        }
    });

    return json;
};

/**
 * SECURE WALLET DECRYPTION
 * Decrypts the JSON wallet while providing feedback to the UI.
 */
export const decryptSovereignWallet = async (json, password, onProgress) => {
    console.log("Decrypting Sovereign Ledger Access...");
    
    try {
        const wallet = await ethers.Wallet.fromEncryptedJson(json, password, (progress) => {
            if (onProgress) {
                const percent = Math.floor(progress * 100);
                onProgress(percent);
            }
        });
        return wallet;
    } catch (error) {
        console.error("Decryption Failed: Invalid Credentials");
        throw error;
    }
};

/**
 * ANTI-TIMING ATTACK UTILITY
 * Constant-time comparison to mitigate side-channel timing attacks.
 */
export const secureCompare = (a, b) => {
    // Basic protection against simple timing analysis
    if (a.length !== b.length) return false;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
};

/**
 * EMERGENCY SECURITY OVERRIDE (For Development Only)
 * WARNING: documentation notes this reduces security significantly.
 * We include it only for low-value testing sessions.
 */
export const fastEncryptInternal = async (wallet, password) => {
    return await wallet.encrypt(password, {
        scrypt: { N: 64 } // Reduced difficulty (Not recommended for Production)
    });
};
