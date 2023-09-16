import React from "react";
import AllRoutes from ".";
import { Route, Routes } from "react-router-dom";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {AllRoutes.map((item) => {
          return (
            <Route
              key={item.name}
              name={item.name}
              exact={true}
              path={item.path}
              element={<item.element />}
            />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
