import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { toggleCart } from '../redux/reducer';


const ShopCart = ()=>{
    const dispatch = useDispatch()

    const isCart = useSelector(state=>state.toggleCart);
    const listOfItems = useSelector(state=>state.list);

    console.log(listOfItems);
    return(
        <section aria-hidden={isCart} className="modal-container shopcart-container">
            <aside aria-hidden={isCart} className="aside-container">
                <div className="shopcart">
                    <div className="head">
                        <h2>CARRINHO</h2>
                        <button onClick={()=>{dispatch(toggleCart(false))}}  className="close-button" >X</button>
                    </div>
                    <div className="content">
                        <h3 className="empty-message" >carrinho vazio</h3>
                    </div>
                </div>
            </aside>
        </section>
    )
};

export default ShopCart;