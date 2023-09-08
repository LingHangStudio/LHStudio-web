import React from 'react';
import './java.less';
const not_allow_signup = {
  opacity: 0.1,
  cursor: 'not-allowed',
  pointerEvents: 'none',
};
const null_style = {};

const Java: React.FC = () => {
  const state = {
    can_signup: false,
  };
  return (
    <div className="java_body">
      <div className="java_vis">
        <div className="java_head">
          <div className="java_head_title" style={{ fontFamily: 'BigYoungBGB21c799f3dfa1ffbd' }}>
            <h1 className="css1c799f3dfa1ffbd">领航工作室</h1>{' '}
            <h1 className="css1c799f3dfa1ffbd">后台开发组</h1>
          </div>
          <p>
            JAVA 是一门面向对象编程语言， 全球编程语言流行榜第一名。
            Java不仅吸收了C++语言的各种优点， 还摒弃了C++里难以理解的多继承、指针等概念，
            因此Java语言具有功能强大和简单易用两个特征。
            领航工作室Java组致力于在Java的基础上进行的Java EE开发，
            曾开发过领航工作室的官网和学校的活动报名系统等后台系统，
            具有强硬的实力和惊人的团队协作能力。
          </p>
          <div className="java_head_btn">每年三月招新，敬请期待</div>
        </div>
        <div className="java_h" style={{ backgroundColor: '#8a0a0a', flexWrap: 'wrap-reverse' }}>
          <div className="java_item1">
            <p>再惊艳的外表</p>
            <p>也需要一个坚强的后盾</p>
            <div className="java_item1_ps">
              后端开发，通常也称服务器端开发。顾名思义开发的是程序的后端，并不对用户显示。
              负责进行逻辑处理和数据交互
            </div>
          </div>
          <div className="java_item2">
            <img src={require('../img/java_s.jpg').default} alt=""></img>
          </div>
        </div>
        <div className="java_h" style={{ backgroundColor: 'white' }}>
          <div className="java_item3">
            <img src={require('../img/java_j.jpg').default} alt=""></img>
          </div>
          <div className="java_item4">
            <p>强大且易用的java，带你走进后台开发的世界</p>
          </div>
        </div>
        <div className="java_h" style={{ backgroundColor: 'white', flexWrap: 'wrap-reverse' }}>
          <div className="java_item5">
            <p>
              学习java基础知识，学习使用SpringBoot快速创建后台项目，学习Linux系统，学习mysql等数据库，学习rides，nginx，tomcat等服务器知识，庞大的知识体系满足你的求知欲望
            </p>
          </div>
          <div className="java_item6">
            <img src={require('../img/java_u.jpg').default} alt=""></img>
          </div>
        </div>
        {/* <div className="java_item" id="join_us">
          <h2>{state.can_signup ? '加入我们' : '报名未开始'}</h2>
        </div>
        <div className="java_signup" style={state.can_signup ? null_style : not_allow_signup}>
          <h2>加入领航后台组，填写报名信息</h2>
          <div>
            <input placeholder="姓名" disabled={false}></input>
            <input placeholder="专业班级"></input>
          </div>
          <div>
            <input placeholder="手机号码"></input>
            <input placeholder="qq号码"></input>
          </div>
          <button>提交信息</button>
        </div> */}
      </div>
    </div>
  );
};
export default Java;
