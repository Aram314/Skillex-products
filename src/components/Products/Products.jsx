import ProductCard from "../ProductCard";
import { products } from "../../data";
import './styles.css';

const Products = () => {
  return (
    <div className='catalog'>
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default Products;

// https://random.imagecdn.app/v1/image?width=200&height=150