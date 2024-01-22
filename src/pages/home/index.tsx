import {Text, View} from 'react-native';
import {StockList} from '../../components';

const Home = () => {
  return (
    <View style={{backgroundColor:"#ffff", flex:1}}>
      <StockList />
    </View>
  );
};

export default Home;
