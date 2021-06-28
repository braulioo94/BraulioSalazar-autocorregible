import React from 'react'
import { Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Header = () => {
    
    return ( 
        
        <>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" size="large"> 
                <Button><Link className="text-decoration-none text-dark" to="/">Mi Equipo</Link></Button>
                <Button><Link  className="text-decoration-none text-dark" to="/search">Buscar Heroe</Link></Button>
            </ButtonGroup>
        </>
    );
}

export default Header;