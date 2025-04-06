function main() {
    let sportsData = JSON.parse(readLine().replace(/'/g, '"'));
  
    /* Please do not modify anything above this line */
  
    /* Write your code here */
    
      const result = {};
  
    // Iterate through the array
    for (let [student, sport] of sportsData) {
      result[student] = sport; // Overwrite if student already exists
    }
  
    console.log(result);
  }
  