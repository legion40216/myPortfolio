import {Link, Outlet} from 'react-router-dom'
import Header from '../components/header-components/header'

export default function RootLayout() {
  return (

    <div className="container space-y-9 py-5 px-3">
        <Header/>
    
        <main>
            <Outlet/>
        </main>

        <footer className="flex justify-between">
            <div className="flex flex-col gap-3">
                <Link to="/">Home</Link>
                <Link to="project">My Projects</Link>
                <Link to="about">About me</Link>
            </div>

            <div className="flex flex-col gap-3">
                <Link to="https://www.linkedin.com/in/suleman-lohar-1129a9136/">
                    Linkedin
                </Link>
                <Link to="/">
                    Twitter
                </Link>
            </div>

            <div className="flex flex-col gap-3">
                <Link to="https://github.com/legion40216">
                    Github
                </Link>
            </div>
        </footer>
    </div>
        
  )
}


