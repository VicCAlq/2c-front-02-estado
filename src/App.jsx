import Placar from './components/Placar';
import InputTexto from './components/InputTexto';
import AtvDobra from './components/AtvDobra';
import AtvMudaConteudo from './components/AtvMudaConteudo';
import AtvTelefoneSemFio from './components/AtvTelefoneSemFio';
import AtvCumprimenta from './components/AtvCumprimenta';

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#101015",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#eec"
  }
};

export default function App() {
  return (
    <div style={styles.container}>
      <Placar/>
      <InputTexto/>
      <AtvCumprimenta/>
      <AtvDobra numero={10}/>
      <AtvMudaConteudo/>
      <AtvTelefoneSemFio/>
    </div>
  );
}
