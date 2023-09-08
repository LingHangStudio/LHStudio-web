import React, { useState } from 'react';
import './styles.less';

const Loading: React.FC = () => {
  let text = useState<any>()
  return (
    <>
      <div id="loading" className="loading">
        <div className="loading-spinner"></div>
        <div className="loading-text">{text}</div>
      </div>
    </>
  );
} 

export default Loading;
