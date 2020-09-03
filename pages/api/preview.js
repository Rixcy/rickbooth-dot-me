import Prismic from 'prismic-javascript'
import { linkResolver } from '../../prismic.config'

const apiEndpoint = 'https://rickbooth-dot-me.cdn.prismic.io/api/v2'
const accessToken =
    'MC5YMUZYZkJBQUFDUUFTN3Rp.77-977-9AGTvv71RPu-_ve-_ve-_ve-_vRZMU27vv71bbu-_vVfvv73vv73vv73vv73vv70bUWpTfDEU'

// Client method to query from the Prismic repo
const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}

const Preview = async (req, res) => {
    const { token: ref, documentId } = req.query
    const redirectUrl = await Client(req)
        .getPreviewResolver(ref, documentId)
        .resolve(linkResolver, '/')

    if (!redirectUrl) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    res.setPreviewData({ ref })
    res.writeHead(302, { Location: `${redirectUrl}` })
    res.end()
}

export default Preview
