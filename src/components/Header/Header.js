/* eslint-disable jsx-a11y/alt-text */
import { MenuItem } from "@material-ui/core";
import i18next from "i18next";
import * as React from "react";
import { English, VietNam } from "../../common/assets/images";
import CustomPopover from "../../common/components/CustomPopover";
import "./Header.css";

const LANGUAGES = {
  VI: "vi",
  EN: "en",
};

function Header() {
  const [language, setLanguage] = React.useState("");

  function onChangeLanguage(value) {
    setLanguage(value);
    i18next.changeLanguage(value);
  }

  return (
    <div className="header-container">
      <div className="header">
        <h1>PNEUMONIA DETECTED</h1>

        <CustomPopover
          sx={{ p: 0, marginLeft: "auto" }}
          size="large"
          title={
            <img
              height={30}
              src={language === LANGUAGES.VI ? VietNam : English}
            />
          }
          showDropdownIcon={true}
          content={
            <>
              {Object.values(LANGUAGES).map((value) => (
                <MenuItem key={value} onClick={() => onChangeLanguage(value)}>
                  <img
                    height={30}
                    src={value === LANGUAGES.VI ? VietNam : English}
                    style={{ marginRight: 8 }}
                  />
                  {value === LANGUAGES.VI ? "Tiếng Việt" : "English"}
                </MenuItem>
              ))}
            </>
          }
          variant="text"
        />
      </div>
    </div>
  );
}

export default Header;
