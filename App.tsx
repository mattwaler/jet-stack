import * as React from "react";
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from "native-base";
import { NativeRouter, Route, Routes } from "react-router-native";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import Detail from "./screens/Detail";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto"  />
      <NativeRouter>
        <Routes>
          <Route id="Home" path="/" element={<Home/>} />
          <Route id="Detail"  path="/detail" element={<Detail/>} />
        </Routes>
        <NavBar />
      </NativeRouter>
    </NativeBaseProvider>
  );
}
