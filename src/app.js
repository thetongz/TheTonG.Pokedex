import React from 'react'
import ReactDOM from 'react-dom'
import {Navbar} from './navigation'



const PokeCurrentImage = (props) =>{
    const src = `image/${props.image}`
    const title = props.image.split(".")[0];

    return (
        <td>
            <img className="img-picture" src={src} title={title}/>
        </td>
    )
}

const PokeNextImage = (props) =>{
    const img_regex = /\.(gif|jpg|jpeg|tiff|png)$/i
    const isImage =  props.evolution.match(img_regex)?true:false
    
    if(isImage){
        return <PokeCurrentImage image={props.evolution} />
    }else{
        return <td>Cannot Evolution</td>
    }
    
}
const PokeTable = (props) =>(
    <table>
        <tbody>
            <tr>
            {   
                props.header.map((header,i) => (
                        <th key={i}>{ header }</th>
                    )
                )
            }
            </tr>
            {
                props.details.map(details => (
                        <tr key={details.Number}>
                            <td>{details.Number}</td>
                            <PokeCurrentImage image={details.Image}/>
                            <td>{details.Name}</td>
                            <td>{details.Category}</td>
                            <td>{details.CP}</td>
                            <td>{details.IV}</td>
                            <PokeNextImage evolution={details.Next_Evolution}/>
                        </tr>
                    )
                )
            }
        </tbody>
    </table>

)

const App = () =>{
    const header = ["Number","Image","Name","Category","CP","IV","Next Evolution"]
    const details = [
            {
                'Number': '#0001',
                'Image': 'fushigidane.png',
                'Name': 'Fushugidane',
                'Category': 'Seed',
                'CP': '354',
                'IV': '77.8%',
                'Next_Evolution': 'fushigisō.png',
            },
            {
                'Number': '#0002',
                'Image': 'fushigisō.png',
                'Name': 'Fushigisō',
                'Category': 'Seed',
                'CP': '785',
                'IV': '72.21%',
                'Next_Evolution': 'fushigibana.png',
            },
            {
                'Number': '#0003',
                'Image': 'fushigibana.png',
                'Name': 'Fushigibana',
                'Category': 'Seed',
                'CP': '1454',
                'IV': '82.83%',
                'Next_Evolution': 'Cannot evolution',
            },
            {
                'Number': '#0004',
                'Image': 'hitokage.png',
                'Name': 'Hitokage',
                'Category': 'Lizard',
                'CP': '412',
                'IV': '86.7%',
                'Next_Evolution': 'rizādo.png',
            },
            {
                'Number': '#0005',
                'Image': 'rizādo.png',
                'Name': 'Rizādo',
                'Category': 'Lizard',
                'CP': '954',
                'IV': '84.38%',
                'Next_Evolution': 'rizādon.png',
            },
            {
                'Number': '#0006',
                'Image': 'rizādon.png',
                'Name': 'Rizādon',
                'Category': 'Lizard',
                'CP': '1954',
                'IV': '90.12',
                'Next_Evolution': 'Cannot evolution',
            }
        
        ]
    return (
        <section >
            <PokeTable 
                header = {header} 
                details = {details}
            />
        </section>
    )
}






ReactDOM.render(<Navbar />,document.getElementById('nav-bar'))
ReactDOM.render(<App />,document.getElementById('app'))
