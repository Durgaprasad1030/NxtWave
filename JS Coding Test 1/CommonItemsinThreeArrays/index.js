function main() {
    let arr1 = JSON.parse(readLine().replace(/'/g, '"'));
    let arr2 = JSON.parse(readLine().replace(/'/g, '"'));
    let arr3 = JSON.parse(readLine().replace(/'/g, '"'));
  
    /* Please do not modify anything above this line */
  
    /* Write your code here */
     const common = arr1.filter(item =>
      arr2.includes(item) && arr3.includes(item)
    );
  
    console.log(common);
  }
  