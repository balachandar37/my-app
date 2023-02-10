import { BrowserRouter, Routes, Route} from "react-router-dom";
import Counter from "./components/Counter";
import GoRestApi from "./components/GoRestApi";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route exact path="/api" element={<GoRestApi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
