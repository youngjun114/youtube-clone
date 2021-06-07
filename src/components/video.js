import React from 'react';
import './videos.css';
import { youtubeVideo } from '../data/videoData';

function Video() {
  return (
    <article className='video-container'>
      <a href={youtubeVideo.url} className='thumbnail'>
        <img
          src={youtubeVideo.thumbnail}
          className='thumbnail-image'
          alt=''
          data-duration='2:38'
        />
      </a>
      <div className='video-desc'>
        <a href={youtubeVideo.channelUrl} className='channel-image'>
          <img
            src={youtubeVideo.channelImage}
            className='channel-image'
            alt=''
          />
        </a>
        <div className='video-details'>
          <a href={youtubeVideo.channelUrl} className='video-title'>
            {youtubeVideo.title}
          </a>
          <a href={youtubeVideo.channelUrl} className='channel-name'>
            {youtubeVideo.channelName}
          </a>
          <div className='video-metadata'>
            <span>656k views</span> • <span>6 months ago</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Video;
