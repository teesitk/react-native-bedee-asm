import React from "react";
import { Link } from "expo-router";
import { Avatar, ListItem, makeStyles, Text } from "react-native-elements";
import { ThemedText } from "./ThemedText";

export type QuestionsProps = {
  data: {
    title: string
    avatar: string
    answer: object[]
  }[]
}
const Questions = ({data=[]}: QuestionsProps) => {
    const styles = useStyles();
    return (
  <>
    { data.map((item: any, i: number)=>{
        return (
            <ListItem
                key={i}
                testID={"listitem"}
                bottomDivider
            >
                {/* <Avatar rounded title="BD" size={"small"} activeOpacity={0.7} /> */}
                <Avatar
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                activeOpacity={0.7}
                containerStyle={{backgroundColor: 'grey'}}
                />
                <ListItem.Content>
                    <Link push href={{ pathname: '../detail', params: { item: item.answer, subject: item.title } }}>
                        {/* <ListItem.Title>{item.title}</ListItem.Title> */}
                        <ThemedText>{item.title}</ThemedText>
                    </Link>   
                    {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                </ListItem.Content>
                <Link push href={{ pathname: '../detail', params: { item: item.answer, subject: item.title } }}><ListItem.Chevron /></Link>
            </ListItem>
        )
    })}
  </>
)};

const useStyles = makeStyles(() => ({
    titleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
}))

export default Questions;