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

async function tokenCreateFcn() {
	const operatorId = AccountId.fromString(operator.id);
	const operatorKey = PrivateKey.fromString(operator.pvkey);
	const client = Client.forTestnet().setOperator(operatorId, operatorKey);

	console.log("- Creating token");

	const tokenCreateTx = new TokenCreateTransaction()
		.setTokenName("dAppDayToken")
		.setTokenSymbol("DDT")
		.setTreasuryAccountId(operatorId)
		.setInitialSupply(100)
		.setDecimals(0)
		.setSupplyKey(operatorKey)
		.freezeWith(client);
	const tokenCreateSign = await tokenCreateTx.sign(operatorKey);
	const tokenCreateSubmit = await tokenCreateSign.execute(client);
	const tokenCreateRec = await tokenCreateSubmit.getRecord(client);
	const tId = tokenCreateRec.receipt.tokenId;
	const supply = tokenCreateTx._initialSupply.low;

	return [tId, supply];
}

export default tokenCreateFcn;
