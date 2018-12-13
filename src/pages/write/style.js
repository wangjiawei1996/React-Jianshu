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
  margin: 18px auto;
  font-size: 14px;
`;
export const Diary = styled.div`
  display: block;
  height: 20px;
  width: 143px;
  margin: 18px 15px;
  font-size: 15px;
`;
export const Writing = styled.div`
  display: block;
  height: 20px;
  width: 143px;
  margin: 18px 15px;
  font-size: 15px;
`;