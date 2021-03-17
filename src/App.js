import './App.scss';
import "animate.css/animate.compat.css";
import AppBanner from './banner/banner';
import AppNavbar from './navbar/navbar';
import AppShop from './shop/shop';
import AppWholeSale from './wholesale/wholesale';
import AppAbout from './about/about';

function App() {
  return (
    <div>
      <AppNavbar/>
      <AppBanner/>
      <AppShop/>
      <AppWholeSale/>
      <AppAbout/>
    </div>
  );
}

export default App;
