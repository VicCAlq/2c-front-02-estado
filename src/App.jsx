import Placar from './components/Placar';
import InputTexto from './components/InputTexto';
import AtvCumprimenta from './components/AtvCumprimenta';
import AtvDobra from './components/AtvDobra';
import AtvMudaConteudo from './components/AtvMudaConteudo';


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
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
      <AtvCumprimenta />
      <AtvDobra numero={1}/>
      <AtvMudaConteudo/>
    </div>
  );
}
