import {Types, useStore} from "../../Store";
import './styles.css';

const Sort = () => {
  const { state: { sortOrder }, dispatch} = useStore();

  const handleSort = () => {
    dispatch({
      type: Types.SET_SORT_ORDER,
      payload: sortOrder === 'ascending' ? 'descending' : 'ascending'
    })
  };

  return (
    <div>
      <button onClick={handleSort} className="sort-button">
        Sort by Price ({sortOrder === 'ascending' ? 'Ascending' : 'Descending'})
      </button>
    </div>
  )
}

export default Sort;
