import React from 'react';
import styles from '../styles/Article.css';
import classnames from 'classnames'

function BtnIcon (props) {
  if (props.active !== props.title) {
    return(
        <div>
          <svg className={styles.icon} viewBox="-8 -10 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

function Article (props) {

  // let classNames = classnames(styles.articleContent, { [styles.articleShow]: props.active === props.title });

  return(
    <div className={styles.articleAccordion}>
      <div className={styles.articleContainer}>
        <div className={styles.headingContainer}>
          <div className={styles.title}>{props.title}</div>
          <div onClick={() => props.setActive(props.title)}>
            <BtnIcon title={props.title} active={props.active}/>
          </div>
        </div>
        <div className={ classnames(styles.articleContent, props.active === props.title && styles.articleShow) }>
          <div className={styles.content}>
            <p>
              This is the first test for accordion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article