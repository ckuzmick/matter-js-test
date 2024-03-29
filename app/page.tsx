'use client'

import Image from 'next/image';
import { useEffect, useRef } from 'react';
const Matter = require('matter-js');

export default function Home() {
  useEffect(() => {
    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    // create an engine
    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
      element: document.body,
      engine: engine
    });

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    var bar = Bodies.rectangle(200, 100, 80, 200)

    // add all of the bodies to the world
    Composite.add(engine.world, [boxA, boxB, ground, bar]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
  });

  return (
    <main>
      
    </main>
  )
}
