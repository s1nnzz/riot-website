import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
	const { authenticated, loading } = useAuth();

	const isAuthenticated = () => {
		return !loading && authenticated;
	};

	return (
		<nav>
			<nav className="left">
				<Link to="/">Restaurant</Link>
			</nav>
			<nav className="right">
				{isAuthenticated() ? (
					<>
						<Link to="/profile">Profile</Link>
						<Link to="/logout">Logout</Link>
					</>
				) : (
					<>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</>
				)}
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</nav>
	);
}

export default Navbar;
