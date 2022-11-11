import { Button, Center, Grid, Group, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/intro.css";

// interface Props {
//   toAbout: any;
// }

const Intro: React.FC<any> = ({ innerRef, toAbout }) => {
  // const [state, setState] = useState(undefined);
  // useEffect(() => {}, []);
  const navigate = useNavigate();

  return (
    // <Center style={{ width: 600, height: 400, backgroundColor: "grey" }}>
    <div className="intro" ref={innerRef}>
      <div className="IntroContent">
        <div className="IntroTyping">
          <p>Joseph Atlas</p>
          <p>Software Engineer</p>
          {/* <Title order={1}>Joseph Atlas</Title>
        <Title order={2}>Software Developer</Title>{" "} */}
        </div>
        <div className="NavButtons">
          <Group>
            <Button
              variant="subtle"
              size="md"
              compact
              onClick={toAbout}
              // onClick={() => navigate("/about")}
            >
              About
            </Button>
            <Button
              variant="subtle"
              size="md"
              compact
              onClick={() => navigate("/projects")}
            >
              Projects
            </Button>
          </Group>
        </div>
      </div>
    </div>
    // </Center>
  );
};

export default Intro;
