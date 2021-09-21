import Image from 'next/image'
function Rodape(){
    return (
    
        <div className="rodape">
        
            <p className="txt-rodape">Powered by <Image src="/img/conteudo.png" width={15} height={15}/></p>
        
        </div>
    
                
    )
}

export default Rodape