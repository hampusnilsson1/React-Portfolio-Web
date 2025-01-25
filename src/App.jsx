import React from "react";
import { useEffect, useState } from "react";
import UserSite from "./components/UserSite";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div style={{ position: "relative" }}>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "#0d47a1",
              },
              image: "linear-gradient(to top, #0d47a1, #1976d2)",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                },
                onHover: {
                  enable: false,
                },
                resize: {
                  enable: true,
                },
              },
            },
            particles: {
              collisions: {
                enable: true,
                mode: "bounce",
              },
              color: {
                value: "#ffffff",
              },
              move: {
                direction: "top",
                enable: true,
                outModes: {
                  default: "out",
                },
                speed: 0.3,
              },
              number: {
                value: 300,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: 1,
                  max: 2,
                },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <UserSite />
      </div>
    </div>
  );
}

export default App;
