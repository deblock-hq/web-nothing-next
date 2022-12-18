"use client";
import React, { useRef, useEffect } from "react";
// @ts-ignore
import { spline } from "../../utils/spline";
import { createNoise2D } from "simplex-noise";

const Blob = ({ className, color }: { className: string; color: string }) => {
  const ref = useRef(null);
  const noise2D = createNoise2D();
  let path: any;

  useEffect(() => {
    // path = document.querySelector("path");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    path = ref.current;
    const points: any = createPoints();
    let noiseStep = 0.0005;

    function animate() {
      path.setAttribute("d", spline(points, 1, true));

      // for every point...
      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
        const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

        // update the point's current coordinates
        point.x = x;
        point.y = y;

        // progress the point's x, y values through "time"
        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }

      requestAnimationFrame(animate);
    }
    animate();

    //   const simplex = new SimplexNoise();

    function map(
      n: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number
    ) {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    function noise(x: number, y: number) {
      const value2d = noise2D(x, y);
      return value2d;
    }

    function createPoints() {
      const points = [];
      // how many points do we need
      const numPoints = 6;
      // used to equally space each point around the circle
      const angleStep = (Math.PI * 2) / numPoints;
      // the radius of the circle
      const rad = 75;

      for (let i = 1; i <= numPoints; i++) {
        // x & y coordinates of the current point
        const theta = i * angleStep;

        const x = 100 + Math.cos(theta) * rad;
        const y = 100 + Math.sin(theta) * rad;

        // store the point's position
        points.push({
          x: x,
          y: y,
          // we need to keep a reference to the point's original point for when we modulate the values later
          originX: x,
          originY: y,
          // more on this in a moment!
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
        });
      }

      return points;
    }
  }, [ref.current]);

  return (
    <div className={`Blob ${className}`}>
      <svg viewBox="0 0 200 200">
        <path ref={ref} d="" fill={color}></path>
      </svg>
    </div>
  );
};

export default Blob;
