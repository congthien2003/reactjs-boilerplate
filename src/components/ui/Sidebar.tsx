import { FaHome, FaUser } from "react-icons/fa";

const Sidebar = () => {
	return (
		<aside className="w-64 bg-white text-black h-full">
			<nav className="p-4 flex flex-col gap-4">
				<a
					href="#"
					className="flex items-center gap-2 hover:text-blue-400">
					<FaHome /> Dashboard
				</a>
				<a
					href="#"
					className="flex items-center gap-2 hover:text-blue-400">
					<FaUser /> Users
				</a>
				<a
					href="#"
					className="flex items-center gap-2 hover:text-blue-400">
					<FaUser /> Settings
				</a>
			</nav>
		</aside>
	);
};

export default Sidebar;
