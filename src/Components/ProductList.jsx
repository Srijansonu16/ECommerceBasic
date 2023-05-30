import React from "react";

function ProductList() {
  const apiGet = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      <h4>ProductList</h4>
      <button onClick={apiGet}>Fetch API</button>
    </div>
  );
}
export default ProductList;
