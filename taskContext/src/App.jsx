import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import WishList from './Components/WishlistPage';
import Layout from './Layout/MainLayout';
import WishlistProvider from './Context/WishlistContext';


function App() {

  return (
    <WishlistProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/wishlist' element={<WishList />} />
        </Route>
      </Routes>
    </WishlistProvider>

  );
}

export default App;
