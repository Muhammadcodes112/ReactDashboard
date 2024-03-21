import { Refine, WelcomePage, Authenticated } from "@refinedev/core";
import { dataProvider } from "./providers/data-provider";
import { EditProduct } from "./pages/edit";
import { ShowProduct } from "./pages/show"
import CreateProduct from "./pages/CreateProduct";
import { ListProducts } from "./pages/ListProducts";
import { authProvider } from "./providers/AuthProvider";

function App() {
  return (
    <Refine dataProvider={dataProvider} authProvider={authProvider}>

      <Authenticated key="protected" fallback={<div>Please Login</div>}>
        <ListProducts />
      <Authenticated />
    </Refine>
  );
}

export default App;