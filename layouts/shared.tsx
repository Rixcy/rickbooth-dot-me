import React from 'react'
import { Meta } from '../components/Meta'
import { Header } from '../components/Header'
import { useRouter } from 'next/router'

export const Shared: React.FC = (props) => {
    const { children } = props
    const router = useRouter()
    return (
        <>
            <Header
                logo="<div>rickbooth<span class='font-bold text-red-800'>dot</span>me</div>"
                logoLink={{
                    href: '/',
                    onClick: (e) => {
                        e.preventDefault()
                        router.push('/')
                    },
                }}
                menuItems={['home', 'about me', 'blog', 'contact'].map((l) => ({
                    text: l,
                    link: {
                        href: `/${l === 'home' ? '' : l}`,
                        onClick: (e) => {
                            e.preventDefault()
                            router.push(`/${l === 'home' ? '' : l}`)
                        },
                    },
                }))}
            />
            <Meta />
            {children}
        </>
    )
}
