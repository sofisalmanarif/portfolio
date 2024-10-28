"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
  root
  options={{
    lerp: 0.1, // Lower value for smoother scrolling
    duration: 1.2, // Time in seconds for scroll transition
    smoothTouch: true, // Enable smooth touch scrolling
    smoothWheel: true, // Enable smooth wheel scrolling
    touchMultiplier: 2, // Adjust for touch devices
    wheelMultiplier: 1.0, // Adjust wheel scrolling sensitivity
  }}
>
  {children}
</ReactLenis>

  );
}

export default SmoothScrolling;