import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className="container center-div">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
