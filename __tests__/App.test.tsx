/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from './App.test';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import React from "react";
import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { TouchableOpacity, Image, View } from "react-native";
import { RNCamera, RNCamera } from "react-native-camera";
import { RNCamera } from "react-native-camera";
import RNFS from "react-native-fs";
import RNFS from "react-native-fs";
import { styles } from '../App';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity, TouchableOpacity } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';
import { View, View } from 'react-native/Libraries/Components/View/View';
import { Image, Image } from 'react-native/Libraries/Image/Image';
import React from "react";
import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { TouchableOpacity, Image, View } from "react-native";
import { RNCamera } from "react-native-camera";
import { RNCamera } from "react-native-camera";
import { RNFS } from "react-native-fs";
import { RNFS } from "react-native-fs";
import { styles } from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});
export class App extends React.Component {
  camera = null;

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      const path = `${RNFS.DocumentDirectoryPath}/${Date.now()}.jpg`;
      RNFS.writeFile(path, data.base64, 'base64')
        .then(() => console.log('Image saved successfully!'))
        .catch(err => console.error(err));
    }
  };

  startRecording = async () => {
    if (this.camera) {
      const options = { quality: RNCamera.Constants.VideoQuality['480p'] };
      const data = await this.camera.recordAsync(options);
      console.log('start recording');
    }
  };

  stopRecording = async () => {
    if (this.camera) {
      this.camera.stopRecording();
      console.log('stop recording');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          } }
          style={styles.preview}
          captureAudio={false} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture}>
            <Image source={require('D:/App/Camera/assets/camera (1).png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.startRecording}>
            <Image source={require('D:/App/Camera/assets/video.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.stopRecording}>
            <Image source={require('D:/App/Camera/assets/stop.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export class App extends React.Component {
  camera = null;

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      const path = `${RNFS.DocumentDirectoryPath}/${Date.now()}.jpg`;
      RNFS.writeFile(path, data.base64, 'base64')
        .then(() => console.log('Image saved successfully!'))
        .catch(err => console.error(err));
    }
  };

  startRecording = async () => {
    if (this.camera) {
      const options = { quality: RNCamera.Constants.VideoQuality['480p'] };
      const data = await this.camera.recordAsync(options);
      console.log('start recording');
    }
  };

  stopRecording = async () => {
    if (this.camera) {
      this.camera.stopRecording();
      console.log('stop recording');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          } }
          style={styles.preview}
          captureAudio={false} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture}>
            <Image source={require('D:/App/Camera/assets/camera (1).png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.startRecording}>
            <Image source={require('D:/App/Camera/assets/video.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.stopRecording}>
            <Image source={require('D:/App/Camera/assets/stop.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

