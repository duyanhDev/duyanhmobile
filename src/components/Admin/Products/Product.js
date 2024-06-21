import ModalView from "./ModalView";
import ReadProduct from "./ReadProduct";
import EditModal from "./EditModal";
import { getAllProduct } from "../../../severs/ApiSever";
import { useEffect, useState } from "react";
import CreateModal from "./CreateModal";
const Products = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [EditItem, setEditItem] = useState(null);
  const [listCategory, setCategory] = useState([]);
  const handleEdit = (item) => {
    setShowEdit(true);
    setEditItem(item);
    console.log(item);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = async () => {
    let res = await getAllProduct();
    if (res && res.data && res.data.products) {
      console.log(res);
      setCategory(res.data.products);
    }
  };

  const handleView = (item) => {
    if (item) {
      setSelectedItem(item);
    }
    setShow(true);
    console.log(">>item", item);
  };

  return (
    <div className="container">
      <CreateModal listCategory={listCategory} />
      <ReadProduct handleView={handleView} handleEdit={handleEdit} />
      {selectedItem && (
        <ModalView show={show} setShow={setShow} item={selectedItem} />
      )}

      <EditModal
        show={showEdit}
        setShow={setShowEdit}
        item={EditItem}
        fetchAPI={fetchAPI}
      />
    </div>
  );
};

export default Products;
