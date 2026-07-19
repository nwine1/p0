import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
	return (
		<Navbar bg="primary" variant="light" expand="md">
			<Container>
				<Nav.Item>
					<Nav.Link as={Link} to="/">Landing Page</Nav.Link>
				</Nav.Item>
				<NavDropdown title="My Plans" id="planList">
					<NavDropdown.Item>No plans defined</NavDropdown.Item>
				</NavDropdown>
				<NavDropdown title="Create New" id="createPlan">
					<NavDropdown.Item as={Link} to="/create/5k"> + 5K</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/create/10k"> + 10K</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/create/half"> + Half Marathon</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/create/full"> + Marathon</NavDropdown.Item>
					<NavDropdown.Item as={Link} to="/create"> + Custom</NavDropdown.Item>
				</NavDropdown>
			</Container>
		</Navbar>
	)
}
export default NavBar
