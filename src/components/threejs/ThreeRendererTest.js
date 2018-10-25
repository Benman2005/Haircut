import React, { Component } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 3);
 
    this.state = {
      cubeRotation: new THREE.Euler(),
    };
 
    this._onAnimate = () => {
      // we will get this callback every frame
 
      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.01,
          this.state.cubeRotation.y + 0.0,
          0
        ),
      });
    };
  }
 
  render() {
    const vmin = window.innerHeight> window.innerWidth ? window.innerWidth : window.innerHeight;
    const width =  0.5* vmin; // canvas width
    const height = 0.5* vmin; // canvas height
 
    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}
 
      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
 
          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

export default Simple