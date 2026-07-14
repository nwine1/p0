import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
	return
	<>
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Nav.Item>
					<Nav.Link as={Link} to="/Landing">Landing Page</Nav.Link>
				</Nav.Item>
				<NavDropdown title="My Plans" id="planList">
					<NavDropdown.Item>No plans defined</NavDropdown.Item>
				</NavDropdown>
				<NavDropdown title="Create New" id="createPlan">
					<Nav.Link as={Link}>5K</Nav.Link>
					<Nav.Link as={Link}>10K</Nav.Link>
					<Nav.Link as={Link}>Half MarathonK</Nav.Link>
					<Nav.Link as={Link}>MarathonK</Nav.Link>
				</NavDropdown>
			</Container>
		</Navbar>
	</>
}
export default NavBar
