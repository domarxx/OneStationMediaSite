import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model({ url }) {
  // Hook para carregar o modelo GLB da pasta public
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const ModelViewer = () => {
  return (
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
      {/* Canvas é onde a mágica 3D acontece */}
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} shadows>
        <color attach="background" args={['#101010']} /> {/* Cor de fundo do Canvas (opcional) */}
        
        {/* PresentationControls: Permite girar o objeto e ele volta pro lugar (efeito mola) */}
        <PresentationControls 
          speed={1.5} 
          global 
          zoom={0.5} 
          polar={[-0.1, Math.PI / 4]} // Limita a rotação vertical
        >
          {/* Stage: Cria um ambiente de estúdio com luzes e sombras automáticas */}
          <Stage environment="city" intensity={0.6} contactShadow={false}>
            <Model url="/robot.glb" /> {/* <--- NOME DO SEU ARQUIVO AQUI */}
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default ModelViewer;