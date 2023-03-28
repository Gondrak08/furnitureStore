import {useState} from 'react';

const PopUp = () => {
    const [isClosed, setIsClosed] = useState(false);
    return (
        <section aria-hidden={isClosed} className="popup-container">
            <div className="card">
                <button className="close-button" >X</button>
                <div className="head" >
                    <h2 className='title' >10% DE DESCONTO</h2>
                    <p className='text'>
                        Subscreva a nossa newsletter e utilize o código <strong>BEMVINDO10</strong> no check-out! Receba em primeira mão novidades e descontos exclusivos.
                    </p>
                    <span className='span' ><strong> Homestory, a sua história mora aqui!</strong></span>
                </div>
                <div className="content">
                    <input className='email-input' type="email" placeholder="Inserir email"  />
                    <button className="button white" >Subscreva</button>
                </div>
            </div>
        </section>
    )
};

export default PopUp;