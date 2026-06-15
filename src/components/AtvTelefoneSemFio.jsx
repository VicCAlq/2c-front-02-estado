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
      className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 flex flex-col gap-8 w-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03),inset_0_0_0_1px_rgba(255,255,255,0.5)]"
    >
      <div className="flex gap-2 w-full bg-[#F4F2EE] p-1.5 rounded-2xl">
        <motion.button
          onClick={() => setAbaAtiva(1)}
          className={`flex-1 py-3 rounded-xl border-none cursor-pointer font-normal text-[15px] relative transition-colors duration-300 flex items-center justify-center gap-2 ${abaAtiva === 1 ? 'text-[#2C2A29]' : 'text-[#8A8581] bg-transparent'}`}
        >
          <Phone size={16} />
          Telefone 1
          {abaAtiva === 1 && (
            <motion.div layoutId="pill" className="absolute inset-0 rounded-xl bg-white -z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]" />
          )}
        </motion.button>
        <motion.button
          onClick={() => setAbaAtiva(2)}
          className={`flex-1 py-3 rounded-xl border-none cursor-pointer font-normal text-[15px] relative transition-colors duration-300 flex items-center justify-center gap-2 ${abaAtiva === 2 ? 'text-[#2C2A29]' : 'text-[#8A8581] bg-transparent'}`}
        >
          <Phone size={16} />
          Telefone 2
          {abaAtiva === 2 && (
            <motion.div layoutId="pill" className="absolute inset-0 rounded-xl bg-white -z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]" />
          )}
        </motion.button>
      </div>

      <div className="w-full relative">
        <AnimatePresence mode="wait">
          {abaAtiva === 1 && (
            <motion.div 
              key="t1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[#A8A19D] text-xs uppercase tracking-wider">Mensagem Recebida do Tel. 2</span>
                <div className="bg-white p-5 rounded-2xl border border-[#EAE6E1] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <motion.p 
                    key={recebidoNoTel1}
                    initial={{ opacity: 0, filter: 'blur(2px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    className={`m-0 min-h-[24px] text-base ${recebidoNoTel1 ? 'text-[#2C2A29] not-italic' : 'text-[#D6D1CB] italic'}`}
                  >
                    {recebidoNoTel1 || 'Aguardando mensagem...'}
                  </motion.p>
                </div>
              </div>
              <motion.div 
                animate={shakeTel1 ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  placeholder="Enviar mensagem para o Telefone 2"
                  value={inputTel1}
                  onChange={(e) => setInputTel1(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && enviarParaTel2()}
                  className={`w-full py-4 pl-5 pr-[50px] rounded-2xl border text-[#2C2A29] outline-none box-border text-base transition-colors duration-300 focus:bg-white focus:border-[#D6D1CB] bg-white/50 ${shakeTel1 ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : 'border-[#EAE6E1]'}`}
                />
                <button 
                  onClick={enviarParaTel2}
                  className="absolute right-3 border-none bg-transparent cursor-pointer text-[#2C2A29] flex items-center justify-center p-1"
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
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[#A8A19D] text-xs uppercase tracking-wider">Mensagem Recebida do Tel. 1</span>
                <div className="bg-white p-5 rounded-2xl border border-[#EAE6E1] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <motion.p 
                    key={recebidoNoTel2}
                    initial={{ opacity: 0, filter: 'blur(2px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    className={`m-0 min-h-[24px] text-base ${recebidoNoTel2 ? 'text-[#2C2A29] not-italic' : 'text-[#D6D1CB] italic'}`}
                  >
                    {recebidoNoTel2 || 'Aguardando mensagem...'}
                  </motion.p>
                </div>
              </div>
              <motion.div 
                animate={shakeTel2 ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  placeholder="Enviar mensagem para o Telefone 1"
                  value={inputTel2}
                  onChange={(e) => setInputTel2(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && enviarParaTel1()}
                  className={`w-full py-4 pl-5 pr-[50px] rounded-2xl border text-[#2C2A29] outline-none box-border text-base transition-colors duration-300 focus:bg-white focus:border-[#D6D1CB] bg-white/50 ${shakeTel2 ? 'border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : 'border-[#EAE6E1]'}`}
                />
                <button 
                  onClick={enviarParaTel1}
                  className="absolute right-3 border-none bg-transparent cursor-pointer text-[#2C2A29] flex items-center justify-center p-1"
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
