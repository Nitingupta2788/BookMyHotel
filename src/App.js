import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotel from './pages/Hotel/Hotel';
import Login from './pages/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import { SearchContextProvider } from './context/SearchContext';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <SearchContextProvider>
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/hotel' element={<List />} />
//         <Route path='hotel/:id' element={<Hotel />} />
//       </Routes>
//     </Router>
//   </SearchContextProvider>
// );

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<List />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App