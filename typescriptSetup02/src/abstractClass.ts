// console.log('hello');

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    // complex calculation
    return 800;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log('Applying Sepia filter...');
  }
}

const obj1 = new Instagram('test_mode', 'test_filter', 121);
// console.log(obj1);
// obj1.getSepia();
