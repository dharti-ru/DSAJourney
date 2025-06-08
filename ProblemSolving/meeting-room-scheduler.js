// Problem: Meeting Room Scheduler
// A company needs to schedule multiple meetings throughout the day.
// You’re given a list of meeting time intervals where each interval is an array [start, end].
// Determine if a person can attend all the meetings (i.e., no overlapping).

// Function Signature:

// function canAttendMeetings(intervals) {
//   // your code
// }
// Example:

// Input: [[0, 30], [5, 10], [15, 20]]
// Output: false

// Input: [[7, 10], [2, 4]]
// Output: true


// function canAttendMeetings(intervals) {
//       let minutesArr = new Array(1440).fill(0);

//       for(let interval of intervals){
//         let start = interval[0] - 1;
//         let end = interval[1] - 1;
        
//         if(minutesArr[start] === 1 || minutesArr[end] == 1) {
//             return false;
//         }
//         while(start < end){
//             minutesArr[start] = 1;
//             start++;
//         }
//         minutesArr[end] = 1;
//       }
//     return true;
// }
var canAttendMeetings = function(intervals) {
    if (intervals.length < 2) return true;

    // Sort based on start time
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        // Check if current meeting starts before the previous one ends
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }

    return true;
};
console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); //false
console.log(canAttendMeetings([[7, 10], [2, 4]])); //true
console.log(canAttendMeetings([[0, 30], [31, 40]])); //true
console.log(canAttendMeetings([[5, 10], [15, 20], [25, 30]])); //true
console.log(canAttendMeetings([[0, 1], [1, 2], [2, 3]])); //true
console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); //false
console.log(canAttendMeetings([[10, 20], [15, 25]])); //false
console.log(canAttendMeetings([[5, 10], [10, 15], [14, 20]])); //false