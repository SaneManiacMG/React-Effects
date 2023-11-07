import React, { useState, useEffect } from "react";

const HookMouse = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useEffect(() => {
		console.log("useEffect - HookMouse.js");
		window.addEventListener("mousemove", logMousePosition);
	}, []);

	const logMousePosition = (e) => {
		console.log("logMousePosition");
		setX(e.clientX);
		setY(e.clientY);
	};

	return (
		<>
			<h2>HookMouse.js</h2>
			<h3>Display mouse coordinates</h3>
			<p>
				Mouse X: {x}, Mouse Y: {y}
			</p>
		</>
	);
};

export default HookMouse;
