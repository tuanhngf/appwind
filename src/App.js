import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './views/About';
import Blog from './views/Blog';
import Contact from './views/Contact';
import Download from './views/Download';
import FAQ from './views/FAQ';
import Features from './views/Features';
import Feedback from './views/Feedback';
import Hero from './views/Hero';
import HowWorks from './views/HowWorks';
import Partner from './views/Partner';
import Pricing from './views/Pricing';

function App() {
	return (
		<div className='App'>
			<Navbar/>
			<Hero />
			<Features/>
			<About/>
			<HowWorks/>
			<Download/>
			<Pricing/>
			<Feedback/>
			<FAQ/>
			<Blog/>
			<Partner/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;
