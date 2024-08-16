import MDContent from "./_components/MDContent"
import { getSinglePage } from "./_lib/apiCalls"


async function Home() {
  
  const {data} = await getSinglePage('home')

  return (
    <div className="p-4 [&_p]:leading-7 [&_p]:mb-4 font-light">
      <MDContent content={data?.attributes?.content} />
    </div>
  )
}

export default Home
