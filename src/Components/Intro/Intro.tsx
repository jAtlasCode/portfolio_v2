import { Button, Center, Grid, Group, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import "../../styles/intro.css";

interface Props {}

const Intro: React.FC<Props> = () => {
  // const [state, setState] = useState(undefined);
  // useEffect(() => {}, []);

  return (
    // <Center style={{ width: 600, height: 400, backgroundColor: "grey" }}>
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
    >
      <div
        style={{
          marginBottom: 16,
          textAlign: "center",
          // width: "30%",
          // height: "50%",
        }}
      >
        <Title order={1}>Joseph Atlas</Title>
        <Title order={2}>Software Developer</Title>{" "}
      </div>
      <div>
        <Group>
          <Button variant="subtle" size="md" compact>
            About
          </Button>
          <Button variant="subtle" size="md" compact>
            Projects
          </Button>
        </Group>
      </div>
    </div>
    // </Center>
  );
};

export default Intro;
