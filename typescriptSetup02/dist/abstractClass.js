"use strict";
// console.log('hello');
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // complex calculation
        return 800;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Applying Sepia filter...');
    }
}
const obj1 = new Instagram('test_mode', 'test_filter', 121);
// console.log(obj1);
// obj1.getSepia();
