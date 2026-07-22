import Placar from './components/Placar';
import InputTexto from './components/InputTexto';
import AtvDobra from './components/AtvDobra';
import AtvCumprimenta from './components/AtvCumprimenta';
import AtvTelefoneSemFio from './components/AtvTelefoneSemFio';

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
      <AtvDobra numero='10'/>
      <AtvCumprimenta/>
      <AtvTelefoneSemFio/>
    </div>
  );
}
