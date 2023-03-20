import {Navbar,Hero,SideHero,Promotions, ArticleSection, Footer} from './components'
import './global.css';

import {ArrPromotions, Promotion} from './utils/promotions'

import {sideBackgroundOne} from './utils/sideHeroData';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>    
      </header>
      {/* <Promotions  /> */}
      <Promotions promotion={ArrPromotions} />
      <SideHero 
        background={sideBackgroundOne.background} 
        title={sideBackgroundOne.title} 
        buttonText={sideBackgroundOne.btnText} 
       />
      <Promotions promotion={Promotion} />
      
      <ArticleSection/>

      <Footer/>
    </div>
  );
}

export default App;
