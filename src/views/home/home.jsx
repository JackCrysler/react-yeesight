import React from 'react';
import Reacr, { Component } from 'react';
import './home.css'
import Canvas from '../../component/canvas';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            list:[
                {
                    title:'贵州雷山县发现一例人感染H7N9禽流感病例',
                    statistics:[
                        {
                            date:"7.22",
                            count:100
                        },
                        {
                            date:"8.18",
                            count:2000
                        },
                        {
                            date:"9.25",
                            count:4000
                        },
                        {
                            date:"10.24",
                            count:100
                        },
                        {
                            date:"11.04",
                            count:2400
                        },
                        {
                            date:"11.14",
                            count:1000
                        },
                        {
                            date:"11.18",
                            count:3000
                        }
                    ]
                }
            ],
            flag:true
        }

        this.tabActive = this.tabActive.bind(this)
    }

    tabActive(e){
        const idx = e.target.getAttribute('data-index')*1;
        this.refs['tab'+idx].classList.add('active');
        this.refs['tab'+(1-idx)].classList.remove('active');

        this.setState(function(state){
            idx==0 ? state.flag = true:state.flag =false
        })
    }

    render() {

        let flag =this.state.flag; 

        return (
            <main>
                <div className="events">
                    <div className="title">
                        <p>EVENTS</p>
                        <p>></p>
                    </div>

                    <ul>
                        <li>
                            <p className="tit">贵州雷山县发现一例人感染H7N9禽流感病例</p>
                            <div className="tab">
                                <p onClick={this.tabActive}>
                                    <span ref="tab0" className='tab-item active' data-index="0">事件态势</span>
                                    <span ref="tab1" className='tab-item' data-index="1">传播路径</span>
                                </p>

                                {flag?<Canvas data={this.state.list[0].statistics}></Canvas>:<div>12345678</div>}
                            </div>
                            <p className="place_time">
                                <span>中国 贵州</span>
                                <span>2017-02-27 10:29:51</span>
                            </p>
                        </li>
                        <li>
                            <p className="tit">吃大盘鸡会感染禽流感?泸州疾控中心专家发话啦</p>
                            <p className="place_time">
                                <span>中国 泸州</span>
                                <span>2017-02-27 10:29:51</span>
                            </p>
                        </li>
                        <li>
                            <p className="tit">吃大盘鸡会感染禽流感?泸州疾控中心专家发话啦</p>
                            <p className="place_time">
                                <span>中国 泸州</span>
                                <span>2017-02-27 10:29:51</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="strip"></div>
                <div className="news">
                    <div className="new_tit">
                        <p>NEWS</p>
                        <p>
                            <span>社交数据 ﹀</span>
                            <span>排序 ﹀</span>
                        </p>
                    </div>

                    <ul>
                        <li>
                            <p className="new_title">冷空气几乎席卷全国所有省份 北京或迎今年首次</p>
                            <p className="place">
                                <span>来源:北京晚报</span>
                                <span>简体中文 中国 北京  2017-02-27 10:29:51</span>
                            </p>
                        </li>
                        <li>
                            <p className="new_title">冷空气几乎席卷全国所有省份 北京或迎今年首次</p>
                            <p className="place">
                                <span>来源:北京晚报</span>
                                <span>简体中文 中国 北京  2017-02-27 10:29:51</span>
                            </p>
                        </li>
                        <li>
                            <p className="new_title">冷空气几乎席卷全国所有省份 北京或迎今年首次</p>
                            <p className="place">
                                <span>来源:北京晚报</span>
                                <span>简体中文 中国 北京  2017-02-27 10:29:51</span>
                            </p>
                        </li>
                        <li>
                            <p className="new_title">冷空气几乎席卷全国所有省份 北京或迎今年首次</p>
                            <p className="place">
                                <span>来源:北京晚报</span>
                                <span>简体中文 中国 北京  2017-02-27 10:29:51</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        )
    }
}

export default Home