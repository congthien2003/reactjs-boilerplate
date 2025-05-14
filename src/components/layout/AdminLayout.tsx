import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

interface AdminLayoutProps {
	children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
	return (
		<>
			<div className="flex flex-col h-screen w-screen bg-gray-100">
				<Navbar />
				<div className="flex-1 flex bg-white">
					<Sidebar />
					<main className="p-6 bg-gray-100 w-screen">{children}</main>
				</div>
			</div>
		</>
	);
};

export default AdminLayout;
