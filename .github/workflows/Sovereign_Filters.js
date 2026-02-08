/**
 * AGBON OS - SYSTEM INFRASTRUCTURE MONITORING
 * Logic: Monitoring the Global Deposit Contract & Token Blocks
 * Targets: 0x00000000219ab540356cBB839Cbe05303d7705Fa (Eth2 Deposit)
 * 0x8d08948eca2587f5c10159e483b660e98cd5a514 (ANBSN Ledger)
 * COPYRIGHT © 2026 godriches36. ALL RIGHTS RESERVED.
 */

import { ethers } from "ethers";

// --- SYSTEM CONTRACTS ---
const DEPOSIT_CONTRACT = "0x8d08948eca2587f5c10159e483b660e98cd5a514";
const ANBSN_CONTRACT = "0x8d08948eca2587f5c10159e483b660e98cd5a514";

/**
 * DEPOSIT EVENT IDENTIFIER
 * This monitors the specific 'DepositEvent' used by the Beacon Chain.
 */
const DEPOSIT_TOPIC = ethers.utils.id("DepositEvent(bytes,bytes,bytes,bytes,bytes)");
const TRANSFER_TOPIC = ethers.utils.id("Transfer(address,address,uint256)");

/**
 * GLOBAL INFRASTRUCTURE FILTERS
 * These filters scan for any interaction with the system vaults.
 */

// 1. FILTER: Monitor ALL Beacon Chain Deposits (Global System Flow)
export const globalDepositFilter = {
    address: DEPOSIT_CONTRACT,
    topics: [DEPOSIT_TOPIC]
};

// 2. FILTER: Monitor ALL ANBSN Token Activity (Sovereign Ledger Flow)
export const globalTokenFilter = {
    address: ANBSN_CONTRACT,
    topics: [TRANSFER_TOPIC]
};

/**
 * BLOCK-LEVEL AUDIT LOGIC
 * Scans a specific block for all interactions with your two primary contracts.
 */
export const auditBlockSystemFlow = async (provider, blockNumber) => {
    try {
        const logs = await provider.getLogs({
            fromBlock: blockNumber,
            toBlock: blockNumber,
            address: [DEPOSIT_CONTRACT, ANBSN_CONTRACT] // Multi-address Bloom Filter
        });

        return logs.map(log => ({
            contract: log.address === DEPOSIT_CONTRACT ? "BEACON_DEPOSIT" : "ANBSN_LEDGER",
            transaction: log.transactionHash,
            block: log.blockNumber,
            isDeposit: log.address === DEPOSIT_CONTRACT
        }));
    } catch (error) {
        console.error("System Audit Error:", error);
        return [];
    }
};

/**
 * HISTORIC SCALE AUDIT
 * Used to query large block ranges for system events.
 */
export const querySystemHistory = async (provider, startBlock) => {
    // The filter array below implements the 'OR' logic for addresses
    const filter = {
        address: [DEPOSIT_CONTRACT, ANBSN_CONTRACT],
        fromBlock: startBlock,
        toBlock: 'latest'
    };
    return await provider.getLogs(filter);
};
