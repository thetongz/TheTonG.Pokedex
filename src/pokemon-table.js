import React from 'react'

export class PokeTable extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <table>
                <tbody>
                    <tr>
                    {   
                        this.props.header.map((header,i) => (
                                <th key={i}>{ header }</th>
                            )
                        )
                    }
                    </tr>
                    {
                        this.props.details.map(details => (
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
    }
}

class PokeCurrentImage extends React.Component{
    constructor(props){
        super(props)
        const src = `image/${this.props.image}`
        const title = this.props.image.split(".")[0]
        this.state = {
            src: src,
            title: title
        }
    }
    render(){
        return ( 
        <td>
            <img className="img-picture" src={this.state.src} title={this.state.title}/>
        </td>
    )
    }
}

class PokeNextImage extends React.Component{
    constructor(props){
        super(props)
        const img_regex = /\.(gif|jpg|jpeg|tiff|png)$/i
        const isImage =  this.props.evolution.match(img_regex)?true:false
        this.state = {
            isImage: isImage
        }
    }
    render(){
        if(this.state.isImage){
            return <PokeCurrentImage image={this.props.evolution} />
        }else{
            return <td>Cannot Evolution</td>
        }
    }
}