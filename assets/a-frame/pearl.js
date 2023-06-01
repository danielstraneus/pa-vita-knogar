function pearl() {
  document.getElementById("frame").innerHTML += `
  <a-scene embedded vr-mode-ui="enabled: false"">
  </a-entity>
    <a-entity camera look-controls position="19 1 0 " enabled="false" pointerLockEnabled="true" mouseEnabled="false" touchEnabled="false">
      <a-sphere
        material=" src: assets/images/pearl.png; opacity: 1; roughness: 0.5; metalness: 0.4"
        position="0.7 1.50 -30"
        radius="10"
        opacity="0.5"
        color="#ffffff"
        animation="property: rotation; to: 0 360 360; dur: 9000; delay: 500; easing: linear; loop: true"
      ></a-sphere>
    </a-entity>
  </a-scene>
`;
}

export { pearl };
