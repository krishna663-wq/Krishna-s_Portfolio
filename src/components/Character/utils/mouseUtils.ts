import * as THREE from "three";

type FaceBoneState = {
  bone: THREE.Object3D;
  restRotation: THREE.Euler;
};

type FacialRig = {
  leftEye: FaceBoneState | null;
  rightEye: FaceBoneState | null;
  leftBrow: FaceBoneState | null;
  rightBrow: FaceBoneState | null;
  jaw: FaceBoneState | null;
  faceRoot: FaceBoneState | null;
};

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  if (!headBone) return;
  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    headBone.rotation.y = lerp(
      headBone.rotation.y,
      mouseX * maxRotation,
      interpolationY
    );
    const minRotationX = -0.3;
    const maxRotationX = 0.4;
    if (mouseY > minRotationX) {
      if (mouseY < maxRotationX) {
        headBone.rotation.x = lerp(
          headBone.rotation.x,
          -mouseY - 0.5 * maxRotation,
          interpolationX
        );
      } else {
        headBone.rotation.x = lerp(
          headBone.rotation.x,
          -maxRotation - 0.5 * maxRotation,
          interpolationX
        );
      }
    } else {
      headBone.rotation.x = lerp(
        headBone.rotation.x,
        -minRotationX - 0.5 * maxRotation,
        interpolationX
      );
    }
  } else {
    if (window.innerWidth > 1024) {
      headBone.rotation.x = lerp(headBone.rotation.x, -0.4, 0.03);
      headBone.rotation.y = lerp(headBone.rotation.y, -0.3, 0.03);
    }
  }
};

const FACE_BONE_PATTERNS = {
  leftEye: [
    /(^|[_\-.])eye[_\-.]?l($|[_\-.])/i,
    /left[_\-.]?eye/i,
    /eyel/i,
  ],
  rightEye: [
    /(^|[_\-.])eye[_\-.]?r($|[_\-.])/i,
    /right[_\-.]?eye/i,
    /eyer/i,
  ],
  leftBrow: [/eyebrow[_\-.]?l/i, /brow[_\-.]?l/i, /left[_\-.]?brow/i],
  rightBrow: [/eyebrow[_\-.]?r/i, /brow[_\-.]?r/i, /right[_\-.]?brow/i],
  jaw: [/jaw/i, /chin/i],
  faceRoot: [/head/i, /face/i, /spine006/i],
};

const findBone = (
  character: THREE.Object3D,
  patterns: RegExp[],
  excludes: RegExp[] = []
): THREE.Object3D | null => {
  let found: THREE.Object3D | null = null;

  character.traverse((object) => {
    if (found || !(object instanceof THREE.Bone)) return;

    const name = object.name.toLowerCase();
    const matches = patterns.some((pattern) => pattern.test(name));
    const isExcluded = excludes.some((pattern) => pattern.test(name));
    if (matches && !isExcluded) {
      found = object;
    }
  });

  return found;
};

const toState = (bone: THREE.Object3D | null): FaceBoneState | null => {
  if (!bone) return null;
  return { bone, restRotation: bone.rotation.clone() };
};

export const setupFacialRig = (character: THREE.Object3D): FacialRig => {
  const leftEye = findBone(character, FACE_BONE_PATTERNS.leftEye, [/brow/i]);
  const rightEye = findBone(character, FACE_BONE_PATTERNS.rightEye, [/brow/i]);
  const leftBrow = findBone(character, FACE_BONE_PATTERNS.leftBrow);
  const rightBrow = findBone(character, FACE_BONE_PATTERNS.rightBrow);
  const jaw = findBone(character, FACE_BONE_PATTERNS.jaw);
  const faceRoot =
    findBone(character, FACE_BONE_PATTERNS.faceRoot) ||
    character.getObjectByName("spine006") ||
    null;

  return {
    leftEye: toState(leftEye),
    rightEye: toState(rightEye),
    leftBrow: toState(leftBrow),
    rightBrow: toState(rightBrow),
    jaw: toState(jaw),
    faceRoot: toState(faceRoot),
  };
};

const smoothToRest = (
  state: FaceBoneState | null,
  lerp: (x: number, y: number, t: number) => number,
  speed: number
) => {
  if (!state) return;
  state.bone.rotation.x = lerp(state.bone.rotation.x, state.restRotation.x, speed);
  state.bone.rotation.y = lerp(state.bone.rotation.y, state.restRotation.y, speed);
  state.bone.rotation.z = lerp(state.bone.rotation.z, state.restRotation.z, speed);
};

export const handleFacialBones = (
  rig: FacialRig,
  mouseX: number,
  mouseY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  const settleSpeed = 0.06;
  if (window.scrollY > 200) {
    smoothToRest(rig.leftEye, lerp, settleSpeed);
    smoothToRest(rig.rightEye, lerp, settleSpeed);
    smoothToRest(rig.leftBrow, lerp, settleSpeed);
    smoothToRest(rig.rightBrow, lerp, settleSpeed);
    smoothToRest(rig.jaw, lerp, settleSpeed);
    smoothToRest(rig.faceRoot, lerp, settleSpeed);
    return;
  }

  const eyeYaw = THREE.MathUtils.clamp(mouseX * 0.4, -0.26, 0.26);
  const eyePitch = THREE.MathUtils.clamp(-mouseY * 0.28, -0.2, 0.2);
  const browLift = THREE.MathUtils.clamp((0.2 - mouseY) * 0.16, -0.05, 0.16);
  const browTilt = THREE.MathUtils.clamp(mouseX * 0.1, -0.08, 0.08);
  const jawOpen = THREE.MathUtils.clamp((mouseY + 0.35) * 0.12, -0.03, 0.07);
  const faceTilt = THREE.MathUtils.clamp(mouseX * 0.06, -0.06, 0.06);

  if (rig.leftEye) {
    rig.leftEye.bone.rotation.y = lerp(
      rig.leftEye.bone.rotation.y,
      rig.leftEye.restRotation.y + eyeYaw,
      0.12
    );
    rig.leftEye.bone.rotation.x = lerp(
      rig.leftEye.bone.rotation.x,
      rig.leftEye.restRotation.x + eyePitch,
      0.12
    );
  }

  if (rig.rightEye) {
    rig.rightEye.bone.rotation.y = lerp(
      rig.rightEye.bone.rotation.y,
      rig.rightEye.restRotation.y + eyeYaw,
      0.12
    );
    rig.rightEye.bone.rotation.x = lerp(
      rig.rightEye.bone.rotation.x,
      rig.rightEye.restRotation.x + eyePitch,
      0.12
    );
  }

  if (rig.leftBrow) {
    rig.leftBrow.bone.rotation.x = lerp(
      rig.leftBrow.bone.rotation.x,
      rig.leftBrow.restRotation.x - browLift,
      0.08
    );
    rig.leftBrow.bone.rotation.z = lerp(
      rig.leftBrow.bone.rotation.z,
      rig.leftBrow.restRotation.z + browTilt,
      0.08
    );
  }

  if (rig.rightBrow) {
    rig.rightBrow.bone.rotation.x = lerp(
      rig.rightBrow.bone.rotation.x,
      rig.rightBrow.restRotation.x - browLift,
      0.08
    );
    rig.rightBrow.bone.rotation.z = lerp(
      rig.rightBrow.bone.rotation.z,
      rig.rightBrow.restRotation.z - browTilt,
      0.08
    );
  }

  if (rig.jaw) {
    rig.jaw.bone.rotation.x = lerp(
      rig.jaw.bone.rotation.x,
      rig.jaw.restRotation.x + jawOpen,
      0.08
    );
  }

  if (rig.faceRoot) {
    rig.faceRoot.bone.rotation.z = lerp(
      rig.faceRoot.bone.rotation.z,
      rig.faceRoot.restRotation.z + faceTilt,
      0.04
    );
  }
};
