import React, { useState, useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
export function Home() {
	const [nasaImage, setNasaImage] = useState(rigoImage);
	const nasaLogo =
		"https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/nasa-logo-web-rgb.png?itok=uDhKSTb1";
	useEffect(() => {
		let fetchUrl = "https://api.nasa.gov/planetary/apod";
		async function fetchImage() {
			let resultado = await fetch(fetchUrl)
				.then(res => res.json())
				.then(data => data.url)
				.catch(err => console.log(err));
			console.log(resultado);
			setNasaImage(resultado);
		}
		fetchImage();
	});
	return (
		<div className="text-center mt-5">
			<h1>Hello from Space!</h1>
			<p>
				<img src={nasaLogo} />
			</p>
			<p>
				<img height="500px" src={nasaImage} />
			</p>
		</div>
	);
}
