import React from 'react'
import './new.less'

const New:React.FC = ()=> {
        const state = {}
        return (
            <div className='new_body'>
                <section className='new_vis'>
                    <div className='new_img'>
                        <img alt="news" src={require('./img/new.jpg')}></img>
                        <div className='new_img_bg'></div>
                    </div>
                    <header className='new_head'>通知公告</header>
                    <div className='new_h'>
                        <div className='new_item_img'>
                            <img src={require('./img/1.jpg')} alt=""></img>
                        </div>
                        <div className='new_item'>
                            <p>
                                <h3>第十四届领航工作室招新啦</h3>
                                <h3 style={{ color: 'black' }}>2023年4月17日</h3>
                                <p>武汉科技大学计算机科学与技术学院领航工作室，现面向2020级大一新生开始招新啦，期待各位小伙伴们的加入哦</p>
                            </p>
                        </div>
                    </div>
                    <div className='new_h' style={{ flexWrap: 'wrap-reverse' }}>
                        <div className='new_item'>
                            <p>
                                <h3>第十四届领航工作室招新啦</h3>
                                <h3 style={{ color: 'black' }}>2023年4月17日</h3>
                                <p>武汉科技大学计算机科学与技术学院领航工作室，现面向2022级大一新生开始招新啦，期待各位小伙伴们的加入哦</p>
                            </p>
                        </div>
                        <div className='new_item_img'>
                            <img src={require('./img/1.jpg')} alt=""></img>
                        </div>
                    </div>
                    <div className='new_h'>
                        <div className='new_item_img'>
                            <img src={require('./img/1.jpg')} alt=""></img>
                        </div>
                        <div className='new_item'>
                            <p>
                                <h3>第十四届领航工作室招新啦</h3>
                                <h3 style={{ color: 'black' }}>2023年4月17日</h3>
                                <p>武汉科技大学计算机科学与技术学院领航工作室，现面向2022级大一新生开始招新啦，期待各位小伙伴们的加入哦</p>
                            </p>
                        </div>
                    </div>
                    <header className='new_head' style={{ fontSize: '1.0em', fontWeight: 550 }}>加载更多</header>
                </section>
            </div>
        )
}
export default New