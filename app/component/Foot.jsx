import React,{Component}from "react";
import {render} from 'react-dom';
import data from '../sitedata/footdata'


const SiteLink =({data}) => {
            return (
                <div>
                    
                    <p>{data.name}</p>
                    <ul>
                        {
                            data.link.map((data,index)=>{
                                return <li key={index} ><a href={data.url} target="_blank">{data.name}</a></li>
                            })
                        }
                    </ul>
                </div>
            )
}
class Foot extends Component{
    render(){
        return (
            <div className="clearfix">
                 {
                    this.props.data.map((data,index)=>{
                      return <SiteLink data={data} key={index}/>
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