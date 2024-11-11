import {useEffect, useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "../../components/Pagination";
import useDebounce from "../../hooks/useDebounce";
import ProductCard from "../ProductCard";
import { useStore } from "../../Store";
import './styles.css';

const Products = () => {
  const { state: { products, filteredCategories, filteredBrands, query, sortOrder }} = useStore();

  const debouncedQuery = useDebounce(query);

  let filteredProducts = products;
  filteredProducts = filteredCategories.length === 0 ? filteredProducts : filteredProducts.filter(prod => filteredCategories.includes(prod.category));
  filteredProducts = filteredBrands.length === 0 ? filteredProducts : filteredProducts.filter(prod => filteredBrands.includes(prod.brand));
  filteredProducts = debouncedQuery === '' ? filteredProducts : filteredProducts.filter(prod => prod.name.toLowerCase().includes(debouncedQuery.toLowerCase()));

  if (sortOrder) {
    filteredProducts.sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts?.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredCategories]);

  if (!products) {
    return (
      <div className="spinner-wrapper">
        <ClipLoader
          color='blue'
          loading
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }

  return (
    <>
      {currentItems?.length ? (
        <div className='catalog'>
          {currentItems?.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="not-found-wrapper">
          <img src="https://cdn.dribbble.com/userupload/2905353/file/original-2022966da1fc3718d3feddfdc471ae47.png?resize=400x0" alt="Nothing found" />
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  )
}

export default Products;
