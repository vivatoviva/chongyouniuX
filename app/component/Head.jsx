import React,{Component}from "react";
import styled, { css } from 'styled-components';
import {render} from 'react-dom';

class Categories extends Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    css(){
        this.li=styled.li`
            height:50px;
            margin-right:20px;
            float:left;
        `
        this.a=styled.a`
            font-size:13px;
            line-height:50px;
            color: #000;
            text-decoration: none;
            text-align: center;
        `
    }
    render(){
        this.css();
        const lis = this.props.categories.map((data)=>{
          return <this.li key={data.name}><this.a href={data.href}>{data.name}</this.a></this.li>
        })
        console.log(lis);
        return lis;
    }
}
class Topleft extends Component{
    css(){
        this.left = styled.div`
            float:left;
            width:500px;
        `
        this.div = styled.div`
            background-image:url(http://ilxdh.com/images/logo.png);
            float: left;
            width:186px;
            height:50px;
        `
        this.ul = styled.ul`
            float: left;
            margin-left:20px;
        `
    }
    render(){
        this.css();
        return <this.left>
                    <this.div>
                    </this.div>
                    <this.ul>
                        <Categories categories={this.props.data.categories}/>
                    </this.ul>
                </this.left>
    }
}
class Login extends Component{
    css(){
        this.button = styled.button`
            width:72px;
            height:34px;
            line-height:34px;
            font-size:13px;
            background-color:rgb(229, 67, 72);
            outline: 0;
            border: 0;
            color:#fff;
            cursor:pointer;
        `
    }
    render(){
        this.css();
        return <this.button>登录</this.button>
    }
}
class Topright extends Component{
    css(){
        this.div = styled.div`
            float:right;
            line-height:50px;
        `
    }
    render(){
        this.css();
        return  <this.div>
                     <Login />
                </this.div>
    }
}

class Head extends Component{
    constructor(props){
        super(props);
        this.css();
    }
    css(){
        this.Div = styled.div`
                        width:1000px;
                        height:50px;
                        margin:0 auto;
                        background-color:#fff;
                        overflow:hidden`
    
    }
    render(){
        return  <this.Div>
            <Topleft data={{categories:[{href:"http://blogoog.com",name:"博客"},{href:"http://",name:"家乡"},{href:"http://",name:"中文"},{href:"http://",name:"关于我们"}]}}/>
            <Topright />
            </this.Div>;
    }
}
render(
    <Head />,
   document.getElementById('header'),
)
