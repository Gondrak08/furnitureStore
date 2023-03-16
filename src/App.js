import {Navbar,Hero,Promotions, Footer} from './components'
import './global.css';

import {ArrPromotions, Promotion} from './utils/promotions'

// console.log('arrPromotions',ArrPromotions)

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


      <Footer/>
    </div>
  );
}

export default App;
