import React from 'react'
import './download.less'

const Download:React.FC = ()=>{
    const DownloadApp = ()=> {
        var ua = window.navigator.userAgent.toLowerCase();
        console.log('ua',ua)
        if (ua.match(/MicroMessenger/i)?.toString() === 'micromessenger') {
            // 微信内打开
            console.log('is weixin')
            if(ua.match(/iphone/i)?.toString() === 'iphone'){
                // ios用户，可以直接拉起App Store
                window.location.href = 'https://apps.apple.com/cn/app/id1538426487'
            } else {
                // 安卓手机 无法拉起，需要浏览器打开
                // 微信内下载，走应用宝链接
                window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.linghang.wusthelper'
                // alert('微信不让下载助手嗷~o(╥﹏╥)o，请点击右上角【···】并选择【在浏览器打开】下载')
            }
        } else {
            console.log("not weixin")
            // 非微信浏览器内打开
            if(ua.match(/iphone/i)?.toString() === 'iphone'){
                console.log('iphone')
                window.location.href = 'https://apps.apple.com/cn/app/id1538426487'
            }
            else {
                // 浏览器打开，直接走下载链接
                window.location.href = 'https://download.wustlinghang.cn/android/WustHelper_latest.apk'
            }
        }
    }
        return (
            <div className="container">
                <div className="content">
                    <div className="title">
                            <div>武科大助手</div>
                            <div className="intro">武科大教务处唯一授权</div>
                        <div className="intro">武科大青年志愿者服务总队合作伙伴</div>
                        <div className="intro">武科大图书馆官方合作伙伴</div>
                        {/* <div className="intro">安卓端 IOS端 小程序...</div> */}
                        </div>
                        <div className="img-content">
                            <img className="mobile-img" src = {require('./img/mobile2.png')} alt="" />
                        </div>
                        <div className="title">
                            <div>丰富齐全的功能</div>
                            <div className="intro">课表、成绩、工时、学分、倒计时...</div>
                        </div>
                        <div className="img-content">
                            <img className="mobile-img" src = {require('./img/mobile3.png')} alt="" />
                        </div>
                        <div className="title">
                         <div>武科大领航工作室出品</div>
                         <div className="intro">随时随地，开启校园之旅</div>
                        </div>
                        <div className="img-content">
                            <img className="mobile-img" src = {require('./img/mobile4.png')} alt="" ></img>
                        </div>
                    </div>
                <div className="download-content">
                    <img className="logo-img" src = {require('./img/logo2.png')} alt="" ></img>
                    <div className="download-btn" onClick={DownloadApp}>
                         <div className="btn"> 立即下载</div>
                    </div>
                </div>
            </div>
        )
}
export default Download