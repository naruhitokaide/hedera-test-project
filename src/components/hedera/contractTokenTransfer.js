import React from "react";
import operator from "../../config.js";
import {
	Client,
	AccountId,
	PrivateKey,
	TokenCreateTransaction,
	TokenMintTransaction,
	FileCreateTransaction,
	ContractCreateTransaction,
	ContractFunctionParameters,
	ContractExecuteTransaction,
	TokenInfoQuery,
	AccountBalanceQuery,
	Hbar,
	ContractInfoQuery,
} from "@hashgraph/sdk";

async function contractTokenTransferFcn(tokenId, contractId) {
	const operatorId = AccountId.fromString(operator.id);
	const operatorKey = PrivateKey.fromString(operator.pvkey);
	const client = Client.forTestnet().setOperator(operatorId, operatorKey);

	// // STEP 4 ===================================
	console.log(`STEP 4 ===================================`);
	//Execute a contract function (transfer)
	const contractExecTx2 = new ContractExecuteTransaction()
		.setContractId(contractId)
		.setGas(3000000)
		.setFunction("tokenAssoTrans", new ContractFunctionParameters().addInt64(50))
		.freezeWith(client);
	const contractExecSign2 = await contractExecTx2.sign(operatorKey);
	const contractExecSubmit2 = await contractExecSign2.execute(client);
	const contractExecRx2 = await contractExecSubmit2.getReceipt(client);

	console.log(`- Token transfer from Operator to contract: ${contractExecRx2.status.toString()}`);

	const bCheck = await new AccountBalanceQuery().setAccountId(operatorId).execute(client);
	console.log(`- Operator balance: ${bCheck.tokens._map.get(tokenId.toString())} units of token ${tokenId}`);

	const cCheck = await new ContractInfoQuery().setContractId(contractId).execute(client);
	console.log(
		`- Contract balance: ${
			cCheck.tokenRelationships._map.get(tokenId.toString()).balance.low
		} units of token ${tokenId}`
	);
}

export default contractTokenTransferFcn;
