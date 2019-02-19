import React from "react";

const SizeChart = ({ chart }) => (
  <React.Fragment>
    <div className="sizechart">Size Chart</div>
    <div>
      <table className="sizechart">
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
            <td className="faux-block">Chest</td>
            {chart
              .filter(word => word.bodyPart === "Chest")
              .map((x, key) => (
                <td key={key}>{x.measurement}</td>
              ))}
          </tr>
          <tr>
            <td className="faux-block">Sleeve Length</td>
            {chart
              .filter(word => word.bodyPart === "Sleeve Length")
              .map((x, key) => (
                <td key={key}>{x.measurement}</td>
              ))}
          </tr>
          <tr>
            <td className="faux-block">Waist</td>
            {chart
              .filter(word => word.bodyPart === "Waist")
              .map((x, key) => (
                <td key={key}>{x.measurement}</td>
              ))}
          </tr>
          <tr>
            <td className="faux-block">Inseam</td>
            {chart
              .filter(word => word.bodyPart === "Inseam")
              .map((x, key) => (
                <td key={key}>{x.measurement}</td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
);

export default SizeChart;
