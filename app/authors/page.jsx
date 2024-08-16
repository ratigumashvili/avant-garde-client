import { redirect } from "next/navigation"

function page({ params }) {

    if (!params.slug) {
        redirect('/')
    }
}

export default page