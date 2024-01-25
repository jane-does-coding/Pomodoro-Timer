import ReactSlider from "react-slider";
import "./slider.css";
import { useContext } from "react";
import SettingsContext from "./SettingsContext";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div style={{ textAlign: "left" }}>
      <label>Work minutes: {settingsInfo.workMinutes}</label>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />

      <label>Rest minutes: {settingsInfo.breakMinutes}</label>
      <ReactSlider
        className="slider green"
        thumbClassName="thumb"
        trackClassName="track"
        value={settingsInfo.breakMinutes}
        min={1}
        max={120}
      />
    </div>
  );
};

export default Settings;
