// src/utils/scrollManager.js
import Scrollbar from 'smooth-scrollbar';

let scrollbarInstance = null;

export const setScrollbarInstance = (instance) => {
  scrollbarInstance = instance;
};

export const disableScroll = () => {
  scrollbarInstance?.updatePluginOptions('disableScroll', { disabled: true });
};

export const enableScroll = () => {
  scrollbarInstance?.updatePluginOptions('disableScroll', { disabled: false });
};
