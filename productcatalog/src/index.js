import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./reset.css";
import {ReactQueryDevtools} from 'react-query/devtools'
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from 'react-query';
import configureStore from "./redux/reducers/configureStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {AppContextProvider} from "./components/context/contextApplication"
const root = ReactDOM.createRoot(document.getElementById("root"));
const querClient = new QueryClient()
const store=configureStore()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
