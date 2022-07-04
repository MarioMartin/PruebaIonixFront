import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "./../redux/actions/AuthAction";
import Avatar from 'react-avatar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

    const [esLogin, setEsLogin] = useState(true);
    const [avatar, setAvatar] = useState(true);
    const user = useSelector((state) => state.redAuth.user);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {

        if(user){
            setAvatar(user.avatar);
        }

    }, [user])

    useEffect(() => {
        console.log("location===>: " + location.pathname);
        if (location.pathname === '/registro') {
            setEsLogin(false);
        }

        if (location.pathname === '/login') {
            setEsLogin(true);
        }

    }, [location.pathname])

    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">I O N I X  -  T E S T </Navbar.Brand>
                <Nav className="me-auto">
                    {user && (
                        <Nav.Link disabled>Usario conectado: {user.username}</Nav.Link>
                    )}
                </Nav>

                {!user && esLogin && (
                    <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
                )}

                {!user && !esLogin && (
                    <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                )}

                {user && (
                    <Nav.Link as={Link} to="/login" onClick={() => logout(dispatch)}>Logout</Nav.Link>
                )}

            </Container>
            {user && (
                <Avatar className="m-auto" name={user.username} size="40" round="20px" color="gray"  />
            )}
        </Navbar>


    )
}
export default NavBar;