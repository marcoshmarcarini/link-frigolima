import Image from 'next/image'
import Rodape from '../components/Footer'
function Home(){
    return(
        <>
        <div className="container">
            <div className="area-logo">
                <Image src="/img/logo.png" width={100} height={100} className="logo-frigolima"/>
            </div>
            <div className="area-links">
                <a href="/regulamento" className="link-arvore">Regulamento Natal Premiado</a>
                <a href="https://t.me/frigolima" className="link-arvore">Canal do Telegram</a>
                <a href="https://chat.whatsapp.com/L799fbwbNnh6HFjrCdEvYK?fbclid=IwAR0ZBu-KfOHA8EzTdR8J1fnDYB65_KII2vSaaV3IcWWMATwcGAxjun5Q5U4" className="link-arvore">Grupo do WhatsApp</a>
                <a href="https://forms.gle/cZCiLpQe5iCVgM8F9" className="link-arvore">Faça seu Cartão Frigolima</a>
                <a href="http://acaps.org.br/super_rh" className="link-arvore">Trabalhe Conosco</a>
                <a href="https://www.dropbox.com/s/4s8lsl6ypnx1uvi/Regulamento_sacolas_reutilizaveis__supermercado_frigolima.docx?dl=0" className="link-arvore">Regulamento Sacolas Reutilizáveis</a>
            </div>
            <div className="textinho">
                    <p className="txt-contato">Entre em contato com nossas lojas.</p>  
            </div>
            <div className="area-lojas">
                <div className="contatos">
                    <Image src="/img/phone-call.png" width={15} height={15} className="tel" />
                    <a href="tel:+552835221058" className="link-arvore">Novo Parque</a>
                </div>
                <div className="contatos">
                    <Image src="/img/phone-call.png" width={15} height={15} className="tel" />
                    <a href="tel:+552835281047" className="link-arvore">Vargem Alta</a>
                </div>
                <div className="contatos">
                    <Image src="/img/phone-call.png" width={15} height={15} className="tel" />
                    <a href="tel:+552835291131" className="link-arvore">Itaipava</a>
                </div>
            </div>
            <div className="area-links-sociais">
                <div className="icone-social">
                    <a href="https://www.facebook.com/frigolimasupermercados"><Image src="/img/facebook.png" width={30} height={30} /></a>
                </div>
                <div className="icone-social">
                    <a href="https://www.instagram.com/frigolimasupermercados/"><Image src="/img/instagram.png" width={30} height={30} /></a>
                </div>
                <div className="icone-social">
                    <a href="https://api.whatsapp.com/send?phone=5528999910448&text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20compra%20online."><Image src="/img/whatsapp.png" width={30} height={30}/></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home