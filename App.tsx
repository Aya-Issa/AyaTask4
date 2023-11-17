import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import RNFS from 'react-native-fs';
import { accelerometer } from 'react-native-sensors';

class App extends React.Component {
    camera = null;
    subscription = null;
    state = {
    x: 0,
    y: 0,
    z: 0
};

takePicture = async () => {
    if (this.camera) {
        const options = {quality: 0.5, base64: true};
        const data = await this.camera.takePictureAsync(options);
        const path = `${RNFS.ExternalDirectoryPath}/${Date.now()}.jpg`;
        
        RNFS.writeFile(path, data.base64, 'base64')
        .then(() => {console.log('Successful Saved!');})
        .catch(err => console.error(err));}};

        startRecording = async () => {
            if (this.camera) {
                const options = {quality: RNCamera.Constants.VideoQuality['480p']};
                
                this.camera.recordAsync(options)
                .then(data => {
                    console.log('Recording started');
                    this.videoData = data;
                })
                .catch(err => console.error(err));}};

stopRecording = async () => {
    if (this.camera) {
        this.camera.stopRecording();
        console.log('Recording stopped');
        const path = `${RNFS.ExternalDirectoryPath}/${Date.now()}.mp4`;
                
        RNFS.moveFile(this.videoData.uri, path)
        .then(() => {console.log('Successful Saved!');})
        .catch(err => console.error(err));}};

async componentDidMount() {
    let lastUpdate = Date.now();

    this.subscription = accelerometer.subscribe(({ x, y, z }) => {
        const now = Date.now();
        if (now - lastUpdate > 500) {
            this.setState({ x, y, z });
            lastUpdate = now;
        }
    });
};

componentWillUnmount() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
};

render() {
    const { x, y, z } = this.state;
    return (
        <View style={styles.container}>
        <RNCamera
            ref={ref => {this.camera = ref;}}
            style={styles.camera}
            captureAudio={false}>
                  <View style={styles.Buttons}>
             
             <TouchableOpacity onPress={this.startRecording} style={styles.ContainerB}>
                  <Text style={styles.ButtonText}>Start Recording</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.stopRecording} style={styles.ContainerB}>
                  <Text style={styles.ButtonText}>Stop Recording</Text>
              </TouchableOpacity> 
          </View>

            <View style={{flex: 1, flexDirection: 'row', margin: 10, justifyContent: 'center', alignItems: 'center',}}>
            <Text>X: {x.toFixed(1)}, Y: {y.toFixed(1)}, Z: {z.toFixed(1)} </Text>
            </View>
          
        </RNCamera>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column'},

    camera: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},

    Buttons: {flex: 0.2,  justifyContent: 'space-evenly', alignItems: 'center'},

    ContainerB: {  flex: 3, width: 200, height: 60, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', margin: 3, borderWidth: 3, borderColor: 'white',borderRadius:5},

    ButtonText: { fontSize: 18,  color: 'black',  textAlign: 'center', fontWeight: 'bold'},
});

export default App;