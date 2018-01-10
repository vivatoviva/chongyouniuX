import React,{Component}from "react";
import {render} from 'react-dom';
const data = [
    {
        name:"友情链接",
        link:[
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            },
            {
                name:"龙轩导航",
                url:"http://ilxdh.com/"       
            }
        ]
    },
    {
        name:'关于我们',
        link:[
            {
                name:'简介',
                url:"http://ilxdh.com/about.html"
            },
            {
                name:"@龙轩日常",
                url:'http://ilxdh.com/'
            },
            {
                name:"@龙轩日常",
                url:'http://ilxdh.com/'
            },
            {
                name:"@龙轩日常",
                url:'http://ilxdh.com/'
            },
            {
                name:"@龙轩日常",
                url:'http://ilxdh.com/'
            }
        ]
    },
    {
        name:"关于网站",
        link:[
            {
                name:"开源地址",
                url:""
            },
            {
                name:"链接提交",
                url:""
            },
            {
                name:"网站调查问卷",
                url:""
            }
        ]
    }
]

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