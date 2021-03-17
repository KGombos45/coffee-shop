import './App.scss';
import "animate.css/animate.compat.css";
import AppBanner from './banner/banner';
import AppNavbar from './navbar/navbar';
import AppShop from './shop/shop';
import AppWholeSale from './wholesale/wholesale';
import AppAbout from './about/about';
import AppLearn from './learn/learn';
import AppVisit from './visit/visit';
import AppSubscribe from './subscribe/subscribe';
import AppContact from './contact/contact';
import AppFooter from './footer/footer';

function App() {
  return (
    <div>
      <AppNavbar/>
      <AppBanner/>
      <AppShop/>
      <AppWholeSale/>
      <AppAbout/>
      <AppLearn/>
      <AppVisit/>
      <AppSubscribe/>
      <AppContact/>
      <AppFooter/>
    </div>
  );
}

export default App;
