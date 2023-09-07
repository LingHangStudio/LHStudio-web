/* eslint-disable complexity */
import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.less';

const null_style = {}

interface stateType{
  open?: boolean
  page?: string
  mobile?: boolean
  navH?:number
}

const Head: React.FC = () => {
  const history = useNavigate();
  const [state, setState] = useState<stateType>({
    open: false,
    page: 'studio',
    mobile: false,
  });

  useEffect(() => {
    // console.log(window.location.pathname === '/studio')
    setState({
      page: window.location.pathname,
      mobile: document.body.clientWidth >= 750 ? false : true,
      navH: 120,
    });
    window.addEventListener('resize', () => {
      if (document.body.clientWidth >= 750) {
        setState({
          mobile: false,
        });
      } else {
        setState({
          mobile: true,
        });
      }
    });
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
    if (scrollTop >= 40) {
      setState({
        navH: 90,
      });
    } else {
      setState({
        navH: 120,
      });
    }
  };

  const jumpToIndex = () => {
    window.location.href = 'http://wustlinghang.cn/';
  };
  return (
    <div style={{ width: '100%', backgroundColor: 'black', backgroundAttachment: 'fixed' }}>
      <div className="nav" style={state.mobile ? null_style : { height: state.navH + 'px' }}>
        <div className="nav_dis" style={state.mobile ? null_style : { height: state.navH + 'px' }}>
          {/* 移动端显示部分 */}
          <div className="nav_open" onClick={() => setState({ open: state.open ? false : true })}>
            <div
              className="nav_open_btn"
              style={{
                transform: state.open ? 'rotate(45deg)  translate(0px, 9.5px)' : 'rotate(0deg)',
              }}
            ></div>
            <div className="nav_open_btn" style={{ display: state.open ? 'none' : 'block' }}></div>
            <div
              className="nav_open_btn"
              style={{
                transform: state.open ? 'rotate(-45deg)  translate(0px, -9.5px)' : 'rotate(0deg)',
              }}
            ></div>
          </div>
          <div className="nav_logo" onClick={jumpToIndex}>
            <img src={require('../../static/lh.png')} alt=""></img>
          </div>
          <div className="nav_opt">
            <div className="nav_item" onClick={() => history('/studio')}>
              <div
                className="nav_item_bg"
                style={
                  state.page && state?.page.slice(0, 7) === '/studio'
                    ? { height: state.navH === 90 ? 105 + 'px' : 120, opacity: 1 }
                    : null_style
                }
              ></div>
              <span
                className="nav_item_text"
                style={
                  state.page && state?.page.slice(0, 7) === '/studio'
                    ? { color: 'black' }
                    : null_style
                }
              >
                工作室
              </span>
            </div>
            <div
              className="nav_item"
              onClick={() => {
                window.location.pathname = '/new';
                return;
              }}
            >
              <div
                className="nav_item_bg"
                style={
                  state.page && state.page.slice(0, 4) === '/new'
                    ? { height: state.navH === 90 ? 105 + 'px' : 120, opacity: 1 }
                    : null_style
                }
              ></div>
              <span
                className="nav_item_text"
                style={
                  state.page && state.page.slice(0, 4) === '/new' ? { color: 'black' } : null_style
                }
              >
                最新
              </span>
            </div>
            <div className="nav_item" onClick={() => history('/helper')}>
              <div
                className="nav_item_bg"
                style={
                  state.page && state.page.slice(0, 4) === '/helper'
                    ? { height: state.navH === 90 ? 105 + 'px' : 120, opacity: 1 }
                    : null_style
                }
              ></div>
              <span
                className="nav_item_text"
                style={
                  state.page && state.page.slice(0, 4) === '/helper'
                    ? { color: 'black' }
                    : null_style
                }
              >
                武科大助手
              </span>
            </div>
            <div className="nav_item" onClick={() => history('/ach')}>
              <div
                className="nav_item_bg"
                style={
                  state.page && state.page.slice(0, 4) === '/ach'
                    ? { height: state.navH === 90 ? 105 + 'px' : 120, opacity: 1 }
                    : null_style
                }
              ></div>
              <span
                className="nav_item_text"
                style={
                  state.page && state.page.slice(0, 4) === '/ach' ? { color: 'black' } : null_style
                }
              >
                成员作品
              </span>
            </div>
            <div className="nav_item" onClick={() => history('/connect')}>
              <div
                className="nav_item_bg"
                style={
                  state.page && state.page.slice(0, 8) === '/connect'
                    ? { height: state.navH === 90 ? 105 + 'px' : 120, opacity: 1 }
                    : null_style
                }
              ></div>
              <span
                className="nav_item_text"
                style={
                  state.page && state.page.slice(0, 8) === '/connect'
                    ? { color: 'black' }
                    : null_style
                }
              >
                联系我们
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nav_page"
        style={{ height: window.innerHeight - 50 + 'px', left: state.open ? 0 : '-100%' }}
      >
        <div className="nav_page_dis">
          <div className="nav_page_item" onClick={() => history('/studio')}>
            工作室
          </div>
          <div className="nav_page_item" onClick={() => history('/new')}>
            最新
          </div>
          <div className="nav_page_item" onClick={() => history('/download')}>
            武科大助手
          </div>
          <div className="nav_page_item" onClick={() => history('/ach')}>
            成员成果
          </div>
          <div className="nav_page_item" onClick={() => history('/connect')}>
            联系我们
          </div>
        </div>
      </div>
    </div>
  );
};


export default Head;






