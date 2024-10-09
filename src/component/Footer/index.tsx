import React from 'react';
import './styles.less';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_copy">
          Copyright ©2023 LingHang Studio. <br />
          武汉科技大学 领航工作室 All rights reserved.
        </div>
        <div className="footer_beian">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            鄂ICP备2022010206号-2
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
