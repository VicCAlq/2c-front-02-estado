import Placar from './components/Placar';
import InputTexto from './components/InputTexto';
import AtvDobra from './components/AtvDobra';
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
      <AtvDobra valor={2}/>
    </div>
  );
}
