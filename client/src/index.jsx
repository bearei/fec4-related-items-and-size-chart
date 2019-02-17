import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SizeChart from "./components/SizeChart.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chart: []
    };
  }

  getSizeChart() {
    axios
      .get("/api/sizechart")
      .then(response => {
        this.setState({ chart: response.data });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getSizeChart();
  }
  render() {
    return (
      <div>
        <div className="chart">
          <SizeChart sizes={this.state.chart} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
