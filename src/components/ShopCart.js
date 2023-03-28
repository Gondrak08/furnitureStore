
const ShopCart = ({isOpen, setIsOpen})=>{
    
    return(
        <section aria-hidden={isOpen} className="modal-container shopcart-container">
            <aside aria-hidden={isOpen} className="aside-container">
                <div className="shopcart">
                    <div className="head">
                        <h2>CARRINHO</h2>
                        <button onClick={()=>{setIsOpen(false)}}  className="close-button" >X</button>
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