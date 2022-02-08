import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = (props) => (
  <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
    <Navbar.Brand href='#home'>{props.branding}</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='ml-auto'>
        <Nav.Link href='#features'>Menu</Nav.Link>
        <Nav.Link href='#pricing'>Reservation</Nav.Link>
        <Nav.Link href='#pricing'>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default MyNavbar
