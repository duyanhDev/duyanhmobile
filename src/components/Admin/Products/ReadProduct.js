import Table from "react-bootstrap/Table";
import { getAllProduct } from "../../../severs/ApiSever";
import { useEffect, useState } from "react";
import "./ReadProduct.scss";
const ReadProduct = (props) => {
  const [listCategory, setCategory] = useState([]);
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = async () => {
    let res = await getAllProduct();
    if (res && res.data && res.data.products) {
      setCategory(res.data.products);
    }
  };

  console.log(listCategory);
  return (
    <div className="table-row">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Danh mục sản phẩm</th>
            <th>Giá</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {listCategory &&
            listCategory.length > 0 &&
            listCategory.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>

                  <td>
                    <div className="flex">
                      <button
                        className="btn btn-primary"
                        onClick={() => props.handleView(item)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => props.handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button className="btn btn-dark">Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ReadProduct;
