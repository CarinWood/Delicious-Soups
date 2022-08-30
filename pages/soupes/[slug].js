import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "soupes" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'soupes',
    'fields.slug': params.slug
  })

  return {
    props: { soupe: items[0] }
  }

}

export default function RecipeDetails({ soupe }) {
  const { title, ingredients, description, imageLink } = soupe.fields
  
  return (
    <div className='soupe-card'>
    <div className="banner">
      <img className='banner-img' src={ imageLink } alt="" />
      <h2>{ title }</h2>
      </div>
      <div className='info'>
        <h3>ingredienser:</h3>
         <ul className='list'>{ingredients.map(item => (
          <li className="list-item" key={item}>{item}</li>
         ))}</ul>   
  
      </div>
      <div>
        <h3>Gör så här:</h3>
            <div>{documentToReactComponents(description)}</div>
      </div>
    </div>
 
  )
}