import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "./theme";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={customTheme}>
			<CSSReset />
			<App />
		</ThemeProvider>
	</Provider>,

	document.getElementById("root")
);
