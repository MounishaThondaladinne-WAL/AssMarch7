import './App.css';
import TodoMainApp from './AssignmentMarch3/TodoMainApp';
import './AssignmentMarch3/TodoApp.css'
import Product from './ExamMarch4/Product';
import ShowProducts from './ExamMarch4/ShowProducts';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import ForumComponent from './AssignmentMarch7/ForumComponent';
function App() {
  return (
    <div>
      {/*<TodoMainApp/>*
      <BrowserRouter>
      <Link to ="/">Product App</Link><br/>
      <Link to ="/showproduct">Show Products</Link>
      <Routes>
      <Route path="/" element={<Product/>}>
      </Route>
      <Route path="/showproduct" element={<ShowProducts/>}/>
      </Routes>
      </BrowserRouter>*/}
      <ForumComponent/>
    </div>
  );
}
export default App;
