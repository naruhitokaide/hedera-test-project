import React, { useState, useEffect, useRef } from "react";
import MyGroup from "./components/MyGroup.jsx";
import tokenCreateFcn from "./components/hedera/tokenCreate.js";
import tokenMintFcn from "./components/hedera/tokenMint.js";
import contractDeployFcn from "./components/hedera/contractDeploy.js";
import contractTokenTransferFcn from "./components/hedera/contractTokenTransfer.js";
import "./styles/App.css";

function App() {
	const [tokenId, setTokenId] = useState();
	const [createTextSt, setCreateTextSt] = useState("👆 Waiting to create token...");
	const [tokenSupply, setTokenSupply] = useState();
	const [mintTextSt, setMintTextSt] = useState();
	const [contractId, setContractId] = useState();
	const [contractTextSt, setContractTextSt] = useState();

	async function tokenCreate() {
		const [tId, supply] = await tokenCreateFcn();
		setTokenId(tId);
		setTokenSupply(supply);
		console.log(`token create confirmation: ${tId}`);
	}

	async function tokenMint() {
		const supply = await tokenMintFcn(tokenId);
		setTokenSupply(supply);
		console.log(`token mint confirmation: ${supply}`);
	}

	async function contractDeploy() {
		const cId = await contractDeployFcn(tokenId);
		setContractId(cId);
		console.log(`contract confirmation: ${cId}`);
	}

	async function contractTokenTransfer() {
		await contractTokenTransferFcn(tokenId, contractId);
		setContractTextSt(`🎉🎉🎉Great job! You completed the demo🎉🎉🎉`);
	}

	// function tokenMintText(id, supply) {
	// 	let tmText;
	// 	let option1 = `Supply of token ${id} is ${supply}!`;
	// 	let option2 = `Create a token first!`;

	// 	id !== undefined ? (tmText = option1) : (tmText = option2);
	// 	return tmText;
	// }

	// function contractDeployText(id) {
	// 	let cdText;
	// 	let option1 = `Successfully deployed smart contract with ID: ${id}`;
	// 	let option2 = `Create a token first!`;
	// 	let option3 = "";

	// 	(contractTextState !== tokenId) !== undefined && id !== undefined ? (cdText = option1) : (cdText = option2);
	// 	return cdText;
	// }

	return (
		<div className="App">
			<h1 className="header ">Let's build a cool dApp on Hedera!</h1>
			<MyGroup fcn={tokenCreate} buttonLabel={"Create New Token"} text={createTextSt} />
			{/*  */}
			<MyGroup fcn={tokenMint} buttonLabel={"Mint New Tokens"} text={mintTextSt} />
			{/*  */}
			<MyGroup fcn={contractDeploy} buttonLabel={"Deploy Contract"} text={""} />
			{/*  */}
			<MyGroup fcn={contractTokenTransfer} buttonLabel={"Transfer Tokens to Contract"} text={contractTextSt} />
			{/*  */}
			<img src={require("./assets/hederaLogo.png")} alt="Hedera" />
		</div>
	);
}
export default App;
