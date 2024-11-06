import './styles.css';
import {useEffect, useState} from "react";

const ProductCard = ({ product }) => {
  const [imageUrl, setImageUrl] = useState('');

  const getRandomImage = async () => {
    const res = await fetch('https://random.imagecdn.app/v1/image?width=200&height=150');
    const data = await res.text();
    console.log(data);
    return data;
  }

  useEffect(() => {
    (async () => {
      const image = await getRandomImage();
      setImageUrl(image);
    })();

  }, []);

  console.log(imageUrl)
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        {/*<div className="product-image" style={{ 'background-image': `url(${imageUrl})` }}><img /></div>*/}
        <img src={imageUrl} alt={product.name} className="product-image" onLoad="this.style.visibility='visible'" />
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-brand">Brand: {product.brand}</p>
      <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      <p className="product-rating">Rating: {product.rating} ⭐</p>
    </div>
  );
};

export default ProductCard;


