import React from "react";

const SizeChart = ({ chart }) => (
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
          <td>Chest</td>
          {chart
            .filter(word => word.bodyPart === "Chest")
            .map((x, key) => (
              <td key={key}>{x.measurement}</td>
            ))}
        </tr>
        <tr>
          <td>Sleeve Length</td>
          {chart
            .filter(word => word.bodyPart === "Sleeve Length")
            .map((x, key) => (
              <td key={key}>{x.measurement}</td>
            ))}
        </tr>
        <tr>
          <td>Waist</td>
          {chart
            .filter(word => word.bodyPart === "Waist")
            .map((x, key) => (
              <td key={key}>{x.measurement}</td>
            ))}
        </tr>
        <tr>
          <td>Inseam</td>
          {chart
            .filter(word => word.bodyPart === "Inseam")
            .map((x, key) => (
              <td key={key}>{x.measurement}</td>
            ))}
        </tr>
      </tbody>
    </table>
  </div>
);

// SizeChart.propTypes = propTypes;
// SizeChart.defaultProps = defaultProps;
export default SizeChart;
