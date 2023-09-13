import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ach.less';

const Ach: React.FC = () => {
  const history = useNavigate();
  const godetail = (e: any) => {
    history('/ach/detail/' + e);
  };
  const demoList = [
    {
      name: '仿网易云音乐桌面音乐播放器',
      content:
        '一个模仿网易云音乐windows端UI界面制作的跨平台桌面音乐播放器，可以实现本地音乐播放，在线音乐播放，登录网易云音乐账号播放自己的歌单，专辑。以及网易云音乐特色的歌曲评论模块等等功能',
      img: './img/1.png',
      detail: 'wyy'
    },
    {
      name: '日程快',
      content:
        '基于Android的多功能日程管理工具，可以制定本周日程、添加倒计时、分享本周日程、查看天气提示等一系列功能，为用户的生活添加便利',
      img: './img/rck_m.jpg',
      detail: 'rck'
    },
    {
      name: 'wetalk',
      content:
        'WeTalk是一款致力于为领域专家和普通工业从业者提供便利交流的平台。当前主要包含话题、需求、文章、动态等模块，同时也涵盖聊天、付费咨询等功能',
      img: './img/wt.jpg',
      detail: 'wt'
    },
    {
      name: '心理课代表',
      content: '一款针对大学生的关于心理问题咨询的app',
      img: './img/心理课代表_1.jpg',
      detail: 'xlkdb'
    },
    {
      name: '一身诗意千寻铺',
      content:
        '“一身诗意千寻铺”，简称“千寻铺”，是一个全国高校校园失物招领信息服务平台，为中国高校学生提供自己学校范围内的“失物招领',
      img: './img/qxp.jpg',
      detail: 'qxp'
    },
    {
      name: 'AppMarket',
      content: '模仿华为应用市场的一款手机app',
      img: './img/AppMarket_1.jpeg',
      detail: 'am'
    },
    {
      name: 'EventParticipant',
      content: '一款能够发布活动以及物物交换的app',
      img: './img/EventParticipant_1.jpg',
      detail: 'ep'
    },
    {
      name: '科大小店',
      content:
        '这是一款校内跳蚤市场的软件，这款软件可以进行二手商品等物品发布与购买，还可以发布活动和报名参加活动',
      img: './img/科大小店_1.jpg',
      detail: 'kdxd'
    }
  ];
  return (
    <div className="ach_body">
      <section className="ach_vis">
        <header className="ach_head">成员练手的小demo</header>

        {demoList.map((item) => 
          <div className="ach_item">
            <div className="ach_item_img" onClick={() => godetail(item.detail)}>
              <img src={require(`${item.img}`).default} alt=""></img>
            </div>
            <div className="ach_item_dsc">
              <h3>{item.name}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
export default Ach;
