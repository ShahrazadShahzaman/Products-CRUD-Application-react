import { useState, useEffect } from "react";
import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductData from "./productdata";
import "./style.css"

const CreateProducts= () => {
    const [Products, setProducts] = useState({
        ProductName:"",
        Description:"",
        Price:""
    });
    console.log("CreateData component rendered");
    const [loading,setLoading]=useState(false)
const location = useLocation();
const navigate = useNavigate();


const [msg,setMsg] = useState("");

  useEffect(() => {
    if (location.state && location.state.product) {
      setProducts(location.state.product);
    }
  }, [location.state]);
  


const handlechange = (e) => {
    const value= e.target.value;
    const name = e.target.name;
    setProducts({
        ...Products,
        [name]: value
    })
    }
    
const APIURL ="https://6778111280a79bf91903d241.mockapi.io/products"

    const handleSubmit = async (e) => {
         e.preventDefault()

         try{ 
            setLoading(true);
            let res;
            if (Products.id) {
                res = await axios.put(`${APIURL}/${Products.id}`, Products);
            } else {
                res = await axios.post(APIURL, Products);
            }

         if(res.status === 201){
            toast.success("Added successfully")

            navigate('/productdata')
         }
        }
         catch (error) {
            toast.error("Error Adding Products!");
         }finally { 
            setLoading (false);
         }
    };
    return(
        <>
        <h2>Create Data</h2>
        <form onSubmit={handleSubmit}>
            {msg && (<h2>{msg}</h2>)}
            <div className="form-group">
                <label>Product Name</label>
                <input className="texts" type="text" name="ProductName" placeholder="Enter The Product Name" value={Products.ProductName} onChange={handlechange} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="texts" type="text" name="Description"  placeholder="Enter The Description" value={Products.Description} onChange={handlechange}/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input className="texts"  type="text" name="Price"  placeholder="Enter The Price" value={Products.Price} onChange={handlechange}/>
            </div>
            <div>
                <button className="submitbtn" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </div>
        </form>
        </>
    )
}
export default CreateProducts;