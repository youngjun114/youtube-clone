/* eslint-disable */

import React from 'react';
import styles from './video_item.module.css';
import { youtubeVideo } from '../../data/videoData';
import { Link } from 'react-router-dom';

function VideoItem({ video: { snippet } }) {
  return (
    <article className={styles.video_container}>
      <Link to='/'>
        <img
          src={snippet.thumbnails.medium.url}
          className={styles.thumbnail}
          alt='thumbnail'
        />
      </Link>
      <div className={styles.video_desc}>
        <Link to='/'>
          <img
            src={youtubeVideo.channelImage}
            className={styles.channel_image}
            alt='channel'
          />
        </Link>
        <div className={styles.video_details}>
          <a href='#' className={styles.video_title}>
            {snippet.title}
          </a>
          <a href='#' className={styles.channel_name}>
            {snippet.channelTitle}
          </a>
          <div className={styles.video_metadata}>
            <span>656k views</span> • <span>6 months ago</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default VideoItem;
