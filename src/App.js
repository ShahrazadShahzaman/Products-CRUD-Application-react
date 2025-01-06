import Header from "./components/header";
import ProductData from "./components/productdata";
import { AppRoutes } from "./Routes/AppRoutes";

const App =()=>{
    return(
    <>
    < Header/>
    <AppRoutes />
    </>
    );
};
export default App;