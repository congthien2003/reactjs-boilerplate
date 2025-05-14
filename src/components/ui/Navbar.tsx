import React from "react";

const Navbar = () => {
	return (
		<header className="h-16 w-full bg-red-600 shadow-md flex items-center justify-between px-6">
			<div className="font-bold text-lg text-white">Home</div>
			<div className="flex items-center gap-4">
				<span className="text-white font-medium">Admin</span>
			</div>
		</header>
	);
};

export default Navbar;
