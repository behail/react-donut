import "./App.css";
import { ReactDonut } from "./lib";
function App() {
  const configure = {
    svg: {
      width: "80",
      height: "80",
    },
    circle: {
      cx: "50",
      cy: "25",
      radius: 20,
      fill: "red",
      strokeColor1: "gray",
      strokeColor2: "blue",
      strokeWidth: "6",
    },
    text: {
      fill: "black",
      textAnchor: "middle",
    },
    percentagevalue: 60,
  };
  return (
    <div className="App">
      <ReactDonut configure={configure} />
    </div>
  );
}

export default App;
