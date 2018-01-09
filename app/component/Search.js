import React,{Component}from "react";
import {render} from 'react-dom';


let data = [
    {
        name:"网页",
        desc:'搜索你想要的网页吧',
        link:[
            {
                name:"百度",
                link:"https://www.baidu.com/s?wd="
            },
            {
                name:"谷歌镜像",
                link:"https://9shi.ml/search?q=",
            },
            {
                name:"必应",
                link:"https://www.bing.com/search?q="
            },
            {
                name:"知乎",
                link:"http://zhihu.sogou.com/zhihu?query="
            },
            {
                name:"搜狗",
                link:"https://www.sogou.com/web?query="
            },
            {
                name:"微信",
                link:"http://weixin.sogou.com/weixin?type=2&query="
            }
        ]
    },
    {
        name:"影视",
        desc:'美美的看上一场电影吧',
        link:[
            {
                name:"疯狂影视搜索",
                link:"http://ifkdy.com/?q="
            },
            {
                name:"哔哩哔哩",
                link:"https://search.bilibili.com/all?keyword="
            },
            {
                name:"降龙影院",
                link:"http://xlyy100.com/index.php?m=vod-search-pg-1-wd-"
            },
            {
                name:"胖鸟影院",
                link:"http://www.pniao.com/Mov/so/"
            },
            {
                name:"动漫花园",
                link:"https://share.dmhy.org/topics/list?keyword="
            }
        ]
    },
    {
        name:"学术",
        desc:'恩恩，你想知道点什么呐？  ',
        link:[
            {
                name:"guge",
                link:""
            },
            {
                name:"baidu",
                link:"adas"
            }
        ]
    },
    {
        name:"BT种子",
        desc:'搜索你想要的网页吧',
        link:[
            {
                name:"guge",
                link:""
            },
            {
                name:"baidu",
                link:"adas"
            }
        ]
    },
    {
        name:"软件",
        desc:'搜索你想要的网页吧',
        link:[
            {
                name:"guge",
                link:""
            },
            {
                name:"baidu",
                link:"adas"
            }
        ]
    },
    {
        name:"音乐",
        desc:'搜索你想要的网页吧',
        link:[
            {
                name:"guge",
                link:""
            },
            {
                name:"baidu",
                link:"adas"
            }
        ]
    },
    {
        name:"电影",
        desc:'搜索你想要的网页吧',
        link:[
            {
                name:"guge",
                link:""
            },
            {
                name:"baidu",
                link:"adas"
            }
        ]
    },
    {
        name:"神奇",
        desc:'搜索你想要的网页吧',
        link:[
            {
                name:"神奇",
                link:"www.baidu.con"
            },
            {
                name:"baidu",
                link:"adas"
            }
        ]
    }
]
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
        this.state=({
            index:0
        });
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(index){
        this.setState({index});
        this.props.handTypeIndex(index);
        this.props.inputFocus();
    }
    render(){
        let className;
        return (this.props.data.map((data,index)=>{
            if(this.state.index==index){
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
        console.log(e.target.innerHTML)
        this.props.click(e.target.innerHTML);
        this.setState({
            index:-1,
            display:true
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
                        ref={this.props.inputRef}
                        placeholder={this.props.desc}
                        onChange={this.handInputValue}
                        onBlur={this.handBlur}
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
        this.state=({
            value:"",
            index:"0"
        })
    }
    handInput(value){
        this.setState({
            value
        })
    }
    handTypeChance(index){
        this.setState({
            index
        })
        this.props.inputFocus();
        this.submit({value:this.state.value,index});
    }
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
                        inputFocus={this.inputFocus}/>
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
        this.state=({
            index:0
        })
        this.handTypeIndex=this.handTypeIndex.bind(this);
    }
    handTypeIndex(index){
        this.setState({
            index
        })
    }
    //input焦点函数
    inputFocus(){
        this.input.focus();
    }
    componentDidMount(){
        this.inputFocus();
    }
    render(){
        return (
            <div className="clearfix">
                <div className="left">
                    <Typelist handTypeIndex={this.handTypeIndex} 
                             data={this.props.data}
                             inputFocus={this.inputFocus}/>
                </div>
                <div className='right'>
                    <SearchInput desc={this.props.data[this.state.index].desc}
                    link={this.props.data[this.state.index].link}
                    inputRef={(input)=>this.input=input}
                    inputFocus={this.inputFocus}
                    ></SearchInput>
                </div>     
            </div>
        );
    }
}
render(
    <Search data={data}/>,
    document.getElementById('search')
)