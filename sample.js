/*
1.Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 
Your solution MUST have the following complexities:
Time: O(N)
 
Sample Input:
 
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/
function sameFrequency(num1, num2) {
  const hashTable1 = {};
  const hashTable2 = {};

  for (let l of num1.toString()) {
    hashTable1[l] = (hashTable1[l] || 0) + 1;
  }

  for (let l of num2.toString()) {
    hashTable2[l] = (hashTable2[l] || 0) + 1;
  }

  for (let k in hashTable1) {
    if (!k in hashTable2 || hashTable1[k] !== hashTable2[k]) return false;
  }

  return true;
}
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
/*
219. Contains Duplicate II
https://leetcode.com/problems/contains-duplicate-ii/
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
Example 1:
 
Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:
 
Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:
 
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 */
function containsDuplicate(nums, k) {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashTable && i - hashTable[nums[i]] <= k) {
      return true;
    }
    hashTable[nums[i]] = i;
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1], 3));
console.log(containsDuplicate([1, 0, 1, 1], 1));
console.log(containsDuplicate([1, 2, 3, 1, 2, 3], 2));
/*
442. Find All Duplicates in an Array
https://leetcode.com/problems/find-all-duplicates-in-an-array/
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
 
You must write an algorithm that runs in O(n) time and uses only constant extra space.
 
Example 1:
 
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:
 
Input: nums = [1,1,2]
Output: [1]
Example 3:
 
Input: nums = [1]
Output: []
*/
function findDuplicates(nums) {
  const hashTable = {};
  const duplicateNums = [];

  for (let elm of nums) {
    hashTable[elm] = (hashTable[elm] || 0) + 1;
  }

  for (let key in hashTable) {
    if (hashTable[key] === 2) duplicateNums.push(key * 1);
  }

  return duplicateNums;
}
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1]));
/*
 
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
 
Input: nums = [1,2,3,1]
Output: true
Example 2:
 
Input: nums = [1,2,3,4]
Output: false
Example 3:
 
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
function checkDuplicate(nums) {
  const hashTable = {};

  for (let elm of nums) {
    if (elm in hashTable) {
      return true;
    }
    hashTable[elm] = 1;
  }

  return false;
}
console.log(checkDuplicate([1, 2, 3, 1]));
console.log(checkDuplicate([1, 2, 3, 4]));
console.log(checkDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
/*
387. First Unique Character in a String
https://leetcode.com/problems/first-unique-character-in-a-string/
 
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 
Example 1:
 
Input: s = "leetcode"
Output: 0
Example 2:
 
Input: s = "loveleetcode"
Output: 2
Example 3:
 
Input: s = "aabb"
Output: -1
*/
function findFirstUniqueChar(s) {
  const obj = {};
  const S = s.replace(/[\W_]/g, "").toLowerCase();
  for (let L of S) {
    obj[L] = (obj[L] || 0) + 1;
  }
  for (let i = 0; i < S.length; i++) {
    if (obj[S[i]] === 1) return i;
  }
  return -1;
}
console.log(findFirstUniqueChar("leetcode"));
console.log(findFirstUniqueChar("Hi bangladesh"));
console.log(findFirstUniqueChar("aabb"));
