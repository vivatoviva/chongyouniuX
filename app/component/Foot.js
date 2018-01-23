import React,{Component}from "react";
import {render} from 'react-dom';
import data from '../sitedata/footdata'


class Title extends Component{
    render(){
        return (
            <p>{this.props.title}</p>
        )
    }
}
class Link extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.links.map((data,index)=>{
                        return <li key={index} ><a href={data.url} target="_blank">{data.name}</a></li>
                    })
                }
            </ul>
        )
    }
}
class Ul extends Component{
    render(){
        return (
            <div>
                <Title title={this.props.data.name}/>
                <Link links={this.props.data.link}/>
            </div>
        )
    }
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