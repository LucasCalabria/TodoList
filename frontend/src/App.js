import { AddPage, EditPage }from "./pages";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path = "/add" element={<AddPage />} />
          <Route exact path = "/edit" element={<EditPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
