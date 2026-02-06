/**
 * AGBON OS - STATE-CHANGING METHODS
 * Logic: Sending Transactions (Circle 2)
 * COPYRIGHT © 2026 godriches36. ALL RIGHTS RESERVED.
 */

import { ethers } from "ethers";

const contractAddress = "0x8d08948eca2587f5c10159e483b660e98cd5a514";
const abi = ["function transfer(address to, uint amount) returns (bool)"];

export const executeSovereignTransfer = async (signer, toAddress, amount) => {
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tokens = ethers.utils.parseUnits(amount.toString(), 18);
    const tx = await contract.transfer(toAddress, tokens);
    await tx.wait(); // Wait for mining
    return tx.hash;
};
