import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "../src/sb-admin-2.min.css"
import Dashborad from './Dashboard';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Table from './Table';
import CreateUser from './CreateUser';
import Dummy from './Dummy';
import Products from './Product';
import Pview from './Pview';
import NewProduct from './NewProduct';
import Tableedit from './Tableedit';
import Pedit from './Pedit';


function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<Dashborad />} />
                <Route path="/table/createuser" element={<CreateUser />} />
                <Route path="/table/view/:id" element={<Dummy />} />
                <Route path="/table/edit/:id" element={<Tableedit />} />
                <Route path="/table" element={<Table />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/view/:id" element={<Pview />} />
                <Route path="/products/edit/:id" element={<Pedit />} />
                <Route path="/products/addproduct" element={<NewProduct/>} />
              </Routes>
              
            </div>
          </div>




        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
