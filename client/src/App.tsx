import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import "./App.css";

import Navbar from "./Components/Navbar";

const App = () => {
	return (
		<main>
			<Router>
				<AuthProvider>
					<Navbar />
					<Routes>
						<Route path="/" element=<div></div> />
					</Routes>
				</AuthProvider>
			</Router>
		</main>
	);
};

export default App;
