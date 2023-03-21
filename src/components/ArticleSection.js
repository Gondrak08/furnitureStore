import ImageOne from '../assets/articleOne.png';
import ImageTwo from '../assets/articleTwo.webp'
import ImageThree from '../assets/articleThree.webp';



const Articles = [
    {
        image: ImageOne,
        title: 'Como decorar a sua casa neste natal',
        description: "IDEIAS E DICAS DE DECORAÇÃO NATALÍCIA O encanto e magia da época natalícia são contagiantes e impossíveis de ignorar.No Natal, o brilho e a criati...",
        link: "#"
    },
    {
        image: ImageTwo,
        title: '10 sugestões de presentes para o natal',
        description: "Os dias mágicos da época natalícia aproximam-se e, com eles, surge a oportunidade extra de presentearmos aqueles com quem fomos criando boas memóri...",
        link: "#"
    },
    {
        image: ImageThree,
        title: 'bohotanic - nova coleção',
        description: "A coleção Bohotanic abre as portas para a natureza entrar em casa. Inspirada na exuberância da flora tropical esta coleção alegra os espaços, com u...",
        link: "#"
    }
];

const ArticleCard = (prop) => {
    const { image, title, description, link } = prop.article;

    return (
        <div className='card'>
            <div className='image-container'>
                <div className='AspectRatio' >
                    <img src={image} />
                </div>
            </div>
            <div className='content'>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} >ler mais</a>
            </div>
        </div>
    )
};

const ArticleSection = () => {
    return (
        <section className='article-section'>
            <div className='container'>
                <div className='head'>
                    <h3>
                        as nossas histórias
                    </h3>
                    <span>mobiliário e decoração</span>
                </div>
                <div className='grid' >
                    {Articles.map((article, index) => (
                        <div className='col' key={index} >
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>
                <div className="see-more-button-display">
                    <button className="button" >Visitar Blog</button>
                </div>
            </div>
        </section>
    )
};

export default ArticleSection;