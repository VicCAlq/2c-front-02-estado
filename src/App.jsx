import AtvCumprimenta from './components/AtvCumprimenta.jsx';
import AtvDobra from './components/AtvDobra.jsx';
import AtvMudaConteudo from './components/AtvMudaConteudo.jsx'
import './App.css'

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
        <h1>oi</h1>
        <AtvCumprimenta />
        <AtvDobra numero={1} />
        <AtvMudaConteudo />
        </div>
    );
}
