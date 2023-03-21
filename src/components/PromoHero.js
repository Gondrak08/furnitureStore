const SideHero = ({background, title, buttonText})=>{
    return(
        <section className="promohero-container" style={{backgroundImage:`url(${background})`}} >
            <div className="content" >
                <h3 className="heading" >
                    {title}
                </h3>
                <div className="see-more-button-display">
                    <button className="button white" >{buttonText}</button>
                </div>
            </div>
        </section>
    )
}

export default SideHero;