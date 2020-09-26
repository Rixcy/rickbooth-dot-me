import React from 'react'
import { Footer, FooterProps } from '.'

export default {
    title: 'Footer',
    component: Footer,
}

const defaultArgs: FooterProps = {
    items: [
        { text: 'About me', linkProps: { href: '#' } },
        { text: 'Projects', linkProps: { href: '#' } },
        { text: 'Contact me', linkProps: { href: '#' } },
    ],
}

export const Default = (args: any) => <Footer {...args} />
Default.args = defaultArgs
