/** @jsx jsx */
import React from 'react';
import { Global as EmotionGlobal } from '@emotion/core';
import { jsx } from 'theme-ui';
import { normalize } from 'polished';

const Global = ({ styles }) => (
  <EmotionGlobal
    styles={(theme) => ({
      ...normalize(),
      body: {
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      '*:focus': {
        outline: `2px dashed ${theme.colors.gray[5]}`,
      },
      ...styles,
    })}
  />
);

Global.defaultProps = {
  styles: {},
};

export default Global;
