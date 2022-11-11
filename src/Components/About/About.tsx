import { Container } from "@mantine/core";
import React, { useState, useEffect } from "react";

interface Props {}

const About: React.FC<any> = ({ innerRef }) => {
  return (
    <div
      className="intro"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100vw",
        height: "100vh",
      }}
      ref={innerRef}
    >
      About!
    </div>
  );
};

export default About;
