/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function AtvDobra({ numero = 2 }) {
  const [valor, setValor] = useState(numero);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        padding: '48px', 
        borderRadius: '24px', 
        background: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px', 
        alignItems: 'center', 
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.5)'
      }}
    >
      <div style={{ position: 'relative', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="popLayout">
          <motion.p 
            key={valor}
            initial={{ y: 40, opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ y: -40, opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            style={{ 
              margin: 0, 
              fontSize: '84px',
              fontWeight: '300',
              color: '#2C2A29',
              lineHeight: '1',
              letterSpacing: '-0.04em'
            }}
          >
            {valor}
          </motion.p>
        </AnimatePresence>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setValor(valor * 2)}
        style={{ 
          padding: '16px 40px', 
          borderRadius: '16px', 
          border: '1px solid #EAE6E1', 
          background: '#FFFFFF', 
          color: '#2C2A29', 
          cursor: 'pointer', 
          fontWeight: '400', 
          fontSize: '16px',
          letterSpacing: '0.01em',
          width: '100%',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
          transition: 'border-color 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
       
        Dobrar Valor
      </motion.button>
    </motion.div>
  );
}
