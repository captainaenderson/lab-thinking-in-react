

function ProductRow({ products }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th colspan="2">Name</th>
            <th colspan="2">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr  key={product.id}>
                <td
                  
                  style={{ color: product.inStock ? 'black' : 'red' }}
                >
                  {product.name}
                </td>
                <td >{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductRow;
