import {NavigationContainer, useNavigation} from '@react-navigation/native';
//import {cgit remote add origin https://github.com/Bootinfomap/frontend.gitreateStackNavigator} from '@react-navigation/stack';
//import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import React, {Fragment, Component, useState}from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const addPost = ({text,time}) => {
        setPosts([
          {id: Math.random().toString(), textValue: text},
          ...posts,
        ]);
      };
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>F E E D</Text>
            <View style={styles.card}>
                <PostInsert onAddPost={addPost}/>
                <PostList posts={posts}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'blue'
    },
    appTitle: {
        alignItems:'center',
        fontWeight:'bold',
        fontSize:30,
        color:'white',
        textAlign:'center',
        marginTop:30,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'100%',
      },
    inputButton: {
        flex:1,
        width:20,
        height:20,
        borderRadius: 20,
        marginLeft:10,
        marginTop:10,
      },
    writeButton: {
        borderRadius: 20,
        width:40,
        height:40,
        marginRight: 10,
      },
    card: {
        backgroundColor:'white',
        marginTop:10,
        flex:1,
        borderTopLeftRadius: 5, // to provide rounded corners
        borderTopRightRadius: 5, // to provide rounded corners
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
      },
    listContainer: {
          alignItems: 'center',
      },
    inputTitle: {
         flex: 1,
         padding: 20,
         borderBottomColor: '#bbb',
         borderBottomWidth: 1,
         fontSize: 24,
         marginLeft: 20,
     },
    inputContent: {
              flex: 1,
              padding: 20,
              borderBottomColor: '#bbb',
              borderBottomWidth: 1,
              fontSize: 24,
              marginLeft: 20,
              justifyContent:'flex-start',
              alignItems:'flex-start'
     },
    titleContainer: {
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
     },

  PostListContainer: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  PostListText: {
    flex: 5,
    fontSize: 18,
    marginVertical: 20,
    width: 100,
    color: 'black',
  },
  PostListbox: {
    width: 30,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  PostListTime:{
   color:'gray',
  },
});

const PostInsert = ({onAddPost}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.inputContainer}>
      <Button
        style={styles.inputButton}
        title='✎'
        onPress={()=>navigation.navigate('Write',{onAddPost:onAddPost})}
      />
    </View>
  );
};

const PostList = ({posts}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {posts.map(post => (
      <PostListItem
        key={post.id}
        {...post}
      />
      ))}
    </ScrollView>
  );
};

const PostListItem = ({textValue, id}) => {
  return (
    <View style={styles.PostListContainer}>
        <View style={styles.PostListbox} />
        <Text style={styles.PostListText}>{textValue}</Text>
    </View>
  );
};
//        <TouchableOpacity>

//---------------------------------------------------------------

const Write = ({navigation,route}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newContent,setNewContent]=useState('');
    const buttonControl = () => {
        route.params.onAddPost(newTitle);
        setNewTitle('');
        setNewContent('');
        navigation.navigate('Home');
    };

    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.card}>
            <View style={styles.titleContainer}>
                <WriteTitle newTitle={newTitle} setNewTitle={setNewTitle}/>
                <View style={styles.writeButton}>
                        <Button title={'+'} onPress={buttonControl} />
                </View>
            </View>
            <WriteContent newContent={newContent} setNewContent={setNewContent}/>
        </View>
    </SafeAreaView>
    )
};

const WriteTitle =({newTitle,setNewTitle}) => {
    return(
         <TextInput
              style={styles.inputTitle}
              placeholder="Title"
              placeholderTextColor={'#999'}
              autoCorrect={false}
              onChangeText={(newTitle)=>setNewTitle(newTitle)}
              value={newTitle}
         />

    )
};

const WriteContent =({newContent,setNewContent}) => {
    return(

        <TextInput
            style={styles.inputContent}
            placeholder="Content"
            placeholderTextColor={'#999'}
            autoCorrect={false}
            onChangeText={(newContent)=>setNewContent(newContent)}
            value={newContent}
         />

    )
};

export {Home,Write};
