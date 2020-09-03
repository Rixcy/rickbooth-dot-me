import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://rickbooth-dot-me.cdn.prismic.io/api/v2'
export const accessToken =
    'MC5YMUZYZkJBQUFDUUFTN3Rp.77-977-9AGTvv71RPu-_ve-_ve-_ve-_vRZMU27vv71bbu-_vVfvv73vv73vv73vv73vv70bUWpTfDEU'

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
    if (doc.type === 'post') {
        return `/blog/${doc.uid}`
    }
    return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
    if (doc.type === 'post') {
        return '/blog/[uid]'
    }
    return '/'
}
