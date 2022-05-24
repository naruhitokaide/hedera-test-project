import { HashConnect } from "hashconnect";

async function walletConnectFcn() {
	console.log(`\n=======================================`);
	console.log("- Connecting wallet...");

	let saveData = {
		topic: "",
		pairingString: "",
		privateKey: "",
		pairedWalletData: null,
		pairedAccounts: [],
	};
	let appMetadata = {
		name: "Hedera dApp Days",
		description: "Let's buidl a dapp on Hedera",
		icon: "https://raw.githubusercontent.com/ed-marquez/hedera-dapp-days/testing/src/assets/hederaLogo.png",
	};
	let hashconnect = new HashConnect();

	// First init and store the pairing private key for later (this is NOT your account private key)
	const initData = await hashconnect.init(appMetadata);
	saveData.privateKey = initData.privKey;
	console.log(`- Private key for pairing: ${saveData.privateKey}`);

	// Then connect, storing the new topic for later
	const state = await hashconnect.connect();
	saveData.topic = state.topic;
	console.log(`- Pairing topic is: ${saveData.topic}`);

	// Generate a pairing string, which you can display and generate a QR code from
	saveData.pairingString = hashconnect.generatePairingString(state, "testnet", false);

	// Find any supported local wallets
	hashconnect.findLocalWallets();
	hashconnect.connectToLocalWallet(saveData.pairingString);

	return [hashconnect, saveData];
}

export default walletConnectFcn;
