import './styles.css';
import Products from "../Products";

const Layout = () => {
  return (
    <div className='layout-root'>
      <header className='layout-header'>header</header>
      <aside className='layout-aside'>sidebar</aside>
      <main className='layout-main'>
        <Products />
      </main>
    </div>
  )
}

export default Layout;
