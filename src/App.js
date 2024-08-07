
import './App.css';
import { AppContainer, AppContentContainer, AppSidebar, MenuIconWrapper, CurrentPageTitle, ContentWrapper, ContentLeftWrapper, AnalyticsWrapper, AnalyticsBox, DashBaordCard, ContentRightWrapper, CommentsCard } from './App.components';
import DashBaordIcon from './images/dashboard.svg'
import AvatarIcon from './images/avatar.svg'
import { Chart } from 'react-charts'

function App() {
  const menuItems = [
    {
      icon: DashBaordIcon,
      name: 'Home'
    },
    {
      icon: DashBaordIcon,
      name: 'Reports'
    },
    {
      icon: DashBaordIcon,
      name: 'Summary'
    }
    
  ]
  const data =[
    // {
    //   label: 'Series 1',
    //   data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
    // },
    // {
    //   label: 'Series 2',
    //   data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
    // },
    // {
    //   label: 'Series 3',
    //   data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
    // }
    [[1, 10], [2, 10], [3, 10]],
      [[1, 10], [2, 10], [3, 10]],
      [[1, 10], [2, 10], [3, 10]]
  ]
  const axes=[
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ]
  
  return (
    <AppContainer>
      <AppSidebar>
        {menuItems.map((item, index) => (
          <MenuIconWrapper className={index === 0 ? 'active' : ''} key={item.name} title={item.name}>
            <img src={item.icon} alt={item.name} />
          </MenuIconWrapper>
        ))}
      </AppSidebar>
      <AppContentContainer>
        <CurrentPageTitle>Dashboard</CurrentPageTitle>
        <ContentWrapper>
          <ContentLeftWrapper>
            <AnalyticsWrapper>
              <AnalyticsBox>
                <div className='analytics-icon'>
                </div>
                <h4 className='analytics-card-title'>Total Orders</h4>
                <p className='analytics-count'>75</p>
              </AnalyticsBox>
              <AnalyticsBox>
                <div className='analytics-icon'>
                </div>
                <h4 className='analytics-card-title'>Total Delivered</h4>
                <p className='analytics-count'>70</p>
              </AnalyticsBox>
              <AnalyticsBox>
                <div className='analytics-icon'>
                </div>
                <h4 className='analytics-card-title'>Total Cancelled</h4>
                <p className='analytics-count'>05</p>
              </AnalyticsBox>
              <AnalyticsBox>
                <div className='analytics-icon'>
                </div>
                <h4 className='analytics-card-title'>Total Revenue</h4>
                <p className='analytics-count'>$12k</p>
              </AnalyticsBox>
            </AnalyticsWrapper>
            <DashBaordCard>
            <Chart style={{width:"100%",height:"300px"}} data={data} axes={axes} />
            </DashBaordCard>
            <DashBaordCard>
              <h4 className='dashboard-card-title'>Reports</h4>
              <div className='dashboard-card-content'>
                <table cellPadding='0' cellSpacing='0'>
                  <tr>
                    <td style={{display:"flex",alignItems:"center"}}>
                      <span style={{marginRight:"10px"}}>
                        <img style={{width:"30px",height:"30px"}} src={AvatarIcon} alt={AvatarIcon}></img>
                        </span>
                        <span>Hope Mikaelson</span>
                        </td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                  <td style={{display:"flex",alignItems:"center"}}>
                      <span style={{marginRight:"10px"}}>
                        <img style={{width:"30px",height:"30px"}} src={AvatarIcon} alt={AvatarIcon}></img>
                        </span>
                        <span>Hope Mikaelson</span>
                        </td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                     <td style={{display:"flex",alignItems:"center"}}>
                      <span style={{marginRight:"10px"}}>
                        <img style={{width:"30px",height:"30px"}} src={AvatarIcon} alt={AvatarIcon}></img>
                        </span>
                        <span>Hope Mikaelson</span>
                        </td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                     <td style={{display:"flex",alignItems:"center"}}>
                      <span style={{marginRight:"10px"}}>
                        <img style={{width:"30px",height:"30px"}} src={AvatarIcon} alt={AvatarIcon}></img>
                        </span>
                        <span>Hope Mikaelson</span>
                        </td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                </table>
              </div>
            </DashBaordCard>
            {/* <DashBaordCard>
              <h4 className='dashboard-card-title'>Reports</h4>
              <div className='dashboard-card-content'>
                <table cellPadding='0' cellSpacing='0'>
                  <tr>
                    <td>Hope Mikaelson</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                    <td>Hope Mikaelson</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                    <td>Hope Mikaelson</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                    <td>Hope Mikaelson</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                </table>
              </div>
            </DashBaordCard> */}
           
          </ContentLeftWrapper>

          <ContentRightWrapper>
            <DashBaordCard>
              <h4 className='dashboard-card-title'>Reports</h4>
              <div className='dashboard-card-content'>
                <table cellPadding='0' cellSpacing='0'>
                  <tr>
                    <td>Hope Mikaelson</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                    <td>Hope Mikaelson</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                    <td>Hope Mikaelson</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                  <tr>
                    <td>Hope Mikaelson</td>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                  </tr>
                </table>
              </div>
            </DashBaordCard>
            <CommentsCard>
              <p className='comments-card-title'>Customer Feedback</p>
              <div className='comments-wrapper'>
                <div className='comment-block'>
                  <div className='user-img-wrapper'>
                  </div>
                  <div className='user-comment-wrapper'>
                    <h4>Hope Mikaelson</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className='comment-block'>
                  <div className='user-img-wrapper'>
                  </div>
                  <div className='user-comment-wrapper'>
                    <h4>Hope Mikaelson</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className='comment-block'>
                  <div className='user-img-wrapper'>
                  </div>
                  <div className='user-comment-wrapper'>
                    <h4>Hope Mikaelson</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className='comment-block'>
                  <div className='user-img-wrapper'>
                  </div>
                  <div className='user-comment-wrapper'>
                    <h4>Hope Mikaelson</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
                <div className='comment-block'>
                  <div className='user-img-wrapper'>
                  </div>
                  <div className='user-comment-wrapper'>
                    <h4>Hope Mikaelson</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                </div>
              </div>
            </CommentsCard>
          </ContentRightWrapper>
        </ContentWrapper>
      </AppContentContainer>
    </AppContainer>
  );
}

export default App;
