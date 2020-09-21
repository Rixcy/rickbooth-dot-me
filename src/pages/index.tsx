import { GetServerSideProps } from 'next'
import { Client } from '../prismic.config'
import { RichText } from 'prismic-reactjs'
import Head from 'next/head'
import { Doc } from '../@types/prismic'

type HomeProps = {
    doc: Doc
}

const Home = ({ doc }: HomeProps) => {
    const { meta_description, meta_title, meta_keywords, hero_title } = doc.data
    console.log('props:', doc.data)
    return (
        <div className="container mx-auto mt-32">
            <Head>
                <title>{meta_title ? RichText.asText(meta_title) : 'rickboothdotme'}</title>
                {meta_description && (
                    <meta name="description" content={RichText.asText(meta_description)} />
                )}
                {meta_keywords && <meta name="keywords" content={RichText.asText(meta_keywords)} />}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <article className="prose lg:prose-xl mt-10">
                <h1>{RichText.asText(hero_title)}</h1>
                <p>
                    For years parents have espoused the health benefits of eating garlic bread with
                    cheese to their children, with the food earning such an iconic status in our
                    culture that kids will often dress up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                    But a recent study shows that the celebrated appetizer may be linked to a series
                    of rabies cases springing up around the country.
                </p>
            </article>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const home = await Client(req).getSingle('homepage', {})

    return {
        props: { doc: home },
    }
}
