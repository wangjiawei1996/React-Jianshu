import styled from 'styled-components';
import IconfontBPic from '../../statics/weight.png';
import Pic from '../../statics/pic.png';
import HeaderPic from '../../statics/header.png';
import DividePic from '../../statics/divide.png';
import FormualPic from '../../statics/formula.png';
import BreakoutPic from '../../statics/breakout.png';
import HistoryPic from '../../statics/history.png';
import FilePic from '../../statics/file.png';
import IssuePic from '../../statics/post.png';
import ExpandPic from '../../statics/fullscreen.png';
import SavePic from '../../statics/save.png';
export const WriterWrapper = styled.div`
  display: block
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 65px;
  overflow: hidden;
`;
export const WriterLeft = styled.div`
  overflow-y: auto
  float: left;
  background-color: #404040;
  width: 213px;
  height: 100%;
  color: #f2f2f2;
`;
export const Button = styled.div`
  height: 28px;
  line-height: 28px;
  text-align: center;
  width: 177px;
  display: block;
  font-size: 15px;
  padding: 9px 0;
  color: #ec7259;
  border: 1px solid rgba(236,114,89,.8);
  border-radius: 20px;
  margin: 36px auto;
`;
export const NewArticle = styled.div`
  width: 177px;
  cursor: pointer;
  margin: 10px auto;
  font-size: 14px;
`;
export const NewPart = styled.div`
  width: 183px;
  height: 85px;
  margin: 15px auto;
`;
export const Input = styled.input`
  display: block
  width: 169px;
  height: 25px;
  margin: 10px 0;
  color: #f2f2f2;
  background-color: #595959;
  border: 1px solid #333;
  padding: 4px 6px;
  font-size: 14px;
  line-height: 25px;
`;
export const Submit = styled.div`
  display: inline-block;
  height: 20px;
  width: 32px;
  padding: 4px 12px;
  border: 1px solid #42c02e;
  margin-left: 4px;
  color: #42c02e;
  background-color: #404040;
  font-size: 14px;
  font-weight: 500;
  border-radius: 15px;
  cursor: pointer;
`;
export const Cancel = styled.div`
  margin-left: 8px;
  position: relative;
  display: inline-block;
  text-align: center;
  height: 30px;
  line-height: 20px;
  padding: 4px 12px;
  border: 1px solid transparent;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  color: #999;
`
export const Diary = styled.div`
  display: block;
  height: 20px;
  width: 143px;
  margin: 10px 15px;
  font-size: 15px;
  cursor: pointer;
`;
export const Writing = styled.div`
  display: block;
  height: 20px;
  width: 143px;
  margin: 18px 15px;
  font-size: 15px;
  cursor: pointer;
`;
export const WritingAntd = styled.div`
  position: absolute;
  width: 198px;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  padding-left: 15px;
  font-size: 15px;
  overflow: hidden;
  color: #999;
  cursor: pointer;
`;
export const Setting = styled.div`
  float: left;
  width: 47px;
`;
export const Question = styled.div`
  float: right;
  width: 77.9px;
  margin-right: 15px;
`;
export const WritingMiddle = styled.div`
  margin-left:213px;
  width: 319px;
  height: 100%;
  border-right: 1px solid #e6e6e6;
`;
export const Article = styled.div`
  width: 194px;
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  padding: 20px 0 20px 25px;
  cursor: pointer;
  color: #595959;
`;
export const NoTitle = styled.div`
  overflow: hidden;
  width: 315px;
  height: 90px;
  position: relative;
  margin-bottom: 0;
  background-color: #e6e6e6;
  border-top: 1px solid #d9d9d9;
  border-left:4px solid #ec7259;
`;
export const NoArticle = styled.div`
  float: right;
  display: block;
  width: 104px;
  height: 30px;
  line-height: 30px;
  margin-top: 15px;
  margin-right: 40px;
  font-size: 18px;
`;
export const NoPicture = styled.div`
  position: absolute;
  top: 30px;
  left: 20px;
  width: 22px;
  height: 30px;
  background:url(${FilePic});
  padding: 8px 3px;
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
`;
export const Number = styled.div`
  position: absolute;
  bottom: 2px;
  left: 5px;
  font-size: 9px;
  line-height: 16px;
  color: #595959;
`;
export const DownArticle = styled.div`
  width: 294px;
  height: 30px;
  line-height: 30px;
  padding: 20px 0 20px 25px;
  cursor: pointer;
  color: #999;
  margin-bottom: 80px;
  cursor: pointer;
`;
export const WritingRight = styled.div`
  position: absolute;
  width: 746px;
  float: right;
  height: 100%;
  top: 0;
  right: 0;
`;
export const Saved = styled.p`
  height: 21px;
  width: 42px;
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 14px;
`;
export const NoTitleArticle = styled.div`
  width:626.7px;
  height: 34px;
  padding: 21px 80px 10px 40px;
  font-size: 30px;
`;
export const WriterIconfont = styled.div`
  width: 746px;
  height: 39px;
  background-color: #d9d9d9;
  border-bottom: 1px solid #ccc;
`;
export const IconfontB = styled.div`
  height: 15.1px;
  width: 15px;
  background:url(${IconfontBPic});
  padding: 8px 3px;
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
  overflow: hidden;
  float: left;
  margin: 8px 10px;
  cursor: pointer;
`;
export const WriterPic = styled.div`
  height: 17.1px;
  width: 17px;
  background:url(${Pic});
  padding: 8px 3px;
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
  overflow: hidden;
  float: left;
  margin: 8px 5px;
  cursor: pointer;
`;
export const HeadPic = styled.div`
  height: 15.1px;
  width: 15px;
  background:url(${HeaderPic});
  padding: 8px 3px;
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
  overflow: hidden;
  float: left;
  margin: 8px 23px;
  cursor: pointer;
`;
export const Divide = styled.div`
  height: 15.1px;
  width: 15px;
  background:url(${DividePic});
  padding: 8px 3px;
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
  overflow: hidden;
  float: left;
  margin: 8px 10px;
  cursor: pointer;
`;
export const Formual = styled.div`
  height: 15.1px;
  width: 15px;
  background:url(${FormualPic});
  padding: 8px 3px;
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
  overflow: hidden;
  float: left;
  margin: 8px 10px;
  cursor: pointer;
`;
export const Breakout = styled.div`
  height: 15.1px;
  width: 15px;
  background:url(${BreakoutPic});
  padding: 8px 3px;
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
  overflow: hidden;
  float: left;
  margin: 8px 10px;
  cursor: pointer;
`;
export const History = styled.div`
  height: 15.1px;
  width: 15px;
  background:url(${HistoryPic});
  padding: 8px 3px;
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
  overflow: hidden;
  float: left;
  margin: 8px 10px;
  cursor: pointer;
`;
export const WriteFunction = styled.div`
  position: absolute;
  top: 65px;
  right: 0;
  height: 39px;
  width: 200px;
  overflow: hidden;
  font-size: 13px;
`;
export const IssueArticle = styled.div`
  position: absolute;
  width: 69px;
  height: 17px;
  color: #595959;
  padding: 11px 14px;
  display: inline-block;
  line-height: 17px;
  right: 0;
  cursor: pointer;
`
export const Issue = styled.div`
  position: absolute;
  background:url(${IssuePic});
  background-size:contain;
  background-repeat:no-repeat;
  display: block;
  width: 13px;
  height: 13px;
  line-height: 13px;
  left:0;
  bottom:13px;
  cursor: pointer;
`;
export const Expand = styled.div`
  height: 15.1px;
  width: 15px;
  color: #595959;
  padding: 8px 3px;
  display: inline-block;
  background:url(${ExpandPic});
  background-size:contain;
  background-repeat:no-repeat;
  margin-top: 8px;
  margin-left: 65px;
  cursor: pointer;
`;
export const Save = styled.div`
  height: 15.1px;
  width: 15px;
  color: #595959;
  padding: 8px 3px;
  display: inline-block;
  background:url(${SavePic});
  background-size:contain;
  background-repeat:no-repeat;
  margin-top: 8px;
  margin-left: -65px;
  cursor: pointer;
`;
export const TextArea = styled.textarea`
  cols="100"; 
  rows="100";
  width: 746px;
  height: 100%;
  border: none;
  font-size:18px;
`