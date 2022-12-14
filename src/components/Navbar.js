import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
			<ul className="capitalize hidden md:flex">
				<li className="p-4 cursor-pointer hover:text-[#00df9a] hover:scale-105 ease duration-200">
					home
				</li>
				<li className="p-4 cursor-pointer hover:text-[#00df9a] hover:scale-105 ease duration-200">
					company
				</li>
				<li className="p-4 cursor-pointer hover:text-[#00df9a] hover:scale-105 ease duration-200">
					resources
				</li>
				<li className="p-4 cursor-pointer hover:text-[#00df9a] hover:scale-105 ease duration-200">
					about
				</li>
				<li className="p-4 cursor-pointer hover:text-[#00df9a] hover:scale-105 ease duration-200">
					contact
				</li>
			</ul>

			<div onClick={handleNav} className="block md:hidden cursor-pointer">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<div
				className={
					nav
						? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
						: "fixed left-[-100%]"
				}
			>
				<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
				<ul className=" uppercase p-4">
					<li className="p-4 cursor-pointer hover:text-[#00df9a] transform hover:translate-x-1 ease duration-200 border-b border-gray-600">
						home
					</li>
					<li className="p-4 cursor-pointer hover:text-[#00df9a] transform hover:translate-x-1 ease duration-200 border-b border-gray-600">
						company
					</li>
					<li className="p-4 cursor-pointer hover:text-[#00df9a] transform hover:translate-x-1 ease duration-200 border-b border-gray-600">
						resources
					</li>
					<li className="p-4 cursor-pointer hover:text-[#00df9a] transform hover:translate-x-1 ease duration-200 border-b border-gray-600">
						about
					</li>
					<li className="p-4 cursor-pointer hover:text-[#00df9a] transform hover:translate-x-1 ease duration-200">
						contact
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
