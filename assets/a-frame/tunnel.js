function tunnel() {
  setTimeout(() => {
    document.getElementById("frame-2").innerHTML += `
    <a-scene embedded vr-mode-ui="enabled: false"">
        <a-entity
          light="color: #ff0000; intensity: 7"
          position="80 -5 -5"
          animation="property: position; from: 20 -20 20; to: -20 -20 -20; dur: 3000; dir: alternate; easing: linear; loop: true"
        ></a-entity>

        <a-entity
        light="color: #00ccdd; intensity: 7"
        position="40 15 -5"
        animation="property: position; from: 30 20 -5; to: -30 -20 30; dur: 7000; dir: alternate; easing: linear; loop: true"
      ></a-entity>
        <a-entity
        light="color: #0000ff; intensity: 4"
        position="-10 5 -5"
        animation="property: position; from: -10 5 -5; to: 20 -20 20; dur: 4000; dir: alternate; easing: linear; loop: true"
      ></a-entity>

        <a-entity
          camera
          look-controls
          enabled="false" pointerLockEnabled="true" mouseEnabled="false" touchEnabled="false"
          position="0 0 0"
          rotation="0 0 0"
          animation="property: position; from: 0 0 1000; to: 0 0 -17500; dur: 119000; easing: easeInOutQuad; dir: forwards; loop: false"
          animation__2="property: rotation; from: 0 0 0; to: 0 0 0; dur: 60000; easing: easeInOutCirc; dir: alternate; loop: true"
        ></a-entity>

        <a-entity
          position="0 0 -4000"
          geometry="primitive: torusKnot; p: 357 q: 210; radius: 1200; radiusTubular: 6; segmentsRadial: 103; segmentsTubular: 241;"
          material="src: assets/images/pearl.png; opacity: 1; roughness: 0.5; metalness: 0.5; color: #302f2f;"
          animation="property: rotation; from: 0 0 0; to: 0 0 1440; dur: 40000; easing: easeInOutCirc; loop: true"
        ></a-entity>

        <a-entity
          position="0 0 -5000"
          geometry="primitive: torusKnot; p: 146 q: 610; radius: 1200; radiusTubular: 5.5; segmentsRadial: 103; segmentsTubular: 241;"
          material="src: assets/images/pearl.png; opacity: 1; roughness: 0.5; metalness: 0.5; color: #302f2f;"
          animation="property: rotation; from: 0 0 0; to: 0 0 -1440; dur: 40000; easing: easeInOutCirc; loop: true"
        ></a-entity>
        <a-entity
          position="0 0 -6000"
          geometry="primitive: torusKnot; p: 146 q: 610; radius: 1200; radiusTubular: 5; segmentsRadial: 103; segmentsTubular: 241;"
          material="src: assets/images/pearl.png; opacity: 1; roughness: 0.5; metalness: 0.5; color: #302f2f;"
          animation="property: rotation; from: 0 0 0; to: 0 0 1440; dur: 40000; easing: easeInOutCirc; loop: true"
        ></a-entity>
        <a-entity
          position="0 0 -7000"
          geometry="primitive: torusKnot; p: 146 q: 610; radius: 1200; radiusTubular: 4.5; segmentsRadial: 13; segmentsTubular: 241;"
          material="src: assets/images/pearl.png; opacity: 1; roughness: 0.5; metalness: 0.5; color: #302f2f;"
          animation="property: rotation; from: 0 0 0; to: 0 0 -1440; dur: 40000; easing: easeInOutCirc; loop: true"
        ></a-entity>
        <a-entity
          position="0 0 -8000"
          geometry="primitive: torusKnot; p: 146 q: 610; radius: 1200; radiusTubular: 4; segmentsRadial: 103; segmentsTubular: 241;"
          material="src: assets/images/pearl.png; opacity: 1; roughness: 1; metalness: 0; color: #302f2f;"
          animation="property: rotation; from: 0 0 0; to: 0 0 1440; dur: 40000; easing: easeInOutCirc; loop: true"
        ></a-entity>
        <a-entity
          position="0 0 -9000"
          geometry="primitive: torusKnot; p: 146 q: 610; radius: 1200; radiusTubular: 3.5; segmentsRadial: 103; segmentsTubular: 241;"
          material="src: assets/images/pearl.png; opacity: 1; roughness: 0.1; metalness: 1; color: #302f2f;"
          animation="property: rotation; from: 0 0 0; to: 0 0 -1440; dur: 40000; easing: easeInOutCirc; loop: true"
        ></a-entity>
        <a-entity
          position="0 0 -10000"
          geometry="primitive: torusKnot; p: 146 q: 610; radius: 1200; radiusTubular: 3; segmentsRadial: 103; segmentsTubular: 241;"
          material="src: assets/images/pearl.png; opacity: 1; roughness: 0.1; metalness: 1; color: #302f2f;"
          animation="property: rotation; from: 0 0 0; to: 0 0 1440; dur: 40000; easing: easeInOutCirc; loop: true"
        ></a-entity>
        <a-entity
        position="0 0 -11000"
        geometry="primitive: torusKnot; p: 146 q: 910; radius: 2800; radiusTubular: 5; segmentsRadial: 102; segmentsTubular: 491;"
        material="src: assets/images/pearl.png; opacity: 1; roughness: 1; metalness: 0; color: #ffffff;"
        animation="property: rotation; from: 0 0 0; to: 0 0 1440; dur: 40000; easing: easeInOutCirc; loop: true"
      ></a-entity>
      <a-entity
          position="0 0 -16800"
          geometry="primitive: torusKnot; p: 41 q: 19; radius: 2033; radiusTubular: 2; segmentsRadial:10; segmentsTubular: 80;"
          material="src: assets/images/pearl.png; opacity: 1; roughness: 0; metalness: 1; color: #ffffff;"
          animation="property: rotation; from: 0 0 0; to: 0 0 -720; dur: 60000; easing: easeInOutCirc; loop: true"
        ></a-entity>
        <a-entity
        position="0 0 -17000"
        geometry="primitive: torus; radius: 650; radiusTubular: 2; segmentsRadial: 10; segmentsTubular: 320; arc: 360;"
        material="src: assets/images/pearl.png; opacity: 1; roughness: 0; metalness: 1; color: #ffffff;"
        animation="property: rotation; from: 0 0 0; to: 720 1440 -720; dur: 29000; easing: easeInOutCirc; loop: true"
      ></a-entity>
      <a-entity
      position="0 0 -17000"
      geometry="primitive: torus; radius: 650; radiusTubular: 2; segmentsRadial: 10; segmentsTubular: 320; arc: 360;"
      material="src: assets/images/pearl.png; opacity: 1; roughness: 0; metalness: 1; color: #ffffff;"
      animation="property: rotation; from: 0 0 0; to: 720 1440 -720; dur: 35000; easing: easeInOutCirc; loop: true"
    ></a-entity>
    <a-entity
    position="0 0 -17000"
    geometry="primitive: torus; radius: 650; radiusTubular: 2; segmentsRadial: 19; segmentsTubular: 320; arc: 360;"
    material="src: assets/images/pearl.png; opacity: 1; roughness: 0; metalness: 1; color: #ffffff;"
    animation="property: rotation; from: 0 0 0; to: 720 1440 -720; dur: 30000; easing: easeInOutCirc; loop: true"
  ></a-entity>
      </a-scene>
  `;
  }, 55000);
}

export { tunnel };
