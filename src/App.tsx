import { useState } from "react";
import "./App.css";
import AdminLayout from "./components/layout/AdminLayout";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<AdminLayout>
				{/* <Loading /> */}
				<button
					className="bg-red-400 rounded-md px-2 py-1 font-bold"
					onClick={() => setCount(count + 1)}>
					Click me {count}
				</button>
			</AdminLayout>
		</>
	);
}

export default App;
