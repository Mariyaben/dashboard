import type { NextPage } from "next";
import styles from "./index.module.css";
const BoardPage: NextPage = () => {
  return (
    <div className={styles.boardpage}>
      <div className={styles.background}>
        <div className={styles.background1} />
      </div>
      <div className={styles.content}>
        <div className={styles.completedproject}>
          <div className={styles.background2} />
          <div className={styles.card}>
            <div className={styles.background3} />
            <div className={styles.duedate}>
              <div className={styles.dueIn4}>Due in 4 days</div>
              <img className={styles.clock11} alt="" src="/clock-1-1.svg" />
            </div>
            <img className={styles.peopleIcon} alt="" src="/people.svg" />
            <div className={styles.progressbar}>
              <div className={styles.progressbar1}>
                <div className={styles.bar} />
                <div className={styles.bar1} />
              </div>
            </div>
            <div className={styles.visualGraphicFor}>
              Visual Graphic for Presentation to Client
            </div>
            <img className={styles.icvertIcon} alt="" src="/clock-1-1.svg" />
            <div className={styles.label}>
              <div className={styles.important}>Important</div>
              <div className={styles.dot} />
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.background3} />
            <div className={styles.duedate1}>
              <div className={styles.dueIn4}>Due in 4 days</div>
              <img className={styles.clock11} alt="" src="/clock-1-1.svg" />
            </div>
            <img className={styles.peopleIcon1} alt="" src="/people1.svg" />
            <div className={styles.progressbar}>
              <div className={styles.progressbar1}>
                <div className={styles.bar} />
                <div className={styles.bar3} />
              </div>
            </div>
            <div className={styles.createWireframeFor}>
              Create wireframe for landing page phase 1
            </div>
            <img className={styles.icvertIcon1} alt="" src="/clock-1-1.svg" />
            <div className={styles.label1}>
              <div className={styles.design}>Design</div>
              <div className={styles.dot1} />
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.background3} />
            <div className={styles.duedate1}>
              <div className={styles.dueIn4}>Due in 4 days</div>
              <img className={styles.clock11} alt="" src="/clock-1-1.svg" />
            </div>
            <img className={styles.peopleIcon2} alt="" src="/people2.svg" />
            <div className={styles.progressbar}>
              <div className={styles.progressbar1}>
                <div className={styles.bar} />
                <div className={styles.bar5} />
              </div>
            </div>
            <div className={styles.createWireframeFor}>
              Setup database for create API connection
            </div>
            <img className={styles.icvertIcon2} alt="" src="/clock-1-1.svg" />
            <div className={styles.label2}>
              <div className={styles.databse}>Databse</div>
              <div className={styles.dot2} />
            </div>
          </div>
          <div className={styles.title}>
            <div className={styles.backgroundheader} />
            <div className={styles.btnadd}>
              <div className={styles.background6} />
              <img className={styles.icon} alt="" src="/clock-1-1.svg" />
            </div>
            <div className={styles.text}>
              <b className={styles.completed2}>Completed (2)</b>
            </div>
          </div>
        </div>
        <div className={styles.revised}>
          <div className={styles.background7} />
          <div className={styles.card3}>
            <div className={styles.background8} />
            <div className={styles.background9} />
            <div className={styles.text1}>
              <div className={styles.moveCardHereWrapper}>
                <div className={styles.moveCardHere}>Move card here</div>
              </div>
            </div>
          </div>
          <div className={styles.title1}>
            <div className={styles.backgroundheader} />
            <div className={styles.btnadd}>
              <div className={styles.background6} />
              <img className={styles.icon} alt="" src="/.svg" />
            </div>
            <b className={styles.revised0}>Revised (0)</b>
          </div>
        </div>
        <div className={styles.done}>
          <div className={styles.background11} />
          <div className={styles.card4}>
            <div className={styles.background3} />
            <div className={styles.duedate1}>
              <div className={styles.dueIn4}>Due in 4 days</div>
              <img className={styles.clock11} alt="" src="/clock-1-11.svg" />
            </div>
            <img className={styles.peopleIcon3} alt="" src="/people3.svg" />
            <div className={styles.progressbar}>
              <div className={styles.progressbar1}>
                <div className={styles.bar} />
                <div className={styles.bar7} />
              </div>
            </div>
            <div className={styles.createWireframeFor}>
              Action Button needed for Google Maps visits.
            </div>
            <img className={styles.icvertIcon3} alt="" src="/icvert.svg" />
            <div className={styles.label3}>
              <div className={styles.bugsFixing}>BUGS FIXING</div>
              <div className={styles.dot3} />
            </div>
          </div>
          <div className={styles.card5}>
            <div className={styles.background13} />
            <div className={styles.duedate4}>
              <div className={styles.dueIn4}>Due in 4 days</div>
              <img className={styles.clock11} alt="" src="/clock-1-12.svg" />
            </div>
            <img className={styles.peopleIcon4} alt="" src="/people4.svg" />
            <div className={styles.progressbar8}>
              <div className={styles.progressbar1}>
                <div className={styles.bar} />
                <div className={styles.bar9} />
              </div>
            </div>
            <div className={styles.createWireframeFor}>
              Update new instructor photos.
            </div>
            <img className={styles.icvertIcon3} alt="" src="/icvert.svg" />
            <div className={styles.label4}>
              <div className={styles.database}>Database</div>
              <div className={styles.dot4} />
            </div>
          </div>
          <div className={styles.card6}>
            <div className={styles.background3} />
            <div className={styles.duedate1}>
              <div className={styles.dueIn4}>Due in 4 days</div>
              <img className={styles.clock11} alt="" src="/clock-1-12.svg" />
            </div>
            <img className={styles.peopleIcon3} alt="" src="/people3.svg" />
            <div className={styles.progressbar}>
              <div className={styles.progressbar1}>
                <div className={styles.bar} />
                <div className={styles.bar11} />
              </div>
            </div>
            <div className={styles.createWireframeFor}>
              Review/correct yellow belt techniques.
            </div>
            <img className={styles.icvertIcon3} alt="" src="/icvert.svg" />
            <div className={styles.label5}>
              <div className={styles.instructorMeeting}>Instructor Meeting</div>
              <div className={styles.dot5} />
            </div>
          </div>
          <div className={styles.title2}>
            <div className={styles.backgroundheader} />
            <div className={styles.btnadd}>
              <div className={styles.background6} />
              <img className={styles.icon} alt="" src="/1.svg" />
            </div>
            <b className={styles.revised0}>Done (3)</b>
          </div>
        </div>
        <div className={styles.onprogress}>
          <div className={styles.background16} />
          <div className={styles.card7}>
            <div className={styles.background3} />
            <div className={styles.duedate1}>
              <div className={styles.dueIn4}>Due in 4 days</div>
              <img className={styles.clock11} alt="" src="/clock-1-13.svg" />
            </div>
            <img className={styles.peopleIcon6} alt="" src="/people5.svg" />
            <div className={styles.progressbar}>
              <div className={styles.progressbar1}>
                <div className={styles.bar12} />
                <div className={styles.bar13} />
              </div>
            </div>
            <div className={styles.createWireframeFor}>
              Create sparring tutorial video for the weekly class.
            </div>
            <img className={styles.icvertIcon3} alt="" src="/icvert.svg" />
            <div className={styles.label6}>
              <div className={styles.video}>Video</div>
              <div className={styles.dot6} />
            </div>
          </div>
          <div className={styles.background18} />
          <div className={styles.card8}>
            <div className={styles.background19} />
            <div className={styles.duedate7}>
              <div className={styles.dueIn47}>Due in 4 days</div>
              <img className={styles.clock117} alt="" src="/clock-1-14.svg" />
            </div>
            <img className={styles.peopleIcon7} alt="" src="/people6.svg" />
            <div className={styles.progressbar14}>
              <div className={styles.progressbar15}>
                <div className={styles.bar14} />
                <div className={styles.bar15} />
              </div>
            </div>
            <div className={styles.paymentGatewayNeeds}>
              Payment gateway needs reauthorization.
            </div>
            <img className={styles.icvertIcon7} alt="" src="/icvert1.svg" />
            <div className={styles.label7}>
              <div className={styles.bugsFixing1}>BUGS FIXING</div>
              <div className={styles.dot7} />
            </div>
          </div>
          <div className={styles.title3}>
            <div className={styles.backgroundheader} />
            <div className={styles.btnadd3}>
              <div className={styles.background6} />
              <img className={styles.icon} alt="" src="/2.svg" />
            </div>
            <b className={styles.revised0}>In Progress (2)</b>
          </div>
        </div>
        <div className={styles.todolist}>
          <div className={styles.background21} />
          <div className={styles.todolist1}>
            <div className={styles.card9}>
              <div className={styles.background3} />
              <div className={styles.duedate1}>
                <div className={styles.dueIn4}>Due in 4 days</div>
                <img className={styles.clock11} alt="" src="/clock-1-15.svg" />
              </div>
              <img className={styles.peopleIcon3} alt="" src="/people3.svg" />
              <div className={styles.progressbar}>
                <div className={styles.progressbar1}>
                  <div className={styles.bar12} />
                  <div className={styles.bar17} />
                </div>
              </div>
              <div className={styles.createWireframeFor}>
                Create sign up sheet for holiday student/parent conferences.
              </div>
              <img className={styles.icvertIcon3} alt="" src="/icvert.svg" />
              <div className={styles.label8}>
                <div className={styles.important}>Important</div>
                <div className={styles.dot8} />
              </div>
            </div>
            <div className={styles.card10}>
              <div className={styles.background3} />
              <div className={styles.duedate1}>
                <div className={styles.dueIn4}>Due in 4 days</div>
                <img className={styles.clock11} alt="" src="/clock-1-12.svg" />
              </div>
              <img className={styles.peopleIcon6} alt="" src="/people5.svg" />
              <div className={styles.progressbar}>
                <div className={styles.progressbar1}>
                  <div className={styles.bar12} />
                  <div className={styles.bar3} />
                </div>
              </div>
              <div className={styles.createWireframeFor}>
                Plan holiday demonstration program. Create outline.
              </div>
              <img className={styles.icvertIcon3} alt="" src="/icvert.svg" />
              <div className={styles.label5}>
                <div className={styles.instructorMeeting}>
                  Instructor Meeting
                </div>
                <div className={styles.dot5} />
              </div>
            </div>
            <div className={styles.card11}>
              <div className={styles.background3} />
              <div className={styles.duedate1}>
                <div className={styles.dueIn4}>Due in 4 days</div>
                <img className={styles.clock11} alt="" src="/clock-1-12.svg" />
              </div>
              <img className={styles.peopleIcon10} alt="" src="/people7.svg" />
              <div className={styles.progressbar}>
                <div className={styles.progressbar1}>
                  <div className={styles.bar12} />
                  <div className={styles.bar5} />
                </div>
              </div>
              <div className={styles.createWireframeFor}>
                Determine how many boards need to be ordered for testing and
                demo.
              </div>
              <img className={styles.icvertIcon3} alt="" src="/icvert.svg" />
              <div className={styles.label2}>
                <div className={styles.databse}>Databse</div>
                <div className={styles.dot2} />
              </div>
            </div>
          </div>
          <div className={styles.title2}>
            <div className={styles.backgroundheader} />
            <div className={styles.btnadd4}>
              <div className={styles.background25} />
              <img className={styles.icon} alt="" src="/3.svg" />
            </div>
            <b className={styles.revised0}>To-Do List (24)</b>
          </div>
        </div>
        <div className={styles.title5}>
          <div className={styles.background26} />
          <div className={styles.client}>
            <div className={styles.text2}>
              <b className={styles.centeredMartialArts}>
                Centered Martial Arts
              </b>
              <div className={styles.sunnyvaleCa}>Sunnyvale, Ca</div>
            </div>
            <img
              className={styles.companylogoIcon}
              alt=""
              src="/companylogo.svg"
            />
          </div>
          <img className={styles.icvertIcon11} alt="" src="/icvert2.svg" />
          <b className={styles.schoolNovemberTasks}>School November Tasks</b>
          <img className={styles.btnbackIcon} alt="" src="/btnback.svg" />
          <div className={styles.createdByInstructor}>
            Created by Instructor Day on November 31, 2022
          </div>
          <div className={styles.people}>
            <div className={styles.user}>
              <div className={styles.placeholder} />
              <div className={styles.placeholder1} />
              <div className={styles.placeholder2} />
              <div className={styles.placeholder3} />
              <div className={styles.placeholder4} />
              <b className={styles.b}>5+</b>
            </div>
          </div>
          <div className={styles.btnedit}>
            <div className={styles.background27} />
            <b className={styles.edit}>Edit</b>
          </div>
          <div className={styles.btnedit1}>
            <div className={styles.background28} />
            <img className={styles.chat11} alt="" src="/chat-1-1.svg" />
            <div className={styles.comments}>45 Comments</div>
          </div>
          <div className={styles.btnprivacy}>
            <div className={styles.background29} />
            <b className={styles.private}>Private</b>
          </div>
          <div className={styles.btninvite}>
            <div className={styles.background30} />
            <img
              className={styles.addFriend1Icon}
              alt=""
              src="/addfriend-1.svg"
            />
            <b className={styles.invitePeople}>Invite People</b>
          </div>
          <div className={styles.progressbar22}>
            <div className={styles.bar22} />
            <div className={styles.bar23} />
            <div className={styles.totalProgress60}>Total Progress 60%</div>
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.background31} />
        <div className={styles.searchbox}>
          <div className={styles.background32} />
          <img className={styles.search2Icon} alt="" src="/search-2.svg" />
          <div className={styles.searchHere}>Search here</div>
        </div>
        <b className={styles.otherMenus}>OTHER MENUS</b>
        <div className={styles.backgroundParent}>
          <div className={styles.background32} />
          <b className={styles.english}>ENGLISH</b>
          <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
          <img
            className={styles.unitedStates1Icon}
            alt=""
            src="/unitedstates-1.svg"
          />
        </div>
        <div className={styles.profile}>
          <div className={styles.profile1}>
            <b className={styles.instructorDay}>Instructor Day</b>
            <img className={styles.arrowIcon1} alt="" src="/arrow.svg" />
            <div className={styles.superAdmin}>Super Admin</div>
          </div>
          <div className={styles.profilepicture}>
            <div className={styles.placeholder5} />
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.icons}>
          <div className={styles.folder}>
            <img className={styles.office1Icon} alt="" src="/office-1.svg" />
            <div className={styles.dotwarning}>
              <div className={styles.background34} />
              <b className={styles.b1}>!</b>
            </div>
          </div>
          <div className={styles.check}>
            <img className={styles.bell1Icon} alt="" src="/checkbox-1-1.svg" />
            <div className={styles.dotcounter}>
              <div className={styles.background35} />
              <b className={styles.b2}>2</b>
            </div>
          </div>
          <div className={styles.activities}>
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
          <div className={styles.notification}>
            <img className={styles.bell1Icon} alt="" src="/bell-1.svg" />
            <div className={styles.dotcounter}>
              <div className={styles.background35} />
              <b className={styles.b4}>12</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.footer}>
          <div className={styles.background38} />
        </div>
        <div className={styles.banner}>
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
        <div className={styles.menus}>
          <div className={styles.dashboard}>
            <div className={styles.background31} />
            <div className={styles.shop}>Dashboard</div>
            <img
              className={styles.dashboard1Icon}
              alt=""
              src="/dashboard-1.svg"
            />
          </div>
          <div className={styles.email}>
            <div className={styles.background31} />
            <img
              className={styles.icChevronIcon}
              alt=""
              src="/ic-chevron.svg"
            />
            <img className={styles.dashboard1Icon} alt="" src="/email-1.svg" />
            <div className={styles.shop}>Email</div>
            <div className={styles.count}>
              <div className={styles.background42} />
              <b className={styles.b5}>17</b>
            </div>
          </div>
          <div className={styles.chat}>
            <div className={styles.background31} />
            <img
              className={styles.dashboard1Icon}
              alt=""
              src="/comment-1.svg"
            />
            <div className={styles.shop}>Chat</div>
            <div className={styles.icChevron} />
          </div>
          <div className={styles.kanban}>
            <div className={styles.background31} />
            <img
              className={styles.icChevronIcon}
              alt=""
              src="/ic-chevron1.svg"
            />
            <img
              className={styles.thumbnail1Icon}
              alt=""
              src="/thumbnail-1.svg"
            />
            <b className={styles.kanban1}>Kanban</b>
          </div>
          <div className={styles.activeindicator} />
          <div className={styles.contact}>
            <div className={styles.background31} />
            <div className={styles.label11}>
              <div className={styles.background46} />
              <b className={styles.new}>NEW</b>
            </div>
            <div className={styles.icChevron} />
            <img
              className={styles.thumbnail1Icon}
              alt=""
              src="/contact-1.svg"
            />
            <div className={styles.contact1}>Contact</div>
          </div>
          <div className={styles.calendar}>
            <div className={styles.background31} />
            <div className={styles.icChevron} />
            <img
              className={styles.dashboard1Icon}
              alt=""
              src="/calendarsilhouette-1.svg"
            />
            <div className={styles.shop}>Calendar</div>
          </div>
          <div className={styles.invoices}>
            <div className={styles.background31} />
            <img
              className={styles.dashboard1Icon}
              alt=""
              src="/onlineshopping-1.svg"
            />
            <div className={styles.shop}>Shop</div>
          </div>
          <div className={styles.invoices1}>
            <div className={styles.background31} />
            <img
              className={styles.icChevronIcon}
              alt=""
              src="/ic-chevron1.svg"
            />
            <img
              className={styles.dashboard1Icon}
              alt=""
              src="/invoice-1.svg"
            />
            <div className={styles.shop}>Invoices</div>
          </div>
          <div className={styles.courses}>
            <div className={styles.background31} />
            <img
              className={styles.icChevronIcon}
              alt=""
              src="/ic-chevron1.svg"
            />
            <img
              className={styles.dashboard1Icon}
              alt=""
              src="/invoice-11.svg"
            />
            <div className={styles.shop}>Courses</div>
          </div>
          <div className={styles.settings}>
            <div className={styles.background31} />
            <div className={styles.icChevron} />
            <img
              className={styles.dashboard1Icon}
              alt=""
              src="/setting-1.svg"
            />
            <div className={styles.shop}>Settings</div>
          </div>
          <b className={styles.mainMenu}>MAIN MENU</b>
        </div>
        <div className={styles.header}>
          <div className={styles.background31} />
          <div className={styles.hamburgermenu}>
            <div className={styles.background53} />
            <div className={styles.div} />
            <div className={styles.div1} />
            <div className={styles.div2} />
          </div>
        </div>
        <div className={styles.weframetech}>weframetech</div>
      </div>
    </div>
  );
};

export default BoardPage;
