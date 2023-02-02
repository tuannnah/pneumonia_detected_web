// import { select } from "@material-ui/core";
import { Button } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useState } from "react";
import "./Detection.css";

function Detection() {
  const [result, setResult] = useState(null);
  const [files, setFiles] = useState(null);
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
      const URL__ENDPOINT = "http://localhost:5000/predict";
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

  return (
    <div className="detection">
      <h2>PNEUMONIA DETECTOR</h2>
      <p className="detection__help">
        <span style={{ color: "blue" }}>How it works: </span>Click the{" "}
        <strong style={{ color: "blue" }}>UPLOAD</strong> image button to upload
        the image and Click the{" "}
        <strong style={{ color: "blue" }}>DETECT</strong> button to get the
        result.
      </p>
      {/* <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          margin: "20",
        }}
      > */}
        {/* <select className="detection__uploadDetectUpload">
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
          <option value="otherOption">Other option</option>
          <option value="otherOption">Other option</option>
          <option value="otherOption">Other option</option>
        </select> */}
      {/* </div> */}
      <img id="imageChoose" height={224} width={224} alt=""></img>
      {/* <div className="detection__sampleInputs">
				<h3>Sampleggggg Inputs</h3>
				<div className="detection__sampleInputsImages">
					<img src="https://www.radiologyinfo.org/gallery-items/images/chest-xray.jpg" alt="" />
					<img
						src="https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg"
						alt=""
					/>
				</div>
			</div> */}

      <div className="detection__uploadDetect">
        {/* upload */}
		<select className="detection__uploadDetectUpload">
          <option className="detection__uploadDetectUpload" value="someOption">model 1</option>
          <option className="detection__uploadDetectUpload" value="otherOption">model 1</option>
          <option className="detection__uploadDetectUpload" value="otherOption">model 1</option>
          <option className="detection__uploadDetectUpload" value="otherOption">model 1</option>
          <option className="detection__uploadDetectUpload" value="otherOption">model 1</option>
        </select>
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
          <p> Result: {result}</p>
        </div>
      )}
    </div>
  );
}

export default Detection;
