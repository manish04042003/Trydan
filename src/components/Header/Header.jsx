import { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from 'react-icons/tb'
import {CgShoppingCart} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'

import Search from './Search/Search'
import Cart from '../Cart/Cart'
import { Context } from "../../utils/context";
import "./Header.scss";
const Header = () => {

    const [scrolled,setscrolled] = useState(false)
    const [showCart,setshowCart] = useState(false)
    const [showSearch,setshowSearch] = useState(false)

    const {cartCount} = useContext(Context)

const navigate = useNavigate()

    const handleScroll =()=>{
        const offset = window.scrollY
        if(offset>200){
            setscrolled(true)
        }else{
            setscrolled(false)
        }
        // console.log(offset)
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])
    return (
        <>
        <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li >About</li>
                    <li>Categories</li>
                </ul>
                <div onClick={()=>navigate('/')} className="center">TRYDAN</div>
                <div className="right">
                    <TbSearch onClick={()=>setshowSearch(true)}/>
                    <AiOutlineHeart/>
                    <span className="cart-icon" onClick={()=>setshowCart(true)}>
                        <CgShoppingCart/>

                        {cartCount !==0 && <span>{cartCount}</span>}
                    </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setshowCart = {setshowCart}/> }
        {showSearch && <Search setshowSearch = {setshowSearch}/> }

        
        </>
    );
};

export default Header;
