import { AlignLeft, BookText, House, LocateFixed, MessageCircleQuestion, Speech, UsersRound, Library, Binoculars } from "lucide-react"

export const navMenu = [
    {
        id: 1,
        title: 'მთავარი',
        path: '/',
        icon: <House />
    },
    {
        id: 2,
        title: 'მანიფესტები',
        path: '/manifests',
        icon: <BookText />
    },
    {
        id: 3,
        title: 'ავტორები',
        path: '/authors',
        icon: <UsersRound />
    },
    {
        id: 4,
        title: "უავტორო ჩანაწერები",
        path: '/no-authors',
        icon: <Speech />
    },
    {
        id: 5,
        title: "სხვადასხვა",
        path: '/various',
        icon: <LocateFixed />
    },
    {
        id: 6,
        title: 'ბიბლიოგრაფია',
        path: '/bibliography',
        icon: <AlignLeft />
    },
    {
        id: 7,
        title: 'კვლევები',
        path: '/research',
        icon: <Library />
    },
    {
        id: 8,
        title: 'რესურსები',
        path: '/resources',
        icon: <Binoculars />
    },
    {
        id: 9,
        title: 'პროექტის შესახებ',
        path: '/about',
        icon: <MessageCircleQuestion />
    }
]

export const FIRST_PAGE = 1
export const PER_PAGE = 24

