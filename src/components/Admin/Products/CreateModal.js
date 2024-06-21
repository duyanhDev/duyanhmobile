import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postProduct } from "../../../severs/ApiSever";
import { toast } from "react-toastify";

const CreateModal = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [firm, setFirm] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleClose = () => {
    setTitle("");
    setPrice("");
    setFirm("");
    setCategory("");
    setDescription("");
    setImages(null);
    setPreviewImage("");
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleOnChangeImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImages(e.target.files[0]);
    }
  };

  const handleCreate = async () => {
    try {
      let res = await postProduct(
        description,
        Price,
        images,
        [], // Assuming tags is not used in this example
        title,
        category
      );

      console.log(res);
      if (res) {
        handleClose();
        toast.success("Thêm thành công sản phẩm");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Thêm sản phẩm thất bại");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="product-price">Giá</label>
                <input
                  id="product-price"
                  type="text"
                  className="form-control auto-expand"
                  placeholder="Giá"
                  aria-label="Last name"
                  value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="product-brand">Hãng</label>
                <input
                  id="product-brand"
                  type="text"
                  className="form-control auto-expand"
                  placeholder="Hãng"
                  aria-label="Last name"
                  value={firm}
                  onChange={(e) => setFirm(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="product-description">Mô tả</label>
                <input
                  id="product-description"
                  type="text"
                  className="form-control auto-expand"
                  placeholder="Mô tả"
                  aria-label="Last name"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="product-category">Category</label>
                <input
                  id="product-category"
                  type="text"
                  className="form-control auto-expand"
                  placeholder="Category"
                  aria-label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2">
              <label htmlFor="labelUpload">Update Ảnh</label>
              <input
                hidden
                type="file"
                id="labelUpload"
                onChange={(e) => handleOnChangeImg(e)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} alt="Preview" />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateModal;
