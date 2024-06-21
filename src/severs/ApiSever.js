import axios from "./../Untils/AxiosConfig";

const getAllProduct = () => {
  return axios.get("products/category/smartphones");
};

const postProduct = async (
  description,
  images,
  price,
  tags,
  title,
  category
) => {
  try {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("price", price);
    formData.append("tags", JSON.stringify(tags)); // If tags is an array or object
    formData.append("title", title);
    formData.append("category", category);
    // formData.append("images", images); // Assuming images is a File object

    const response = await axios.post(
      `https://dummyjson.com/products/add`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error posting product:", error);
    throw error;
  }
};
const putProduct = (id, title) => {
  return axios.put(`https://dummyjson.com/products/${id}`, { title });
};

const DeleteProduct = (id) => {
  return axios.delete(`https://dummyjson.com/products/${id}`);
};

export { getAllProduct, putProduct, DeleteProduct, postProduct };
