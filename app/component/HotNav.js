import React,{Component}from "react";
import {render} from 'react-dom';
const data=[
    {   
        name:'淘宝优惠',
        imgurl:'http://ilxdh.com/images/11/youhuiquan.jpg',
        href:'http://lolbaicai.com/index.php?r=l&u=396722'
    },
    {
        name:'观点',
        imgurl:'http://ilxdh.com/images/banner/guand.png',
        href:'http://www.guandn.com/p/15153046899832'     
    },
    {
        name:'疯狂影视搜索',
        imgurl:'http://ilxdh.com/images/banner/fkys.png',
        href:'http://ifkdy.com/'    
    },
    {
        name:'脑洞引擎',
        imgurl:'http://ilxdh.com/images/banner/Taguage.png',
        href:'http://www.taguage.com/'  
    },
    {
        name:'扫码领红包',
        imgurl:'http://ilxdh.com/images/banner/hongbao.jpg',
        href:'http://blog.ilxdh.com/?p=7'    
    },
    {
        name:'百度云',
        imgurl:'http://ilxdh.com/images/banner/buxiansu.png',
        href:'http://lolbaicai.com/index.php?r=p&u=396722'   
    },
    {
        name:'每日热卖',
        imgurl:'http://ilxdh.com/images/banner/remai.png',
        href:'http://lolbaicai.com/index.php?r=p&u=396722'   
    },
    {
        name:'点评网站',
        imgurl:'http://ilxdh.com/images/banner/guand.png',
        href:'http://lolbaicai.com/index.php?r=p&u=396722'   
    }
]
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