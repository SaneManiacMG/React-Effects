import React, { useState, useEffect } from "react";

const HookCounterOne = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("useEffect - Updating document title");
		document.title = `Clicked ${count} times`;
	}, [count]);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<h2>HookCounterOne.js</h2>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={increment}>Count {count}</button>
		</div>
	);
};

export default HookCounterOne;
