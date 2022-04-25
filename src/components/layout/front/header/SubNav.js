// ******************************************************************************
// 사용 방법 : 

// <SubNav 
//  nav={subNavInfo}
//  toggleState={toggleState}
//  toggleTab={toggleTab}
// />
//
// ===> subNavInfo, toggleState, toggleTab 을 아래와 같이 작성해주시면 됩니다.
//
// const [toggleState, setToggleState] = useState(1);

// const toggleTab = (index) => {
//   setToggleState(index);
// };

// const subNavInfo = [
//   {
//     "id": 1,
//     "title": '전체 매장',
//   },
//   {
//     "id": 2,
//     "title": '자주 찾는 매장',
//   },
// ];
//*********************************************************************************
import React, { forwardRef } from 'react';
// css
import { SubNavContainer } from '../../../../styles/components/layout/subNav';

const SubNav = forwardRef(({
  kind,
  onClick,

  nav,
  toggleState,
  toggleTab,

  btmColor, // border-bottom color 색상
}, ref) => {

  return (
    <SubNavContainer 
      className={kind}
      btmColor={btmColor} 
    >
      <nav>
        <ul 
          className='nav-list' 
          onClick={onClick} 
          ref={ref}
        >
          {nav.map(({ id, title }) => {
            return (
              <li 
                key={id}
                className={toggleState === id ? "nav-item is-active" : "nav-item"}
                onClick={() => toggleTab(id)}
              >
                {title}
              </li>
            )
          })}
        </ul>
      </nav>
    </SubNavContainer>
  );
});

export default SubNav;