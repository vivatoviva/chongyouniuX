import React,{Component}from "react";
import ReactDom,{render} from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Location from '../sitedata/slider'


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
        if(bol){
            modal.className='show'
        }else{
            modal.className='hide'
        }
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
                <div data-id={id} onClick={this.handLacttionClick} style={{backgroundImage:`url(${bgimg})`}}>{name}</div>
            )
            //弹出层标签
        }else if(type=="eject"){
            return (
                <div data-id={id} 
                    onClick={this.handEjectClick}  
                    style={{backgroundImage:`url(${bgimg})`}}>
                    {name}
                    <CSSTransitionGroup
                        transitionName="eject"
                        transitionLeaveTimeout={500}
                        transitionEnterTimeout={500}>
                        {eject}
                    </CSSTransitionGroup>
                </div>
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


