
import {useState} from 'react';
import ProductImage from '../assets/productImage.webp'

const ProductDisplay = () => {
    const [counter, setCounter] = useState(1);

    const Increment = (e) => {
        e.preventDefault();
        return setCounter(counter + 1)
    }

    
    const Decrement = (e) => {
        e.preventDefault();
        return setCounter(counter - 1);
    }

    return (
        <div className="product-display">
            <div className="container">
                <h2>história da semana</h2>
                <div className="grid">
                    <div className="col-one" >
                        <div className='image'>
                            <img src={ProductImage} />
                        </div>
                    </div>
                    <div className="col-two" >
                        <div className='head'>
                            <span className='storeName' >kasa</span>
                            <h3 className='productName' >CADEIRA BALOIÇO REDE JARDIM BEGE</h3>
                            <div className='price-container' >
                                <span className='discount'>$36</span>
                                <span className='price'>$40</span>
                            </div>
                        </div>
                        <div className='content'>

                            <div className='texts'>
                                <p>Cadeira de baloiço em rede de jardim, bege, para relaxar no jardim, na varanda ou no terraço em dias de sol.</p>
                                <p>Material: Algodão (65%), Poliéster (35%).</p>
                                <p>Dimensões:
                                    Comprimento x Largura: 100 x 90cm
                                </p>
                            </div>
                            
                            <div className='counter-box'>
                                <button onClick={(e)=> {Decrement(e)} }  className='decrement'>-</button>
                                <span className='quant'>{counter}</span>
                                <button onClick={(e)=> {Increment(e)} }  className='increment' >+</button>
                            </div>

                            <button className='button' >
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

