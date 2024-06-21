import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import "./ModalView.scss";
import { putProduct } from "../../../severs/ApiSever";
import { toast } from "react-toastify";

const EditModal = ({ show, setShow, item, fetchAPI }) => {
  const handleClose = () => setShow(false);

  const [title, setName] = useState("");

  useEffect(() => {
    if (item) {
      setName(item.title || "");
    }
  }, [item]);
  console.log(title);
  const handleEditProduct = async () => {
    try {
      // Assuming title and item.id are managed states or props
      let res = await putProduct(item.id, title);
      console.log(res);

      if (res) {
        setShow(false); // Hide modal on success
        fetchAPI(); // Refresh data after update
        toast.success("Sửa thành công");
      } else {
        // Handle unexpected response (optional)
        console.error("Unexpected response from server:", res);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      // Display error message to user or log further details
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col">
              <label htmlFor="product-name">Tên sản phẩm</label>
              <input
                id="product-name"
                type="text"
                className="form-control auto-expand"
                placeholder="Tên sản phẩm"
                aria-label="First name"
                value={title}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditProduct}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
