import React from 'react';
import { useNavigate } from 'react-router-dom';
import './studio.less';

const Studio: React.FC = () => {
  const history = useNavigate()
  const photeLarg = [
    {
      src: './img/main-0.jpg'
    },
    {
      src: './img/main-1.jpg'
    }
  ];
  const photoSquaredFirst = [
    {
      src: './img/13-0.jpg'
    },
    {
      src: './img/13-1.jpg'
    }
  ];
  const photeSquaredSecond = [
    {
      src: './img/13-2.jpg'
    },
    {
      src: './img/13-3.jpg'
    },
    {
      src: './img/13-4.jpg'
    },
    {
      src: './img/13-5.jpg'
    },
    {
      src: './img/13-6.jpg'
    },
    {
      src: './img/13-7.jpg'
    }
  ];

  return (
    <div className="studio_body">
      <div className="studio_vis">
        <div className="studio_h1">
          <div className="studio_item1">
            <div className="studio_head">
              <p style={{ fontFamily: 'zongyijt1c77bf41e11ffbd' }}>武汉科技大学</p>
              <p style={{ fontFamily: 'zongyijt1c77bf41e11ffbd' }}>领航工作室</p>
              <p style={{ fontFamily: 'zongyijt1c77bf41e11ffbd' }}>LINGHANG STUDIO</p>
            </div>
            <div className="studio_head_1">
              <p>
                武汉科技大学领航工作室隶属于计算机学院，
                是一支致力于开发各类互联网应用系统和应用软件， 并兼顾网络安全，
                程序设计，web开发，计算机维护等业务的技术团队，
                领航工作室成立于2010年11月，是武汉科技大学技术支持较为雄厚的学生团体，
                经过培训与运作，现已小有规模，工作室共分为三大开发团队：后台(Java)、Android、前端，
                能够为武汉科技大学各单位提供不同平台不同需求的桌面应用的开发、web应用系统的开发，网站的设计与制作等等。
              </p>
            </div>
          </div>
          <div className="studio_item2">
            <img src={require('./img/banner1.jpg')}></img>
          </div>
        </div>
        <div className="studio_h1" style={{ flexWrap: 'wrap' }}>
          <div className="studio_item3" style={{ cursor: 'pointer' }}>
            <img src={require('./img/java.jpg')} className="studio_item3_img" alt="" />
            <div
              className="studio_item3_btn"
              onClick={() => history('studio/java')}
            >
              <span>了解更多</span>
            </div>
          </div>
          <div className="studio_item4">
            <div className="studio_head">
              <p style={{ fontSize: 20, color: 'rgb(137,11,10)' }}>后端组（Java）</p>
            </div>
            <div className="studio_head_1">
              <p style={{ fontSize: '0.875em', color: 'rgb(165,165,165)' }}>
                JAVA 是一门面向对象编程语言， 全球编程语言流行榜第一名。
                Java不仅吸收了C++语言的各种优点， 还摒弃了C++里难以理解的多继承、指针等概念，
                因此Java语言具有功能强大和简单易用两个特征。
                领航工作室Java组致力于在Java的基础上进行的Java EE开发，
                曾开发过领航工作室的官网和学校的活动报名系统等后台系统，并为武科大助手提供后端技术服务
                具有强硬的实力和惊人的团队协作能力。
              </p>
            </div>
          </div>
        </div>
        <div className="studio_h1">
          <div className="studio_item4">
            <div className="studio_head">
              <p style={{ fontSize: 20, color: 'rgb(137,11,10)' }}>前端组</p>
            </div>
            <div className="studio_head_1">
              <p style={{ fontSize: '0.875em', color: 'rgb(165,165,165)' }}>
                前端开发，是进几年兴起的热门技术， 入门快，零基础也可以在短暂时间内上手。
                前端是网页开发的核心，但也有能力开发移动端，写小程序，写桌面软件等等。
                新技术的发展趋势可以让你上手制作属于自己的移动端app，
                前端组也携手安卓组进行混合开发，开发了武科大助手许多功能。
                互联网每天都有无数个新的网页产生，更多的就业机会，不一样的代码世界，现在加入，一起创造更多可能！
              </p>
            </div>
          </div>
          <div className="studio_item3" style={{ cursor: 'pointer' }}>
            <img src={require('./img/fe1.png')} className="studio_item3_img" alt=""></img>
            <div
              className="studio_item3_btn"
              onClick={() => history('studio/fe')}
            >
              <span>了解更多</span>
            </div>
          </div>
        </div>
        <div className="studio_h1" style={{ flexWrap: 'wrap' }}>
          <div className="studio_item3" style={{ cursor: 'pointer' }}>
            <img src={require('./img/android.jpg')} className="studio_item3_img"></img>
            <div
              className="studio_item3_btn"
              onClick={() =>history('studio/android')}
            >
              <span>了解更多</span>
            </div>
          </div>
          <div className="studio_item4">
            <div className="studio_head">
              <p style={{ fontSize: 20, color: 'rgb(137,11,10)' }}>安卓组</p>
            </div>
            <div className="studio_head_1">
              <p style={{ fontSize: '0.875em', color: 'rgb(165,165,165)' }}>
                Android是全球最热门的移动设备操作系统， 是以手机APP开发为主要对象，
                包括但不限于手机操作系统，手机游戏，手机其他多种功能的开发和优化。
                所需要掌握的基础开发语言为Java。
                Android组自领航工作室创立以来就一直是领航工作室重要的组成部分之一，
                开发了许多像“武科大助手”、“日程快”等已经上线运行的APP，
                我们会一直为领航工作室开创更广阔的未来。
              </p>
            </div>
          </div>
        </div>

        <div className="studio_h1 margintop">
          <div className="studio_item66">
            <img src={require('./img/main-0.jpg')}></img>
          </div>
        </div>

        <div className="studio_h1">
          <div className="studio_item66">
            <img src={require('./img/main-1.jpg')} />
          </div>
        </div>
        <div className="studio_h1 margintop" style={{ flexWrap: 'wrap' }}>
          <div className="studio_item6 miniheader">
            <p>引领未来</p>
            <p>扬帆起航</p>
          </div>
          <div className="studio_item6">
            <img src={require('./img/13-0.jpg')} />
          </div>

          <div className="studio_item6">
            <img src={require('./img/13-1.jpg')} />
          </div>

          {/* <div className = 'studio_item5' style = {{backgroundColor:'green'}}></div> */}
        </div>

        <div className="studio_h1" style={{ flexWrap: 'wrap' }}>
          <div className="studio_item8">
            <img src={require('./img/13-2.jpg')} />
          </div>
          <div className="studio_item8">
            <img src={require('./img/13-3.jpg')} />
          </div>
          <div className="studio_item8">
            <img src={require('./img/13-4.jpg')} />
          </div>
          {/* <div className = 'studio_item5' style = {{backgroundColor:'green'}}></div> */}
        </div>
        <div className="studio_h1" style={{ flexWrap: 'wrap' }}>
          <div className="studio_item8">
            <img src={require('./img/13-5.jpg')} />
          </div>
          <div className="studio_item8">
            <img src={require('./img/13-6.jpg')} />
          </div>
          <div className="studio_item8">
            <img src={require('./img/13-7.jpg')} />
          </div>
          {/* <div className = 'studio_item5' style = {{backgroundColor:'green'}}></div> */}
        </div>
        {/* <div className = 'studio_h1' style = {{flexWrap:'wrap'}}>
                        <div className = 'studio_item7'>
                            <p>第九届领航者们</p>
                        </div>
                    </div>
                    <div className = 'studio_h1' style = {{flexWrap:'wrap'}}>
                        <div className = 'studio_item9'>
                           <img src = {require('./img/zxh.jpg')}></img>
                           <div className = 'studio_member_dsc'>
                                <p>
                                    <span>后台组组长 吴家俊</span>
                                </p>
                           </div>
                        </div>
                        <div className = 'studio_item9'>
                            <img src = {require('./img/wzj.jpg')}></img>
                           <div className = 'studio_member_dsc'>
                                <p>
                                    <span>前端组组长 张晓辉</span>
                                </p>
                           </div>
                        </div>
                        <div className = 'studio_item9'>
                            <img src = {require('./img/wjj.jpg')}></img>
                           <div className = 'studio_member_dsc'>
                               <p>
                                    <span>Android组组长 吴子健</span>
                                    <p></p>
                                </p>
                           </div>
                        </div>
                    </div> */}
      </div>
    </div>
  );
};
export default Studio;