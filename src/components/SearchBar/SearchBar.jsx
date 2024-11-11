import {Types, useStore} from "../../Store";
import './styles.css';

const SearchBar = () => {
  const { state: { query }, dispatch } = useStore();

  const handleChange = (e) => {
    dispatch({
      type: Types.SET_QUERY,
      payload: e.target.value
    })
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        className="search-bar"
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar;
