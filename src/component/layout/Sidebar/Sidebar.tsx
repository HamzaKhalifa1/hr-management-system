import SidebarLink from './SidebarLink.tsx'
import AppLogo from '../../../assets/icons/AppLogo.tsx'
import styles from './Sidebar.module.css'
import DashboardIcon from '../../../assets/icons/DashboardIcon.tsx'
import AllEmployeesIcon from '../../../assets/icons/AllEmployeesIcon.tsx'
import AllDepartmentsIcon from '../../../assets/icons/AllDepartmentsIcon.tsx'
import CalendarCheckIcon from '../../../assets/icons/CalendarCheckIcon.tsx'
import CoinDollarIcon from '../../../assets/icons/CoinDollarIcon.tsx'
import BriefcaseIcon from '../../../assets/icons/BriefcaseIcon.tsx'
import CandidatesIcon from '../../../assets/icons/CandidatesIcon.tsx'
import LeavesIcon from '../../../assets/icons/LeavesIcon.tsx'
import HolidaysIcon from '../../../assets/icons/HolidaysIcon.tsx'
import SettingIcon from '../../../assets/icons/SettingIcon.tsx'
import SunIcon from '../../../assets/icons/SunIcon.tsx'
import HalfMoonIcon from '../../../assets/icons/HalfMoonIcon.tsx'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.sidebarContent}>
        <span className={styles.logo}>
          <AppLogo height='100%'/>
          <p className={styles.logoName}>HRMS</p>
        </span>
        <ul className={styles.navbar}>
          <SidebarLink to="/" icon={<DashboardIcon />} label="Dashboard" />
          <SidebarLink to="/all-employees" icon={<AllEmployeesIcon />} label="All Employees" />
          <SidebarLink to="/departments" icon={<AllDepartmentsIcon />} label="All Departments" />
          <SidebarLink to="/attendance" icon={<CalendarCheckIcon />} label="Attendance" />
          <SidebarLink to="/payroll" icon={<CoinDollarIcon />} label="Payroll" />
          <SidebarLink to="/jobs" icon={<BriefcaseIcon />} label="Jobs" />
          <SidebarLink to="/candidates" icon={<CandidatesIcon />} label="Candidates" />
          <SidebarLink to="/leaves" icon={<LeavesIcon />} label="Leaves" />
          <SidebarLink to="/holidays" icon={<HolidaysIcon />} label="Holidays" />
          <SidebarLink to="/settings" icon={<SettingIcon />} label="Settings" />
        </ul>
      </section>
      <section className={styles.toggleTheme}>
        <button className={styles.toggleThemeButton}>
          <SunIcon />
          Light
        </button>
        <button className={styles.toggleThemeButton}>
          <HalfMoonIcon />
          Dark
        </button>
      </section>
    </aside>
  )
}
