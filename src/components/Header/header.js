import { Link } from "react-router-dom";
import "./header.scss";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Navbar from "../Nav/Navbar";
import Slider from "../SliderBar/Slider";
const Header = () => {
  const [list, setList] = useState([
    "K+ Vui Hè Nóng Cùng Euro - Giá chỉ từ 59.000đ/tháng",
    "[Khuyến mại] Thu cũ giá cao toàn bộ sản phẩm - Trợ giá tốt nhất",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [list.length]);

  return (
    <div className="Header-container">
      {/* <div className="slider-navigation">
        <Slider />
      </div> */}
      <div className="Header-white">
        <span className="pulse"></span>
        <span className="title ">{list[currentIndex]}</span>
        <Link className="search-to" to="/">
          Xem chi tiết
        </Link>
      </div>
      <div className="top-navigation">
        <ul>
          <li>
            <Link to="/mobile">Bản mobile</Link>
          </li>
          <li>
            <Link to="/about">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/products">Sản Phẩm</Link>
          </li>
          <li>
            <Link to="/viewed-products">Sản phẩm đã xem</Link>
          </li>
          <li>
            <Link to="/warranty-center">Trung tâm bảo hành</Link>
          </li>
          <li>
            <Link to="/store-system">Hệ thống siêu thị</Link>
          </li>
          <li>
            <Link to="/order-tracking">Tra cứu đơn hàng</Link>
          </li>
          <li>
            <Link to="/login">Đăng nhập</Link>
          </li>
        </ul>
      </div>

      <div className="bottom-navigation">
        <div>
          <img
            src="https://hoanghamobile.com/Content/web/img/logo-text.png"
            alt="ảnh lỗi"
          />
        </div>
        <div className="search-product">
          <input type="text" placeholder="Tìm kiếm" />
          <div className="icon">
            <FaSearch className="icon-search" />
          </div>
        </div>
        <div className="cart-product">
          <div className="truck">
            <FaTruckFast />
          </div>
          <Link>Kiểm tra đơn hàng</Link>
        </div>
        <div className="cart-told">
          <FaShoppingCart className="cart-shopping" />
          <span className="text-cart">0</span>
        </div>
      </div>
      <div className="fillter-navigation">
        <Navbar />
      </div>
      <div className="slider-navigation">
        <Slider />
      </div>
    </div>
  );
};

export default Header;
