import React,{Component}from "react";
import {render} from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

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
                link:"https://www.zhihu.com/search?type=content&q="
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
        name:"网盘",
        desc:'你想要的这里都有 ',
        link:[
            {
                name:"58网盘",
                link:"http://www.58wangpan.com/search/kw"
            },
            {
                name:"去转盘",
                link:"http://www.quzhuanpan.com/source/search.action?q="
            },
            {
                name:'特百度',
                link:'https://www.ttyunsou.com/s?keyword='
            }
        ]
    },
    {
        name:"软件",
        desc:'下面目录推荐软件，可以试试',
        link:[
            {
                name:"胡萝卜周",
                link:"http://www.carrotchou.blog/?s="
            },
            {
                name:'吾爱破解',
                link:'http://zhannei.baidu.com/cse/search?click=1&s=14525262514411293706&isNeedCheckDomain=1&jump=1&q='
            },
            {
                name:'百度软件中心',
                link:'http://rj.baidu.com/search/index/?kw='
            },
            {
                name:"pc6",
                link:"https://s.pc6.com/cse/search?s=12026392560237532321&q="
            },
            {
                name:"下载吧",
                link:"http://zhannei.baidu.com/cse/search?s=9035802123405734980&q="
            }
        ]
    },
    {
        name:"学术",
        desc:'',
        link:[
            {
                name:"中国学术",
                link:"http://www.sciinfo.cn/Result.aspx?c=1&q=神帝&t=1&l=allLan&sq="
            },
            {
                name:"golo学术",
                link:"https://xs.glgoo.net/scholar?hl=zh-CN&q="
            },
            {
                name:"必应学术",
                link:"https://www.bing.com/academic/search?q="
            },
            {
                name:"谷歌学术",
                link:"https://xs.glgoo.net/scholar?hl=zh-CN&q="
            }
        ]
    },
    {
        name:"音乐",
        desc:'动听的音乐可以陶冶情操',
        link:[
            {
                name:"网易云",
                link:"http://music.163.com/#/search/m/?s="
            },
            {
                name:"QQ音乐",
                link:"https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w="
            },
            {
                name:'音悦台',
                link:'http://so.yinyuetai.com/?keyword='
            },
            {
                name:'酷狗',
                link:'http://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord='
            }
        ]
    },
    {
        name:"电子书",
        desc:'搜索你想要的网页吧',
        link:[
            {
                name:"Gitbook",
                link:"https://www.gitbook.com/search?q="
            },
            {
                name:"鸠摩搜书",
                link:"https://www.jiumodiary.com/?"
            },
            {
                name:'笔趣阁',
                link:'https://www.qu.la/book/14721/?keyword='
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