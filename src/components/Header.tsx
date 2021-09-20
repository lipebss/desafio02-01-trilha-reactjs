import '../styles/header.scss'

interface headerProps {
  selectedGenre: string
}

export function Header({selectedGenre}: headerProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre}</span></span>
    </header>
  )
}