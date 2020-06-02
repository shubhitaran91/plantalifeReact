import React from "react";
import TeamMembers from "../TeamMembers/TeamMembers";

const teamSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <!-- Section Heading --> */}
          <div className="section-heading text-center">
            <h2>OUR TEAM</h2>
            <p>A team of dedicated experienced professionals.</p>
          </div>
        </div>
      </div>
      <TeamMembers />
    </div>
  );
};

export default teamSection;
