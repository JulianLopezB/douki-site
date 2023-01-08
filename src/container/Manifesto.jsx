import React from 'react'
// import { useContext } from "react"
// import SearchField from "../components/SearchField";
import ManifestoComp from "../components/ManifestoComp";
import NavigationBar from "../components/NavigationBar";

const Manifesto = ({ children }) => {
  
    return (
      <div 
        style={{
        'top': "0px",
        'position': "sticky",
        'width': "100%",
        'lg-height': "96px",
        // 'sm-height': "150px",
        'z-index':'10'
        }}
        className="bg-gray-50"
        >
        <NavigationBar>
            { children }
        </NavigationBar>
        <ManifestoComp />
      </div>
    );
  }
  
export default Manifesto;
  