import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_page from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home_page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
