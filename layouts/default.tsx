import { Shared } from './shared'

const DefaultLayout: React.FC = (props) => {
    const { children } = props
    return <Shared>{children}</Shared>
}

export const getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>

export default DefaultLayout
