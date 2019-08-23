import React from "react";
import { Pie } from "react-chartjs-2";

//Set Chart Option & Data structure
var Chart = {
  data: {
    labels: ["Video", "Picture", "Carousel"],
    datasets: [
      {
        data: null,
        backgroundColor: ["#E1306C", "#405DE6", "#F77737"],
        labels: "Medias Types"
      }
    ]
  },
  option: {
    responsive: true
  }
};

function MediasTypesPC(props) {
  var MTi = 0;
  var MTv = 0;
  var MTc = 0;
  props.data.Medias.edges.forEach(x => {
    switch (x.node.__typename) {
      case "GraphImage":
        MTi++;
        break;
      case "GraphVideo":
        MTv++;
        break;
      case "GraphSidecar":
        MTc++;
        break;
      default:
        break;
    }
  });
  Chart.data.datasets[0].data = [MTi, MTv, MTc];

  return (
    <div
      className="card igs-card card-2 border-0"
      style={{
        backgroundColor: "unset",
        backdropFilter: "saturate(80%) blur(4px)"
      }}
    >
      <div className="card-body">
        <Pie
          options={Chart.option}
          data={Chart.data}
          // legend={this.state.legend}
          height={192}
        />
      </div>
    </div>
  );
}
export default MediasTypesPC;
