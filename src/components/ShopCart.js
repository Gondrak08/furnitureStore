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
                    <div className={`content ${listOfItems.length === 0 && 'empty-cart'}  `}>
                        {listOfItems.length === 0 && (<h3 className="empty-message" >carrinho vazio</h3>)}
                        {listOfItems.length > 0 &&(
                            <div className='table'>
                                <div className='image'>
                                    <img src={listOfItems[0].productImage} />
                                </div>
                                <div className='body'>
                                    {/* <div className='head' > */}
                                        <h3 className='product-name' >{listOfItems[0].productName}</h3>
                                    {/* </div> */}
                                    <div className='product-description' >
                                        <span>quant: {listOfItems[0].quantity} </span>
                                        <div className='price-box'>
                                            <span className='price' > $ {listOfItems[0].discount}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </section>
    )
};

export default ShopCart;