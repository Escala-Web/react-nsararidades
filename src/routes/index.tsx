import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardRoute } from "../pages/Dashboard";

import { PrivateRoute } from "../pages/Dashboard/DashboardPrivateRoute";
import { Login } from "../pages/Dashboard/pages/Login";
import { PageContruct } from "../pages/templates/PageContruct";
import { useStore } from "../hooks/Store/useStore";
import { Loading } from "../components/Loading";
import { Onboarding } from "../components/Onboarding";
import { ActiveStriper } from "../components/ActiveStriper";
import { FilterProvider } from "../context/Filter";
import { ScrollToTop } from "../components/ScrollToTop";
import { Editor } from "../pages/Editor";

export const RouteApp = () => {
	const { findAllStore } = useStore();

	return (
		<>
			{findAllStore.isLoading ? (
				<Loading />
			) : (
				<BrowserRouter>
				<ScrollToTop />
					<Routes>
						<Route
							path="/*"
							element={
								<>
									{findAllStore?.data?.is_locked == true ? (
										<PageContruct />
									) : (
										<FilterProvider>
											<Editor />
										</FilterProvider>
									)}
								</>
							}
						/>
						<Route path="/administrativo/login" element={<Login />} />
						<Route path="/administrativo/active-stripe" element={<ActiveStriper />} />

						<Route
							path="/administrativo/*"
							element={
								<>
									<PrivateRoute>
										
										
										
											<>
												<DashboardRoute />
											</>
										
									</PrivateRoute>
								</>
							}
						/>

						<Route path="/pagina-em-construcao" element={<PageContruct />} />
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
};
