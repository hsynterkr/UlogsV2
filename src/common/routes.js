import Wrapper from '../client/Wrapper';

import Bookmarks from '../client/bookmarks/Bookmarks';
import Drafts from '../client/post/Write/Drafts';
import Replies from '../client/replies/Replies';
import Activity from '../client/activity/Activity';
import Wallet from '../client/wallet/Wallet';
import Editor from '../client/post/Write/Write';
import Settings from '../client/settings/Settings';
import ProfileSettings from '../client/settings/ProfileSettings';
import Invite from '../client/invite/Invite';
import User from '../client/user/User';
import UserProfile from '../client/user/UserProfile';
import UserUlogs from '../client/user/UserUlogs';
import UserComments from '../client/user/UserComments';
import UserFollowers from '../client/user/UserFollowers';
import UserFollowing from '../client/user/UserFollowing';
import UserReblogs from '../client/user/UserReblogs';
import UserWallet from '../client/user/UserWallet';
import UserActivity from '../client/activity/UserActivity';
import Post from '../client/post/Post';
import Page from '../client/feed/Page';
import Discover from '../client/discover/Discover';
import Search from '../client/search/Search';
import Ulogging from '../client/ulogging/Ulogging';
import Grow from '../client/grow/Grow';
import Notifications from '../client/notifications/Notifications';
import Error404 from '../client/statics/Error404';
import ExitPage from '../client/statics/ExitPage';
import Witnesses from '../client/witnesses/Witnesses';
import UlogTags from '../client/tags/UlogTags';

const routes = [
  {
    component: Wrapper,
    routes: [
      {
        path: '/bookmarks',
        exact: true,
        component: Bookmarks,
      },
      {
        path: '/ulog-subtags',
        exact: true,
        component: UlogTags,
      },
      {
        path: '/drafts',
        exact: true,
        component: Drafts,
      },
      {
        path: '/replies',
        exact: true,
        component: Replies,
      },
      {
        path: '/activity',
        exact: true,
        component: Activity,
      },
      {
        path: '/wallet',
        exact: true,
        component: Wallet,
      },
      {
        path:
          '/(editor|main-editor|teardrops|untalented|fanlove|ulog-ned|ulog-surpassinggoogle|ulog-diy|ulog-howto|ulog-quotes)',
        exact: true,
        component: Editor,
        exact: true,
      },
      {
        path: '/settings',
        exact: true,
        component: Settings,
      },
      {
        path: '/edit-profile',
        exact: true,
        component: ProfileSettings,
      },
      {
        path: '/invite',
        exact: true,
        component: Invite,
      },
      {
        path: '/notifications',
        exact: true,
        component: Notifications,
      },
      {
        path: '/@:name/(ulogs|comments|followers|followed|reblogs|feed|transfers|activity)?',
        component: User,
        exact: true,
        routes: [
          {
            path: '/@:name',
            exact: true,
            component: UserProfile,
          },
          {
            path: '/@:name/ulogs',
            exact: true,
            component: UserUlogs,
          },
          {
            path: '/@:name/comments',
            exact: true,
            component: UserComments,
          },
          {
            path: '/@:name/followers',
            exact: true,
            component: UserFollowers,
          },
          {
            path: '/@:name/followed',
            exact: true,
            component: UserFollowing,
          },
          {
            path: '/@:name/reblogs',
            exact: true,
            component: UserReblogs,
          },
          {
            path: '/@:name/transfers',
            exact: true,
            component: UserWallet,
          },
          {
            path: '/@:name/activity',
            exact: true,
            component: UserActivity,
          },
        ],
      },
      {
        path: '/discover',
        exact: true,
        component: Discover,
      },
      {
        path: '/vote-ulog-witnesses',
        exact: true,
        component: Witnesses,
      },
      {
        path: '/:category?/@:author/:permlink',
        component: Post,
      },

      {
        path: '/search',
        component: Search,
      },
      {
        path: '/(ulogging|ulog-knowledge-bank|ulog-fanlove|surpassinggoogle)',
        component: Ulogging,
      },
      {
        path: '/grow',
        component: Grow,
      },
      {
        path: '/exit',
        component: ExitPage,
      },
      {
        path: '/:sortBy(trending|created|hot|promoted)?/:category?',
        component: Page,
      },
      {
        path: '*',
        component: Error404,
      },
    ],
  },
];

export default routes;
