
import "./css/main.css";
// import { HelloWorld } from "./components/HelloWorld";
import { ListWork } from "./components/List";
import { ListRedux } from "./components/ListRedux";
function App() {
  return (
    <div className="flex justify-evenly pt-4">
    <ListWork></ListWork>
    <ListRedux/>
    </div>
  );
}

export default App;
