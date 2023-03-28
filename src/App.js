import {useState} from 'react';

import {
  Navbar,
  SideBar,
  Hero,
  PromoHero,
  Promotions,
  ArticleSection,
  Footer,
  ProductDisplay,
  PopUp,
  ShopCart 
} from './components'
import './global.css';

import {ArrPromotions, Promotion} from './utils/promotions'

import {
  promoBackgroundOne,
  promoBackgroundTwo, 
  promoBackgroundThree
} from './utils/promoHeroData';

function App() {
  const[isShoppingCart, setIsShoppingCart] = useState(false);
  const [isSideMenu, setIsSideMenu] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar setIsOpen={setIsShoppingCart}  setIsMenu={setIsSideMenu} />
        <Hero/>    
      </header>
      <Promotions promotion={ArrPromotions} />
      <Promotions promotion={Promotion} />
      <PromoHero 
        background={promoBackgroundOne.background} 
        title={promoBackgroundOne.title} 
        buttonText={promoBackgroundOne.btnText} 
        height={null} 
        styleClass={null}
       />      
      <ArticleSection/>
      <PromoHero 
        background={promoBackgroundTwo.background} 
        title={promoBackgroundTwo.title} 
        buttonText={promoBackgroundTwo.btnText} 
        height={null} 
        styleClass={null}
       />
      <ProductDisplay/>
      <PromoHero 
        background={promoBackgroundThree.background} 
        title={null} 
        buttonText={promoBackgroundThree.btnText}
        height={"25em"}
        styleClass={"bottom-hero"} 
      />
      <Footer/>
      <PopUp/>
      <ShopCart isOpen={isShoppingCart} setIsOpen={setIsShoppingCart} />
      <SideBar isOpen={isSideMenu} setIsOpen={setIsSideMenu} />
    </div>
  );
}

export default App;
