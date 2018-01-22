import React,{Component}from "react";
import ReactDom,{render} from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

//导航资料
const Location = [
    {
        name:'搜本站',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/93889582.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/93889582.jpg',
        type:'eject'
    },
    {
        name:'生活',
        id:'a01',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/83954840.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/83954840.jpg',
        type:'location'
    },
    {
        name:'影视',
        id:'a02',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/97521614.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/6332105.jpg',
        type:'location'    
    },
    {
        name:'资源',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/73244261.jpg',
        id:'a03',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/73244261.jpg',
        type:'location'  
    },
    {
        name:'软件',
        id:'a04',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/12223540.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/12223540.jpg',
        type:'location'  
    },
    {
        name:'模板',
        id:'a05',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/16869405.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/16869405.jpg',
        type:'location'  
    },
    {
        name:'读物',
        id:'a06',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/67913173.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/67913173.jpg',
        type:'location'   
    },
    {
        name:'音乐',
        id:'a07',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/25387805.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/25387805.jpg',
        type:'location'    
    },
    {
        name:'学习',
        id:'a08',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/38882213.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/38882213.jpg',
        type:'location'  
    },
    {
        name:'导航',
        id:'a09',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/80021391.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/80021391.jpg',
        type:'location'   
    },
    {
        name:'关于',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/15951409.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/15951409.jpg',
        type:'eject'
    },
    {
        name:'留言',
        bgimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/25033702.jpg',
        hoverimg:'http://oquq74tfk.bkt.clouddn.com/18-1-22/25033702.jpg',
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
            <CSSTransitionGroup
                
            >
                <Eject hand={this.handEjectClick}>
                    <div className="form">hah</div>
                </Eject>
            </CSSTransitionGroup>
        ):null;
        const {id,name,type,bgimg,hoverimg}=this.props.link;
        //定位标签
        if(type=="location"){
            return (
                <div data-id={id} onClick={this.handLacttionClick} style={{backgroundImage:`url(${bgimg})`}}>{name}</div>
            )
            //弹出层标签
        }else if(type=="eject"){
            return (
                <div data-id={id} onClick={this.handEjectClick}  style={{backgroundImage:`url(${bgimg})`}}>{name}{eject}</div>
            )
        }
    }
}
class Slider extends Component{
    constructor(props){
        super(props);
        window.onscroll = ()=>{
           // console.log(Math.ceil(document.documentElement.scrollTop))
            let sections = document.getElementsByTagName('section');
            let lastSection = sections[sections.length-1];
            let slider =document.getElementById("slider");
            let top = lastSection.offsetTop+lastSection.offsetHeight-slider.clientHeight;
             if(Math.ceil(document.documentElement.scrollTop)>top-200){
                slider.style.position="absolute";
                slider.style.top=top+"px";
             }else{
                slider.style.position="fixed";
                slider.style.top="185px";
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


