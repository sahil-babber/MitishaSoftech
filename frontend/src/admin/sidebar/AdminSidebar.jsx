import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="text-white p-3" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <h4 className="text-center text-dark mb-4">Admin Dashboard</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/admin/dashboard" className="text-dark">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/admin/users" className="text-dark">Users</Nav.Link>
        <Nav.Link as={Link} to="/admin/settings" className="text-dark">Settings</Nav.Link>
        <Nav.Link as={Link} to="/admin/reports" className="text-dark">Reports</Nav.Link>
        <Nav.Link as={Link} to="/admin/logout" className="text-dark">Logout</Nav.Link>
      </Nav>
    </div>
  );
}

export default AdminSidebar;
