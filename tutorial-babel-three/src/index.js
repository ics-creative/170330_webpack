import * as THREE from 'three';

window.addEventListener('DOMContentLoaded', () => {

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
  const camera = new THREE.PerspectiveCamera(45, VIEWPORT_W / VIEWPORT_H, 1, 1000);

  // 箱を作成
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({color: 0xff0000});
  const box = new THREE.Mesh(geometry, material);
  box.position.z = -5;
  scene.add(box);

  // 平行光源を生成
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);

  const tick = () => {
    requestAnimationFrame(tick);

    box.rotation.x += 0.05;
    box.rotation.y += 0.05;

    // 描画
    renderer.render(scene, camera);
  };
  tick();
});
