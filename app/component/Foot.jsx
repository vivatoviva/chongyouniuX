import React,{Component}from "react";
import {render} from 'react-dom';
import data from '../sitedata/footdata'


function Title({title}){
    return  (
            <p>{title}</p>
    )
}

const Link= ({links}) => {
    return (
        <ul>
            {
                links.map((data,index)=>{
                    return <li key={index} ><a href={data.url} target="_blank">{data.name}</a></li>
                })
            }
        </ul>
    )
}

const Ul =({data}) => {
            return (
            <div>
                <Title title={data.name}/>
                <Link links={data.link}/>
            </div>
        )
}
class Foot extends Component{
    render(){
        return (
            <div className="clearfix">
                 {
                    this.props.data.map((data,index)=>{
                      return <Ul data={data} key={index}/>
                    })
                 }

            </div>
        )
    }
}
render(
    <Foot data={data}/>,
    document.getElementById('footer')
)