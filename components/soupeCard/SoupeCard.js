import Link from 'next/link'
import styles from './soupeCard.module.css'


export default function SoupeCard({soupe}) {
    const {title, slug, description, ingredients, imageLink } = soupe
  return (
    <div className={styles.card}>
      <div className={styles.featured}>
        <img className={styles.img} src={imageLink} alt="" />
      </div>
      <div className={styles.content}>
          <div className={styles.info}>
              <h4 className={styles.title}>{title}</h4>   
          </div>
          <div className={styles.actions}>
          <Link href={"/soupes/" + slug}><a className={styles.cookthis}>Recept</a></Link>
          </div>
      </div>
            
    </div>
  )
}
