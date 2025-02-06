"use client";

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Pikachu(props) {
    const { nodes, materials } = useGLTF('/models/pikachu.glb')
    return (
        <group {...props}
               dispose={null}
               position={[0, 1.6, 0]}
               scale={[0.9, 0.9, 0.9]}
               rotation={[Math.PI / 15, 0, 0]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pikachu_cheeks_Pikachu_MAT_0.geometry}
                material={materials.Pikachu_MAT}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pikachu_eyes_Pikachu_MAT_0.geometry}
                material={materials.Pikachu_MAT}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pikachu_tail_Pikachu_MAT_0.geometry}
                material={materials.Pikachu_MAT}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.back_stripesZBrush_defualt_group2_Pikachu_MAT_0.geometry}
                material={materials.Pikachu_MAT}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.back_stripesGroup3_Pikachu_MAT_0.geometry}
                material={materials.Pikachu_MAT}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pikachu_body_Pikachu_MAT_0.geometry}
                material={materials.Pikachu_MAT}
            />
        </group>
    )
}

useGLTF.preload('/models/pikachu.glb')
