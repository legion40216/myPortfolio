import {Outlet} from 'react-router-dom'
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
                <a href="/">Home</a>
                <a href="project">Projects</a>
                <a href="about">About me</a>
            </div>

            <div className="flex flex-col gap-3">
                <a href="/">Linkedin</a>
                <a href="/">Twitter</a>
            </div>

            <div className="flex flex-col gap-3">
                <a href="/">Github</a>
            </div>
        </footer>
    </div>
        
  )
}


