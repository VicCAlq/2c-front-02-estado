/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, SendHorizontal } from 'lucide-react';

export default function AtvTelefoneSemFio() {
  const [abaAtiva, setAbaAtiva] = useState(1);
  const [recebidoNoTel1, setRecebidoNoTel1] = useState('');
  const [recebidoNoTel2, setRecebidoNoTel2] = useState('');
  
  const [inputTel1, setInputTel1] = useState('');
  const [inputTel2, setInputTel2] = useState('');
  
  const [shakeTel1, setShakeTel1] = useState(false);
  const [shakeTel2, setShakeTel2] = useState(false);

  const enviarParaTel2 = () => {
    if (!inputTel1.trim()) {
      setShakeTel1(true);
      setTimeout(() => setShakeTel1(false), 500);
      return;
    }
    setRecebidoNoTel2(inputTel1);
    setInputTel1('');
  };

  const enviarParaTel1 = () => {
    if (!inputTel2.trim()) {
      setShakeTel2(true);
      setTimeout(() => setShakeTel2(false), 500);
      return;
    }
    setRecebidoNoTel1(inputTel2);
    setInputTel2('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
      <div style={{ display: 'flex', gap: '8px', width: '100%', background: '#F4F2EE', padding: '6px', borderRadius: '16px' }}>
        <motion.button
          onClick={() => setAbaAtiva(1)}
          style={{ 
            flex: 1, 
            padding: '12px', 
            borderRadius: '12px', 
            border: 'none', 
            background: 'transparent', 
            color: abaAtiva === 1 ? '#2C2A29' : '#8A8581', 
            cursor: 'pointer', 
            fontWeight: '400',
            fontSize: '15px',
            position: 'relative',
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Phone size={16} />
          Telefone 1
          {abaAtiva === 1 && (
            <motion.div layoutId="pill" style={{ position: 'absolute', inset: 0, borderRadius: '12px', background: '#FFFFFF', zIndex: -1, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
          )}
        </motion.button>
        <motion.button
          onClick={() => setAbaAtiva(2)}
          style={{ 
            flex: 1, 
            padding: '12px', 
            borderRadius: '12px', 
            border: 'none', 
            background: 'transparent', 
            color: abaAtiva === 2 ? '#2C2A29' : '#8A8581', 
            cursor: 'pointer', 
            fontWeight: '400',
            fontSize: '15px',
            position: 'relative',
            transition: 'color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Phone size={16} />
          Telefone 2
          {abaAtiva === 2 && (
            <motion.div layoutId="pill" style={{ position: 'absolute', inset: 0, borderRadius: '12px', background: '#FFFFFF', zIndex: -1, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
          )}
        </motion.button>
      </div>

      <div style={{ width: '100%', position: 'relative' }}>
        <AnimatePresence mode="wait">
          {abaAtiva === 1 && (
            <motion.div 
              key="t1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ color: '#A8A19D', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mensagem Recebida do Tel. 2</span>
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid #EAE6E1', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <motion.p 
                    key={recebidoNoTel1}
                    initial={{ opacity: 0, filter: 'blur(2px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    style={{ margin: 0, color: recebidoNoTel1 ? '#2C2A29' : '#D6D1CB', minHeight: '24px', fontSize: '16px', fontStyle: recebidoNoTel1 ? 'normal' : 'italic' }}
                  >
                    {recebidoNoTel1 || 'Aguardando mensagem...'}
                  </motion.p>
                </div>
              </div>
              <motion.div 
                animate={shakeTel1 ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
                transition={{ duration: 0.4 }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              >
                <input
                  type="text"
                  placeholder="Enviar mensagem para o Telefone 2"
                  value={inputTel1}
                  onChange={(e) => setInputTel1(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && enviarParaTel2()}
                  style={{ 
                    width: '100%', 
                    padding: '16px 50px 16px 20px', 
                    borderRadius: '16px', 
                    border: '1px solid',
                    borderColor: shakeTel1 ? '#ef4444' : '#EAE6E1', 
                    background: 'rgba(255,255,255,0.5)', 
                    color: '#2C2A29', 
                    outline: 'none', 
                    boxSizing: 'border-box',
                    fontSize: '16px',
                    transition: 'background 0.3s, border-color 0.3s',
                    boxShadow: shakeTel1 ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none'
                  }}
                  onFocus={(e) => { e.target.style.background = '#FFFFFF'; if(!shakeTel1) e.target.style.borderColor = '#D6D1CB'; }}
                  onBlur={(e) => { e.target.style.background = 'rgba(255,255,255,0.5)'; if(!shakeTel1) e.target.style.borderColor = '#EAE6E1'; }}
                />
                <button 
                  onClick={enviarParaTel2}
                  style={{ position: 'absolute', right: '12px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#2C2A29', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}
                >
                  <SendHorizontal size={20} strokeWidth={2} />
                </button>
              </motion.div>
            </motion.div>
          )}

          {abaAtiva === 2 && (
            <motion.div 
              key="t2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ color: '#A8A19D', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mensagem Recebida do Tel. 1</span>
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid #EAE6E1', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <motion.p 
                    key={recebidoNoTel2}
                    initial={{ opacity: 0, filter: 'blur(2px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    style={{ margin: 0, color: recebidoNoTel2 ? '#2C2A29' : '#D6D1CB', minHeight: '24px', fontSize: '16px', fontStyle: recebidoNoTel2 ? 'normal' : 'italic' }}
                  >
                    {recebidoNoTel2 || 'Aguardando mensagem...'}
                  </motion.p>
                </div>
              </div>
              <motion.div 
                animate={shakeTel2 ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
                transition={{ duration: 0.4 }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              >
                <input
                  type="text"
                  placeholder="Enviar mensagem para o Telefone 1"
                  value={inputTel2}
                  onChange={(e) => setInputTel2(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && enviarParaTel1()}
                  style={{ 
                    width: '100%', 
                    padding: '16px 50px 16px 20px', 
                    borderRadius: '16px', 
                    border: '1px solid',
                    borderColor: shakeTel2 ? '#ef4444' : '#EAE6E1', 
                    background: 'rgba(255,255,255,0.5)', 
                    color: '#2C2A29', 
                    outline: 'none', 
                    boxSizing: 'border-box',
                    fontSize: '16px',
                    transition: 'background 0.3s, border-color 0.3s',
                    boxShadow: shakeTel2 ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none'
                  }}
                  onFocus={(e) => { e.target.style.background = '#FFFFFF'; if(!shakeTel2) e.target.style.borderColor = '#D6D1CB'; }}
                  onBlur={(e) => { e.target.style.background = 'rgba(255,255,255,0.5)'; if(!shakeTel2) e.target.style.borderColor = '#EAE6E1'; }}
                />
                <button 
                  onClick={enviarParaTel1}
                  style={{ position: 'absolute', right: '12px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#2C2A29', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}
                >
                  <SendHorizontal size={20} strokeWidth={2} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
