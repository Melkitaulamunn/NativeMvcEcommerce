import React from "react";
import LottieView from "lottie-react-native";

export default function Animation() {
    return (
        <LottieView style={{width:150,height:150}} source={require("../animations/animation_lm3kjp4u.json")} autoPlay loop />
    );
}