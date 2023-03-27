const SideHero = ({background, title, buttonText, height, styleClass})=>{
 
    return(
        <section className={`promohero-container ${styleClass}`} style={{backgroundImage:`url(${background})`, height:`${height}`}} >
            <div className="content" >
                
                    {title ? (<h3 className="heading" >{title}</h3>):null}
                
                <div className="see-more-button-display">
                    <button className="button white" >{buttonText}</button>
                </div>
            </div>
        </section>
    )
}

export default SideHero;