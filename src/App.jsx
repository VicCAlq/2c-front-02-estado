import AtvCumprimenta from './components/AtvCumprimenta';
import AtvDobra from './components/AtvDobra';
import AtvMudaConteudo from './components/AtvMudaConteudo';
import AtvTelefoneSemFio from './components/AtvTelefoneSemFio';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] flex flex-col items-center py-20 px-5 gap-16 text-[#2C2A29] font-['Outfit',system-ui,sans-serif]" style={{ backgroundImage: "radial-gradient(at 40% 20%, rgba(240, 235, 225, 0.5) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255, 255, 255, 0.5) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(245, 240, 235, 0.5) 0px, transparent 50%)" }}>
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
        <AtvCumprimenta />
      </div>
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
        <AtvDobra numero={5} />
      </div>
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
        <AtvMudaConteudo />
      </div>
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
        <AtvTelefoneSemFio />
      </div>
    </div>
  );
}
