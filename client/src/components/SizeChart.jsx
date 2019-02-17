import React from "react";
// import PropTypes from "prop-types";

// const propTypes = {};

// const defaultProps = {};

const SizeChart = props => (
  <div>
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
          <td>{props.chart[0].bodyPart}</td>
        </tr>
        <tr>
          <td>Sleeve Length</td>
        </tr>
        <tr>
          <td>Waist</td>
        </tr>
        <tr>
          <td>Inseam</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// SizeChart.propTypes = propTypes;
// SizeChart.defaultProps = defaultProps;
export default SizeChart;
