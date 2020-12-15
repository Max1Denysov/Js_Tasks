function twoSum(n, t) {
    for (let i = 0; i < n.length-1; i++)
        for (let j = i+1; j < n.length; j++)
            if (n[i] + n[j] === t) return [i, j];
   
}
alert(twoSum([1,2,3,4,5,6],9));
