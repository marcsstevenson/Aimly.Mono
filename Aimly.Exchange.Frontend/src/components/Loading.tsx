import React from "react";
import loading from "assets/loading.svg";

const Loading = () => (
  <div className="z-50 absolute flex justify-center h-screen x-screen top-0 bottom-0 right-0 left-0">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
