import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import colors from '../helper/colors';

class Processing extends Component {
  render() {
    const { isProcessing, size = 'large' } = this.props;
    if (!isProcessing) return null;
    return (
      <View style={styles.container}>
        <ActivityIndicator size={size} animating />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 101,
  },
});

const mapStateToProps = state => ({
  isProcessing: state.system.count > 0,
});

export default (connect(mapStateToProps, null)(Processing));
