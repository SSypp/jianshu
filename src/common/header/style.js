import styled from 'styled-components';
import Logopic from '../../statics/nav-logo.png';
export const HeaderWrapper = styled.div`
    
    height:56px;
    border-bottom:1px solid #eee;  
`;
export const HeaderContainer = styled.div`
    position:relative;
    max-width:1440px;
    min-width:768px;
    height:56px;
    margin:0 auto;
`;
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${Logopic});
    background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:60px;
    box-sizing:border-box;
`;
export const NavItem = styled.div`
    line-height:56px;
    font-size:20px;
    padding:0 15px;
    cursor:pointer;
    &.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
		font-size:17px;
	}
	&.active {
		color: #ea6f5a;
	}
	&.iconfont{
	    font-size: 20px;
	}
`;
export const NavSearchWrapper = styled.div`
    float:left;
    position:relative;
    .iconfont{
        position:absolute;
        font-size:20px;
        right:6px;
        top:13px;
        width:30px;
        height:30px;
        border-radius:38px;
        line-height:30px;
        text-align:center;
        cursor:pointer;
        &.focused{
            background:#969696;
            color:white;
        }
    }
   
`;
export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
    width:240px;
    padding:0px 45px 0px 20px;
    color:#333;
    height:38px;
    border-radius:19px;
    border:none;
    outline:none;
    background:#eee;
    margin-top:9px;
    margin-left:20px;
    font-size:14px;
    box-sizing: border-box;
    &::placeholder {
		color: #999;
	}
	&.focused{
	width:340px;
	}
	&.focus-enter{
        transition:all 0.5s ease-out;
    } 
    &.focus-enter-active{
        width:340px;
    }
    &.focus-exit{
        transition:all 0.5s ease-out;
    }
    &.focus-exit-active{
        width:240px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    top:56px;
    left:20px;
    padding: 0 20px;
    width:260px;
    box-shadow:0 0 8px rgba(0, 0, 0, .2);
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
	margin-bottom: 15px;
	padding-bottom:6px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
	border-bottom:1px solid #eee;
	cursor: pointer;
`;
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    color:#969696;
    cursor: pointer;
`;
export const SearchInfoList = styled.div`
    overflow:hidden;
`;
export const SearchInfoItem = styled.a`
    display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;
export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	font-size:15px;
	cursor:pointer;
    &.writting{
        width:70px;
        height:40px;
        background:#ea6f5a;
        border-radius:20px;
        color:white;
        
    }
    &.res{
        width:34px;
        height:38px#ea6f5a;
        border-radius:19px;
        border:1px solid #ea6f5a;
        color:#ea6f5a;
        text-align:center;
    }
`;

