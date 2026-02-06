/**
 * AGBON OS - EVENT LISTENING
 * Logic: Real-Time Monitoring (Circle 3)
 * COPYRIGHT © 2026 godriches36. ALL RIGHTS RESERVED.
 */

import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");
const contractAddress = "0x8d08948eca2587f5c10159e483b660e98cd5a514";
const abi = ["event Transfer(address indexed from, address indexed to, uint amount)"];
const contract = new ethers.Contract(contractAddress, abi, provider);

export const listenToNetworkTransfers = (onEvent) => {
    contract.on("Transfer", (from, to, amount, event) => {
        onEvent({
            from,
            to,
            amount: ethers.utils.formatEther(amount),
            hash: event.transactionHash
        });
    });
};
