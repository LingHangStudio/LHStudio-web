import React from 'react';
import './connect.less';

const Connect: React.FC = () => {
  const peopleInfo = [
    {
      name: '罗然',
      post: '主管',
      qq: '2872339658',
      email: '2872339658@qq.com'
    },
    {
      name: '林琨毅',
      post: '前端组长',
      qq: '3311390251',
      email: '3311390251@qq.com'
    },
    {
      name: '刘阳',
      post: '后端组长',
      qq: '2556693598',
      email: '2556693598@qq.com'
    },
    {
      name: '付一恒',
      post: '移动开发组长',
      qq: '3313882272',
      email: '3313882272@qq.com'
    }
  ];
  return (
    <div className="con_body">
      <div className="con_vis">
        <header className="con_head">联系方式</header>
        <section className="con_h">
          {peopleInfo.map((item) => {
            return (
              <div className="con_item">
                <h2>
                  {item.post}：{item.name}
                </h2>
                <div>
                  <img src={require('./img/email.png').default} alt="" />
                  <span>{item.email}</span>
                </div>
                <div>
                  <img src={require('./img/qq.png').default} alt="" />
                  <span>{item.qq}</span>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
export default Connect;
