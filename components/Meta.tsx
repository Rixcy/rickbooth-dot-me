import Head from 'next/head'

export type MetaProps = {
    title?: string
    description?: string
}

export const Meta: React.FC<MetaProps> = (props) => {
    const { title, description } = props
    const baseTitle = 'rickboothdotme'
    return (
        <Head>
            <title>{title ? `${title} | ${baseTitle}` : baseTitle}</title>
            <meta name="description" content={description || 'Peracto description'} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
    )
}
