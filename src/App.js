
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBike from './Pages/AddBike/AddBike';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItem from './Pages/MyItem/MyItem';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:inventoryId" element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/add" element={
          <RequireAuth>
            <AddBike></AddBike>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path="/myitem" element={<MyItem></MyItem>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
