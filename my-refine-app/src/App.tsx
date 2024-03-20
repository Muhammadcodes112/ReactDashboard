import { Refine, WelcomePage } from "@refinedev/core";
import { dataProvider } from "./providers/data-provider";
import { EditProduct } from "./pages/edit";
import { ShowProduct } from "./pages/show"

function App() {
  return (
    <Refine dataProvider={dataProvider}>
      {/* <WelcomePage /> */}
      <ShowProduct />
      <EditProduct />
    </Refine>
  );
}

export default App;