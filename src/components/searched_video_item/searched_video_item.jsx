import React from 'react';
import styles from './searched_video_item.module.css';
import { Link } from 'react-router-dom';

function SearchedVideoItem({ video }) {
  return (
    <article className={styles.video_container}>
      <Link to='/'>
        <img
          src={video.thumbnail}
          className={styles.thumbnail_image}
          alt='thumbnail'
        />
      </Link>
      <div className={styles.video_detail}>
        <Link to='/' className={styles.title}>
          {video.title}
        </Link>
        <span>{video.footer}</span>
        <div>
          <Link to='/' className={styles.channel_info}>
            <img
              className={styles.channel_image}
              src={video.channelImage}
              alt='Channel'
            />
            <span>{video.channelName}</span>
          </Link>
        </div>
        <p class={styles.desc}>{video.description}</p>
      </div>
    </article>
  );
}

export default SearchedVideoItem;
