import React from "react";
import animation from "../assets/Animation.gif";
import animation2 from "../assets/giphy.gif";
function NoData() {
  return (
    <div className="flex flex-col justify-center gap-6 h-full min-h-[80vh] items-center bg-slate-800 border border-slate-700 w-[45vw]  rounded-md">
      <div>
        <img src={animation2} className="w-40" alt="no"></img>
      </div>
      <div>
        <div className="text-center my-2 font-bold text-lg">No Data Found</div>
        <div className="text-center my-2">We couldn't find any item based.</div>
      </div>
    </div>
  );
}

export default NoData;
