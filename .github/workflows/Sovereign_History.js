/**
 * AGBON OS - LEDGER AUDIT
 * COPYRIGHT © 2026 godriches36.
 */

import { ethers } from "ethers";

// 1. THE ASSET (The ANBSN Token Contract)
const CONTRACT_ADDRESS = "0x8d08948eca2587f5c10159e483b660e98cd5a514";

// 2. THE IDENTITY (Replace this with YOUR wallet address to track YOUR history)
const SOVEREIGN_IDENTITY = "0x8d08948eca2587f5c10159e483b660e98cd5a514"; 

// 3. THE INFRASTRUCTURE (The Beacon/System address if you want to track global stats)
const SYSTEM_BEACON = "0x00000000219ab540356cBB839Cbe05303d7705Fa";

const ABI = ["event Transfer(address indexed from, address indexed to, uint256 amount)"];
const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

export const querySovereignLedger = async () => {
    try {
        // This looks for all transfers coming TO YOU
        const filterTo = contract.filters.Transfer(null, SOVEREIGN_IDENTITY);
        const inboundEvents = await contract.queryFilter(filterTo);

        return inboundEvents.map(event => ({
            from: event.args.from,
            amount: ethers.utils.formatEther(event.args.amount),
            hash: event.transactionHash
        }));
    } catch (error) {
        return [];
    }
};
