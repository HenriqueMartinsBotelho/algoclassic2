import React from "react";

const CommentsBox = () => {
  return (
    <div style={{ width: "40%" }}>
      <div
        style={{
          background: "rgb(52, 58, 70)",
          minHeight: "300px",
          padding: "14px",
          marginBottom: "100px",
          color: "white",
          // borderRadius: "10px",
        }}
      >
        <div className="text-2xl text-white  mb-6 flex justify-center">
          Comentários
        </div>
        <div className="bg-[rgba(25,147,147,0.2)] mb-4 p-2 rounded-tl-lg">
          <div className="text-white">Alice</div>
          <div className="text-[#0AD5C1] mt-1">
            lorem ipsum dolor sit amet, consectetur adip
          </div>
        </div>
        <div className="bg-[rgba(25,147,147,0.2)] mb-4 p-2 rounded-tl-lg">
          <div>Bob</div>
          <div className="text-[#0EC879]">
            lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Tenetur, hic iure natus maiores
            assumenda perferendis illum vitae recusandae fuga tempora, saepe
            facilis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsBox;
