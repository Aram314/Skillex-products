import './styles.css';
import {Types, useStore} from "../../Store";

const CategoryFilters = () => {
  const { state: { products, filteredCategories }, dispatch} = useStore();

  const categories = new Set();
  products?.forEach(product => categories.add(product.category));

  const handleChange = (category) => {
    dispatch({
      type: Types.SET_FILTERED_CATEGORIES,
      payload: filteredCategories.includes(category) ? filteredCategories.filter(cat => cat !== category) : [...filteredCategories, category]
    })
  }

  return (
    <div className="category-section">
      <h2 className="category-title">Categories</h2>
      <div className="category-container">
        {Array.from(categories).map(category => (
          <div className="category-item" key={category}>
            <input
              checked={filteredCategories.includes(category)}
              onChange={() => handleChange(category)}
              type="checkbox"
              id={category}
              name={category}
              key={category}
              className="category-checkbox"
            />
            <label htmlFor={category} className="category-label">
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilters;
