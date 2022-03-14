import { Route, Routes } from "react-router-dom";
import './App.css';
import Preview from "./components/Preview";
import WebcamCapture from "./components/WebcamCapture";

function App() {
  return (
    <div className="app">
      <main className="app_body">
        <Routes>
          <Route path="/" element={<WebcamCapture />} />
          <Route path="preview" element={<Preview />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
