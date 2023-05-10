import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListadeContato from '../../containers/ListaContato'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListadeContato />
    <BotaoAdicionar />
  </>
)

export default Home
