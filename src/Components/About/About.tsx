import { useState, useEffect } from "react";

interface Props {}

const About: React.FC<Props> = () => {
  const [state, setState] = useState(undefined);
  useEffect(() => {}, []);

  return <>About</>;
};

export default About;
