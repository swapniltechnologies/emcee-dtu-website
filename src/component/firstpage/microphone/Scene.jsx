/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: anathlyst (https://sketchfab.com/anathlyst)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/microphone-cf9580db045e4bd6818306d50f2fa2ce
Title: Microphone
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Body_low_Microphone_0.geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
          <mesh geometry={nodes['0'].geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
          <mesh geometry={nodes.Weave_low_Microphone_0.geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
          <mesh geometry={nodes['1'].geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
          <mesh geometry={nodes.Prongs_low_Microphone_0.geometry} material={materials.Microphone} position={[0, 59.361, 0.053]} rotation={[-0.16, 0.779, -2.286]} scale={78.938} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
