import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles.less"

export default function Card({ name, path, content, img, reverse }) {
    const history = useNavigate();

  return (
    <div className={`studio_h1 ${reverse ? 'reverse' : ''}`} style={{ flexWrap: 'wrap' }}>
      <div className="studio_item3" style={{ cursor: 'pointer' }}>
        <img src={require(`${img}`).default} className="studio_item3_img" alt="" />
        <div className="studio_item3_btn" onClick={() => history(path)}>
          <span>了解更多</span>
        </div>
      </div>
      <div className="studio_item4">
        <div className="studio_head">
          <p style={{ fontSize: 20, color: 'rgb(137,11,10)' }}>{name}</p>
        </div>
        <div className="studio_head_1">
          <p style={{ fontSize: '0.875em', color: 'rgb(165,165,165)' }}>{content}</p>
        </div>
      </div>
    </div>
  );
}
