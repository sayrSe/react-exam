import { useState, useRef } from "react";

function Hello() {

	const [name, setName] = useState('');
	const nameRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		setName(nameRef.current.value);
	};

	return (
		<>
			<div className="hello-container">
				<form onSubmit={submitHandler}>
					<label htmlFor="student">Enter your name: {name}</label>
					<br></br>
					<input type="text" name="name" ref={nameRef}></input>
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
}

export default Hello;