import { generateMetaAuthor } from "@/app/_lib/apiCalls"

export async function generateMetadata({params}) {

    const response = await generateMetaAuthor(params.slug)

    return {
        title: response?.data[0]?.attributes?.seo?.metaTitle,
        description: response?.data[0]?.attributes?.seo?.metaDescription,
        keywords: response?.data[0]?.attributes?.seo?.metaKeywords,
        openGraph: {
            images: response?.data[0]?.attributes?.seo?.metaImage?.data?.attributes?.url
        }
    }
}

function AuthorLayout({children}) {
  return (
    <div>{children}</div>
  )
}

export default AuthorLayout