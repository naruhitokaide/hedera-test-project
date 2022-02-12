import React from "react";
import MyButton from "./MyButton.jsx";
import MyText from "./MyText.jsx";

function MyGroup(props) {
	return (
		<div>
			<MyButton fcn={props.fcn} buttonLabel={props.buttonLabel} />
			<MyText text={props.text} />
		</div>
	);
}

export default MyGroup;
