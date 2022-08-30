import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>The most Delicious</span>
              <span>Soups</span>
            </h1>
 
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2022 Carin Wood</p>
      </footer>
    </div>
  )
}