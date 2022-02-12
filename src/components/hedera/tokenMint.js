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

async function tokenMintFcn(tId) {
	const operatorId = AccountId.fromString(operator.id);
	const operatorKey = PrivateKey.fromString(operator.pvkey);
	const client = Client.forTestnet().setOperator(operatorId, operatorKey);

	console.log("- Minting new tokens!");
	const tokenMintTx = new TokenMintTransaction().setTokenId(tId).setAmount(100).freezeWith(client);
	const tokenMintSign = await tokenMintTx.sign(operatorKey);
	const tokenMintSubmit = await tokenMintSign.execute(client);
	const tokenMintRec = await tokenMintSubmit.getRecord(client);
	const supply = tokenMintRec.receipt.totalSupply;

	return supply;
}

export default tokenMintFcn;
