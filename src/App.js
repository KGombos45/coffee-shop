import './App.scss';
import "animate.css/animate.compat.css";
import AppBanner from './banner/banner';
import AppNavbar from './navbar/navbar';
import AppShop from './shop/shop';

function App() {
  return (
    <div>
      <AppNavbar/>
      <AppBanner/>
      <AppShop/>
    </div>
  );
}

export default App;
