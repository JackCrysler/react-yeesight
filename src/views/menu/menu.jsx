import React,{Component} from 'react';
import './menu.css';

export class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            active:'menu',
            maskActive:'masker'
        };
        this.hide = this.hide.bind(this);
    }
    show(){
        this.setState({
            active:'menu menu-active',
            maskActive:'masker masker-active'
        })
    }
    hide(){
        this.setState({
            active:'menu',
            maskActive:'masker'
        })
    }
    render(){
        const active = this.state.active;
        const maskActive = this.state.maskActive;
        const hide = this.hide;
        return (
            <div>
                <div className={maskActive} onClick={hide}></div>
                <div className={active}>
                
                    <ul className="list">
                        <li>登录</li>
                        <li>首页</li>
                        <li>我的</li>
                    </ul>
                </div>
            </div>
            
        )
    }
};

let test = 1;
export {test};


