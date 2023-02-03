import "./Header.css";
import * as React from "react";
import 'C:/Users/TA/OneDrive - Hanoi University of Science and Technology/Desktop/do an/web/src/i18n/i18n';
import i18next from "i18next";

function Header() {
  return (
    <div className="header">
      <h1>PNEUMONIA DETECTED</h1>
		  <button onClick={() => i18next.changeLanguage("en")} >
		  English
		  </button>
    
		  <button onClick={() =>  i18next.changeLanguage("vi")} >
		  Vietnamses
		  </button>

    </div>
  );
}

export default Header;
