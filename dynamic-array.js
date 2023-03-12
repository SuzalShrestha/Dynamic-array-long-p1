class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity=defaultSize;
    this.length=0;
    this.data=new Array(defaultSize);

  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if(this.capacity===this.length){
      this.resize();
      
    }
    this.data[this.length]=val;
    this.length++;
    
    
  }


  pop() {

    // Your code here
    let lastItem=this.data[this.length-1];
    let array=new Array(this.length);
    for(let i=0;i<this.length-1;i++){
      array[i]=this.data[i];
    }
    this.data=array;
    if(this.length!==0){

      this.length--;
    }
    return lastItem;
  }

  shift() {

    // Your code here
    let firstItem=this.data[0];
    let array=new Array(this.length);
    for(let i=0;i<this.length;i++){
      array[i]=this.data[i+1];
    }
    this.data=array;
    if(this.length!==0){

      this.length--;
    }
    return firstItem;

  }

  unshift(val) {

    if(this.capacity===this.length){
      this.resize();
    
    }
    // Your code here
    let arr=this.data;
    this.data=[val,...arr];
    this.length++;
  }

  indexOf(val) {

    // Your code here
    for(let i=0;i<this.length;i++){
      let item=this.data[i];
      if(val===item){
        return i;
      }
    }
    return -1;
  }

  resize() {

    // Your code here
    let double=this.capacity*2;
    let newArray=new Array(double);
    for(let i=0;i<this.length;i++){
      newArray[i]=this.data[i];
    }
    this.capacity=double;
    this.data=newArray;

  }

}
let dynamicArr = new DynamicArray();
dynamicArr.push(10);
dynamicArr.push(11);
dynamicArr.push(12);
dynamicArr.push(13);
dynamicArr.push(14);
// expect(dynamicArr.capacity).to.equal(8);
// expect(dynamicArr.data.length).to.equal(8);
// expect(dynamicArr.length).to.equal(5);
dynamicArr.unshift(9);
dynamicArr.unshift(8);
dynamicArr.unshift(7);
dynamicArr.unshift(6);

// expect(dynamicArr.capacity).to.equal(16);
// expect(dynamicArr.data.length).to.equal(16);
// expect(dynamicArr.length).to.equal(9);



module.exports = DynamicArray;