import React from 'react';
import './new.less';

const New: React.FC = () => {
  const text = [
    {
      title: '第十四届领航工作室招新啦',
      date: '2023年4月17日',
      img: './img/1.jpg',
      class: 'wrap',
      content:
        '武汉科技大学计算机科学与技术学院领航工作室，现面向2020级大一新生开始招新啦，期待各位小伙伴们的加入哦'
    },
    {
      title: '第十四届领航工作室招新啦',
      date: '2023年4月17日',
      img: './img/1.jpg',
      class: 'wrap-reverse',
      content:
        '武汉科技大学计算机科学与技术学院领航工作室，现面向2020级大一新生开始招新啦，期待各位小伙伴们的加入哦'
    },
    {
      title: '第十四届领航工作室招新啦',
      date: '2023年4月17日',
      img: './img/1.jpg',
      class: 'wrap',
      content:
        '武汉科技大学计算机科学与技术学院领航工作室，现面向2020级大一新生开始招新啦，期待各位小伙伴们的加入哦'
    }
  ];

  return (
    <div className="new_body">
      <section className="new_vis">
        <div className="new_img">
          <img alt="news" src={require('./img/new.jpg').default} />
          <div className="new_img_bg"></div>
        </div>
        <header className="new_head">通知公告</header>

        {text.map((item) => 
          <>
            <div className={`new_h ${item.class}`}>
              <div className="new_item_img">
                <img src={require(`${item.img || './img/1.jpg'}`).default} alt=""></img>
              </div>
              <div className="new_item">
                <p>
                  <h3>{item.title}</h3>
                  <h3 style={{ color: 'black' }}>{item.date}</h3>
                  <p>{item.content}</p>
                </p>
              </div>
            </div>
          </>
        )}

        <header className="new_head" style={{ fontSize: '1.0em', fontWeight: 550 }}>
          加载更多
        </header>
      </section>
    </div>
  );
};
export default New;
