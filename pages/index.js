import { createClient } from "contentful"
import SoupeCard from "../components/soupeCard/SoupeCard"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({content_type: 'soupes'})

  return {
    props: {
      soupes: res.items
    } 
  }
}


export default function Recipes({ soupes }) {

  console.log(soupes)

  return (
    <div className="soupes-list">
      {soupes.map(soupe => {
        return (
          <SoupeCard key={soupe.sys.id} soupe={soupe.fields} />
        )
      })}
    </div>
  )
}