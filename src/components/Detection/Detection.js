import * as React from "react";
import { Button } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useState } from "react";
import "./Detection.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {useTranslation} from 'react-i18next'

function Detection() {
  const {t} = useTranslation()
  const [result, setResult] = useState(null);
  const [files, setFiles] = useState(null);
  const [age, setAge] = React.useState("");
  
  var changeImage = (e) => {
    setResult(null);
    setFiles(e.target.files);
    console.log(files);
    var output = document.getElementById("imageChoose");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function free() {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  const uploadImage = () => {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      const URL__ENDPOINT = "http://localhost:5000/predict1";
      console.log(files[0]);
      const formData = new FormData();
      formData.append("file", files[0], files[0].name);
      // console.log(files[0]);
      axios.post(URL__ENDPOINT, formData).then((res) => {
        // console.log(res);
        setResult(res.data);
      });
    };
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="detection">
      <h2>{t('PNEUMONIA DETECTOR')}</h2>
      <p className="detection__help">
        <span style={{ color: "blue" }}>{t('How it works')}: </span>{t('Click the')}{" "}
        <strong style={{ color: "blue" }}>MODEL</strong> {t('to select model')},
        {t('click the')}{" "}
        <strong style={{ color: "blue" }}>UPLOAD</strong>  {t('to upload the image')}  <br/> {t('and click the')}{" "}
        <strong style={{ color: "blue" }}>DETECT</strong>{t("to get the result.")}  
      </p>
     
      <img id="imageChoose" height={280} width={280} alt=""></img>
      <div className="detection__uploadDetect">
        {/* upload */}
        <Box sx={{ minWidth: 120,borderRadius: '4px',border: 'none',marginTop:'10px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">MODEL</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Model"
              onChange={handleChange}
            >
              <MenuItem value={10} className="select_item">model 1</MenuItem>
              <MenuItem value={20} className="select_item">model 2</MenuItem>
              <MenuItem value={30}>model 3</MenuItem>
              <MenuItem value={40}>model 4</MenuItem>
              <MenuItem value={50}>model 5</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* <Select className="detection__select">
          <option className="detection__selectModel" value="someOption">MODEL 1</option>
          <option className="detection__selectModel" value="otherOption">model 1</option>
          <option className="detection__selectModel" value="otherOption">model 1</option>
          <option className="detection__selectModel" value="otherOption">model 1</option>
          <option className="detection__selectModel" value="otherOption">model 1</option>
        </Select> */}
        <Button className="detection__uploadDetectUpload">
          <label for="imageUpload">UPLOAD</label>
          <PublishIcon
            fontSize="small"
            className="detection__uploadDetectUploadIcon"
          />
        </Button>

        {/* input file */}
        <input
          style={{ display: "none" }}
          type="file"
          name="file"
          id="imageUpload"
          accept=".png, .jpg, .jpeg"
          onChange={changeImage}
        />

        {/* detect */}
        <Button className="detection__uploadDetectDetect" onClick={uploadImage}>
          DETECT
          <SearchIcon
            fontSize="small"
            className="detection__uploadDetectUploadIcon"
          />
        </Button>
      </div>
      {result && (
        <div
          className={
            result !== "Normal"
              ? "detection__resultPositive"
              : "detection__resultNegative"
          }
        >
          <p> {t('Result:')} {result} |{t('Percentage:')} 100% </p>
        </div>
      )}
    </div>
  );
}

export default Detection;
