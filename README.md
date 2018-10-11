# Clone the App #
1) Setting Up the Environment after cloning the app

1.1) npm install -g react-native-cli

1.2) npm install -g yarn

1.3) yarn add react-navigation

# At this stage all is setup to start #

# Running the App #
2) Open cmd

2.1) cd <directory_of_app>

2.2) react-native start

3) Open another cmd

3.1) Connect you phone with your computer and make sure USB debugging is On

3.2) adb devices

3.3) copy device id

3.4) adb -s <device_id> reverse tcp:8081 tcp:8081

NOTE: To refresh your app on your phone enter command: adb shell input text "RR"

4) Open another cmd

4.1) cd <directory_of_app>

4.2) react-native run-android 

NOTE: for IOS type react-native run-ios

############# All Done ##############

NOTE: To enable Debuging tpye the following command in cmd: react-native log-android

