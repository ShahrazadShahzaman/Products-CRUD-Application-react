import{ NavLink } from "react-router-dom";
import "./style.css"

const Header =()=>{
    const MenuList =[
        {
            name:"Home",
            url:"/"
        },
        {
            name:"About",
            url:"/about"
        },
        {
            name:"Products",
            url:"/Productdata"
        },
    ]
    return (
    <>
    <nav className="navbar">
        <ul className="nav">
            {MenuList.map((item,index)=>{
                return (
                    <li className="nav" key={index}>
                         <NavLink to={item.url}>{item.name}</NavLink>
                    </li>
                );
            })
        }
        </ul>
    </nav>
    </>
    );  
};
export default Header;