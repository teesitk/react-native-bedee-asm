import React from "react";
import { Avatar, ListItem, makeStyles } from "react-native-elements";
import { ThemedText } from "./ThemedText";

type AnswersProps = {
  data: string | string[]
}
const Answer = ({data=[]}: AnswersProps) => {
  return (
  <>
  { data.toString()?.split(',').map((item: any, i: number)=>{
      return (
          <ListItem
              key={i}
              bottomDivider
          >
              <ListItem.Content>
                      <ListItem.Title><ThemedText>{item}</ThemedText></ListItem.Title>
              </ListItem.Content>
          </ListItem>
      )
  })}
  </>
  )
};



export default Answer;