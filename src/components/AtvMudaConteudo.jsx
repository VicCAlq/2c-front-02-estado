/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Type, Palette } from 'lucide-react';

export default function AtvMudaConteudo() {
  const [estado, setEstado] = useState(null);

  const coresElegantes = {
    purple: 'linear-gradient(135deg, #9b89b3 0%, #766391 100%)',
    teal: 'linear-gradient(135deg, #8ba8a5 0%, #60827e 100%)',
    orange: 'linear-gradient(135deg, #d4a373 0%, #b88655 100%)'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        padding: '40px', 
        borderRadius: '24px', 
        background: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px', 
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.5)'
      }}
    >
      <div style={{ display: 'flex', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setEstado('construcao')}
          style={{ 
            flex: '1 1 auto',
            padding: '16px 24px', 
            borderRadius: '16px', 
            border: '1px solid #EAE6E1', 
            background: '#FFFFFF', 
            color: '#2C2A29', 
            cursor: 'pointer', 
            fontWeight: '400',
            fontSize: '16px',
            boxSizing: 'border-box',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Type size={18} strokeWidth={2} />
          Visualizar Texto
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#3A3634' }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setEstado('cores')}
          style={{ 
            flex: '1 1 auto',
            padding: '16px 24px', 
            borderRadius: '16px', 
            border: 'none', 
            background: '#2C2A29', 
            color: '#FFFFFF', 
            cursor: 'pointer', 
            fontWeight: '400',
            fontSize: '16px',
            boxSizing: 'border-box',
            boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Palette size={18} strokeWidth={2} />
          Visualizar Cores
        </motion.button>
      </div>
      
      <motion.div layout style={{ 
        minHeight: '220px', 
        width: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.5)',
        borderRadius: '16px',
        padding: '24px',
        boxSizing: 'border-box',
        border: '1px solid rgba(0,0,0,0.05)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {!estado && (
           <p style={{ color: '#A8A19D', fontSize: '15px', fontWeight: '300' }}>Selecione uma opção acima</p>
        )}
        <AnimatePresence mode="wait">
          {estado === 'construcao' && (
            <motion.p
              key="texto"
              initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(4px)', y: -10 }}
              transition={{ type: "spring", damping: 25 }}
              style={{ 
                color: '#6A635F', 
                fontSize: '22px', 
                fontWeight: '300',
                margin: 0,
                letterSpacing: '-0.02em'
              }}
            >
              Página em construção...
            </motion.p>
          )}
          
          {estado === 'cores' && (
            <motion.div
              key="cores"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              {Object.entries(coresElegantes).map(([nomeCor, bgGradient], idx) => (
                <motion.div
                  key={nomeCor}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  style={{ 
                    width: '180px', 
                    height: '180px', 
                    background: bgGradient, 
                    borderRadius: '20px',
                    maxWidth: '100%',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
