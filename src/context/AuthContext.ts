import { createContext } from "react";

export const AuthContext = createContext<{ isLoggedIn: boolean; setIsLoggedIn: Function }>({
	isLoggedIn: true,
	setIsLoggedIn: () => {}
});
