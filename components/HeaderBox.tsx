import React from "react";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title} {""}
        <span className="text-bankGradient">{user}</span>
      </h1>

      <p>{subtext}</p>
    </div>
  );
};

export default HeaderBox;
