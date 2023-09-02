import React from 'react';
import styles from '../pages/index.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Footer */}
      <div className={styles.footer} style={{ cursor: 'pointer' }}>
        <div className={styles.background38} />
      </div>

      {/* Banner */}
      <div className={styles.banner} style={{ cursor: 'pointer' }}>
        <div className={styles.shadow} />
        <div className={styles.background39} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <b className={styles.increaseYourWorkContainer}>
          <span>{`Increase your `}</span>
          <span className={styles.workWithKanban}>work with kanban</span>
        </b>
      </div>

      {/* Menus */}
      <div className={styles.menus}>
        {/* Dashboard */}
        <div className={styles.dashboard} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <div className={styles.shop}>Dashboard</div>
          <img className={styles.dashboard1Icon} alt="" src="/dashboard-1.svg" />
        </div>

        {/* Email */}
        <div className={styles.email} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <img className={styles.icChevronIcon} alt="" src="/ic-chevron.svg" />
          <img className={styles.dashboard1Icon} alt="" src="/email-1.svg" />
          <div className={styles.shop}>Email</div>
          <div className={styles.count}>
            <div className={styles.background42} />
            <b className={styles.b5}>17</b>
          </div>
        </div>

        {/* Chat */}
        <div className={styles.chat} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <img className={styles.dashboard1Icon} alt="" src="/comment-1.svg" />
          <div className={styles.shop}>Chat</div>
          <div className={styles.icChevron} />
        </div>

        {/* Kanban */}
        <div className={styles.kanban} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <img className={styles.icChevronIcon} alt="" src="/ic-chevron1.svg" />
          <img className={styles.thumbnail1Icon} alt="" src="/thumbnail-1.svg" />
          <b className={styles.kanban1}>Kanban</b>
        </div>

        {/* Active Indicator */}
        <div className={styles.activeindicator} />

        {/* Contact */}
        <div className={styles.contact} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <div className={styles.label11}>
            <div className={styles.background46} />
            <b className={styles.new}>NEW</b>
          </div>
          <div className={styles.icChevron} />
          <img className={styles.thumbnail1Icon} alt="" src="/contact-1.svg" />
          <div className={styles.contact1}>Contact</div>
        </div>

        {/* Calendar */}
        <div className={styles.calendar} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <div className={styles.icChevron} />
          <img
            className={styles.dashboard1Icon}
            alt=""
            src="/calendarsilhouette-1.svg"
          />
          <div className={styles.shop}>Calendar</div>
        </div>

        {/* Shop */}
        <div className={styles.invoices} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <img className={styles.dashboard1Icon} alt="" src="/onlineshopping-1.svg" />
          <div className={styles.shop}>Shop</div>
        </div>

        {/* Invoices */}
        <div className={styles.invoices1} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <img className={styles.icChevronIcon} alt="" src="/ic-chevron1.svg" />
          <img className={styles.dashboard1Icon} alt="" src="/invoice-1.svg" />
          <div className={styles.shop}>Invoices</div>
        </div>

        {/* Courses */}
        <div className={styles.courses} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <img className={styles.icChevronIcon} alt="" src="/ic-chevron1.svg" />
          <img className={styles.dashboard1Icon} alt="" src="/invoice-11.svg" />
          <div className={styles.shop}>Courses</div>
        </div>

        {/* Settings */}
        <div className={styles.settings} style={{ cursor: 'pointer' }}>
          <div className={styles.background31} />
          <div className={styles.icChevron} />
          <img className={styles.dashboard1Icon} alt="" src="/setting-1.svg" />
          <div className={styles.shop}>Settings</div>
        </div>

        {/* Main Menu */}
        <b className={styles.mainMenu}>MAIN MENU</b>
      </div>

      {/* Header */}
      <div className={styles.header} style={{ cursor: 'pointer' }}>
        <div className={styles.background31} />
        <div className={styles.hamburgermenu}>
          <div className={styles.background53} />
          <div className={styles.div} />
          <div className={styles.div1} />
          <div className={styles.div2} />
        </div>
      </div>

      {/* Company Name */}
      <div className={styles.weframetech}>weframetech</div>
    </div>
  );
};

export default Sidebar;
