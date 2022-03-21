import React from "react";
import { Link } from "gatsby";


const Menu = () => (

        <div style={{
                background: 'white',
                padding: '10px', 
        }}>

                <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-evenly',

                }}>
                        <li>
                                <Link to="/">Home</Link>
                        </li>

                        <li>
                                <Link to="/note">Notes</Link>
                        </li> 
                        
                        <li>
                                <Link to="/about">About</Link>
                        </li>

                         
                        


                </ul>

        </div>  
   

)

export default Menu;