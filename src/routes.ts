import Strings from '@i18n';

import Button from './pages/basic/button';
import Slider from './pages/data-entry/slider';
import Stepper from './pages/data-entry/stepper';
import SwitchButton from './pages/data-entry/switch-button';
import Dialog from './pages/feedback/dialog';
import ToastView from './pages/feedback/toast-view';

export const routes = [
  {
    name: Strings.getLang('button'),
    href: '/basic/button',
    component: Button,
  },
  {
    name: 'SwitchButton 开关',
    href: '/data-entry/switch-button',
    component: SwitchButton,
  },
  {
    name: 'Stepper 步进器',
    href: '/data-entry/stepper',
    component: Stepper,
  },
  {
    name: 'Slider 滑动选择器',
    href: '/data-entry/slider',
    component: Slider,
  },
  {
    name: 'ToastView 吐司',
    href: '/feedback/toast-view',
    component: ToastView,
  },
  {
    name: 'Dialog 对话框',
    href: '/feedback/dialog',
    component: Dialog,
  },
];
