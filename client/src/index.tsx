import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    split,
    HttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

import { WebSocketLink } from "@apollo/client/link/ws";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_BACKEND_GRAPHQL,
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: {
        reconnect: true,
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
