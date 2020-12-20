import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import Home from "../components/Home";
import {
  LAYOUT_HEIGHT,
  LAYOUT_WIDTH,
  BOX_WIDTH,
  BOX_HEIGHT,
  BACKGROUND_COLOR,
  EXPORT_DEFAULT_PIXEL_RATIO,
  TEAL_DARKEN_COLOR,
  RED_DARKEN_COLOR,
} from "../constants/layout";
import { DragControls } from "../shared/Control/DragControls";

const HomePage = () => {
  const layoutRef = useRef(null);
  let camera, scene, renderer;
  let controls, group;
  const objects = [];

  useEffect(() => {
    initializeLayout();
  }, []);

  function initializeCamera() {
    camera = new THREE.PerspectiveCamera(
      50,
      1,
      LAYOUT_WIDTH / LAYOUT_HEIGHT,
      5000
    );
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(BACKGROUND_COLOR);

    scene.add(new THREE.AmbientLight(0x505050));
    const light = new THREE.SpotLight(0xffffff, 1.5);
    light.position.set(0, 500, 2000);
    light.angle = Math.PI;

    light.castShadow = true;
    light.shadow.camera.near = 1000;
    light.shadow.camera.far = 4000;
    light.shadow.mapSize.width = LAYOUT_WIDTH;
    light.shadow.mapSize.height = LAYOUT_HEIGHT;

    scene.add(light);
  }

  function initializeLayoutObject() {
    group = new THREE.Group();
    scene.add(group);
    const geometry = new THREE.PlaneGeometry(BOX_WIDTH, BOX_HEIGHT);
    for (let i = 0; i < 5; i++) {
      const object = new THREE.Mesh(
        geometry,
        new THREE.MeshLambertMaterial({ color: 0x00695c })
      );

      object.position.x = (Math.random() - 0.5) * 700;
      object.position.y = (Math.random() - 0.5) * 700;

      scene.add(object);
      objects.push(object);
    }
  }

  function initializeLayout() {
    initializeCamera();
    initializeLayoutObject();

    renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setPixelRatio(EXPORT_DEFAULT_PIXEL_RATIO);
    renderer.setSize(LAYOUT_WIDTH, LAYOUT_HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    layoutRef.current.appendChild(renderer.domElement);
    controls = new DragControls([...objects], camera, renderer.domElement);
    controls.addEventListener("drag", render);
    render();
  }

  function handleOutOfBox() {
    scene.children = scene.children.map((objectDetail) => {
      const { position } = objectDetail;
      const isOutOfBox: boolean =
        position.x > 405 ||
        position.x < -405 ||
        position.y > 405 ||
        position.y < -405;

      if (isOutOfBox && objectDetail.material) {
        objectDetail.material.color = new THREE.Color(RED_DARKEN_COLOR);
      }
      if (!isOutOfBox && objectDetail.material) {
        objectDetail.material.color = new THREE.Color(TEAL_DARKEN_COLOR);
      }
      return objectDetail;
    });
  }

  function render() {
    handleOutOfBox();
    renderer.render(scene, camera);
  }

  return (
    <>
      <Home layoutRef={layoutRef} />
    </>
  );
};

export default HomePage;
