import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
	const [display, setDisplay] = useState(true);

	return (
		<>
			<h2>MouseContainer.js</h2>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />}
		</>
	);
};

export default MouseContainer;
