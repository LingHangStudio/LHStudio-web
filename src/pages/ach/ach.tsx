import React from 'react';
import './ach.less';

const Ach: React.FC = () => {
  const godetail = (e: any) => {
    window.location.pathname = 'ach/detail/' + e;
  };
  return (
    <div className="ach_body">
      <section className="ach_vis">
        <header className="ach_head">成员练手的小demo</header>
        <div className="ach_item">
          <div className="ach_item_img" onClick={() => godetail('wyy')}>
            <img src={require('./img/1.png')} alt=""></img>
          </div>
          <div className="ach_item_dsc">
            <h3>仿网易云音乐桌面音乐播放器</h3>
            <p>
              一个模仿网易云音乐windows端UI界面制作的跨平台桌面音乐播放器，可以实现本地音乐播放，在线音乐播放，登录网易云音乐账号播放自己的歌单，专辑。以及网易云音乐特色的歌曲评论模块等等功能
            </p>
          </div>
        </div>
        <div className="ach_item">
          <div className="ach_item_img" onClick={() => godetail('rck')}>
            <img src={require('./img/rck_m.jpg')} alt="" />
          </div>
          <div className="ach_item_dsc">
            <h3>日程快</h3>
            <p>
              基于Android的多功能日程管理工具，可以制定本周日程、添加倒计时、分享本周日程、查看天气提示等一系列功能，为用户的生活添加便利
            </p>
          </div>
        </div>
        <div className="ach_item">
          <div
            className="ach_item_img"
            style={{ backgroundColor: 'rgb(157,211,227)' }}
            onClick={() => godetail('wt')}
          >
            <img src={require('./img/wt.jpg')} alt="" />
          </div>
          <div className="ach_item_dsc">
            <h3>wetalk</h3>
            <p>
              WeTalk是一款致力于为领域专家和普通工业从业者提供便利交流的平台。当前主要包含话题、需求、文章、动态等模块，同时也涵盖聊天、付费咨询等功能!
            </p>
          </div>
        </div>
        <div className="ach_item">
          <div
            className="ach_item_img"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => godetail('qxp')}
          >
            <img src={require('./img/qxp.jpg')} alt=""></img>
          </div>
          <div className="ach_item_dsc">
            <h3>一身诗意千寻铺</h3>
            <p>
              “一身诗意千寻铺”，简称“千寻铺”，是一个全国高校校园失物招领信息服务平台，为中国高校学生提供自己学校范围内的“失物招领/寻物启事”服务。
            </p>
          </div>
        </div>
        <div className="ach_item">
          <div
            className="ach_item_img"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => godetail('am')}
          >
            <img src={require('./img/AppMarket_1.jpeg')} alt=""></img>
          </div>
          <div className="ach_item_dsc">
            <h3>AppMarket</h3>
            <p>模仿华为应用市场的一款手机app</p>
          </div>
        </div>
        <div className="ach_item">
          <div
            className="ach_item_img"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => godetail('ep')}
          >
            <img src={require('./img/EventParticipant_1.jpg')} alt=""></img>
          </div>
          <div className="ach_item_dsc">
            <h3>EventParticipant</h3>
            <p>一款能够发布活动以及物物交换的app</p>
          </div>
        </div>
        <div className="ach_item">
          <div
            className="ach_item_img"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => godetail('kdxd')}
          >
            <img src={require('./img/科大小店_1.jpg')} alt=""></img>
          </div>
          <div className="ach_item_dsc">
            <h3>科大小店</h3>
            <p>
              这是一款校内跳蚤市场的软件，这款软件可以进行二手商品等物品发布与购买，还可以发布活动和报名参加活动
            </p>
          </div>
        </div>
        <div className="ach_item">
          <div
            className="ach_item_img"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => godetail('xlkdb')}
          >
            <img src={require('./img/心理课代表_1.jpg')} alt=""></img>
          </div>
          <div className="ach_item_dsc">
            <h3>心理课代表</h3>
            <p>一款针对大学生的关于心理问题咨询的app</p>
          </div>
        </div>
      </section>
      <div className="footer_vis">
        <div className="footer_copy">©2023 LingHang Studio. 武汉科技大学 领航工作室</div>
      </div>
    </div>
  );
};
export default Ach;
