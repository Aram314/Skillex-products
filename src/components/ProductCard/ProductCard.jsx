import { useEffect, useState } from "react";
import './styles.css';

const ProductCard = ({ product }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const getRandomImage = async () => {
    const res = await fetch('https://random.imagecdn.app/v1/image?width=200&height=150');
    return await res.text();
  }

  useEffect(() => {
    (async () => {
      const image = await getRandomImage();
      setImageUrl(image);
    })();
  }, []);

  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        <img src={imageUrl} alt={product.name} className="product-image" onLoad={() => setIsLoaded(true)} style={{ visibility: isLoaded ? 'visible' : 'hidden' }}/>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <div className="product-category">Category: {product.category}</div>
      <div className="product-brand">Brand: {product.brand}</div>
      <div className="product-price">Price: ${product.price.toFixed(2)}</div>
      <div className="product-rating">Rating: {product.rating} ⭐</div>
    </div>
  );
};

export default ProductCard;
