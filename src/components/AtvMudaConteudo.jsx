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
      className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 flex flex-col gap-8 w-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03),inset_0_0_0_1px_rgba(255,255,255,0.5)]"
    >
      <div className="flex flex-wrap gap-4 w-full">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setEstado('construcao')}
          className="flex-[1_1_auto] px-6 py-4 rounded-2xl border border-[#EAE6E1] bg-white text-[#2C2A29] cursor-pointer font-normal text-base shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center justify-center gap-2"
        >
          <Type size={18} strokeWidth={2} />
          Visualizar Texto
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#3A3634' }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setEstado('cores')}
          className="flex-[1_1_auto] px-6 py-4 rounded-2xl border-none bg-[#2C2A29] text-white cursor-pointer font-normal text-base shadow-[0_4px_14px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2"
        >
          <Palette size={18} strokeWidth={2} />
          Visualizar Cores
        </motion.button>
      </div>
      
      <motion.div layout className="min-h-[220px] w-full flex items-center justify-center bg-white/50 rounded-2xl p-6 border border-black/5 overflow-hidden relative">
        {!estado && (
           <p className="text-[#A8A19D] text-[15px] font-light">Selecione uma opção acima</p>
        )}
        <AnimatePresence mode="wait">
          {estado === 'construcao' && (
            <motion.p
              key="texto"
              initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(4px)', y: -10 }}
              transition={{ type: "spring", damping: 25 }}
              className="text-[#6A635F] text-[22px] font-light m-0 tracking-tight"
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
              className="flex flex-wrap gap-4 justify-center"
            >
              {Object.entries(coresElegantes).map(([nomeCor, bgGradient], idx) => (
                <motion.div
                  key={nomeCor}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="w-[180px] h-[180px] rounded-[20px] max-w-full shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                  style={{ background: bgGradient }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
