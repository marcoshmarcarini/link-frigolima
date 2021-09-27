import Head from 'next/head'
import Script from 'next/script'

function Cabecalho () {
    return(
        <div>
            <Head>
                <meta name = "charset-utf8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Marcos Henrique Marcarini Junior" />
                <title>Frigolima Supermercados</title>
                <script data-ad-client="ca-pub-3480588623219549" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3480588623219549" crossorigin="anonymous"></script>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H0JSLG4FLH"/>
                <Script src="custom-scripts.js"/>
            </Head>
        </div>
    )
}

export default Cabecalho
