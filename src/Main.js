import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Homepage";
import Campaigns from "./Pages/Campaigns";
import Blueprint from "./Pages/Campaign";
import Laptop from "./Pages/Campaign2";
import Drinknator from "./Pages/Campaign3";
import Clean from "./Pages/Campaign4";

import Contact from "./Pages/Contact";

import hackathon from "./images/hackathon.jpeg";
import laptop from "./images/cs-header.jpeg";
import potions from "./images/potions.png";
import bratislava from "./images/bratislava.jpeg";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/campaigns" element={<Campaigns />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route
        exact
        path="/campaign/blueprint"
        element={
          <Blueprint data={{ raised: 300, required: 500 }} image={hackathon} />
        }
      ></Route>
      <Route
        exact
        path="/campaign/laptop"
        element={
          <Laptop data={{ raised: 729, required: 1400 }} image={laptop} />
        }
      ></Route>
      <Route
        exact
        path="/campaign/drinknator"
        element={
          <Drinknator data={{ raised: 325, required: 325 }} image={potions} />
        }
      ></Route>
      <Route
        exact
        path="/campaign/clean-bratislava"
        element={
          <Clean data={{ raised: 120, required: 450 }} image={bratislava} />
        }
      ></Route>
    </Routes>
  );
};

export default Main;
