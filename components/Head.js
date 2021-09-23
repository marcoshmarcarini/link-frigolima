import Head from 'next/head'

function Cabecalho () {
    return(
        <div>
            <Head>
                <meta name = "charset-utf8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Marcos Henrique Marcarini Junior" />
                <title>Frigolima Supermercados</title>
                <script data-ad-client="ca-pub-4774450614178988" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-H0JSLG4FLH"></script>
                <script src="/scripts.js"></script>
            </Head>
        </div>
    )
}

export default Cabecalho