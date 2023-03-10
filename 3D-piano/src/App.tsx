import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas, useFrame,useLoader, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BufferGeometryUtils, MeshStandardMaterial, Vector3, LinearEncoding, RepeatWrapping, TextureLoader  } from 'three'
import {MeshReflectorMaterial, PerspectiveCamera} from "@react-three/drei"


import { Mesh } from 'three';


const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();


window.addEventListener("click", function(e){
  mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
})


// const onMouseMove = (e: any) =>{
//   const {camera, gl} = useThree();
  
//   mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
// 	mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

//   raycaster.setFromCamera(mouse,camera)
//   const intersect = raycaster.intersectObjects()

//   for(let i = 0; i <intersect.length; i++){
//     console.log(intersect)
//   }

// }

// window.addEventListener("mousemove",onMouseMove)

const CameraOrbirtController = () =>{
  const {camera, gl} = useThree();
  
  useEffect(() =>{
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 10;
controls.maxDistance = 10;
controls.enablePan = false;
    return () => {

      controls.dispose();
    }
  }, [camera, gl])
  
  
  // const listener = new THREE.AudioListener();
  // camera.add(listener)

  // window.addEventListener("click", function(e){
  //   mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
  //   mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  //   const audioLoader = new THREE.AudioLoader();
  //   const cubeSound = new THREE.Audio(listener);
  //   audioLoader.load("./public/Sounds/key01.ogg", function (buffer) {
  //     cubeSound.setBuffer(buffer)
  //     cubeSound.setLoop(false)
  //     cubeSound.setVolume(0.03)
  //     cubeSound.play()
  //     })
  // })
  return null;
}


const SongController = ({song}:{song: any}):any =>{
  const {camera, gl} = useThree();
  const listener = new THREE.AudioListener();
  
  
  
  camera.add(listener)
  window.addEventListener("click", function(e){
  mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  const audioLoader = new THREE.AudioLoader();
  const cubeSound = new THREE.Audio(listener);
  audioLoader.load(`public/Sounds/${song}.ogg`, function (buffer) {
    cubeSound.setBuffer(buffer)
    cubeSound.setLoop(false)
    cubeSound.setVolume(0.03)
    cubeSound.play()
  })
})


  return null;
}

// const PianoFunction = () =>{
//   const Key1 = new THREE.BoxGeometry(16,32,32)
//   Key1.translate(10,4,1)
  
  
//   const Key2 = new THREE.BoxGeometry(16,32,32)
//   Key1.translate(10,2,1)
  
  
//   const pianoGeo = BufferGeometryUtils.mergeBufferGeometries([Key1,Key2])
  
//   const piano = new THREE.Mesh(
//     pianoGeo,
//     new THREE.MeshStandardMaterial({color : 0x888888})
//   );
  
//   piano.position.set(0,0,0)
//   return null;

// }


function Box( {setColorTile, colorTile , setColor1, color1, setColor2, color2, setColor3, color3}:{setColorTile:any, colorTile:any,setColor1:any, color1:any, setColor2:any, color2:any, setColor3:any, color3:any}):any{
  
  return(
    <mesh>
      <CameraOrbirtController/>
        <boxGeometry  args={[13,3,0.5]}  />
        <meshStandardMaterial color="#2e290f" />
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key01" positionx={-5.9} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key02" positionx={-5.4} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key03" positionx={-4.9} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key04" positionx={-4.4} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key05" positionx={-3.9} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key06" positionx={-3.4} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key07" positionx={-2.9} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key08" positionx={-2.4} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key09" positionx={-1.9} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key10" positionx={-1.4} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key11" positionx={-0.9} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key12" positionx={-0.4} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key13" positionx={0.1} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key14" positionx={0.6} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key15" positionx={1.1} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key16" positionx={1.6} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key17" positionx={2.1} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key18" positionx={2.6} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key19" positionx={3.1} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key20" positionx={3.6} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key21" positionx={4.1} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key22" positionx={4.6} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key23" positionx={5.1} positiony={-0.5} positionz={0.3}/> 
        <Tiles setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} setColor2={setColor2}  color2={color2} setColor3={setColor3} color3={color3} song="Key24" positionx={5.6} positiony={-0.5} positionz={0.3}/> 
        
      </mesh>
  )
}

function Tiles({song, positionx, positiony, positionz, setColor1, color1, setColor2, color2, setColor3, color3, setColorTile, colorTile}:{song:any, positionx:any, positiony:any, positionz:any, setColor1:any, color1:any,  setColor2:any, color2:any, setColor3:any, color3:any, setColorTile:any, colorTile:any}):any{
  const {camera, gl} = useThree();
  return( 
    <mesh onClick={(e) => {
      const listener = new THREE.AudioListener();
      setColor1(color1 === "green" ? "yellow" : "green")
      setColor2(color2 === "red" ? "violet": "red")
      setColor3(color3 === "blue" ? "#03fcfc": "blue")
      setColorTile(colorTile === "#a3a3a0" ? "pink" : "#a3a3a0")
    camera.add(listener)
      mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
      const audioLoader = new THREE.AudioLoader();
      const cubeSound = new THREE.Audio(listener);
      audioLoader.load(`public/Sounds/${song}.ogg`, function (buffer) {
        cubeSound.setBuffer(buffer)
        cubeSound.setLoop(false)
        cubeSound.setVolume(1)
        cubeSound.play()
        })}} 
        position={new THREE.Vector3(positionx, positiony, positionz)} >
     
        <boxGeometry args={[0.3,1.5,0.1]} />
        <meshStandardMaterial color={colorTile} />
       
      </mesh>
  )
}

function Ground() {

  const [roughness, normal] = useLoader(TextureLoader, [
   "public/terrain-roughness.jpg",
   "/public/terrain-normal.jpg",
  ]);

useEffect(() => {
  [normal, roughness].forEach((t) => {
    t.wrapS = RepeatWrapping;
    t.wrapT = RepeatWrapping;
    t.repeat.set(5, 5);
    t.offset.set(0, 0);
  });

  normal.encoding = LinearEncoding;
}, [normal, roughness]);

useFrame((state, delta) => {
  let t = -state.clock.getElapsedTime() * 0.128;
  roughness.offset.set(0, t % 1);
  normal.offset.set(0, t % 1);
});

return (
  <mesh rotation-x={-Math.PI * 0.4} castShadow receiveShadow  position={[-1,-4,5]}>
    <planeGeometry args={[300, 300]} />
    <MeshReflectorMaterial
      envMapIntensity={0}
      normalMap={normal}
      // normalScale={[0.15, 0.15]}
      roughnessMap={roughness}
      dithering={true}
      color={[0.015, 0.015, 0.015]}
      roughness={0.7}
      blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
      mixBlur={30} // How much blur mixes with surface roughness (default = 1)
      mixStrength={80} // Strength of the reflections
      mixContrast={1} // Contrast of the reflections
      resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
      mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
      depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
      minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
      maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
      depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
      // debug={0}
      reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
    />
  </mesh>
);
}


// function Tiles2(song: any){
//   return(
//     <mesh position={new THREE.Vector3(-3.5, 2, 0.5)} >
//       <SongController song={song}/>
//         <boxGeometry args={[0.4,1,0.1]} />
//         <meshStandardMaterial color="white" />
       
//       </mesh>
//   )
// }
// function Tiles3(song: any){
//   return(
//     <mesh  position={new THREE.Vector3(-3, 2, 0.5)} >
//       <SongController song={song}/>
//         <boxGeometry args={[0.4,1,0.1]} />
//         <meshStandardMaterial color="white" />
       
//       </mesh>
//   )
// }

function KeyLight({ brightness, color }:{brightness:any, color:any}):any {
  return (
    <rectAreaLight
      width={20}
      height={400}
      color={color}
      intensity={brightness}
      position={[-2, 2, -30]}
      // lookAt={[0, 0, 0]}
      rotation={[0, 66, 0]}
      // penumbra={1}
    />
  );
}
function FillLight({ brightness, color }:{brightness:any, color:any}):any {
  return (
    <rectAreaLight
      width={20}
      height={20}
      intensity={brightness}
      color={color}
      position={[-30, 2, -10]}
      // lookAt={[0, 0, 0]}
      rotation={[0, 180, 0]}
      // penumbra={2}

    />
  );
}

function RimLight({ brightness, color }:{brightness:any, color:any}):any {
  return (
    <rectAreaLight
      width={20}
      height={20}
      intensity={brightness}
      color={color}
      rotation={[0, 360, 0]}
      position={[30, 2, -10]}
      // penumbra={2}

    />
  );
}

function ThreeScene(){
  const [color1, setColor1] = useState("green")
  const [color2, setColor2] = useState("red")
  const [color3, setColor3] = useState("blue")
  const [colorTile, setColorTile] = useState("#a3a3a0")
  return (
    <Canvas shadows >
       <KeyLight brightness={500} color={color3} />
        <FillLight brightness={500} color={color1} />
        <RimLight brightness={300} color={color2} />
      <ambientLight/>
      <pointLight position={[10,5,5]} />
      <PerspectiveCamera makeDefault fov={100} position={[1,2,6]}/>
      <color args={[0,0,0]} attach="background"/>
      <Box setColorTile={setColorTile} colorTile={colorTile} setColor1={setColor1} color1={color1} color2={color2} setColor2={setColor2}  setColor3={setColor3} color3={color3}/>
      <Ground/>
    </Canvas>
  )

}


function App() {

  return (
    <div className="App h-screen w-screen">
      <h1 className="bg-black text-center text-white select-none">Try pressing the white keys</h1>
          <ThreeScene/>
    </div>
  )
}

export default App