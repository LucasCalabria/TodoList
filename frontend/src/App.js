import AddPage from "./pages/addPage";
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path = "/" element={<AddPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
