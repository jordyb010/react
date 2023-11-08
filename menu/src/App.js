import React, { useState } from "react";
import Menu from './menu';
import menu from "./data";

import "./App.css";

function App() {
  const [menuItems, setMenuItems] = useState(menu);

  console.log(menu);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>

          <div className="underline"></div>
        </div>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
