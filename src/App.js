import {Navbar,Hero,PromoHero,Promotions, ArticleSection, Footer, ProductDisplay} from './components'
import './global.css';

import {ArrPromotions, Promotion} from './utils/promotions'

import {promoBackgroundOne,promoBackgroundTwo, promoBackgroundThree} from './utils/promoHeroData';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>    
      </header>
      {/* <Promotions  /> */}
      <Promotions promotion={ArrPromotions} />
      <Promotions promotion={Promotion} />
      <PromoHero 
        background={promoBackgroundOne.background} 
        title={promoBackgroundOne.title} 
        buttonText={promoBackgroundOne.btnText} 
        height={null} 

       />      
      <ArticleSection/>
      <PromoHero 
        background={promoBackgroundTwo.background} 
        title={promoBackgroundTwo.title} 
        buttonText={promoBackgroundTwo.btnText} 
        height={null} 

       />
      <ProductDisplay/>
      <PromoHero 
        background={promoBackgroundThree.background} 
        title={null} 
        buttonText={promoBackgroundThree.btnText}
        height={"25em"} 
      />
      <Footer/>
    </div>
  );
}

export default App;
