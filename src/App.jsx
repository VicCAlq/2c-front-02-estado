import Placar from './components/Placar';
import InputTexto from './components/InputTexto';
import AtvDobra from './components/AtvDobra';
import AtvCumprimenta from './components/AtvCumprimenta';
import AtvTelefoneSemFio from './components/AtvTelefoneSemFio';
import AtvMudaConteudo from './components/AtvMudaConteudo';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: "#101015",
    padding: 24,
    gap: 24,
  },
  title: {
    color: "#eec"
  }
};

export default function App() {
  return (
    <div style={styles.container}>
      <Placar />
      <InputTexto />
      <AtvDobra numero={5} />
      <AtvCumprimenta />
      <AtvTelefoneSemFio />
      <AtvMudaConteudo />
    </div>
  );
}
