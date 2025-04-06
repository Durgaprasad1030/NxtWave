let data={
    'number':0,
    'object':0,
    'string':0,
    'boolean':0
}
for(let i of myArray){
   

if(typeof(i)==='number'){
     data.number++;
}
else if(typeof(i)==='object'){
     data.object++;
}
else if(typeof(i)==='string'){
     data.string++;
}
else if(typeof(i)==='boolean'){
     data.boolean++;
}
}
console.log(data)