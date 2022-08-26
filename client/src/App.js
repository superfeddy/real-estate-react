// External Dependencies
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Internal Dependencies
import store from "./store";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
