import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const ETHEREUM_NETWORK = "sepolia";
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const SIGNER_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;

export const sendToken = async (recipient: string, amount: string) => {
	console.log(INFURA_API_KEY, SIGNER_PRIVATE_KEY);
	const network = ETHEREUM_NETWORK;
	const provider = new ethers.InfuraProvider(
		network,
		process.env.INFURA_API_KEY
	);
	if (SIGNER_PRIVATE_KEY) {
		const balance = await provider.getBalance(
			process.env.DAO_WALLET_ADDRESS as string
		);
		console.log(`DAO Wallet balance: ${ethers.formatEther(balance)}`);

		const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, provider);
		const tx = await signer.sendTransaction({
			to: recipient,
			value: ethers.parseEther(amount),
		});
		console.log("Mining transaction...");
		console.log(`https://${network}.etherscan.io/tx/${tx.hash}`);
		// Waiting for the transaction to be mined
		const receipt = await tx.wait();
		// The transaction is now on chain!
		if (receipt) {
			console.log(`Mined in block ${receipt.blockNumber}`);
			return receipt;
		}
	}
};
