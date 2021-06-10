/* eslint-disable */

import React from 'react';
import styles from './video_list.module.css';
import VideoItem from '../video_item/video_item';

function VideoList({ videos }) {
  return (
    <div className={styles.content_container}>
      <section className={styles.video_section}>
        {videos.map((video) => {
          return <VideoItem key={video.id} video={video} />;
        })}
      </section>
    </div>
  );
}

export default VideoList;
