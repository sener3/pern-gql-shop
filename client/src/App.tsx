import "./styles/app.scss";

import { client } from "@myapollo/apollo";
import { ApolloProvider } from "@apollo/client";

import MyRoutes from "./router/Routes";

const App = (): JSX.Element => {
    return (
        <ApolloProvider client={client}>
            <MyRoutes />
        </ApolloProvider>
    );
};

export default App;
