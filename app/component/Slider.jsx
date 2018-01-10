import React,{Component}from "react";
import {render} from 'react-dom';

//导航资料
const Location = [
    {
        name:'搜本站',
        bgimg:'',
        hoverimg:'',
        type:'eject'
    },
    {
        name:'自定义',
        id:'a01',
        bgimg:'ssadas',
        hoverimg:'sadsad',
        type:'location'
    },
    {
        name:'生活',
        id:'a02',
        bgimg:'',
        hoverimg:'',
        type:'location'    
    },
    {
        name:'影视',
        bgimg:'',
        id:'a03',
        hoverimg:'',
        type:'location'  
    },
    {
        name:'资源',
        id:'a04',
        bgimg:'',
        hoverimg:'',
        type:'location'  
    },
    {
        name:'软件',
        id:'a05',
        bgimg:'',
        hoverimg:'',
        type:'location'  
    },
    {
        name:'模板',
        id:'a06',
        bgimg:'',
        hoverimg:'',
        type:'location'   
    },
    {
        name:'读物',
        id:'a07',
        bgimg:'',
        hoverimg:'',
        type:'location'    
    },
    {
        name:'音乐',
        id:'a08',
        bgimg:'',
        hoverimg:'',
        type:'location'  
    },
    {
        name:'学习',
        id:'a09',
        bgimg:'',
        hoverimg:'',
        type:'location'   
    },
    {
        name:'导航',
        id:'a10',
        bgimg:'',
        hoverimg:'',
        type:'location'   
    },
    {
        name:'关于',
        bgimg:'',
        hoverimg:'',
        type:'eject'
    },
    {
        name:'留言',
        bgimg:'',
        hoverimg:'',
        type:'eject'
    }
];

class LocationButton extends Component{
    constructor(props){
        super(props);
        this.handLacttionClick=this.handLacttionClick.bind(this);
    }
    handLacttionClick(e){
        const id = e.target.getAttribute("data-id");
           try{
            const node = document.getElementById(id);
            var target = Number.parseInt(node.getBoundingClientRect().top+window.pageYOffset);
            var tim = null;
            let distance=0;
            let now=Math.floor(document.documentElement.scrollTop);
            let speed=15;
            clearInterval(tim);
            tim=setInterval(()=>{
                distance=((now-target)/speed)>0?Math.ceil(((now-target)/speed)):Math.floor(((now-target)/speed));
                const temp = now - distance;
                document.documentElement.scrollTop=temp;
                now = temp;//必须强制，如果使用document.documentElement.scrollTop会出现未知bug
                if(target==temp){
                    clearInterval(tim);
                }
            },10)
           }catch(e){
                console.log('没有此ID'+id)
           }
    }
    render(){
        const style={
        };
        let click="";
        const now = this;
        const {id,name,type,bgimg,hoverimg}=this.props.link;
        if(type=="location"){
            return (
                <div data-id={id} onClick={this.handLacttionClick}>{name}</div>
            )
        }else if(type=="eject"){
            return (
                <div data-id={id}>{name}</div>
            )
        }
    }
}
class Slider extends Component{
    render(){
        return (
                <div>
                    {
                        this.props.data.map(data=>{
                            return <LocationButton link={data} key={data.name} />
                        })
                    }
                </div>
        )
    }
}
render(
    <Slider data={Location}/>,
    document.getElementById('slider')
)
