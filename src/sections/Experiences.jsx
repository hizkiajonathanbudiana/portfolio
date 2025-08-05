// import { Timeline } from "../components/Timeline";
// import { experiences } from "../constants";
// const Experiences = () => {
//   return (
//     <div className="w-full">
//       <Timeline data={experiences} />
//     </div>
//   );
// };

// export default Experiences;

import React from "react";
import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const ExperiencesComponent = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

const Experiences = React.memo(ExperiencesComponent);
export default Experiences;
