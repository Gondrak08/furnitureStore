const Footer = ()=>{

    return(
        <footer className="footer" >
            <div className="footer-container">
                <div className="footerGrid" >
                    <div className="col-1">
                        <h3>Sobre a Home Store</h3>
                        <p>A Home Story é uma loja de mobiliário e decoração criada para enriquecer casas com personalidade, preenchidas com amor, que elegem origens e deixam entrar inspirações. Porque todas as casas têm uma história para contar e a nossa história é a sua.</p>
                        <span>
                            homestore@homestore.com
                        </span>
                    </div>
                    <div className="col-2">
                        <h3>Loja</h3>
                        <div className="links" >
                            {['Faça uma visita virtual à nossa loja','Procure no website','Quem somos','Onde estamos','Promoções e Códigos Desconto', 'Trocas e Devoluções','Políticas de Envios'].map((link, index)=>(
                                <a  href="#" key={index}>{link}</a>
                            ))}
                        </div>
                    </div>
                    <div className="col-3">
                        <h3>Suporte e ajuda</h3>
                        <div className="links">
                            {
                                ['Fale conosco','Livro de Reclamações','Informação Legal', 'Cartão Continente','Política de Cookies','Termos e Condições','Política de reembolso','Perguntas Frequentes','Envio de Encomendas'].map((links,index)=>(
                                    <a href="#" key={index} >
                                        {links}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-4">
                        <h3>NEWSLETTER</h3>
                        <div className="content">
                            <span>Fique a par de todas as novidades!</span>
                            <button>SUBSCREVER</button>
                        </div>
                    </div>
                    <div className="col-5 dead-col" />
                </div>
                <div className="madeBy" >
                    <span>Demo website made by @vitorAlecrim</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer;