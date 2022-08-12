import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img src={Laptop} alt="/" />
				<div>
					<p>Data analytics dashboard</p>
					<h1>Manage Data Analytics Centrally</h1>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
