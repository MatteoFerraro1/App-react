import "./App.css"
import Navbar from "./components/navbar/Navbar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
function App() { 
  return(
<div> 
   <Navbar/>
   <ItemListContainer greeting="Bienvenidos a mi app"/>
</div>
  );
 }

export default App;
