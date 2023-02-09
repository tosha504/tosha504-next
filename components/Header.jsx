import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import Logo from "../assets/images/LOGO.svg"

const Header = ({menus}) => {

	// console.log(Logo);
	return(
		<>
			<header className="header">
				<div className="container">
					<div className="header__box">
						<div className="header__logo">
							<Link href="/" >
							<Image 
								src={Logo.src}
								alt="Logo"
								width={Logo.width}
								height={Logo.height}/>
							</Link>
						</div>
						<Navbar menus={menus} />
					</div>
				</div>
			</header>
		</>
	)
}
  
export default Header
