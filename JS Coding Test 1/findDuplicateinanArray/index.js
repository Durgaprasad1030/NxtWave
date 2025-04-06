function main() {
    let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  
    /* Please do not modify anything above this line */
  
    /* Write your code here */
    const seen = new Set();
    let duplicate = false;
  
    for (let item of myArray) {
      if (seen.has(item)) {
        duplicate = item;
        break;
      }
      seen.add(item);
    }
  
    console.log(duplicate !== false ? duplicate : false);
  }