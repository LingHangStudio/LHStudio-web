import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.less';
import data from './data';

const Detail: React.FC = (props) => {
  const params = useParams();
  const [state, setState] = useState<any>({
    data: {
      name: '',
      img: [],
      github: '',
      download: ''
    }
  });
  useEffect(() => {
    setState({
      data: data[params.type || '']
    });
  }, []);

  return (
    <div className="detail_body">
      <section className="detail_vis">
        <div className="detail_head">
          <h1>{state.data.name}</h1>
        </div>
        <div className="detail_hr"></div>
        <div className="detail_auth">
          <h3>作者</h3>
          <h2>{state.data.author}</h2>
        </div>
        <div className="detail_dec">
          <p>{state.data.dec}</p>
        </div>
        <div className="detail_gd">
          <p>{state.data.github && 'github地址:   ' + state.data.github}</p>
          <p>{state.data.download && '下载地址:   ' + state.data.download}</p>
        </div>
        {state.data.plat === 'windows' ? 
          <div className="detail_img_w">
            {state.data.img &&
              state.data.img.map((item: any) => {
                return (
                  <div className="detail_img_item_w">
                    <img src={require('../img/' + item).default} alt="" />
                  </div>
                );
              })}
          </div>
         : 
          <div className="detail_img">
            {state.data.img &&
              state.data.img.map((item: any) => {
                return (
                  <div className="detail_img_item">
                    <img src={require('../img/' + item).default} alt="" />
                  </div>
                );
              })}
          </div>
        }
      </section>
    </div>
  );
};
export default Detail;
