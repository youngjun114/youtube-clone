import React from 'react';
import styles from './search_list.module.css';
import SearchedVideoItem from '../searched_video_item/searched_video_item';
import { youtubeVideo as video } from '../../data/videoData';
function SearchList() {
  return (
    <div className={styles.content_container}>
      <section className={styles.list_container}>
        <SearchedVideoItem video={video} />
        <SearchedVideoItem video={video} />
        <SearchedVideoItem video={video} />
        <SearchedVideoItem video={video} />
        <SearchedVideoItem video={video} />
      </section>
    </div>
  );
}

export default SearchList;
