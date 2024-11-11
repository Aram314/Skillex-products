import { Types, useStore } from "../../Store";

const BrandFilters = () => {
  const { state: { products, filteredBrands }, dispatch} = useStore();

  const brands = new Set();
  products?.forEach(product => brands.add(product.brand));

  const handleChange = (brand) => {
    dispatch({
      type: Types.SET_FILTERED_BRANDS,
      payload: filteredBrands.includes(brand) ? filteredBrands.filter(item => item !== brand) : [...filteredBrands, brand]
    })
  }

  return (
    <div className="category-section">
      <h2 className="category-title">Brands</h2>
      <div className="category-container">
        {Array.from(brands).map(brand => (
          <div className="category-item" key={brand}>
            <input
              checked={filteredBrands.includes(brand)}
              onChange={() => handleChange(brand)}
              type="checkbox"
              id={brand}
              name={brand}
              key={brand}
              className="category-checkbox"
            />
            <label htmlFor={brand} className="category-label">
              {brand}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandFilters;
