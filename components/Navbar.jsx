import Link from "next/link";
import { useRouter } from 'next/router'


const Navbar = ( { menus } ) => {
	const { pathname } = useRouter();
	return(
		<>
			<ul className="header__nav">
				{ menus?.map(( { menuItemId, label, path } )=> (
					<li key={ menuItemId } >
						<Link   href={ path } className={ pathname === path ? styles.active : '' + `header__link`} >{ label }</Link>
						</li>
				)) }
			</ul>
		</>
	)
}
  
export default Navbar