interface Link {
    title: string,
    href: string,
    external: boolean
}

export const Links: Link[] = [
    {
        title: 'email',
        href: 'mailto:quyenxhuynh@gmail.com',
        external: false
    },
    {
        title: 'github',
        href: 'https://github.com/quyenxhuynh',
        external: true
    },
    {
        title: 'linkedin',
        href: 'https://www.linkedin.com/in/quyenxhuynh/',
        external: true
    }
]