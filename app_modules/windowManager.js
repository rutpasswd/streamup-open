var  path =require('path');

function defaultWindow(app){
    app.commandLine.appendSwitch('enable-smooth-scrolling', '1');
    app.commandLine.appendSwitch('enable-overlay-scrollbar', '1');
    // DEV: Enables the HTML5 WebAudio API extensions to allow selection of sinkId
    //      --> Choosing audio output device
    app.commandLine.appendSwitch('enable-experimental-web-platform-features', '1');

    if (process.platform === 'linux') {
        console.log('we got a linux platform!');
        
        // console.log(app);
        // app.disableHardwareAcceleration();
    }

    if (process.platform === 'darwin' && global.DEV_MODE) {
        app.dock.setIcon(path.resolve(__dirname, '..', 'dist/img/app-icon.png'));
    }
};
module.exports={
    defaultWindow:defaultWindow
};