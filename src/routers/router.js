import { Routes, Route } from "react-router-dom";
import App from "../App";
import Admin from "../components/Admin/Admin";
import Products from "../components/Admin/Products/Product";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "../components/Details/Detail";
import Home from "../components/Home/Home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="detail/:id" element={<Detail />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Products />}></Route>
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        containerId="containerA"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default Router;
