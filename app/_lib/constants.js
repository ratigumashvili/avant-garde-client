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
        title: "უავტორო ჩანაწერები",
        path: '/no-authors',
        children: false
    },
    {
        id: 5,
        title: "სხვადასხვა",
        path: '/various',
        children: false
    },
    {
        id: 6,
        title: 'ბიბლიოგრაფია',
        path: '/bibliography',
        children: false
    },
    {
        id: 7,
        title: 'პროექტის შესახებ',
        path: '/about',
        children: false
    }
]

export const FIRST_PAGE = 1
export const PER_PAGE = 25

export const variousMenu = [
    {
        id: 1,
        path: 'various',
        slug: 'phuturistul-presashi-gamoqveknebuli-vizualuri-masala',
        title: 'ფუტურისტულ პრესაში გამოქვეყნებული ვიზუალური მასალა'
    },
    {
        id: 2,
        path: 'various',
        slug: 'qartuli-phuturizmi-otsiani-tslebis-presasa-da-arqivebshi',
        title: 'ქართული ფუტურიზმი ოციანი წლების პრესასა და არქივებში'
    },
    {
        id: 3,
        path: 'various',
        slug: 'iumoristuli-namushevrebi-turistebis-shesakheb',
        title: 'იუმორისტული ნამუშევრები ტურისტების შესახებ'
    }
]