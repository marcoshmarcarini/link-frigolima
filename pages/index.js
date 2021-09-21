import Cabecalho from '../components/Head'
import Home from '../public/home'
import Rodape from '../components/Footer'

function PaginaInicial(){
    return (
        <div>
            <Cabecalho/>
            <Home />
            <Rodape />
        </div>
    )
}

export default PaginaInicial