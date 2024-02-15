
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { ErrorPage } from './pages/Error/Error';
import { MyProvider } from './utils/ContextProvider';
import { ContactPage } from './pages/contact/contact';
import { ShopPage } from './pages/Shop/shop';
import { NavbarFashe } from './layouts/header';
import { FooterFashe } from './layouts/footer';
function App() {
    return (

    <MyProvider>
        <NavbarFashe/>
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes >
        <FooterFashe/>

    </MyProvider>
);
}
export default App;

