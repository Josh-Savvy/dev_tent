import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "animate.css";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

// const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			retry: 3,
// 			// cacheTime: 10 * 60 * 1000, // Cache data for 15 minutes
// 		},
// 		mutations: {
// 			onError: (error: any) => {
// 				// Handle mutation errors globally
// 				console.error(error);
// 			},
// 		},
// 	},
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* <QueryClientProvider client={queryClient}> */}
		{/* <Provider store={store}> */}
		<ToastContainer />
		<App />
		{/* {import.meta.env.VITE_ENV === ("development" as string) ? (
						<ReactQueryDevtools />
					) : null} */}
		{/* </Provider> */}
		{/* </QueryClientProvider> */}
	</React.StrictMode>,
);
reportWebVitals();
