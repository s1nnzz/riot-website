import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import "./App.css";

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

const App = () => {
	return (
		<main>
			<Router>
				<AuthProvider>
					<Navbar />
					<Routes>
						<Route path="/" element={<HeroSection />} />
					</Routes>
				</AuthProvider>
			</Router>
		</main>
	);
};

export default App;
