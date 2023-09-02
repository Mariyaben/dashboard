import React from 'react';
import styles from '../pages/index.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      {/* Background */}
      <div className={styles.background31} />

      {/* Search Box */}
      <div className={styles.searchbox} style={{ cursor: 'pointer' }}>
        <div className={styles.background32} />
        <img className={styles.search2Icon} alt="" src="/search-2.svg" />
        <div className={styles.searchHere}>Search here</div>
      </div>

      {/* Other Menus */}
      <b className={styles.otherMenus} style={{ cursor: 'pointer' }}>OTHER MENUS</b>

      {/* Language Selector */}
      <div className={styles.backgroundParent} style={{ cursor: 'pointer' }}>
        <div className={styles.background32} />
        <b className={styles.english} style={{ cursor: 'pointer' }}>ENGLISH</b>
        <img
          className={styles.arrowIcon}
          alt=""
          src="/arrow.svg"
        />
        <img
          className={styles.unitedStates1Icon}
          alt=""
          src="/unitedstates-1.svg"
        />
      </div>

      {/* User Profile */}
      <div className={styles.profile} style={{ cursor: 'pointer' }}>
        <div className={styles.profile1}>
          <b className={styles.instructorDay} style={{ cursor: 'pointer' }}>Instructor Day</b>
          <img
            className={styles.arrowIcon1}
            alt=""
            src="/arrow.svg"
          />
          <div className={styles.superAdmin}>Super Admin</div>
        </div>
        <div className={styles.profilepicture}>
          <div className={styles.placeholder5} />
        </div>
      </div>

      {/* Separator */}
      <div className={styles.separator} />

      {/* Icons */}
      <div className={styles.icons}>
        {/* Folder */}
        <div className={styles.folder}>
          <img
            className={styles.office1Icon}
            alt=""
            src="/office-1.svg"
          />
          <div className={styles.dotwarning}>
            <div className={styles.background34} />
            <b className={styles.b1}>!</b>
          </div>
        </div>

        {/* Check */}
        <div className={styles.check} style={{ cursor: 'pointer' }}>
          <img
            className={styles.bell1Icon}
            alt=""
            src="/checkbox-1-1.svg"
          />
          <div className={styles.dotcounter}>
            <div className={styles.background35} />
            <b className={styles.b2}>2</b>
          </div>
        </div>

        {/* Activities */}
        <div className={styles.activities} style={{ cursor: 'pointer' }}>
          <img
            className={styles.videoLesson22}
            alt=""
            src="/video-lesson-2-2.svg"
          />
          <div className={styles.dotcounter1}>
            <div className={styles.background35} />
            <b className={styles.b3}>5</b>
          </div>
        </div>

        {/* Notification */}
        <div className={styles.notification} style={{ cursor: 'pointer' }}>
          <img
            className={styles.bell1Icon}
            alt=""
            src="/bell-1.svg"
          />
          <div className={styles.dotcounter}>
            <div className={styles.background35} />
            <b className={styles.b4}>12</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
