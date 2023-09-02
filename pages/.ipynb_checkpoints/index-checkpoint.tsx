import React from 'react';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav';
import Background from '../components/Background';
import Content from '../components/Content';
import styles from './index.module.css';

const BoardPage = () => {
  return (
    <div className={styles.boardPage}>
      <div className={styles.background}>
        <Background />
        <Content/>
        <Nav />
        <Sidebar />
      </div>
    </div>
  );
};

export default BoardPage;
