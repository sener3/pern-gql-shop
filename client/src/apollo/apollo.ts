import {
    ApolloClient,
    split,
} from "@apollo/client";

import {createUploadLink} from "apollo-upload-client";

import { getMainDefinition } from "@apollo/client/utilities";

import { WebSocketLink } from "@apollo/client/link/ws";
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

import { cache } from "./cache";
import { typeDefs } from "@graphql/typeDefs";

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

const persistedCache = cache;

// @ts-expect-error
await persistCache({
    cache: persistedCache,
    storage: new LocalStorageWrapper(window.localStorage),
});

const client = new ApolloClient({
    link: splitLink,
    typeDefs: typeDefs,
    cache: cache,
});

export {client};