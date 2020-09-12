import React from 'react'

type link = {
    href: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export type HeaderProps = {
    logo: string
    jeff?: { href: string; onClick: () => any }
    logoLink?: link
    /** whether or not the header should be fixed */
    fixed?: boolean
    menuItems: {
        text: string
        link: link
    }[]
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { logo, logoLink, fixed, menuItems } = props

    const fixedClasses = fixed ? 'top-0 fixed z-50' : null
    const textClasses = 'uppercase text-gray-800 hover:text-gray-600'

    return (
        <header
            className={`w-full bg-white flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg ${fixedClasses}`}
            data-testid="header"
        >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <a {...logoLink} data-testid="site-title" className={`text-sm ${textClasses}`}>
                    <div
                        className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
                        dangerouslySetInnerHTML={{ __html: logo }}
                    />
                </a>
                <div className="lg:flex flex-grow items-center hidden">
                    <ul
                        className="flex flex-col lg:flex-row list-none lg:ml-auto"
                        data-testid="menu-items"
                    >
                        {menuItems.map(({ link, text }, index) => (
                            <li key={index} data-testid="menu-item">
                                <a
                                    {...link}
                                    className={`px-3 py-2 flex items-center text-xs font-bold ${textClasses}`}
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    fixed: true,
}
