import { ContractFunctionParameters, ContractExecuteTransaction } from "@hashgraph/sdk";

async function contractExecuteFcn(walletData, accountId, tokenId, contractId) {
	console.log(`\n=======================================`);
	console.log(`- Executing the smart contract...`);

	const hashconnect = walletData[0];
	const saveData = walletData[1];
	const provider = hashconnect.getProvider("testnet", saveData.topic, accountId);
	const signer = hashconnect.getSigner(provider);

	//Execute a contract function (transfer)
	const contractExecTx = await new ContractExecuteTransaction()
		.setContractId(contractId)
		.setGas(3000000)
		.setFunction("tokenAssoTrans", new ContractFunctionParameters().addInt64(50))
		.freezeWithSigner(signer);
	const contractExecSign = await contractExecTx.signWithSigner(signer);
	const contractExecSubmit = await contractExecSign.executeWithSigner(signer);
	const contractExecRx = await provider.getTransactionReceipt(contractExecSubmit.transactionId);
	console.log(`- Token transfer from Operator to contract: ${contractExecRx.status.toString()}`);

	const bCheck = await signer.getAccountBalance();
	console.log(
		`- Operator balance: ${bCheck.tokens._map.get(tokenId.toString())} units of token ${tokenId}`
	);

	return contractExecSubmit.transactionId;
}

export default contractExecuteFcn;
