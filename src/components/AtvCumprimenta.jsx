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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 flex flex-col gap-6 w-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03),inset_0_0_0_1px_rgba(255,255,255,0.5)]"
    >
      <p className="m-0 text-[#4A4543] text-xl font-normal tracking-tight">
        Olá, qual é o seu nome?
      </p>
      <div className="flex flex-wrap gap-4 w-full relative">
        <motion.div 
          animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="flex-[1_1_200px] relative"
        >
          <input 
            type="text" 
            placeholder="Digite seu nome..." 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            className={`w-full px-5 py-4 rounded-2xl border bg-white text-[#2C2A29] outline-none text-base font-normal transition-all duration-300 ${shake ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : (isFocused ? 'border-[#D6D1CB] shadow-[0_4px_12px_rgba(0,0,0,0.02)]' : 'border-[#EAE6E1]')}`}
          />
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: '#3A3634' }}
          whileTap={{ scale: 0.96 }}
          onClick={handleSave}
          className="px-8 py-4 rounded-2xl border-none bg-[#2C2A29] text-white cursor-pointer font-normal text-base tracking-wide flex items-center justify-center gap-2 flex-[0_1_auto] transition-colors duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
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
            className="overflow-hidden"
          >
            <p className="m-0 text-[#6A635F] mt-2 text-[17px] font-light tracking-tight">
              {saudacao}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
