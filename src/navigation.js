import React from 'react'

export class Navbar extends React.Component {



    render(){
        return(
            <ul className="topnav">
                <li><a >TheTonG.Pokedex</a></li>
                <input type="text" className="right" name="search" placeholder="Search.."/>
            </ul>
        )
    }
}