import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import MusicIcon from '@material-ui/icons/MusicNote';
import SportsIcon from '@material-ui/icons/EmojiEvents';
import GamingIcon from '@material-ui/icons/SportsEsports';
import MovieIcon from '@material-ui/icons/Theaters';
import NewsIcon from '@material-ui/icons/EventNote';
import LiveIcon from '@material-ui/icons/LiveTv';
import LearningIcon from '@material-ui/icons/EmojiObjects';
import { GiHanger as FashionIcon } from 'react-icons/gi';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import VirtualRealityIcon from '@material-ui/icons/ThreeDRotation';

export const sidebarHome = [
  {
    title: 'Home',
    icon: <HomeIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/',
  },
  {
    title: 'Explore',
    icon: <ExploreIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/explore',
  },
  {
    title: 'Subscriptions',
    icon: <SubscriptionsIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/subscriptions',
  },
];

export const sidebarLibrary = [
  {
    title: 'Library',
    icon: <VideoLibraryIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/library',
  },
  {
    title: 'History',
    icon: <HistoryIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/history',
  },
];

export const bestOfYoutube = [
  {
    title: 'Music',
    icon: <MusicIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/music',
  },
  {
    title: 'Sports',
    icon: <SportsIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/sports',
  },
  {
    title: 'Gaming',
    icon: <GamingIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/gaming',
  },
  {
    title: 'Movies & Shows',
    icon: <MovieIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/movies&shows',
  },
  {
    title: 'News',
    icon: <NewsIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/news',
  },
  {
    title: 'Live',
    icon: <LiveIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/live',
  },
  {
    title: 'Fashion & Beauty',
    icon: <FashionIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/fashion&beauty',
  },
  {
    title: 'Learning',
    icon: <LearningIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/learning',
  },
  {
    title: 'Spotlight',
    icon: <YouTubeIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/spotlight',
  },
  {
    title: '360° Video',
    icon: <VirtualRealityIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/virtualreality',
  },
];

export const moreFromYoutube = [
  {
    title: 'Youtube Premium',
    icon: <YouTubeIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/premium',
  },
  {
    title: 'Live',
    icon: <LiveIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/live',
  },
];

export const sidebarSettings = [
  {
    title: 'Settings',
    icon: <SettingsIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/settings',
  },
  {
    title: 'Report history',
    icon: <FlagIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/report',
  },
  {
    title: 'Help',
    icon: <HelpIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/help',
  },
  {
    title: 'Send feedback',
    icon: <FeedbackIcon style={{ backgroundColor: 'transparent' }} />,
    path: '/feedback',
  },
];
