import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 56px;
  background: #eee;
  font-size: 14px;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 492px;
  margin: 100px auto;
  background: #fff;
  padding-top: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,.1)
`;
export const LoginTitle = styled.div`
  margin: 0 auto 30px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
`;
export const LoginNormal = styled.div`
  width: 300px;
  height: 35px;
  margin: 10px auto;
  overflow: hidden;
  display: block;
  padding: 10px;
`;
export const LoginSubmit = styled.div`
  font-weight: 700;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
  cursor: pointer;
  float: left;
  padding: 10px;
  margin: 0 20px 0 80px;
`;
export const LoginRegister = styled.div`
  pading: 10px;
  color: #969696;
  cursor: pointer;
  float: right;
  padding: 10px;
  margin: 0 80px 0 20px;
`
export const Input = styled.input`
  display: block;
  width: 300px;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  margin: 1px auto;
  color: #777;
  border-bottom: none;
  border-radius: 4px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
  font-size: 14px;
`;
export const LoginBtn = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 2px 0;
  margin: 20px 0;
  color:#999;
`;
export const RememberBtn = styled.div`
  margin:0 38px;
  .forget {
    margin-top:2px;
    float:right;
    cursor: pointer;
  }
`
export const Button = styled.div`
  width: 260px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #3194d0;
  border-radius: 25px;
  margin: 20px auto;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  padding: 9px 18px;
  border: none;
`;
export const MoreSign = styled.div`
  height: 73px;
  width: 300px;
  margin: 0 auto;
  .society {
    text-align: center;
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
  }
`;
export const ThreeSociety = styled.div`
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  cursor: pointer;
  img {
    display: inline-block;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin: 0 15px;
    padding:10px;
  }
`;
export const Others = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  margin-left: 15px;
  display: inline-block;
  color: gray;
`
