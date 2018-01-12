import React,{Component}from "react";
import ReactDom,{render} from 'react-dom';

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
const modal = document.getElementById('modal');
//将一个组件渲染成页面中间
class Eject extends Component{
    constructor(props){
        super(props);
        this.el = document.createElement('div');
        this.el.addEventListener('click',(e)=>{
            console.log(e.target);
            const node = e.target;
            //使用这个处理事件冒泡，react的事件处理机制一点都不熟悉呀
            if(node.children.length!=0){
                 this.props.hand(false);
            }
        })
    }
    render(){
        return ReactDom.createPortal(
            this.props.children,
            this.el
        )
    }
    componentDidMount() {
        modal.appendChild(this.el);
    }
    componentWillUnmount() {
        modal.removeChild(this.el);
       
    }
}
class LocationButton extends Component{
    constructor(props){
        super(props);
        this.state={
            showEject:false
        }
        this.handLacttionClick=this.handLacttionClick.bind(this);
        this.handEjectClick=this.handEjectClick.bind(this);
    }
    handLacttionClick(e){
        const id = e.target.getAttribute("data-id");
           try{
            const node = document.getElementById(id);
            var target = Number.parseInt(node.getBoundingClientRect().top+window.pageYOffset);
            var tim = null;
            let distance=0;
            let now=Math.floor(document.documentElement.scrollTop);
            let speed=10;
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
    handEjectClick(bol=true){
        this.setState({
            showEject:bol
        })
    }
    render(){
        const style={
        };
        let click="";
        const now = this;
        //自己模板要加的内容
        const eject = this.state.showEject?(
            <Eject hand={this.handEjectClick}>
                <div className="form">hah</div>
            </Eject>
        ):null;
        const {id,name,type,bgimg,hoverimg}=this.props.link;
        //定位标签
        if(type=="location"){
            return (
                <div data-id={id} onClick={this.handLacttionClick}>{name}</div>
            )
            //弹出层标签
        }else if(type=="eject"){
            return (
                <div data-id={id} onClick={this.handEjectClick}>{name}{eject}</div>
            )
        }
    }
}
class Slider extends Component{
    constructor(props){
        super(props);
        window.onscroll = ()=>{
            console.log(Math.ceil(document.documentElement.scrollTop))
             if(Math.ceil(document.documentElement.scrollTop)>1383){
                document.getElementById("slider").style.position="absolute";
                document.getElementById("slider").style.top="1565px";
             }else{
                document.getElementById("slider").style.position="fixed";
                document.getElementById("slider").style.top="185px";
             }
        }
    }
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
