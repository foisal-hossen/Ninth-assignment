import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer'
export const DataContext = createContext("");

const Main = () => {
  const loaddata = useLoaderData();
  return (
    <div>
      <DataContext.Provider value={loaddata}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </DataContext.Provider>
      
    </div>
  );
};

export default Main;