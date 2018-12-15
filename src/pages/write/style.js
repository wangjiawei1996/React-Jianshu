import styled from 'styled-components';
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