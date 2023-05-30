import { Provider } from "react-redux";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import store from "./Redux/Store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <ProductList />
      </div>
    </Provider>
  );
}
