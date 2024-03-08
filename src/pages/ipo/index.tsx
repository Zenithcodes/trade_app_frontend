import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import NewsContainer from '../../components/common/NewsContainer';
const Ipo = () => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "#fff", flex: 1, padding: 10 }}>
                <NewsContainer />
            </View>
        </ScrollView>
    )
}
export default Ipo