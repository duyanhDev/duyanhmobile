import { Routes, Route } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/header";
import Admin from "../components/Admin/Admin";
import Products from "../components/Admin/Products/Product";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Header />}></Route>
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
