import React, { useState } from 'react';
import styles from '../styles/Blog.css';
import Article from './Article.jsx';
import classnames from 'classnames'

function Blog () {

  const [active, setActive] = useState("");

  const articles = [
    {
      title: "What are the benefits of Sequelize and JSONB",
      content: ""
    },
    {
      title: "How to optimize query execution time",
      content: ""
    },
    {
      title: "How to improve request per second with load balancer",
      content: ""
    },
    {
      title: "How to interpret New Relic metrics",
      content: ""
    },
    {
      title: "How to work with large amount of data using Streams and Drain Event",
      content: ""
    },
    {
      title: "How to refresh a page after updates: useEffect v.s. useContext",
      content: ""
    },
    {
      title: "What are some ideas for app scalability and maintainability",
      content: ""
    },
    {
      title: "Async/await, try/catch, and console.error v.s. throw e",
      content: ""
    }
  ]

  return(
    <div className={styles.blog}>
      <div className={ classnames(styles.articleContainer, active !=="" && styles.activeMode) }>
        <div className={styles.blogHeaderContainer}>
          <div className={styles.headerButton}>
            温故而知新
          </div>
          <div className={styles.blogHeader}>
            <div>Below are some summaries I made from work.</div>
            <div>Let's see further by standing on the shoulders of giants.</div>
          </div>
        </div>
        {articles.map((article) =>
          <Article title={article.title} active={active} setActive={setActive} />
        )}
      </div>
    </div>
  )
}

export default Blog