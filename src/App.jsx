import StoreProvider from "./Store/context";
import Layout from "./components/Layout";

function App() {
  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  )
}

export default App
