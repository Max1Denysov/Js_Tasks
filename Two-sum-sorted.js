function twoSum(nums,target){
  const arr = [];
  nums.map(function(x,ind1){
    nums.map(function(y,ind2){
      if(x + y == target && ind1 != ind2)
      arr.push(ind1,ind2)
    });
  });
  return [arr[0],arr[1]]
}
alert(twoSum([6,5,4,3,2,1],9));
