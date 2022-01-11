import { 
  SIDEBAR_TAB_STATUS, 
} from './SideTypes';

/* *************************** 더보기 sidebar status ****************************** */
export function setSideTabStatus(status) {
  return {
    type: SIDEBAR_TAB_STATUS,
    status,
  };
}

