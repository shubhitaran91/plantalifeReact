import React from "react";

const teamMembers = () => {
  const member = [
    {
      fbUrl: "https://www.facebook.com/jatinhijatin",
      instaUrl: "https://instagram.com/jatina997?igshid=1p6l8i04bhovf",
      name: "Jatin Arora",
      desg: "CEO & Founder",
    },
    {
      fbUrl: "https://www.facebook.com/profile.php?id=100025533876430",
      instaUrl: "https://www.instagram.com/gauravkeshwania/",
      name: "Gaurav Keshwania",
      desg: "Garden Designer",
    },
  ];
  return (
    <div className="row">
      {member.map((value, index) => {
        return (
          <div key={index} className="col-12 col-sm-6 col-lg-6">
            <div className="single-team-member text-center mb-100">
              <div className="team-member-thumb">
                {/* <img src={require("img/bg-img/team1.png")} alt="" /> */}
                <div className="team-member-social-info">
                  <a
                    href={value.fbUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  {/* <a>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a> */}
                  <a
                    href={value.instaUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>

                  {/* <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a> */}
                </div>
              </div>
              {/* <!-- Team Member Info --> */}
              <div className="team-member-info mt-30">
                <h5>{value.name}</h5>
                <p>{value.desg}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default teamMembers;
