import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";


export const Layout: React.FC = ({children}) => {
  return (
    <div>
      <span><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
  <a className="navbar-brand" >Home</a>
  </Link>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">




          <Link href="/Flashcards/mentalFlashcard" >
          <a className="dropdown-item" >Mental FlashCard</a>
          </Link>
          <Link  href="/Flashcards/inputFlashcard">
             <a className="dropdown-item" >Input Flashcard</a>
          </Link>
          <Link  href="/Flashcards/MCQFlashcard">
             <a className="dropdown-item" >MCQ Flashcard</a>
          </Link>




    </ul>

  </div>
</nav></span>
      <article>
        {children}
      </article>
    </div>
  )
}

