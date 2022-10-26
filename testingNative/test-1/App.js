import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, ScrollView, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Cards from './components/card';
import AddButton from './components/button';
import IOTD from './components/IOTD';
import Hello from './components/hello';
import ExpireCard from './components/expireCard';
import TestCard from './components/testCard';



export default function App() {
  return (
    <ScrollView>
      <Hello />
      <IOTD />
      <TestCard />
      <TestCard />
      <AddButton />
    </ScrollView>
  );
};

