import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import React, { useRef } from "react";
import EarthModel from "./EarthModel";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function EarthScene() {
  const earthRef = useRef(null);
  const camera = useRef(null);

  useFrame((state, delta) => {
    if (!earthRef.current) return;
    earthRef.current.rotation.y += delta * 0.2;
  });

  useGSAP(() => {
    if (!camera.current) return;
    if (!earthRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero_main",
          start: "top top",
          scrub: 3,
          anticipatePin: 1,
          pin: true,
        },
      })
      .to("#hero_main", {
        filter: `blur(40px)`,
        autoAlpha: 0,
        scale: 0.5,
        duration: 2,
        ease: "power1.inOut",
      })
      .to(
        camera.current.position,
        {
          y: 0.1,
          z: window.innerWidth > 768 ? 19 : 30,
          x: window.innerWidth > 768 ? 0 : 0.1,
          duration: 4,
          ease: "power1.inOut",
        },
        "<0.3",
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top top",
          scrub: 1,
          end: "+=200%",
          pin: true,
          anticipatePin: 1,
        },
      })
      .fromTo(
        "#about",
        {
          x: "100%",
          ease: "elastic.in",
        },
        {
          x: "-110%",
          ease: "none",
        },
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#features",
          start: "top top",
          scrub: 2,
          pin: true,
          anticipatePin: 1,
        },
      })
      .to("#features", {
        duration: 0.5,
      })
      .to("#features", {
        x: "-110%",
        duration: 2,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#visual_break",
          start: "top top",
          scrub: 1,
          end: "+=200%",
          pin: true,
          anticipatePin: 1,
        },
      })
      .fromTo(
        "#visual_break",
        {
          x: "110%",
          ease: "none",
        },
        {
          x: "-110%",
          ease: "none",
        },
      );

  }, []);

  return (
    <>
      {/* Soft global light */}
      <ambientLight intensity={0.4} />

      {/* Sun light */}
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[0, 1.25, 5]}
        fov={18}
        far={1000}
        near={0.1}
      />

      {/* HDR lighting for realism */}
      <Environment preset="city" />

      <group ref={earthRef} position={[0, 0, 3]}>
        <EarthModel />
      </group>
    </>
  );
}

export default EarthScene;
