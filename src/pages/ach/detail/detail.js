import React from 'react'
import './detail.css'
import data from './data'


class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:{}
        }
    }
    componentDidMount(){
        console.log(window.location.pathname.slice(12))
        this.setState({
            data:data[window.location.pathname.slice(12)]
        })
        console.log(data[window.location.pathname.slice(12)])
    }
    render(){
        return (
            <div className = 'detail_body'>
                <section className = 'detail_vis'>
                    <div className = 'detail_head'>
                        <h1>{this.state.data.name}</h1>
                    </div>
                    <div className = 'detail_hr'></div>
                    <div className = 'detail_auth'>
                        <h3>作者</h3>
                        <h2>{this.state.data.author}</h2>
                    </div>
                    <div className = 'detail_dec'>
                        <p>{this.state.data.dec}</p>
                    </div>
                    <div className = 'detail_gd'>
                        <p>{this.state.data.github === null ? '' : 'github地址:   '+this.state.data.github}</p>
                        <p>{this.state.data.download === null ? '' : '下载地址:   '+this.state.data.download}</p>
                    </div>
                    {
                        this.state.data.plat === 'windows' ? (
                            <div className = 'detail_img_w'>
                                {this.state.data.img ? this.state.data.img.map((item,index) => {
                                    return(
                                        <div className = 'detail_img_item_w'>
                                            <img src = {require('../img/' + item)} />
                                        </div>
                                    )
                                }) : null}
                            </div>
                        ):(
                            <div className = 'detail_img'>
                                {this.state.data.img ? this.state.data.img.map((item,index) => {
                                    return(
                                        <div className = 'detail_img_item'>
                                            <img src = {require('../img/' + item)} />
                                        </div>
                                    )
                                }) : null}
                            </div>
                        )
                    }
                </section>
                <div className = 'footer_vis'>
                    <div className = 'footer_copy'>  
                        ©2023 LingHang Studio. 武汉科技大学 领航工作室
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail