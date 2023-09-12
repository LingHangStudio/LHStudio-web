import React from 'react';
import { useNavigate } from 'react-router-dom';
import './helper.less';

const Helper: React.FC = () => {
  const history = useNavigate();
  return (
    <div className="helper_body">
      <div className="helper_vis">
        <div className="helper_head">
          <img src={require('./img/lunbo1.jpg').default} alt="" />
          <div className="helper_head_img">
            <div className="helper_head_phone">
              <img src={require('./img/samsung_android.png').default} alt="" />
            </div>
          </div>
          <div className="helper_head_btn">
            <div style={{ fontWeight: 'blod', fontSize: '2rem', color: '#fff' }}>武科大助手</div>
            <h2>随时随地 开启校园之旅</h2>
            <div className="helper_head_tag">
              <h4 onClick={() => history('/download')}>安卓端</h4>
              <h4 onClick={() => history('/download')}>iPhone端</h4>
              <h4 onClick={() => alert('微信搜索“新武科大助手”小程序')}>微信小程序</h4>
              <h4 onClick={() => alert('QQ搜索“武科大助手”小程序')}>QQ小程序</h4>
            </div>

            <img
              className="QR"
              src={require('../../static/helper/wusthelperQR.png').default}
              alt=""
            />

            <h3 className="">武汉科技大学 @领航工作室 LingHang Studio.</h3>
            <h3 className="lh_url">武科大助手：www.wustlinghang.cn/helper</h3>
            <div className="helper_head_tip">点击按钮跳转...</div>
          </div>
        </div>
        <div className="helper_h" style={{ backgroundColor: 'white', flexWrap: 'wrap-reverse' }}>
          <div className="helper_item2">
            <h2>好用的课程表</h2>
            <p>
              一键导入教务处课表，安卓端还可以扫码和他人分享你的课表，更有选择学期、周次，以及桌面小部件等实用功能
            </p>
          </div>
          <div className="helper_item1">
            <img src={require('./img/1(3).png').default} alt="" />
          </div>
        </div>
        <div className="helper_h" style={{ backgroundColor: 'rgb(129,199,132)' }}>
          <div className="helper_item1">
            <img src={require('./img/2(1).png').default} alt=""></img>
          </div>
          <div className="helper_item1">
            <img src={require('./img/3.png').default} alt=""></img>
          </div>
          <div className="helper_item2" style={{ backgroundColor: 'rgb(129,199,132)' }}>
            <h2 style={{ color: 'white' }}>便捷的成绩查询</h2>
            <p style={{ color: 'white' }}>
              分学期，分选修必修查看成绩，学分查看，成绩统计，学分趋势，平均成绩。多种功能让你牢牢掌握自己的学习状态
            </p>
          </div>
        </div>
        <div className="helper_h" style={{ backgroundColor: 'white', flexWrap: 'wrap-reverse' }}>
          <div className="helper_item2" style={{ backgroundColor: 'white' }}>
            <h2>丰富的功能</h2>
            <p>资讯，黄历，校车，学分统计，教务新闻，考试倒计时，随时随地，开启校园之旅！</p>
          </div>
          <div className="helper_item1">
            <img src={require('./img/home.jpg').default} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Helper;
