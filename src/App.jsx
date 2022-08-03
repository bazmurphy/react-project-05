import React from "react";
import './App.css';

import Contact from "./components/Contact";

import mrWhiskerson from "./assets/mr-whiskerson.png";
import fluffykins from "./assets/fluffykins.png";
import felix from "./assets/felix.png";
import pumpkin from "./assets/pumpkin.png";

function App() {
  return (
    <div className="contacts">
      <Contact
        image={mrWhiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        image={fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        image={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        image={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;