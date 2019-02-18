import React from "react";
// import PropTypes from "prop-types";

// const propTypes = {};

// const defaultProps = {};
const print = value => {
  console.log(value);
};
const SizeChart = ({ chart }) => (
  <div>
    {/* {print(chart)} */}
    <table>
      <thead>
        <tr>
          <th />
          <th>XXS</th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
          <th>XXL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chest</td>
          {chart.slice(0, 7).map(x => (
            <td>{x.measurement}</td>
          ))}
        </tr>
        <tr>
          <td>Sleeve Length</td>
          {chart.slice(8, 15).map(x => (
            <td>{x.measurement}</td>
          ))}
        </tr>
        <tr>
          <td>Waist</td>
          {chart.slice(16, 23).map(x => (
            <td>{x.measurement}</td>
          ))}
        </tr>
        <tr>
          <td>Inseam</td>
          {chart.slice(24, 28).map(x => (
            <td>{x.measurement}</td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

// SizeChart.propTypes = propTypes;
// SizeChart.defaultProps = defaultProps;
export default SizeChart;
