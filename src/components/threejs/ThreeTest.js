import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component{
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      30,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 10
    //create image
var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
bitmap.width = 100;
bitmap.height = 100;
g.font = 'Bold 20px Arial';

g.fillStyle = 'white';
g.fillText('text', 0, 20);
g.strokeStyle = 'black';
g.strokeText('text', 0, 20);

// canvas contents will be used for a texture
var texture = new THREE.Texture(bitmap) 
texture.needsUpdate = true;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#bad4ff')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    //ADD CUBE
    var loader = new THREE.FontLoader();
    loader.load( "threejs/DancingScriptRegular", function ( font ) {
    
      var textGeo = new THREE.TextGeometry( 'Hello three.js!', {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelSegments: 5
      } );
      var textMat = new THREE.MeshLambertMaterial({color: 0xFF00FF});
      var textMesh = new THREE.Mesh(textGeo, textMat);
      this.scene.add(textMesh);

    } );
    
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    this.cube = new THREE.Mesh(geometry, material)

    this.scene.add(this.cube)
    this.scene.add(this.texting)
    console.log 
this.start()
  }
componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
   this.cube.rotation.x += 0.01
   this.cube.rotation.y += 0.01
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}


render(){
    return(
      <div>
        <div
          style={{ width: '400px', height: '400px' }}
          ref={(mount) => { this.mount = mount }}
        />

      </div>
      
    )
  }
}
export default ThreeScene