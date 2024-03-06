import banner from "../resources/calculator_banner_TN_for_jake.png"

export default function Header() {

	return (
		<>
			<nav className='navbar'>
				<img src={banner} class="container-fluid" alt="Responsive image" />
			</nav>
		</>
	);
}
