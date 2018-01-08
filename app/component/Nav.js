import React, {
    Component
} from "react";
import {
    render
} from 'react-dom';

const data = {
    tagName: '影视欣赏',
    tagImgSrc:'https://s1.ax2x.com/2018/01/08/dNpWe.png',
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
    }
    render(){
        let style={};
        return (
             <ul className="clearfix">
                 {
                     this.props.data.map((data,index)=>{
                         
                         if(index==0){
                             style={
                                backgroundImage:`url(${data.tagImgSrc}`
                             }
                         }else{
                            style={};
                         } 
                         return <li key={data.tagName} style={style}>{data.tagName}</li>
                     })
                 }
            </ul>   
        )
    }
}
// class SiteTag extends Component{
//     render(){
//         return (

//         )
//     }
// }
class Site extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let className;
        return (
            <ul className="clearfix">
                {
                    this.props.tags.link.map((data)=>{
                        className="";
                        if(data.like){
                            className="like";
                        }
                        if(data.import){
                            className+=" import"
                        }
                        return <li><a className={className} 
                               href={data.site}>{data.name}</a></li>
                    })
                }
            </ul>
        )
    }
}
class Nav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const tagData=[];
        tagData.push({tagName:this.props.data.tagName,tagImgSrc:this.props.data.tagImgSrc});
        this.props.data.tags.map(data=>{
            tagData.push({tagName:data.tagName})
        })
        return (
            <div>
                <div className="tag">
                    {
                        <Tag data={tagData}></Tag>
                    }
                </div>
                <div className="site">
                    <Site tags={this.props.data.tags[0]}></Site>
                </div>
            </div>
        )
    }
}
render(
    <Nav data={data} />,
    document.getElementById('custom-nav')
)
