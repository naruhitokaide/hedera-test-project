import React from "react";

function MyButton(props) {
	return (
		<div>
			<button onClick={props.fcn} className="cta-button">
				{props.buttonLabel}
			</button>
		</div>
	);
}
export default MyButton;
