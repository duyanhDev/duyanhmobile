import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalView.scss";
const ModalView = ({ show, setShow, item }) => {
  const handleClose = () => setShow(false);

  return (
    <>
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
                  value={item?.title || ""}
                  readOnly
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
                  value={item?.price || ""}
                  readOnly
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
                  value={item?.tags || ""}
                  readOnly
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
                  value={item?.description || ""}
                  readOnly
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col ">
                {item?.images && (
                  <>
                    {/* <label htmlFor="product-image">Ảnh sản phẩm</label> */}
                    <img
                      id="product-image"
                      src={item.images[0]}
                      alt="ảnh lỗi"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalView;
