import React, {
    Component
} from "react";
import {
    render
} from 'react-dom';

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
                {   
                    links.map((data,index)=>{
                        className="";
                        if(data.like){
                            className="like";
                        }
                        if(data.import){
                            className+=" import"
                        }
                        return <li key={index}><a className={className} 
                               href={data.site}>{data.name}</a></li>
                    })
                }
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
render(
    <Nav data={data} />,
    document.getElementById('custom-nav')
)
data.id="a02"
render(
    <Nav data={data} />,
    document.getElementById('life-nav')
)
data.id="a03"
render(
    <Nav data={data} />,
    document.getElementById('movies-nav')
)
data.id="a04"
render(
    <Nav data={data} />,
    document.getElementById('res-nav')
)
data.id="a05"
render(
    <Nav data={data} />,
    document.getElementById('soft-nav')
)
data.id="a06"
render(
    <Nav data={data} />,
    document.getElementById('music-nav')
)
data.id="a07"
render(
    <Nav data={data} />,
    document.getElementById('study-nav')
)
data.id="a08"
render(
    <Nav data={data} />,
    document.getElementById('music-nav')
)


