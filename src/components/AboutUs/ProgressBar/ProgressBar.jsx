import React from "react";
import Progress from "react-progressbar";

const progressBar = () => {
  const services = [
    {
      name: "Office plants",
      percentage: 75,
    },
    {
      name: "Field manager",
      percentage: 67,
    },
    {
      name: "Landscape design",
      percentage: 90,
    },
    {
      name: "Garden Care",
      percentage: 80,
    },
  ];
  return (
    <div className="plantalife-progress-bar mb-50">
      {services.map((service, index) => {
        return (
          <div key={index} className="single_progress_bar">
            <p>{service.name}</p>
            <div className="barfiller">
              <Progress completed={service.percentage} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default progressBar;
