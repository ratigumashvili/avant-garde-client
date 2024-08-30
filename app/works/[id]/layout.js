import { generateMetaWork } from "@/app/_lib/apiCalls"

export async function generateMetadata ({params}) {
    const response = await generateMetaWork(params.id)

    return {
        title: response?.data?.attributes?.seo?.metaTitle,
        description: response?.data?.attributes?.seo?.metaDescription,
        keywords: response?.data?.attributes?.seo?.metaKeywords
    }
}

function SingleWorkLayout({children}) {
  return (
    <div>{children}</div>
  )
}

export default SingleWorkLayout