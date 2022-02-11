import React from "react";
//

function MyButton(props) {
	return (
		<div>
			<button onClick={props.fcn} className="cta-button connect-wallet-button">
				{props.text}
			</button>
		</div>
	);
}
export default MyButton;
