import React, { Component,Fragment } from 'react';
import { IconFont } from "../../statics/icon/style";
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    HeaderContainer,
    Logo, Nav,NavItem,
    NavSearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,Button
} from './style'

class HeaderNav extends Component{
    getListArea(){
        const { focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = (page - 1) * 10;i < page * 10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    };
    render(){
        const { focused,handleOnFocused,handleOnBlur,list } = this.props;
        return (
            <Fragment>
                <IconFont/>
                <HeaderWrapper>
                    <HeaderContainer>
                        <Logo href='/'>
                        </Logo>
                        <Nav>
                            <NavItem className="left active">
                                <span className="iconfont">&#xe695;</span>首页
                            </NavItem>
                            <NavItem className="left">
                                <span className="iconfont">&#xe61a;</span>下载App
                            </NavItem>
                            <NavItem className="right">登录</NavItem>
                            <NavItem className="right">
                                Aa
                            </NavItem>
                            <NavSearchWrapper>
                                <CSSTransition
                                    in={ focused }
                                    timeout={300}
                                    classNames="focus"
                                >
                                    <NavSearch
                                        className={ focused ? "focused" : '' }
                                        onFocus={ () => handleOnFocused(list) }
                                        onBlur={ handleOnBlur }
                                    >
                                    </NavSearch>
                                </CSSTransition>
                                <span className={ focused ? "focused iconfont" : 'iconfont' }>&#xe64d;</span>
                                {this.getListArea()}
                            </NavSearchWrapper>
                        </Nav>
                        <Addition>
                            <Button className='writting'>
                                <span className="iconfont">&#xe61b;</span>
                                写文章
                            </Button>
                            <Button className='res'>注册</Button>
                        </Addition>
                    </HeaderContainer>
                </HeaderWrapper>
            </Fragment>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnFocused(list){
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.input_focused());
        },
        handleOnBlur(){
            dispatch(actionCreators.input_blur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(HeaderNav);