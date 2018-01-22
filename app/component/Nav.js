import React, { Component } from "react";
import { render } from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const data = {
    tagName: '影视欣赏',
    id:'a01',
    tagImgSrc:'https://i.loli.net/2018/01/09/5a54b7b52dd89.png',
    tags: [{
            tagName: '最新影视',
            link: [{
                    name: '疯狂影视欣赏',
                    site: 'http://ifkdy.com/',
                    like: true,
                    import: true
                },
                {
                    name: 'vip视频解析',
                    site: 'http://goudidiao.com/',
                    like: false,
                    import: true
                },
                {
                    name: '降龙影院',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: true
                },
                {
                    name: '降龙影院',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: true
                },
                {
                    name: '胖鸟电影',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '迅影网',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '迅影网',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: true
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '迅影网',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '迅影网',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '迅影网',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '迅影网',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: true
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: true
                }
            ]
        },
        {
            tagName: '在线影院',
            link: [{
                    name: '降龙影院',
                    site: 'http://ifkdy.com/',
                    like: true,
                    import: true
                },
                {
                    name: 'vip视频解析',
                    site: 'http://goudidiao.com/',
                    like: false,
                    import: true
                },
                {
                    name: '降龙影院',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: true
                },
                {
                    name: '降龙影院',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: true
                },
                {
                    name: '胖鸟电影',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '迅影网',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: 'neets',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                },
                {
                    name: '电影天堂',
                    site: 'http://xlyy100.com/',
                    like: false,
                    import: false
                }
            ]
        },
        {
            tagName: '美剧',
            tags: [{
                    name: '全部',
                    link: [{
                            name: '流行影院',
                            site: 'http://ifkdy.com/',
                            like: true,
                            import: true
                        },
                        {
                            name: 'vip视频解析',
                            site: 'http://goudidiao.com/',
                            like: false,
                            import: true
                        },
                        {
                            name: '降龙影院',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: true
                        },
                        {
                            name: '降龙影院',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: true
                        },
                        {
                            name: '胖鸟电影',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: '迅影网',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: 'neets',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: '电影天堂',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        }
                    ]
                },
                {
                    name: '下载',
                    link: [{
                            name: '降龙影院',
                            site: 'http://ifkdy.com/',
                            like: true,
                            import: true
                        },
                        {
                            name: 'vip视频解析',
                            site: 'http://goudidiao.com/',
                            like: false,
                            import: true
                        },
                        {
                            name: '降龙影院',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: true
                        },
                        {
                            name: '降龙影院',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: true
                        },
                        {
                            name: '胖鸟电影',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: '迅影网',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: 'neets',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: '电影天堂',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: 'neets',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: '电影天堂',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: 'neets',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: '电影天堂',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: 'neets',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: '电影天堂',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: 'neets',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        },
                        {
                            name: '电影天堂',
                            site: 'http://xlyy100.com/',
                            like: false,
                            import: false
                        }
                    ]
                }
            ]
        }
    ]
}

class Tag extends Component{
    constructor(props){
        super(props);
        this.handClick=this.handClick.bind(this);
    }
    handClick(e){
        const index = e.target.getAttribute('data-key');
        if(index!=0){
            this.props.handIndex(index-1);
        }
    }
    render(){
        let style={};
        return (
            <div className="tag">
                <ul className="clearfix">
                    {
                        this.props.data.map((data,index)=>{
                            style={};
                            if(index==0){
                                style={backgroundImage:`url(${data.tagImgSrc}`};
                            }
                            if(index==this.props.index+1){
                                style.color="red";
                            }
                            return <li id={data.tagId} key={data.tagName} data-key={index} style={style} onClick={this.handClick}>{data.tagName}</li>
                        })
                    }
                </ul>  
            </div> 
        )
    }
}
class SiteTag extends Component{
    constructor(props){
        super(props);
        this.handClick=this.handClick.bind(this);
    }
    handClick(e){
        this.props.handIndex(e.target.getAttribute('data-index'))
    }
    render(){
        let className="now";
        return (
            <div className="clearfix">
                {
                    this.props.tags.map((data,index)=>{
                        if(index==this.props.index){
                            className="now";
                        }else{
                            className="";
                        }
                        return <div key={index} data-index={index} className={className} onClick={this.handClick}>{data}</div>
                    })
                }
            </div>
        )
    }
}
class Site extends Component{
    constructor(props){
        super(props);
        this.state={index:0}
        this.handIndex=this.handIndex.bind(this);
    }
    handIndex(index){
        this.setState({
            index
        })
    }
    render(){
        let className;//用于存放渲染classname
        let links=[];let tags=[];
        if(this.props.tags.link!=undefined){
            links=this.props.tags.link;   
        }
        if(this.props.tags.tags!=undefined){
            this.props.tags.tags.map(data=>{
                tags.push(data.name);
            })
            links=this.props.tags.tags[this.state.index].link;
        }
        return (
        <div className="site">
            {  
                !tags.length?"":(<SiteTag tags={tags} index={this.state.index}  handIndex={this.handIndex}></SiteTag>)
            }
            
                <ul className="clearfix">
                <CSSTransitionGroup 
                transitionName="ceshi"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={200}>
                    {   
                        links.map((data,index)=>{
                            className="";
                            if(data.like){
                                className+=" like";
                            }
                            if(data.import){
                                className+=" import"
                            }
                            return <li key={index}><a className={className}
                                href={data.site}>{data.name}</a></li>
                        })
                    }
                </CSSTransitionGroup>
                </ul>
            </div>
        )
    }
}
class Nav extends Component{
    constructor(props){
        super(props);
        this.state={index:0};//当前tag第几个
        this.handIndex=this.handIndex.bind(this);
    }
    handIndex(index){
        this.setState({
            index
        })
    }
    render(){
        const tagData=[];
        tagData.push({tagName:this.props.data.tagName,tagImgSrc:this.props.data.tagImgSrc,tagId:this.props.data.id});
        this.props.data.tags.map(data=>{
            tagData.push({tagName:data.tagName})
        })
        return (
            <div>
                <Tag data={tagData} handIndex={this.handIndex} index={this.state.index}></Tag>
                <Site tags={this.props.data.tags[this.state.index]}></Site>
            </div>
        )
    }
}

 const data1 = require('../sitedata/data1');
render(
    <Nav data={data1.default} />,
    document.getElementById('custom-nav')
)
const data2 = require('../sitedata/data2');
render(
    <Nav data={data2.default} />,
    document.getElementById('life-nav')
)
const data3 = require('../sitedata/data3');
render(
    <Nav data={data3.default} />,
    document.getElementById('movies-nav')
)
const data4 = require('../sitedata/data4');
render(
    <Nav data={data4.default} />,
    document.getElementById('res-nav')
)
const data5 = require('../sitedata/data5');
render(
    <Nav data={data5.default} />,
    document.getElementById('soft-nav')
)
const data6 = require('../sitedata/data6');
render(
    <Nav data={data6.default} />,
    document.getElementById('music-nav')
)
const data7 = require('../sitedata/data7');
render(
    <Nav data={data7.default} />,
    document.getElementById('study-nav')
)
const data8 = require('../sitedata/data8');
render(
    <Nav data={data8.default} />,
    document.getElementById('music-nav')
)
const data9 = require('../sitedata/data9');
render(
    <Nav data={data9.default} />,
    document.getElementById('bigdata-nav')
)

