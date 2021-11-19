import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// import Newsitem from './components/Newsitem';
import {
  BrowserRouter as Router,
  SWitch,
  Route,
  Link,}
  from "react-router-dom";

function App() {
  let pagesize=6;
  return (
    <>
    <Router>
    <Navbar/>
    <switch>
      <Route exact  path="/"><News pagesize={pagesize} country={"in"} catagory={"general"} /></Route>
      <Route exact path="/sports"><News pagesize={pagesize} country={"in"} catagory={"sports"} /></Route>
      <Route exact path="/entertainment"><News pagesize={pagesize} country={"in"} catagory={"entertainment"} /></Route>
      <Route exact path="/health"><News pagesize={pagesize} country={"in"} catagory={"health"} /></Route>
      <Route exact path="/business"><News pagesize={pagesize} country={"in"} catagory={"business"} /></Route>
      <Route exact path="/technology"><News pagesize={pagesize} country={"in"} catagory={"technology"} /></Route>
    </switch>
    </Router>
    </>
  );
}

export default App;
