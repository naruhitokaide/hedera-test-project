import axios from "axios";
import { TokenCreateTransaction, PublicKey } from "@hashgraph/sdk";

async function tokenCreateFcn(walletData, accountId) {
	console.log(`\n=======================================`);
	console.log(`- Creating HTS token...`);

	const hashconnect = walletData[0];
	const saveData = walletData[1];
	const provider = hashconnect.getProvider("testnet", saveData.topic, accountId);
	const signer = hashconnect.getSigner(provider);

	const url = `https://testnet.mirrornode.hedera.com/api/v1/accounts?account.id=${accountId}`;
	const mirrorQuery = await axios(url);
	const supplyKey = PublicKey.fromString(mirrorQuery.data.accounts[0].key.key);

	const tokenCreateTx = await new TokenCreateTransaction()
		.setTokenName("dAppDayToken")
		.setTokenSymbol("DDT")
		.setTreasuryAccountId(accountId)
		.setAutoRenewAccountId(accountId)
		.setAutoRenewPeriod(7776000)
		.setInitialSupply(400)
		.setDecimals(0)
		.setSupplyKey(supplyKey)
		.freezeWithSigner(signer);
	const tokenCreateSubmit = await tokenCreateTx.executeWithSigner(signer);
	const tokenCreateRx = await provider.getTransactionReceipt(tokenCreateSubmit.transactionId);
	const tId = tokenCreateRx.tokenId;
	const supply = tokenCreateTx._initialSupply.low;
	console.log(`- Created HTS token with ID: ${tId}`);

	return [tId, supply, tokenCreateSubmit.transactionId];
}

export default tokenCreateFcn;
