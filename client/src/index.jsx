import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SizeChart from "./components/SizeChart.jsx";
import Pav from "./components/Pav.jsx";

class Ac extends React.Component {
  constructor() {
    super();
    this.state = {
      chart: [{ bodyPart: "" }, { size: "" }, { measurement: "" }],
      info: [
        { _id: 0 },
        { link_to_image: "" },
        { star_rating: 0 },
        { review_count: 0 },
        { short_description: "" },
        { price: 0 }
      ]
    };
    this.getSizeChart = this.getSizeChart.bind(this);
    this.getPavs = this.getPavs.bind(this);
  }

  getSizeChart() {
    axios
      .get("http://localhost:3002/api/sizechart")
      .then(response => {
        // console.log(response.data);
        this.setState({ chart: response.data });
      })
      .catch(err => console.log(err));
  }

  getPavs() {
    axios
      .get("http://localhost:3002/api/pavs")
      .then(response => {
        // console.log(response.data);
        this.setState({ info: response.data });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    // const self = this;
    // self.getSizeChart(data => self.setState({ chart: data }));
    this.getSizeChart();
    this.getPavs();
  }

  render() {
    return (
      <React.Fragment>
        <Pav info={this.state.info} />
        <SizeChart chart={this.state.chart} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Ac />, document.getElementById("ac"));
