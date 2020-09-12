import '../styles.css'
import Layout from '../layouts/default'

function MyApp({ Component, pageProps }) {
    const getLayout = Component['getLayout'] || ((page: React.FC) => <Layout children={page} />)
    return getLayout(<Component {...pageProps} />)
}

export default MyApp
