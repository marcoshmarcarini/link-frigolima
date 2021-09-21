import Head from 'next/head'

function Cabecalho () {
    return(
        <div>
            <Head>
                <meta name = "charset-utf8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Marcos Henrique Marcarini Junior" />
                <title>Frigolima Supermercados</title>
            </Head>
        </div>
    )
}

export default Cabecalho