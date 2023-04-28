import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import GetStudent from './views/GetStudent';
import CreateStudent from './views/CreateStudent';


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GetStudent />} />
        <Route path="/two" element={<CreateStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;