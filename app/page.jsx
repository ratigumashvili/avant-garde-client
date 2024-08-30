import MDContent from "./_components/MDContent"
import { getSinglePage } from "./_lib/apiCalls"


async function Home() {
  
  const response = await getSinglePage('home')

  return (
    <div className="p-4">
      <MDContent content={response?.data?.attributes?.content} />
    </div>
  )
}

export default Home
