import { useGLTF } from '@react-three/drei'

export default function EarthModel(props) {
  const { nodes, materials } = useGLTF('/earth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Scene_-_Root']}
        scale={1.128}
      />
    </group>
  )
}

useGLTF.preload('/earth (1).glb')
