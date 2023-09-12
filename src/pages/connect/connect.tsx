import React from 'react';
import './connect.less';

const Connect: React.FC = () => {
  const peopleInfo = [
    {
      name: '刘洋',
      post: '主管',
      qq: '978344408',
      email: 't1.faker@qq.com'
    },
    {
      name: '唐富泉',
      post: '前端组长',
      qq: '3198662089',
      email: 'lseeyou123a@163.com'
    },
    {
      name: '陈佳逸',
      post: '后端组长',
      qq: '1670149054',
      email: '1670149054@qq.com'
    },
    {
      name: '刘新武',
      post: '移动开发组长',
      qq: '2540493541',
      email: 'liuxinwulxw@qq.com'
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
