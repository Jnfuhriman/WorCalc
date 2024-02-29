import Logo from "../resources/Logo.png";
import fastidious_profile_picture_blue from "../resources/fastidious_profile_picture_blue.png"

export default function Header() {
	const style = {
		backgroundColor: '#60ACF7'
	}
	return (
		<>
			<nav className='navbar' style={style}>
				<div className='container-fluid'>
					<a className='navbar-brand' href='#'>
						<div className='d-inline-flex align-text-center gap-3'>
							<img src={fastidious_profile_picture_blue} alt='Bootstrap' width={40} height={40}/>
							<h2 className="ml-auto">WoR Pack True Value Calculator</h2> 
						</div>
					</a>
				</div>
			</nav>
		</>
	);
}
