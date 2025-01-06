import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

const ProductData =()=>{
const [Products, setProducts] = useState([]);
const [Product, setProduct] = useState([]);
const [loading, setLoading] = useState(false);
const {errorMsg, setErrorMsg}=useState("");
const navigate=useNavigate();

console.log("ProductData component rendered");

const APIURL = "https://6778111280a79bf91903d241.mockapi.io/products";

const   getProductData = async () => {
    setLoading(true);
    try {   
        const res = await axios.get(APIURL);
    if (res.status === 200) {
        setLoading(false);
        setProduct(res.data);
        setErrorMsg("");
    }
}   catch(error){
    const{ProductData}=error.response ? error.response.Product : "Network error setErrorMsg ";
    setLoading(false);
}
}
const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${APIURL}/${id}`);
      if (res.status === 200) {
        alert("Product deleted successfully!");
        getProductData();
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const handleEdit = (product) => {
    navigate("/product", { state: { product } });
  };

useEffect(()=>{
    getProductData();
},[])

if (loading) {
    return (
    <div className="loader-container">
          <div className="loader"></div>
    </div>
    )
}
return(
 <>
 <h2 className="productlist">Product List</h2>
 <button className="ANP-btn" onClick={()=> navigate ("/product")}> Add New Product</button>
 <table border={1}>
    <thead>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {Product && Product.map((item, index) => {
            return(
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.ProductName}</td>
                <td>{item.Description}</td>
                <td>{item.Price}</td>
                <td>
                    <button className="actionbtn edit"  onClick={()=>handleEdit(item)}>Edit</button>
                    <button className="actionbtn del" onClick={()=>handleDelete(item.id)}>Delete</button>
                </td>
                </tr>
            );
        })
        }
    </tbody>
 </table>

 </>
);
};
export default ProductData;