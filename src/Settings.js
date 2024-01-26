import ReactSlider from "react-slider";
import "./slider.css";
import { useContext } from "react";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <>
      <div className="settings-box" style={{ textAlign: "left" }}>
        <h2>Settings</h2>
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
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={1}
          max={120}
        />
      </div>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </>
  );
};

export default Settings;
