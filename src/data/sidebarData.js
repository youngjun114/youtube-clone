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
import FashionIcon from '@material-ui/icons/Watch';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import VirtualRealityIcon from '@material-ui/icons/ThreeSixty';

const iconSize = {
  backgroundColor: 'transparent',
  fontSize: '24px',
};

export const compactSidebar = [
  {
    title: 'Home',
    icon: <HomeIcon style={iconSize} />,
    path: '/',
  },
  {
    title: 'Explore',
    icon: <ExploreIcon style={iconSize} />,
    path: '/explore',
  },
  {
    title: 'Subscriptions',
    icon: <SubscriptionsIcon style={iconSize} />,
    path: '/subscriptions',
  },
  {
    title: 'Originals',
    icon: <YouTubeIcon style={iconSize} />,
    path: '/originals',
  },
  {
    title: 'Music',
    icon: <MusicIcon style={iconSize} />,
    path: '/music',
  },
  {
    title: 'Library',
    icon: <VideoLibraryIcon style={iconSize} />,
    path: '/library',
  },
];

export const sidebarHome = [
  {
    title: 'Home',
    icon: <HomeIcon style={iconSize} />,
    path: '/',
  },
  {
    title: 'Explore',
    icon: <ExploreIcon style={iconSize} />,
    path: '/explore',
  },
  {
    title: 'Subscriptions',
    icon: <SubscriptionsIcon style={iconSize} />,
    path: '/subscriptions',
  },
];

export const sidebarLibrary = [
  {
    title: 'Library',
    icon: <VideoLibraryIcon style={iconSize} />,
    path: '/library',
  },
  {
    title: 'History',
    icon: <HistoryIcon style={iconSize} />,
    path: '/history',
  },
];

export const bestOfYoutube = [
  {
    title: 'Music',
    icon: <MusicIcon style={iconSize} />,
    path: '/music',
  },
  {
    title: 'Sports',
    icon: <SportsIcon style={iconSize} />,
    path: '/sports',
  },
  {
    title: 'Gaming',
    icon: <GamingIcon style={iconSize} />,
    path: '/gaming',
  },
  {
    title: 'Movies & Shows',
    icon: <MovieIcon style={iconSize} />,
    path: '/movies&shows',
  },
  {
    title: 'News',
    icon: <NewsIcon style={iconSize} />,
    path: '/news',
  },
  {
    title: 'Live',
    icon: <LiveIcon style={iconSize} />,
    path: '/live',
  },
  {
    title: 'Fashion & Beauty',
    icon: <FashionIcon style={iconSize} />,
    path: '/fashion&beauty',
  },
  {
    title: 'Learning',
    icon: <LearningIcon style={iconSize} />,
    path: '/learning',
  },
  {
    title: 'Spotlight',
    icon: <YouTubeIcon style={iconSize} />,
    path: '/spotlight',
  },
  {
    title: '360° Video',
    icon: <VirtualRealityIcon style={iconSize} />,
    path: '/virtualreality',
  },
];

export const moreFromYoutube = [
  {
    title: 'Youtube Premium',
    icon: <YouTubeIcon style={iconSize} />,
    path: '/premium',
  },
  {
    title: 'Live',
    icon: <LiveIcon style={iconSize} />,
    path: '/live',
  },
];

export const sidebarSettings = [
  {
    title: 'Settings',
    icon: <SettingsIcon style={iconSize} />,
    path: '/settings',
  },
  {
    title: 'Report history',
    icon: <FlagIcon style={iconSize} />,
    path: '/report',
  },
  {
    title: 'Help',
    icon: <HelpIcon style={iconSize} />,
    path: '/help',
  },
  {
    title: 'Send feedback',
    icon: <FeedbackIcon style={iconSize} />,
    path: '/feedback',
  },
];
