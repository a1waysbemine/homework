import Business from './components/Business';
import Header from './components/Header';
import Social from './components/Social';
import Technology from './components/Technology';
import Visual from './components/Visual';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Visual />
            <Business />
            <Technology />
            <Social />
            <About />
            <Footer />
        </div>
    );
};

export default App;
