import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Component
import Navebar from "./components/Navbar/Navebar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navebar />
        <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
