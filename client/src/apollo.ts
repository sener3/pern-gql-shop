import {
    ApolloClient,
    InMemoryCache,
    split,
} from "@apollo/client";

import {createUploadLink} from "apollo-upload-client";

import { getMainDefinition } from "@apollo/client/utilities";

import { WebSocketLink } from "@apollo/client/link/ws";


const httpLink = createUploadLink({
    uri: process.env.REACT_APP_BACKEND_GRAPHQL,
});

const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_BACKEND_WEBSOCKET ?? "",
    options: {
        // reconnect: true,
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

export {client};