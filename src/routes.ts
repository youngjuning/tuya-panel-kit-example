import Strings from '@i18n';

// basic
import BrickButton from './pages/basic/brick-button';
import Button from './pages/basic/button';
import Iconfont from './pages/basic/icon-font';
import Motion from './pages/basic/motion';
import TYText from './pages/basic/tytext';
import UnitText from './pages/basic/unit-text';
// data-entry
import Checkbox from './pages/data-entry/checkbox';
import DatePicker from './pages/data-entry/date-picker';
import PickerView from './pages/data-entry/picker-view';
import Slider from './pages/data-entry/slider';
import Stepper from './pages/data-entry/stepper';
import SwitchButton from './pages/data-entry/switch-button';
import TimerPicker from './pages/data-entry/timer-picker';
// feedback
import Dialog from './pages/feedback/dialog';
import GlobalToast from './pages/feedback/global-toast';
import Modal from './pages/feedback/modal';
import Notification from './pages/feedback/notification';
import NotificationLegacy from './pages/feedback/notification-legacy';
import Popup from './pages/feedback/popup';
import Swipeout from './pages/feedback/swipeout';
import Tips from './pages/feedback/tips';
import ToastView from './pages/feedback/toast-view';
// navigation
import ControllerBar from './pages/navigation/controller-bar';
import Tab from './pages/navigation/tab';
import TabBar from './pages/navigation/tab-bar';
import Tabs from './pages/navigation/tabs';

export const routes = [
  // basic
  {
    name: Strings.getLang('brick_button'),
    href: '/basic/brick-button',
    component: BrickButton,
  },
  {
    name: Strings.getLang('button'),
    href: '/basic/button',
    component: Button,
  },
  {
    name: Strings.getLang('iconfont'),
    href: '/basic/icon-font',
    component: Iconfont,
  },
  {
    name: Strings.getLang('motion'),
    href: '/basic/motion',
    component: Motion,
  },
  {
    name: Strings.getLang('tytext'),
    href: '/basic/tytext',
    component: TYText,
  },
  {
    name: Strings.getLang('unittext'),
    href: '/basic/unit-text',
    component: UnitText,
  },
  // data-entry
  {
    name: Strings.getLang('checkbox'),
    href: '/data-entry/checkbox',
    component: Checkbox,
  },
  {
    name: Strings.getLang('datepicker'),
    href: '/data-entry/date-picker',
    component: DatePicker,
  },
  {
    name: Strings.getLang('pickerview'),
    href: '/data-entry/picker-view',
    component: PickerView,
  },
  {
    name: Strings.getLang('slider'),
    href: '/data-entry/slider',
    component: Slider,
  },
  {
    name: Strings.getLang('stepper'),
    href: '/data-entry/stepper',
    component: Stepper,
  },
  {
    name: Strings.getLang('switchbutton'),
    href: '/data-entry/switch-button',
    component: SwitchButton,
  },
  {
    name: Strings.getLang('timepicker'),
    href: '/data-entry/timer-picker',
    component: TimerPicker,
  },
  // feedback
  {
    name: Strings.getLang('dialog'),
    href: '/feedback/dialog',
    component: Dialog,
  },
  {
    name: Strings.getLang('globaltoast'),
    href: '/feedback/global-toast',
    component: GlobalToast,
  },
  {
    name: Strings.getLang('modal'),
    href: '/feedback/modal',
    component: Modal,
  },
  {
    name: Strings.getLang('notification'),
    href: '/feedback/notification',
    component: Notification,
  },
  {
    name: Strings.getLang('notificationlegacy'),
    href: '/feedback/notification-legacy',
    component: NotificationLegacy,
  },
  {
    name: Strings.getLang('popup'),
    href: '/feedback/popup',
    component: Popup,
  },
  {
    name: Strings.getLang('swipeout'),
    href: '/feedback/swipeout',
    component: Swipeout,
  },
  {
    name: Strings.getLang('tips'),
    href: '/feedback/tips',
    component: Tips,
  },
  {
    name: Strings.getLang('toastview'),
    href: '/feedback/toast-view',
    component: ToastView,
  },
  // navigation
  {
    name: Strings.getLang('controllerbar'),
    href: '/navigation/controller-bar',
    component: ControllerBar,
  },
  {
    name: Strings.getLang('tab'),
    href: '/navigation/tab',
    component: Tab,
  },
  {
    name: Strings.getLang('tabbar'),
    href: '/navigation/tab-bar',
    component: TabBar,
  },
  {
    name: Strings.getLang('tabs'),
    href: '/navigation/tabs',
    component: Tabs,
  },
];
