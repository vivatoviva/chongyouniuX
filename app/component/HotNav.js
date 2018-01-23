import React,{Component}from "react";
import {render} from 'react-dom';
import data from '../sitedata/hotdata'

class HotNav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<ul className="clearfix">
        {
            this.props.datas.map((data,index)=>{
                if(data.imgurl&&index<=7){
                    return <li key={index}><a href={data.href} 
                                                style={{"backgroundImage":data.imgurl}}
                                                target="_blank">
                                                <img src={data.imgurl} />
                                                </a></li>
                }
            })
        }
        </ul>)
    }
}
render(
    <HotNav datas={data}></HotNav>,
    document.getElementById('hot-nav')
)