import "./App.css";
import { useQuery, useMutation } from "@apollo/client";
import {
    GetProductsDocument,
    AddProductDocument,
    ProductInput,
} from "./graphql/generated";

const App = (): JSX.Element => {
    const { data } = useQuery(GetProductsDocument);

    const [addProduct] = useMutation(AddProductDocument);

    const product: ProductInput = {
        name: "Product Test 10",
        price: 10.3,
    };

    return (
        <div className="App">
            {data?.getProducts.map((x: any) => (
                <p key={x.id}>{x.name}</p>
            ))}

            <button
                onClick={() => {
                    addProduct({
                        variables: {
                            product,
                        },
                    });
                }}
            >
                Add Product
            </button>
        </div>
    );
};

export default App;
