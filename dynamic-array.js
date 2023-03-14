class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    if (this.capacity === this.length) {
      this.resize();
    }
    // this.data[this.length]=val;
    let array2 = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      array2[i] = this.data[i];
    }
    array2[this.length] = val;
    this.data = array2;
    this.length++;
  }

  pop() {
    // Your code here
    let lastItem = this.data[this.length - 1];
    let array3 = new Array(this.capacity);
    for (let i = 0; i < this.length - 1; i++) {
      array3[i] = this.data[i];
    }
    this.data = array3;
    if (this.length !== 0) {
      this.length--;
    }
    return lastItem;
  }

  shift() {
    // Your code here
    let firstItem = this.data[0];
    let array4 = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      array4[i] = this.data[i + 1];
    }
    this.data = array4;
    if (this.length !== 0) {
      this.length--;
    }
    return firstItem;
  }

  unshift(val) {
    if (this.capacity === this.length) {
      this.resize();
    }
    // Your code here
    // let arr=this.data;
    // this.data=[val,...arr];
    let array1 = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      array1[i + 1] = this.data[i];
    }
    array1[0] = val;
    this.data = array1;
    this.length++;
  }

  indexOf(val) {
    // Your code here
    for (let i = 0; i < this.length; i++) {
      let item = this.data[i];
      if (val === item) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    // Your code here
    let double = this.capacity * 2;
    let newArray = new Array(double);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.data[i];
    }
    this.capacity = double;
    this.data = newArray;
  }
}
module.exports = DynamicArray;
