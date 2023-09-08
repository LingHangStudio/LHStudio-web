import React from 'react';
import './fe.less';

const not_allow_signup = {
  opacity: 0.1,
  cursor: 'not-allowed',
  pointerEvents: 'none',
};

const null_style = {};

const Fe: React.FC = () => {
  const state = {
    can_signup: false,
  };
  return (
    <div className="fe_body">
      <div className="fe_vis">
        <div className="fe_head">
          <div className="fe_head_title">
            <h1>领航工作室</h1> <h1>前端开发组</h1>
          </div>
          <p>
            前端开发，是近几年兴起的热门技术， 入门快，零基础也可以在短暂时间内上手。
            每次从你访问一个网页开始，你已经走入了前端的世界。
            前端是网页开发的核心，炫酷美观的网页能第一时间吸引用户的眼球，
            每一行代码都能立马看到效果，学起来轻松奇妙。
            不仅如此，新技术的发展趋势可以让你上手制作属于自己的移动端app，
            互联网每天都有无数个新的网页产生，更多的就业机会，不一样的代码世界，现在加入，一起创造更多可能！
          </p>
          <div className="fe_head_btn">
            <a href="#join_us" style={{ textDecoration: 'none', color: 'white' }}>
              {state.can_signup ? '加入我们' : '每年三月招新，敬请期待'}
            </a>
          </div>
        </div>

        <div className="fe_h" style={{ backgroundColor: '#8a0a0a', flexWrap: 'wrap-reverse' }}>
          <div className="fe_item1">
            <p>从零开始 制作属于自己的网页</p>
            <p>一个人 也可以创造大大的世界</p>
            <div className="fe_item1_ps">
              学习了解html，css，javascript前端三剑客，前端入门上手也可以很简单
            </div>
          </div>
          <div className="fe_item2">
            <img src={require('../img/html.png').default} alt=""></img>
          </div>
        </div>

        <div className="fe_h" style={{ backgroundColor: 'white' }}>
          <div className="fe_item3">
            <img src={require('../img/rn.png').default} alt=""></img>
          </div>
          <div className="fe_item4">
            <p>大前端的发展趋势，让你轻松使用上自己亲手写的软件</p>
            <div className="fe_item4_ps">
              通过react等流行框架制作一个完整的网页应用项目，学习使用react-native轻松开发跨平台app，electron框架开发电脑端跨平台桌面应用。你的所有想法，用代码去实现
            </div>
          </div>
        </div>

        <div className="fe_h" style={{ backgroundColor: 'white', flexWrap: 'wrap-reverse' }}>
          <div className="fe_item5">
            <p>作为一个学习型组织，当知识共享成为常态，个人核心能力的提升也不再是枯燥而乏味</p>
          </div>
          <div className="fe_item6">
            <img src={require('../img/learn.jpg').default} alt=""></img>
          </div>
        </div>

        <div className="fe_item" id="join_us">
          <h2>{state.can_signup ? '加入我们' : '报名未开始'}</h2>
        </div>

        <div className="fe_signup" style={state.can_signup ? null_style : not_allow_signup}>
          <h2>加入领航前端组，填写报名信息</h2>
          <div>
            <input placeholder="姓名" disabled={false}></input>
            <input placeholder="专业班级"></input>
          </div>
          <div>
            <input placeholder="手机号码"></input>
            <input placeholder="qq号码"></input>
          </div>
          <button>提交信息</button>
        </div>
      </div>
    </div>
  );
};
export default Fe;
