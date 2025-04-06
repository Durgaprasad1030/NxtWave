function main() {
    let integers = JSON.parse(readLine());
  
    /* Please do not modify anything above this line */
  
    /* Write your code here */
    let result = [];
    let sum = 0;
  
    for (let num of integers) {
      sum += num;
      result.push(sum);
    }
  
    console.log(result);
  }