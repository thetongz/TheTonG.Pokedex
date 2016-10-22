import React from 'react'

export class Navbar extends React.Component {



    render(){
        return(
            <section>
                <ul className="topnav">
                    <li><a >TheTonG.Pokedex</a></li>
                    <div className="nav-right">
                        <input type="text" name="search" placeholder="Pokemon's name"/>
                        <button className=" search-button">Search</button>
                    </div>
                </ul>
                
            </section>            
        )
    }
}