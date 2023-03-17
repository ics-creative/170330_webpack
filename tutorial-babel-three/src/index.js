import "core-js/stable"; // 古いブラウザで動作するようにポリフィルを導入
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

window.addEventListener("DOMContentLoaded", () => {
  const VIEWPORT_W = window.innerWidth;
  const VIEWPORT_H = window.innerHeight;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer();
  // レンダラーのサイズを設定
  renderer.setSize(VIEWPORT_W, VIEWPORT_H);
  renderer.setPixelRatio(window.devicePixelRatio);
  // canvasをbodyに追加
  document.body.appendChild(renderer.domElement);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(
    45,
    VIEWPORT_W / VIEWPORT_H,
    1,
    10000
  );
  camera.position.set(0, 0, 1000);

  // カメラコントローラーを作成
  const controls = new OrbitControls(camera, renderer.domElement);

  // 滑らかにカメラコントローラーを制御する
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;

  // 箱を作成
  const geometry = new THREE.BoxGeometry(250, 250, 250);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const box = new THREE.Mesh(geometry, material);
  box.position.z = -5;
  scene.add(box);

  // 平行光源を生成
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);

  const tick = () => {
    requestAnimationFrame(tick);

    // カメラコントローラーを更新
    controls.update();

    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // 描画
    renderer.render(scene, camera);
  };
  tick();

  console.log("Hello Three.js");
});
