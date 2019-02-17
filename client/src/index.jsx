import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SizeChart from "./components/SizeChart.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chart: [{ bodyPart: "" }]
    };
    this.getSizeChart = this.getSizeChart.bind(this);
  }

  getSizeChart() {
    axios
      .get("/api/sizechart")
      .then(response => {
        console.log(response.data);
        return this.setState({ chart: response.data });
        console.log(this.state.chart);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    // const self = this;
    // self.getSizeChart(data => self.setState({ chart: data }));
    this.getSizeChart();
  }

  render() {
    return (
      <div>
        <div className="chart">
          <SizeChart chart={this.state.chart} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
