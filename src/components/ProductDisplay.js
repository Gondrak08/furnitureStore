
import {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { addCart } from '../redux/reducer';


import ProductImage from '../assets/productImage.webp'

const dataObj = {
    storeName:'Kasa',
    productId:1,
    productName:'CADEIRA BALOIÇO REDDE JARDIM BEGE',
    productImage: ProductImage,
    price:40,
    discount:36,
    description:`<p>Cadeira de baloiço em rede de jardim, bege, para relaxar no jardim, na varanda ou no terraço em dias de sol.</p>
    <p>Material: Algodão (65%), Poliéster (35%).</p>
    <p>Dimensões:
        Comprimento x Largura: 100 x 90cm
    </p>`,
};

const ProductDisplay = () => {
    const dispatch = useDispatch();
    

    const [counter, setCounter] = useState(1);

    const Increment = (e) => {
        e.preventDefault();
        return setCounter(counter + 1)
    }
    
    const Decrement = (e) => {
        e.preventDefault();
        return setCounter(counter - 1);
    }

    const PushProduct=(data)=>{
        const {productId, productImage,storeName,productName, discount, price, description} = data;
        
        const Product = {
            storeName,
            productId, 
            productImage,
            productName, 
            discount, 
            price, 
            description, 
            quantity:counter
        }

        // console.log(data);

        dispatch(addCart(Product))
    }

    return (
        
        <div className="product-display">
            <div className="container">
                <h2>história da semana</h2>
                <div id={dataObj.productId} className="grid product-card">
                    <div className="col-one" >
                        <div className='image'>
                            <img src={dataObj.productImage} />
                        </div>
                    </div>
                    <div className="col-two" >
                        <div className='head'>
                            <span className='storeName' >{dataObj.storeName}</span>
                            <h3 className='productName' >{dataObj.productName}</h3>
                            <div className='price-container' >
                                <span className='discount'>${dataObj.discount}</span>
                                <span className='price'>${dataObj.price}</span>
                            </div>
                        </div>
                        <div className='content'>

                            <div className='texts' dangerouslySetInnerHTML={{ __html: dataObj.description }}></div>
                            
                            <div className='counter-box'>
                                <button onClick={(e)=> {Decrement(e)} }  className='decrement'>-</button>
                                <span className='quant'>{counter}</span>
                                <button onClick={(e)=> {Increment(e)} }  className='increment' >+</button>
                            </div>

                            <button onClick={()=>{PushProduct(dataObj)}} className='button' >
                                adicionar ao carrinho
                            </button>

                            <a className='link link-underline' >
                                Ver detalhes do produto
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDisplay;

