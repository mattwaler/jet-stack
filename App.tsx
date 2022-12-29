import * as React from "react";
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, Box } from "native-base";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { NativeRouter, Route, Routes } from "react-router-native";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto"  />
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
        </Routes>
        <NavBar />
      </NativeRouter>
    </NativeBaseProvider>
  );
}
