/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function AtvDobra({ numero = 2 }) {
  const [valor, setValor] = useState(numero);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-12 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 flex flex-col gap-8 items-center w-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03),inset_0_0_0_1px_rgba(255,255,255,0.5)]"
    >
      <div className="relative min-h-[80px] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.p 
            key={valor}
            initial={{ y: 40, opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ y: -40, opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="m-0 text-[84px] font-light text-[#2C2A29] leading-none tracking-tight"
          >
            {valor}
          </motion.p>
        </AnimatePresence>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setValor(valor * 2)}
        className="px-10 py-4 rounded-2xl border border-[#EAE6E1] bg-white text-[#2C2A29] cursor-pointer font-normal text-base tracking-wide w-full shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-colors duration-300 flex items-center justify-center gap-2"
      >
        <Zap size={18} strokeWidth={2.5} />
        Dobrar Valor
      </motion.button>
    </motion.div>
  );
}
