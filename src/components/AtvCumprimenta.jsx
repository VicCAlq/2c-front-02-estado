/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <div>, onde dentro dela haverá um <p> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <p> deve haver um <input> onde o usuário poderá digitar seu nome. 
Ao lado deste <input> deve haver um <button>, que ao ser apertado vai fazer um <p> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <input>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function AtvCumprimenta() {
  const [nome, setNome] = useState('');
  const [saudacao, setSaudacao] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSave = () => {
    if (!nome.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setSaudacao(`É um imenso prazer conhecer você, ${nome}.`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        padding: '40px', 
        borderRadius: '24px', 
        background: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(255,255,255,0.5)'
      }}
    >
      <p style={{ margin: 0, color: '#4A4543', fontSize: '20px', fontWeight: '400', letterSpacing: '-0.02em' }}>
        Olá, qual é o seu nome?
      </p>
      <div style={{ display: 'flex', gap: '16px', width: '100%', flexWrap: 'wrap', position: 'relative' }}>
        <motion.div 
          animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.4 }}
          style={{ flex: '1 1 200px', position: 'relative' }}
        >
          <input 
            type="text" 
            placeholder="Digite seu nome..." 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            style={{ 
              width: '100%',
              padding: '16px 20px', 
              borderRadius: '16px', 
              border: '1px solid',
              borderColor: shake ? '#ef4444' : (isFocused ? '#D6D1CB' : '#EAE6E1'),
              background: '#FFFFFF', 
              color: '#2C2A29', 
              outline: 'none',
              fontSize: '16px',
              fontWeight: '400',
              boxSizing: 'border-box',
              transition: 'all 0.3s ease',
              boxShadow: shake ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : (isFocused ? '0 4px 12px rgba(0,0,0,0.02)' : 'none')
            }}
          />
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: '#3A3634' }}
          whileTap={{ scale: 0.96 }}
          onClick={handleSave}
          style={{ 
            padding: '16px 32px', 
            borderRadius: '16px', 
            border: 'none', 
            background: '#2C2A29', 
            color: '#FFFFFF', 
            cursor: 'pointer', 
            fontWeight: '400',
            fontSize: '16px',
            letterSpacing: '0.01em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flex: '0 1 auto',
            boxSizing: 'border-box',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
          }}
        >
          <Check size={18} strokeWidth={2.5} />
          Salvar
        </motion.button>
      </div>
      <AnimatePresence>
        {saudacao && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ 
                margin: 0, 
                color: '#6A635F', 
                marginTop: '8px',
                fontSize: '17px',
                fontWeight: '300',
                letterSpacing: '-0.01em'
              }}
            >
              {saudacao}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
