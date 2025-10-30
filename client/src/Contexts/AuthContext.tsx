import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

interface AuthContextType {
	authenticated: boolean;
	loading: boolean;
	checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const checkAuth = async () => {
		setLoading(true);

		try {
			const response = await fetch("/api/authcheck", {
				method: "POST",
				credentials: "include",
			});

			if (response.ok) {
				const data = await response.json();
				console.log(data.authenticated);
				setAuthenticated(data.authenticated);
			} else {
				setAuthenticated(false);
			}
		} catch (error) {
			console.error("Auth check failed:", error);
			setAuthenticated(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		checkAuth();
	}, []);

	const value: AuthContextType = {
		authenticated,
		loading,
		checkAuth,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};
