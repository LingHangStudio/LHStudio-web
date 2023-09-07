import React from 'react'
import './connect.css'


class Connect extends React.Component {
    constructor(props) {
        super(props)
        this.peopleInfo = [
            {
                name: "刘洋",
                post: "主管",
                qq: "978344408",
                email: "t1.faker@qq.com"
            },
            {
                name: "唐富泉",
                post: "前端组长",
                qq: "3198662089",
                email: "lseeyou123a@163.com"
            },
            {
                name: "陈佳逸",
                post: "后端组长",
                qq: "1670149054",
                email: "1670149054@qq.com"
            },
            {
                name: "刘心武",
                post: "移动开发组长",
                qq: "2540493541",
                email: "liuxinwulxw@qq.com"
            },
        ]
        this.state = {

        }
    }
    render() {
        return (
            <div className='con_body'>
                <div className='con_vis'>
                    <header className='con_head'>联系方式</header>
                    <section className='con_h'>
                        {
                            this.peopleInfo.map((item) => {
                                return (
                                    <div className='con_item'>
                                        <h2>{item.post}：{item.name}</h2>
                                        <div>
                                            <img src={require('./img/email.png')} alt="" />
                                            <span>{item.email}</span>
                                        </div>
                                        <div>
                                            <img src={require('./img/qq.png')} alt="" />
                                            <span>{item.qq}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* 
                        <div className = 'con_item' style = {{backgroundColor:'rgb(246,246,246)'}}>
                            <h2>前端组负责人：江洪</h2>
                            <div  style = {{backgroundColor:'rgb(246,246,246)'}}>
                                <img src = {require('./img/email.png')}></img>
                                <span>oukars@qq.com</span>
                            </div>
                            <div  style = {{backgroundColor:'rgb(246,246,246)'}}>
                                <img src = {require('./img/qq.png')}></img>
                                <span>1127158610</span>
                            </div>
                        </div>


                        <div className = 'con_item'>
                            <h2>android组负责人：许志凡</h2>
                            <div>
                                <img src = {require('./img/email.png')}></img>
                                <span><a href = 'mailto: aurora2459917510@163.com'>2329429060@qq.com</a></span>
                            </div>
                            <div>
                                <img src = {require('./img/qq.png')}></img>
                                <span>2329429060</span>
                            </div>
                        </div> */}
                    </section>
                </div>
                <div className='footer_vis'>
                    <div className='footer_copy'>
                        ©2023 LingHang Studio. 武汉科技大学 领航工作室
                    </div>
                </div>
            </div>
        )
    }
}
export default Connect