import React from "react";

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-500 rounded-full"
          style={{ width: `${progress}%` }}
        >
            
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
