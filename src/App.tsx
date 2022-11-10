import { useState, useRef } from "react";
import { Container, MantineProvider } from "@mantine/core";
import About from "./Components/About/About";
import Intro from "./Components/Intro/Intro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // colorScheme: "dark",
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
    >
      <div className="app">
        <Container size="xl">
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
          </Routes>
        </Container>
      </div>
    </MantineProvider>
  );
}

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      {/* <ArrowUpwardIcon
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
        fontSize="large"
      /> */}
    </>
  );
};

const routes = [
  {
    path: "",
    element: <Intro />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: "",
  },
  {
    path: "/contact",
    element: "",
  },
  // {
  //   path: "",
  //   element: "",
  // },
];
