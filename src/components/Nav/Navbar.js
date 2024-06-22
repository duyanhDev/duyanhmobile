import "./Navbar.scss";
import {
  FaMobileAlt,
  FaApple,
  FaLaptop,
  FaTabletAlt,
  FaDesktop,
  FaBlender,
  FaHeadphonesAlt,
  FaHome,
  FaPlug,
  FaExchangeAlt,
  FaBox,
  FaTools,
  FaConciergeBell,
  FaFire,
  FaTags,
} from "react-icons/fa";
import { IoWatch } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="container-nav">
      <ul className="container-nav_ul">
        <li>
          <FaMobileAlt /> <span>ĐIỆN THOẠI</span>
        </li>
        <li>
          <FaApple /> <span>APPLE</span>
        </li>
        <li>
          <FaLaptop /> <span>LAPTOP</span>
        </li>
        <li>
          <FaTabletAlt /> <span>TABLET</span>
        </li>
        <li>
          <FaDesktop /> <span>MÀN HÌNH</span>
        </li>
        <li>
          <FaBlender /> <span>ĐIỆN MÁY</span>
        </li>
        <li>
          <IoWatch />
          <span>ĐỒNG HỒ</span>
        </li>
        <li>
          <FaHeadphonesAlt /> <span>ÂM THANH</span>
        </li>
        <li>
          <FaHome /> <span>SMART HOME</span>
        </li>
        <li>
          <FaPlug /> <span>PHỤ KIỆN</span>
        </li>
        <li>
          <FaExchangeAlt /> <span>THU CŨ ĐỔI MỚI</span>
        </li>
        <li>
          <FaBox /> <span>MÁY CŨ-TBH</span>
        </li>
        <li>
          <FaTools /> <span>SỮA CHỮA</span>
        </li>
        <li>
          <FaConciergeBell /> <span>DỊCH VỤ</span>
        </li>
        <li>
          <FaFire /> <span>TIN HOT</span>
        </li>
        <li>
          <FaTags /> <span>ƯU ĐÃI</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
