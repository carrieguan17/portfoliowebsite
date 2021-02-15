import React from 'react';
import styles from '../styles/Article.css';
import classnames from 'classnames'

function BtnIcon (props) {
  if (props.active !== props.title) {
    return(
        <div onClick={() => props.setActive(props.title)}>
          <svg className={styles.icon} viewBox="-8 -10 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        </div>
    )
  } else {
    return (
      <div onClick={() => props.setActive("")}>
        <svg className={styles.icon} viewBox="-10 -11 45 45" xmlns="http://www.w3.org/2000/svg"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
      </div>
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
          <div>
            <BtnIcon title={props.title} active={props.active} setActive={props.setActive}/>
          </div>
        </div>
        <div className={ classnames(styles.articleContent, props.active === props.title && styles.articleShow) }>
          <div className={styles.content}>
            <p>
              Coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article