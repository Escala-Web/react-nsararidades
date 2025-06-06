import { ThemeProvider } from "styled-components";
import { RouteApp } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AuthProvider } from "./context/Auth";
import { ToastContainer } from "react-toastify";
import { PicturesProvider } from "./context/FileManager";
import { CartProvider } from "./context/Cart";
import { ThemeProviderCustom, useThemeContext } from "./context/ThemeContext";
import { FilterProvider } from "./context/Filter";
function App() {	
	return (
		<AuthProvider>
			<PicturesProvider>
				<CartProvider>
					<ThemeProviderCustom>
						<ThemedApp />
					</ThemeProviderCustom>
				</CartProvider>
			</PicturesProvider>
		</AuthProvider>
	);
}

function ThemedApp() {
	const { currentTheme } = useThemeContext();

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles />
			<ToastContainer />
			<RouteApp />
		</ThemeProvider>
	);
}

export default App;
