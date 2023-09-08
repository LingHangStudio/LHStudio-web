import React from 'react';
import './android.less';
const not_allow_signup = {
  opacity: 0.1,
  cursor: 'not-allowed',
  pointerEvents: 'none',
};
const null_style = {};

const Android: React.FC = () => {
  const state: any = {};
  return (
    <div className="android_body">
      <div className="android_vis">
        <div className="android_head">
          <div className="android_head_title" style={{ fontFamily: 'BigYoungBGB21c7dc646261ffbd' }}>
            <h1 className="css1c7dc646261ffbd">领航工作室</h1>{' '}
            <h1 className="css1c7dc646261ffbd">安卓开发组</h1>
          </div>
          <p>
            Android是全球最热门的移动设备操作系统， 是以手机APP开发为主要对象，
            包括但不限于手机操作系统，手机游戏，手机其他多种功能的开发和优化。
            所需要掌握的基础开发语言为Java。
            Android组自领航工作室创立以来就一直是领航工作室重要的组成部分之一，
            开发了许多像“武科大助手”这样类似的APP， 我们会一直为领航工作室开创更广阔的未来。
          </p>
          <div className="android_head_btn">每年三月招新，敬请期待</div>
        </div>
        <div className="android_h" style={{ backgroundColor: '#8a0a0a', flexWrap: 'wrap-reverse' }}>
          <div className="android_item1">
            <p>让代码，变成掌间跳动的字节</p>
            {/* <p>一个人 也可以创造大大的世界</p> */}
            <div className="android_item1_ps">
              安卓开发，是这些年一直火热的技术，上手快，使其成为入门程序行业的不二之选。且因目前安卓系统占有率之大，安卓开发仍有巨大前景！
            </div>
          </div>
          <div className="android_item2">
            <img src={require('../img/android_1.jpg').default} alt=""></img>
          </div>
        </div>
        <div className="android_h" style={{ backgroundColor: 'white' }}>
          <div className="android_item3">
            <img src={require('../img/android_k.jpg').default} alt=""></img>
          </div>
          <div className="android_item4">
            <p>丰富的体系架构让你的开发得心应手</p>
            <div className="android_item4_ps">
              Java、Kotlin乃至最新的Flutter框架，带给你全新的开发体验！code once，use everywhere！
            </div>
          </div>
        </div>
        <div className="android_h" style={{ backgroundColor: 'white', flexWrap: 'wrap-reverse' }}>
          <div className="android_item5">
            <p>因热爱而相聚的团队，加入我们，共同学习，共同进步！</p>
          </div>
          <div className="android_item6">
            <img src={require('../img/android_pp.jpg').default} alt=""></img>
          </div>
        </div>
        <div className="android_item" id="join_us">
          <h2>{state.can_signup ? '加入我们' : '报名未开始'}</h2>
        </div>
        <div className="android_signup" style={state.can_signup ? null_style : not_allow_signup}>
          <h2>加入领航安卓组，填写报名信息</h2>
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
export default Android;
