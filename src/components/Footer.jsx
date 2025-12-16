import { ArrowDown, ArrowUp, Copyright } from "lucide-react"
import { href } from "react-router-dom"


export const Footer = ()=> {
    return <footer>
                        <a href="#home" className=" left-1/2 items-center flex flex-col animate-bounce pb-6 pt-6">
        <span className="text-sm text-muted-foreground mb-2">
            </span>
            <ArrowUp  size ={30} className=" text-primary"/> Go to Top
            </a>
<div className="text-sm text-muted-foreground mb-2 flex  items-center  justify-center pb-6 pt-6">
    <span className="flex items-center gap-1" >
        <Copyright size={15}/>LazyGraphite
    </span>

</div>
    </footer>
}