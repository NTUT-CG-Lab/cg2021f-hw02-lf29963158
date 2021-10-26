import * as THREE from './build/three.module.js';

const leftEyeArray = new Array(4);
const rightEyeArray = new Array(4);
const leftEye = new Array(4);
const LeftEyeHorizenLineMaterial = new THREE.LineBasicMaterial({color: 0xff0000});
const LeftEyeVerticalLinematerial = new THREE.LineBasicMaterial({color: 0x00ff00});
const RightEyeHorizenLineMaterial = new THREE.LineBasicMaterial({color: 0xff00ff});
const RightEyeVerticalLinematerial = new THREE.LineBasicMaterial({color: 0x00ffff});

export class Eye{
    constructor(scene, intersects, pointZ, horizon, EyeIndex){//horizon: 水平為true垂直為false
        if(horizon){//畫橫線
            let points = [];
            let eyeXY = [intersects.x , intersects.y];  //存取眼睛座標
            leftEye[EyeIndex] = eyeXY;
            points.push(new THREE.Vector3(0, intersects.y, pointZ));
            points.push(new THREE.Vector3(1000, intersects.y, pointZ));

            let geometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineL = new THREE.Line(geometry, LeftEyeHorizenLineMaterial);
            lineL.name = EyeIndex;
            scene.add(lineL);
            leftEyeArray[EyeIndex] = lineL;

            points = [];
            points.push(new THREE.Vector3(0, intersects.y, pointZ));
            points.push(new THREE.Vector3(-1000, intersects.y, pointZ));

            geometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineR = new THREE.Line(geometry, RightEyeHorizenLineMaterial);
            lineR.name = EyeIndex;
            //scene.add(lineR);
            rightEyeArray[EyeIndex] = lineR;
        }
        else{//畫直線
            let points = [];
            let eyeXY = [intersects.x , intersects.y];  //存取眼睛座標
            leftEye[EyeIndex] = eyeXY;
            points.push(new THREE.Vector3(intersects.x, 0, pointZ));
            points.push(new THREE.Vector3(intersects.x, 1000, pointZ));

            let geometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineL = new THREE.Line(geometry, LeftEyeVerticalLinematerial);
            lineL.name = EyeIndex;
            scene.add(lineL);
            rightEyeArray[EyeIndex] = lineL;

            points = [];
            points.push(new THREE.Vector3(-intersects.x, 0, pointZ));
            points.push(new THREE.Vector3(-intersects.x, 1000, pointZ));

            geometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineR = new THREE.Line(geometry, RightEyeVerticalLinematerial);
            lineR.name = EyeIndex;
            //scene.add(lineR);
            rightEyeArray[EyeIndex] = lineR;
        }
    }

    getLightEyeArray(){
        return leftEyeArray;
    }

    getRightEyeArray(){
        return rightEyeArray;
    }

    getLeftEyePoints(){
        return leftEye;
    }
}