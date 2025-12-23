import { Link } from "next";

export default function Navigation(){
    return (
        <nav>
            <ul>
                <li><Link href"/"></Link></li>
                <li>About Us</li>                
            </ul>
        </nav>
    )
}