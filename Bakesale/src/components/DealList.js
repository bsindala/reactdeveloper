import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

class DealList extends React.Component {
  render() {
    return (
      <View style={styles.list}>
        <Text>Deals...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
  },
});

export default DealList;
