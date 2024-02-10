import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
import { Card, Button } from 'react-native-paper';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

import { sampleData } from './sample';
import getMemes from './getMeme';
const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [memes, setMemes] = useState(sampleData);
  const [loadingState, setLoadingState] = useState("Loading...")
  // console.log(sampleData)

  useEffect(() => {
    (async function () {
      const response = await getMemes();
      setMemes(response);
      setLoadingState('Load more...');
    })();
  }, []);
  const loadMore = async ()=>{
      setLoadingState('Loading...');

     const response = await getMemes();
      setMemes(prev => {
        const newArray = [...prev, ...response];
        console.table(newArray);
        return newArray
      });
      setLoadingState('Load more...');

  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.title}>Programemes</Text>
        <ScrollView>
          {!!memes &&
            memes.map((meme) => {
              return (
                <Card style={styles.card} key={meme.id}>
                  <Image
                    source={{
                      uri: `${meme.image}`,
                    }}
                    style={styles.memeImage}
                    resizeMode="contain"
                  />
                </Card>
              );
            })}
        </ScrollView>
        <Button onPress={loadMore}>Load More...</Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: '#ecf0f1',
  //   padding: 8,
  // },
  memeImage: {
    width: windowWidth - 20,
    height: 500,
  },
  card: {
    borderColor: '#e7c7d7',
    borderWidth: 1.25,
    marginVertical: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
