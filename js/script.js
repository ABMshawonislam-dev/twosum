var twoSum = function(nums, target) {
    var text = nums
    var result=[];
    nums.map((item,index)=>{
        text.map((text, indx) => {
            var plus = item + text
                if(plus === target && indx !== index){
                    result.push(index)
                }
        })
    })
    return result;
};

console.log(twoSum([2,7,11,15],9))

