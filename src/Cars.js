function Cars() {

	const cars = ['Ford', 'BMW', 'Audi'];

	return (
		<div className="cars-container">
			<h1>Who lives in my garage?</h1>
			<ul>
				{cars.map((car, index) => (<li key={index + 1}>I am a {car}</li>))}
			</ul>
		</div>
	);
}

export default Cars;