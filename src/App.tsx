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
      fill: "transparent",
      strokeColor1: "#aab3b2",
      strokeColor2: "#34ebe5",
      strokeWidth: "6",
    },
    text: {
      fill: "gray",
      textAnchor: "middle",
    },
    percentagevalue: 60,
  };
  return (
    <div>
      <ReactDonut configure={configure} />
    </div>
  );
}

export default App;
