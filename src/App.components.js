import styled from "styled-components";
import { bgColor, sideBarColor, themeColor } from './GlobalStyles.components';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    color: #fff;
`

export const AppSidebar = styled.div`
    width: 60px;
    height: 100%;
    background-color: ${sideBarColor};
    display: flex;
    flex-direction: column;
`

export const MenuIconWrapper = styled.a`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    img{
        width: 40px;
        height: 40px;
    }
    &::before{
        content: '';
        width: 3px;
        height: 0;
        background-color: ${themeColor};
        border-radius: 0 20px 20px 0;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        transition: height 0.3s ease;
    }
    &:hover, &.active{
        &::before{
            height: 50%;
        }
    }
`

export const AppContentContainer = styled.div`
    flex: 1;
    padding: 16px;
    height: 100%;
    overflow: auto;
`

export const CurrentPageTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 24px;
`

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
    
    @media (max-width: 900px) {
        display: flex;
       flex-direction:column;
     }
`

export const ContentLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const AnalyticsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
     
    @media (max-width: 900px) {
        display: flex;
      flex-wrap:wrap;
     }
`

export const AnalyticsBox = styled.div`
    background-color: ${sideBarColor};
    border-radius: 12px;
    padding: 24px 24px 16px;
    .analytics-icon{
        width: 54px;
        height: 54px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 20px;
    }
    &:nth-child(1) .analytics-icon{
        background-color: rgb(255 193 7);
    }
    &:nth-child(2) .analytics-icon{
        background-color: rgb(220 53 69);
    }
    &:nth-child(3) .analytics-icon{
        background-color: rgb(25 135 84);
    }
    &:nth-child(4) .analytics-icon{
        background-color: rgb(13 110 253);
    }

    .analytics-card-title{
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 4px;
    }
    
    .analytics-count{
        font-size: 40px;
        font-weight: 700;
        margin: 0;
    }
`

export const DashBaordCard = styled.div`
    width: 100%;
    background-color: ${sideBarColor};
    border-radius: 12px;
    .dashboard-card-title{
        padding: 24px;
        border-bottom: 1px dashed ${bgColor};
        font-size: 18px;
        font-weight: 500;
        margin: 0;
    }
    .dashboard-card-content{
        padding: 24px;
        table tr:not(:last-child) td{
            padding: 16px 0 16px;
            border-bottom: 1px solid ${bgColor};
        }
        table tr:first-child td{
            padding-top: 0;
        }
        table tr:last-child td{
            padding-top: 16px;
            padding-bottom: 0;
        }
    }
`

export const ContentRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const CommentsCard = styled.div`
    background-color: ${sideBarColor};
    border-radius: 12px;
    .comments-card-title{
        padding: 24px;
        border-bottom: 1px dashed ${bgColor};
        font-size: 18px;
        font-weight: 500;
        margin: 0;
    }
    .comments-wrapper{
        padding: 24px;
        max-height: 500px;
        overflow: auto;
    }
    .comment-block{
        display: flex;
        gap: 16px;
        padding: 20px 0;
        .user-img-wrapper{
            width: 48px;
            height: 48px;
            background-color: #fff;
            border-radius: 50%;
        }
        .user-comment-wrapper{
            flex: 1;
            h4{
                font-size: 16px;
                font-weight: 500;
                margin: 0 0 8px;
            }
            p{
                font-size: 15px;
                font-weight: 400;
                margin: 0
            }
        }
        &:not(:last-child){
            border-bottom: 1px solid ${bgColor};
        }
        &:first-child{
            padding-top: 0;
        }
        &:last-child{
            padding-bottom: 0;
        }
    }
`