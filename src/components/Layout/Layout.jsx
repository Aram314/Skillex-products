import {useEffect, useState} from "react";
import CategoryFilters from "../CategoryFilters";
import SearchBar from "../SearchBar/SearchBar";
import {Types, useStore} from "../../Store";
import BrandFilters from "../BrandFilters";
import Products from "../Products";
import delay from "../../helpers/delay";
import Sort from "../Sort";
import './styles.css';

const Layout = () => {
  const [areFiltersOpen, setFiltersOpen] = useState(false);
  const { dispatch } = useStore();

  const getData = async () => {
    const res =  await fetch('/data.json');
    return res.json()
  };

  useEffect(() => {
    (async () => {
      const data = await getData();
      await delay(500);

      dispatch({
        type: Types.SET_PRODUCTS,
        payload: data
      })
    })();
  },[]);

  const handleClick = () => {
    setFiltersOpen(v => !v);
  }

  return (
    <div className='layout-root'>
      <header className='layout-header'>
        <button id="toggleAside" className="toggle-button" onClick={handleClick}>☰</button>
      </header>
      <aside className={`layout-aside ${areFiltersOpen ? 'aside-visible' : ''}`}>

        <CategoryFilters />
        <BrandFilters />
        <Sort />
      </aside>
      <main className='layout-main'>
        <SearchBar />
        <Products />
      </main>
    </div>
  )
}

export default Layout;
