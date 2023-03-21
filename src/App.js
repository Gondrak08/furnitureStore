import {Navbar,Hero,PromoHero,Promotions, ArticleSection, Footer, ProductDisplay} from './components'
import './global.css';

import {ArrPromotions, Promotion} from './utils/promotions'

import {promoBackgroundOne,promoBackgroundTwo} from './utils/promoHeroData';





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
       />      
      <ArticleSection/>
      <PromoHero 
        background={promoBackgroundTwo.background} 
        title={promoBackgroundTwo.title} 
        buttonText={promoBackgroundTwo.btnText} 
       />
      <ProductDisplay/>

      <Footer/>
    </div>
  );
}

export default App;
