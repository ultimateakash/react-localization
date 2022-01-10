import './App.css';
import HeaderComponent from './components/comman/header.component';
import HomeComponent from './components/pages/home.component';

function App() {
	return (
		<>
			<HeaderComponent />
			<div className="container">
				<HomeComponent />
			</div>
		</>
	);
}

export default App;
