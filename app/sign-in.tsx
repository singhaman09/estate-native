import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                {/* Image */}
                <Image
                    source={images.onboarding}
                    style={{
                        width: "100%",
                        height: "80%",
                        resizeMode: "contain",
                    }}
                />
                {/* Text Section */}
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">
                        Welcome to ReState
                    </Text>

                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get You Closer to {"\n"}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>

                    <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                        Login to ReState with Google
                    </Text>
                    <TouchableOpacity className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-3 mt-5 mb-3">
                        <View className="flex flex-row items-center justify-center">
                            <Image
                                source={icons.google}
                                className="w-5 h-5"
                                resizeMode="contain"
                            />
                            <Text className="tex-lg font-rubik-medium text-black-300 ml-2">Continue With Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
