import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float:left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
    .banner-img {
      width: 625px;
      height: 270px;
    }
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;
export const TopicWrapper  = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
    padding: 7px 0;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-heigth: 24px;
    font-size: 13px;
    color: #999;
  }
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain; 
`;
export const RecommendDownload = styled.div`
  overflow: hidden
  width: 278px;
  height: 82px;
  margin-top: 10px;
  padding: 10px 0;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  .qrcode {
    display: block
    float:left;
    width: 60px;
    height: 60px;
    padding: 10px 2px 10px 22px;
  }
`;
export const RecommendAside = styled.div`
  width: 143px;
  height: 43px;
  line-height: 43px;
  float: right;
  padding-right: 10px;
  margin-right: 28px;
  .title {
    line-height: 21px;
    font-size: 15px;
    color: #333;
    margin-bottom: 0;
  }
  .description {
    margin-top: 4px;
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`;
export const WriterWrapper = styled.div`
  width: 280px;
  padding-right: 10px;
  box-sizing: border-box;
  .title {
    width: 100%;
    font-size: 14px;
    color: #969696;
    .page-change {
      float: right;
      cursor: pointer
    }
  }
`;
export const Writers = styled.ul`
  padding-left: 0;
  margin-top: 10px;
`;
export const WriterItem = styled.li`
  position: relative;
  width: 100%;
  margin-top: 15px;
  overflow: hidden;
  .item-inner {
    box-sizing: border-box;
    float: left;
    &.avatar {
      display: inline-block;
      width: 50px;
      height: 50px;
      img {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #ddd;
      }
    }
    &.desc {
      display: inline-block;
      width: calc(100%-60px);
      padding: 0 10px;
      .name {
        font-size: 14px;
        color: #333;
        margin-top: 5px;
      }
      .title {
        font-size: 12px;
        color: #969696;
        line-height: 1px;
      }
    }
    &.follow {
      position: absolute;
      top: 5px;
      right: 0;
      z-index: 100;
      color: #42c02e;
      font-size: 13px;
    }
  }
`