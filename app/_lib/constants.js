export const navMenu = [
    {
        id: 1,
        title: 'მთავარი',
        path: '/',
        children: false
    },
    {
        id: 2,
        title: 'მანიფესტები',
        path: '/manifests',
        children: false
    },
    {
        id: 3,
        title: 'ავტორები',
        path: false,
        children: true
    },
    {
        id: 4,
        title: 'პროექტის შესახებ',
        path: '/about',
        children: false
    }
]

export const FIRST_PAGE = 1
export const PER_PAGE = 25