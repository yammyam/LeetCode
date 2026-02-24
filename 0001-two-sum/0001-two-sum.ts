function twoSum(nums: number[], target: number): number[] {
    //9-2 =7 <- inclues true indexOf(target-nums[i])
    let answer = [];
    // const sortedArr = nums.sort((a,b)=> a-b);
    //[2,3,4]
    for(let i = 0 ; i < nums.length ; i++){
        if(nums.slice(i+1).includes(target-nums[i])){
            answer.push(i)
            answer.push(nums.lastIndexOf(target-nums[i]))
            return answer;
        }
    }
};