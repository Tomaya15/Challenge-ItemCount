import './App.css';
import ItemCount from './components/itemCount';


function App() {
  return (
    <div className="container">
      <ItemCount maxStock={7} productName={"Pantalones levis"}/>
      <ItemCount maxStock={10} productName={"Remera Hollister"}/>
      <ItemCount maxStock={3} productName={"Zapatillas Vans"}/>
    </div>
  );
}

export default App;
