import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  background-color: pink;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Testando</Text>
      <TextNew>TITULO TESTE</TextNew>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

export default App;
