import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductsTable from './ProductTable'
import ProductRow from './ProductRow';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
    <>
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductsTable />
      </div>   
      <div>
        <ProductRow products={products} />
      </div> 
      </>
  )
}

export default ProductsPage;