import React, { useState } from 'react';
import styles from '../styles/Blog.css';
import Article from './Article.jsx'

function Blog () {
  const [active, setActive] = useState("");

  return(
    <div className={styles.blog}>
      <div className={styles.topic}>Topics</div>
      <div className={styles.articleContainer}>
        <div></div>
        <Article title="How to work with large amount of data using Streams and Drain Event" active={active} setActive={setActive} />
        <Article title="How to optimize query execution time" active={active} setActive={setActive} />
        <Article title="How to improve request per second with load balancer" active={active} setActive={setActive} />
        <Article title="CSS modules, styled components and style sheet" active={active} setActive={setActive} />
      </div>
    </div>
  )
}

export default Blog