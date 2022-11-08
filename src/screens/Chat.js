import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import socket from "../helpers/socketio";
export default function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  socket.on("newMessages", (data) => {
    
  })
  const onSend = useCallback((messages = []) => {
    socket.emit("newMessage", messages)
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{ author: "User-1" }}
        />
      </View>
    </>
  );
}
