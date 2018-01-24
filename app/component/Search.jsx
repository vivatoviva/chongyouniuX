import React,{Component}from "react";
import {render} from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import data from '../sitedata/searchdata'

class Type extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.click(this.props.index);
    }
    render(){
        return (
            <div className={this.props.className} onClick={this.handleClick}>{this.props.data.name}</div>
        );
    }
}
class Typelist extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(index){
        this.props.handTypeIndex(index);
        this.props.inputFocus();
    }
    render(){
        let className;
        
        return (this.props.data.map((data,index)=>{
            if(this.props.index==index){
                className="now"
            }else{
                className=""
            }
            return <Type className={className} 
                        index={index}
                        key={data.name}
                        click={this.handleClick}
                        data={data}/>
        }))
    }
}
class Input extends Component{
    constructor(props){
        super(props);
        this.handInputValue=this.handInputValue.bind(this);
        this.handTipClick=this.handTipClick.bind(this);
        this.handKeyDown=this.handKeyDown.bind(this);
        this.handBlur=this.handBlur.bind(this);
        window.baidu={};
        this.state={
            tips:[],
            index:-1,
            display:true
        }
        const obj=this;//保存当前对象
        window.baidu.sug = function(text){
            obj.setState({
                tips:text.s
            })
        }
    }
    componentDidMount(){
        this.props.inputFocus();
    }
    componentDidUpdate(){
        //input更新后立即刷新
        //this.props.inputFocus();
        const length = this.input.value.length;
       
        if(this.state.index!==-1){
            const length = this.input.value.length-1;
            this.input.setSelectionRange(-1,-1)
        }
    }
    //输入框输入的监听函数
    handInputValue(e){
        this.props.click(e.target.value);
        var JSONP=document.createElement("script");
        JSONP.type="text/javascript";  
        JSONP.src="http://unionsug.baidu.com/su?wd="+e.target.value;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
    }
    //选择tip是监听函数
    handTipClick(e){
        console.log(e.target.innerHTML);
        this.props.click(e.target.innerHTML);
        this.setState({
            index:-1
        })
    }
    //键盘监听函数
    handKeyDown(e){
        this.setState({display:true})
        e.stopPropagation();//冒泡问题
        switch(e.keyCode){
            case 40:{
                if(this.state.tips.length==0){
                    break;
                }
                if(this.state.index+1==this.state.tips.length){
                    this.state.index=-1
                }
                this.setState({index:this.state.index+1});
                this.props.click(this.state.tips[this.state.index+1]);
                break;
            }
            case 38:{
                //向上点击
                
                if(this.state.tips.length==0){
                    break;
                }
                if(this.state.index==0){
                    this.state.index=this.state.tips.length;
                }
                this.setState({index:this.state.index-1});
                this.props.click(this.state.tips[this.state.index-1]);
                break;
            }
            case 13:{
                if(this.state.index==-1){
                    this.props.submit();
                }else if(this.state.tips.length!=0){
                    this.setState({tips:[],index:-1});
                }
            }
        }
    }
    handBlur(e){
        //延迟刷新执行，为后面handTipClick执行提供数据（轮询机制）
        setTimeout(() => {
            this.setState({
                index:-1,   
                display:false
            });
        }, 100);
    }
    render(){
        let style={};
        return (
            <div  onKeyDown={this.handKeyDown}>
                 <input value={this.props.value} 
                        type="text" 
                        ref={(input)=>{this.input=input;this.props.inputRef(input)}}
                        placeholder={this.props.desc}
                        onChange={this.handInputValue}
                        onBlur={this.handBlur}
                        autoComplete="no"
                        />
                        <ul>
                            {   
                                this.state.tips.map((tip,index)=>{
                                    if(this.state.index==index){
                                    style={
                                        "backgroundColor":"#e2e2e2"
                                    }
                                    }else{
                                        style={}
                                    }
                                    if(this.state.display){
                                        return <li style={style} key={tip} onClick={this.handTipClick}>{tip}</li>
                                    }
                                    
                                })
                            }
                        </ul>
            </div>
        );
    }
}
class Inputlink extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.change(e.target.getAttribute('index'));
    }
    render(){
        let className="";
        return (
            <div>
                {
                    this.props.link.map((data,index)=>{
                        if(this.props.index==index){
                                className="now";
                        }else{
                            className="";
                        }
                        return <div className={className}
                                    key={data.name} 
                                    index={index}
                                    onClick={this.handleClick}
                                    >{data.name}</div>;
                    })
                }
            </div>
        )
    }
}
class SearchInput extends Component{
    constructor(props){
        super(props);
        this.handInput = this.handInput.bind(this);
        this.handTypeChance = this.handTypeChance.bind(this);
        this.submit = this.submit.bind(this);
        //此处index控制当前网站选项
        if(!getCookie('pos')){
            setCookie('pos',"0@0@0@0@0@0@0@0")
        }
        this.indexarr = getCookie('pos').split('@');
        console.log(this.indexarr)
        this.state=({
            value:"",
            index:this.indexarr[this.props.index]
        })
    }
    handInput(value){
        this.setState({
            value
        })
    }
    handTypeChance(index){
        this.indexarr[this.props.index] = index;
        console.log(this.indexarr.join("@"))
        setCookie("pos",this.indexarr.join("@"))
        this.setState({index})
        this.props.inputFocus();
        this.submit({value:this.state.value,index});
    }
    //搜索提交控制函数
    submit({value,index}=this.state){
        const link = this.props.link[index].link;
        if(value!=''){
            window.location.href=link+value;
        }
    }
    componentDidMount(){
        document.addEventListener('keyup',(e)=>{
            //处理事件冒泡的新方式
            if(e.keyCode==13&&e.target.tagName=="BODY"){
                this.submit();
            }
        })
    }
    render(){
        return (
            <div>  
                <Input value={this.state.value}
                       desc={this.props.desc} 
                       click={this.handInput} 
                       submit={this.submit} 
                       inputRef={this.props.inputRef}
                       inputFocus={this.props.inputFocus}/>
                <Inputlink link={this.props.link}
                           index={this.state.index}
                           change={this.handTypeChance}/>
            </div>
        )
    }
}


class Search extends Component{
    constructor(props){
        super(props);
        this.inputFocus=this.inputFocus.bind(this);
        //控制当前搜索的板块
        if(!getCookie('plate')){
            setCookie('plate',5);
        }
        console.log(getCookie('plate'))
        this.state=({index:Number(getCookie('plate'))})
        this.handTypeIndex=this.handTypeIndex.bind(this);
    }
    handTypeIndex(index){
        setCookie('plate',index);
        this.setState({index})
    }
    //input焦点函数
    inputFocus(){
        this.input.focus();
    }
    componentDidMount(){
        //组件加载完成，立刻定位光标
        this.inputFocus();
    }
    render(){
        return (
            <div className="clearfix">
                <div className="left">
                    <Typelist handTypeIndex={this.handTypeIndex} 
                              index = {this.state.index}
                              data={this.props.data}
                              inputFocus={this.inputFocus}/>
                </div>
                <div className='right'>
                    <SearchInput desc={this.props.data[this.state.index].desc}
                                 link={this.props.data[this.state.index].link}
                                 index={this.state.index}
                                 inputRef={(input)=>this.input=input}
                                 inputFocus={this.inputFocus}
                    />
                </div>     
            </div>
        );
    }

}
function setCookie(name,value){
    let day = 30;
    let exp = new Date();
    exp.setTime(exp.getTime()+day*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    return true;
}
function getCookie(name){
    let strcookies = document.cookie;
    let cookies = strcookies.split(';');
    for(let cookie of cookies){
        let cookielist = cookie.split("=");
        if(cookielist[0].trim()==name){
            return cookielist[1];
        }
    }
    return false;
}
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime()-1);
    var cookieValue = getCookie(name);
    if(cookieValue!=null){
        document.setCookie = `${name}=${escape(cookieValue)};expires=${exp.toGMTString()}`
        return true;
    }
    return false;
}
render(
    <Search data={data}/>,
    document.getElementById('search')
)