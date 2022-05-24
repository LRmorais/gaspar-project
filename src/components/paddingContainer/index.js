import React from 'react';
import { View } from 'react-native';

import createStyle from '../../utils/style';

export const PaddingContainer = props => (
  <View
    {...props}
    style={[
      {
        left: styles.containerOnlyLeft,
        right: styles.containerOnlyRight,
        [undefined]: styles.containerBothSides,
      }[props.only],
      props.alignContentRight && styles.alignRight,
      props.style,
    ]}
  />
);

PaddingContainer.defaultProps = {
  alignContentRight: false,
};

const paddingFactor = 3;
const styles = createStyle(theme => ({
  containerOnlyLeft: {
    paddingLeft: theme.spacing(paddingFactor),
  },
  containerOnlyRight: {
    paddingRight: theme.spacing(paddingFactor),
  },
  containerBothSides: {
    width: '100%',
    height: '100%',
    paddingHorizontal: theme.spacing(paddingFactor),
    backgroundColor: theme.colors.background.main,
  },
  alignRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));
