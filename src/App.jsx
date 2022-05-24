import React, { useState } from "react";
import MyGroup from "./components/MyGroup.jsx";
import walletConnectFcn from "./components/hedera/walletConnect.js";
import tokenCreateFcn from "./components/hedera/tokenCreate.js";
import tokenMintFcn from "./components/hedera/tokenMint.js";
import contractDeployFcn from "./components/hedera/contractDeploy.js";
import contractExecuteFcn from "./components/hedera/contractExecute.js";
import "./styles/App.css";

function App() {
	const [walletData, setWalletData] = useState();
	const [accountId, setAccountId] = useState();
	const [tokenId, setTokenId] = useState();
	const [tokenSupply, setTokenSupply] = useState();
	const [contractId, setContractId] = useState();

	const [connectTextSt, setConnectTextSt] = useState("🔌Connect here...");
	const [createTextSt, setCreateTextSt] = useState("");
	const [mintTextSt, setMintTextSt] = useState("");
	const [contractTextSt, setContractTextSt] = useState();
	const [trasnferTextSt, setTransferTextSt] = useState();

	const [connectLinkSt, setConnectLinkSt] = useState("");
	const [createLinkSt, setCreateLinkSt] = useState("");
	const [mintLinkSt, setMintLinkSt] = useState("");
	const [contractLinkSt, setContractLinkSt] = useState();
	const [trasnferLinkSt, setTransferLinkSt] = useState();

	async function connectWallet() {
		if (accountId !== undefined) {
			setConnectTextSt(`🔌Account ${accountId} already connected⚡✅`);
		} else {
			const wData = await walletConnectFcn();
			wData[0].pairingEvent.once((pairingData) => {
				pairingData.accountIds.forEach((id) => {
					setAccountId(id);
					console.log(`- Paired account id: ${id}`);
					setConnectTextSt(`🔌Account ${id} connected⚡✅`);
					setConnectLinkSt(`https://hashscan.io/#/testnet/account/${id}`);
				});
			});
			setWalletData(wData);
			setCreateTextSt();
		}
	}

	async function tokenCreate() {
		if (tokenId !== undefined) {
			setCreateTextSt(`You already have token ${tokenId}✅`);
		} else if (accountId === undefined) {
			setCreateTextSt(`🛑Connect a wallet first!🛑`);
		} else {
			const [tId, supply, txIdRaw] = await tokenCreateFcn(walletData, accountId);
			setTokenId(tId);
			setTokenSupply(supply);
			setCreateTextSt(`Successfully created token with ID: ${tId} ✅`);
			setMintTextSt();
			setContractTextSt();
			setTransferTextSt();
			const txId = prettify(txIdRaw);
			setCreateLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
		}
	}

	async function tokenMint() {
		if (tokenId === undefined) {
			setMintTextSt("🛑Create a token first!🛑");
		} else {
			const [supply, txIdRaw] = await tokenMintFcn(walletData, accountId, tokenId);
			setTokenSupply(supply);
			setMintTextSt(`Supply of token ${tokenId} is ${supply}!✅`);
			const txId = prettify(txIdRaw);
			setMintLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
		}
	}

	async function contractDeploy() {
		if (tokenId === undefined) {
			setContractTextSt("🛑Create a token first!🛑");
		} else if (contractId !== undefined) {
			setContractTextSt(`You already have contract ${contractId}✅`);
		} else {
			const [cId, txIdRaw] = await contractDeployFcn(walletData, accountId, tokenId);
			setContractId(cId);
			setContractTextSt(`Successfully deployed smart contract with ID: ${cId}✅`);
			setTransferTextSt();
			const txId = prettify(txIdRaw);
			setContractLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
		}
	}

	async function contractExecute() {
		if (tokenId === undefined || contractId === undefined) {
			setTransferTextSt("🛑Create a token AND deploy a contract first!🛑");
		} else {
			const txIdRaw = await contractExecuteFcn(walletData, accountId, tokenId, contractId);
			setTransferTextSt(`🎉🎉🎉Great job! You completed the demo🎉🎉🎉`);
			const txId = prettify(txIdRaw);
			setTransferLinkSt(`https://hashscan.io/#/testnet/transaction/${txId}`);
		}
	}

	function prettify(txIdRaw) {
		const a = txIdRaw.split("@");
		const b = a[1].split(".");
		return `${a[0]}-${b[0]}-${b[1]}`;
	}

	return (
		<div className="App">
			<h1 className="header ">Let's buidl a dapp on Hedera</h1>
			<MyGroup
				fcn={connectWallet}
				buttonLabel={"Connect Wallet"}
				text={connectTextSt}
				link={connectLinkSt}
			/>
			{/*  */}
			<MyGroup
				fcn={tokenCreate}
				buttonLabel={"Create New Token"}
				text={createTextSt}
				link={createLinkSt}
			/>
			{/*  */}
			<MyGroup
				fcn={tokenMint}
				buttonLabel={"Mint 100 New Tokens"}
				text={mintTextSt}
				link={mintLinkSt}
			/>
			{/*  */}
			<MyGroup
				fcn={contractDeploy}
				buttonLabel={"Deploy Contract"}
				text={contractTextSt}
				link={contractLinkSt}
			/>
			{/*  */}
			<MyGroup
				fcn={contractExecute}
				buttonLabel={"Transfer Tokens"}
				text={trasnferTextSt}
				link={trasnferLinkSt}
			/>
			{/*  */}
			<img
				src={require("./assets/hederaLogo.png")}
				alt={"Hedera"}
				width="5%"
				link={"https://google.com"}
			/>
		</div>
	);
}
export default App;
