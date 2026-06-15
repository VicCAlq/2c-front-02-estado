import AtvCumprimenta from './components/AtvCumprimenta';
import AtvDobra from './components/AtvDobra';
import AtvMudaConteudo from './components/AtvMudaConteudo';
import AtvTelefoneSemFio from './components/AtvTelefoneSemFio';

// Importando uma fonte extremamente elegante
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: "#FDFBF7", 
    backgroundImage: "radial-gradient(at 40% 20%, rgba(240, 235, 225, 0.5) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255, 255, 255, 0.5) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(245, 240, 235, 0.5) 0px, transparent 50%)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 20px',
    gap: '64px',
    fontFamily: '"Outfit", system-ui, sans-serif',
    boxSizing: 'border-box',
    color: '#2C2A29'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    width: '100%',
    maxWidth: '640px',
  }
};

export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <AtvCumprimenta />
      </div>
      <div style={styles.section}>
        <AtvDobra numero={5} />
      </div>
      <div style={styles.section}>
        <AtvMudaConteudo />
      </div>
      <div style={styles.section}>
        <AtvTelefoneSemFio />
      </div>
    </div>
  );
}
