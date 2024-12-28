
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Layout/Routes/Private';
import ForgotPasssword from "../src/pages/Auth/Forgotpassword"
import AdminRoute from './components/Layout/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';

import CreateProduct from './pages/Admin/CreateProduct';
import Products from './pages/Admin/Products';
import Category from './pages/Admin/Category';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profie from './pages/user/Profie';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';



function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<HomePage />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:slug" element={<CategoryProduct />} />
      <Route path ='search/' element={<Search />} />
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path='/dashboard' element={<PrivateRoute />}>
      <Route path ='user' element={<Dashboard />} />
      <Route path ='user/orders' element={<Orders />} />
      <Route path ='user/profile' element={<Profie />} />
      </Route>

      <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<Category />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/Orders" element={<Users />} />
         
      </Route>
      
      
      
      
      <Route path ='/' element={<PrivateRoute />} />

      <Route path ='/register' element={<Register />} />
     
      <Route path ='/login' element={<Login />} />

      <Route path ='/about' element={<About />} />
      <Route path ='/contact' element={<Contact />} />
      <Route path ='/policy' element={<Policy />} />
      <Route path ='*' element={<Pagenotfound />} />
    </Routes>
    
    </>
  );
}

export default App;
