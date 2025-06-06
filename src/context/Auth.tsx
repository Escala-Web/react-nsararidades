import { createContext, useEffect, useState, useRef, ReactNode } from "react";
import { toast } from "react-toastify";

interface UserLogin {
	email: string;
	password: string;
	token: string;

	name?: string,
	rule?: string
}

interface AuthContextType {
	login: UserLogin | null;
	setLogin: (user: UserLogin | null) => void;
	logout: () => void;
	role: string;
	setRole: (role: string) => void;
	tokenValido: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [role, setRole] = useState<string>("");
	const [login, setLogin] = useState<UserLogin | null>(() => {
		const storedLogin = localStorage.getItem("auth");
		return storedLogin ? JSON.parse(storedLogin) : null;
	});
	const [tokenValido, setTokenValido] = useState<string>("");


	const isFirstTokenSet = useRef(false);

	function logout() {
		setLogin(null);
		localStorage.removeItem("auth");
		setTokenValido("");
		toast.success("Até breve");
	}

	useEffect(() => {
		if (login?.token && !isFirstTokenSet.current) {
			setTokenValido(login?.token);
			isFirstTokenSet.current = true;
		}

		if (login) {
			localStorage.setItem("auth", JSON.stringify(login));
		} else {
			localStorage.removeItem("auth");
		}
	}, [login]);

	return (
		<AuthContext.Provider value={{ login, setLogin, logout, role, setRole, tokenValido }}>
			{children}
		</AuthContext.Provider>
	);
};
