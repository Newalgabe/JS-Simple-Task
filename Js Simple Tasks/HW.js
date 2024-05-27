document.addEventListener("DOMContentLoaded", function() {
    function runTask() {
        const taskNumberInput = document.getElementById('taskNumber');
        const taskNumber = parseInt(taskNumberInput.value);
        let taskInput = '';

        switch(taskNumber) {
            case 1:
                taskInput = prompt('Enter two numbers separated by comma (e.g., 2, 5):');
                const [num1, num2] = taskInput.split(',').map(Number);
                displayOutput(compareNumbers(num1, num2));
                break;
            case 2:
                taskInput = prompt('Enter a number to calculate factorial:');
                const num = parseInt(taskInput);
                displayOutput(factorial(num));
                break;
            case 3:
                taskInput = prompt('Enter three digits separated by comma (e.g., 1, 4, 9):');
                const [digit1, digit2, digit3] = taskInput.split(',').map(Number);
                displayOutput(combineDigits(digit1, digit2, digit3));
                break;
            case 4:
                taskInput = prompt('Enter length and width separated by comma (e.g., 5, 7):');
                const [length, width] = taskInput.split(',').map(Number);
                displayOutput(calculateArea(length, width));
                break;
            case 5:
                taskInput = prompt('Enter a number to check if it is a perfect number:');
                const numberToCheck = parseInt(taskInput);
                displayOutput(isPerfectNumber(numberToCheck));
                break;
            case 6:
                displayOutput(perfectNumbersInRange(1, 1000));
                break;
            case 7:
                taskInput = prompt('Enter hours, minutes, and seconds separated by comma (e.g., 15, 30, 45):');
                const [hours, minutes, seconds] = taskInput.split(',').map(Number);
                displayOutput(formatTime(hours, minutes, seconds));
                break;
            case 8:
                taskInput = prompt('Enter hours, minutes, and seconds separated by comma (e.g., 1, 15, 30):');
                const [h, m, s] = taskInput.split(',').map(Number);
                displayOutput(timeToSeconds(h, m, s));
                break;
            case 9:
                taskInput = prompt('Enter total seconds:');
                const totalSeconds = parseInt(taskInput);
                displayOutput(secondsToTime(totalSeconds));
                break;
            case 10:
                taskInput = prompt('Enter two dates in the format: year1, month1, day1, year2, month2, day2 (e.g., 2024, 5, 11, 2023, 1, 1):');
                const [year1, month1, day1, year2, month2, day2] = taskInput.split(',').map(Number);
                displayOutput(dateDifference(year1, month1, day1, year2, month2, day2));
                break;
            default:
                displayOutput("Invalid task number!");
                break;
        }
    }

    function displayOutput(output) {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<p>${output}</p>`;
    }

    // Place your task functions here...

    // Example functions (replace with your actual task functions)
    function compareNumbers(num1, num2) {
        if (num1 < num2) {
            return -1;
        } else if (num1 > num2) {
            return 1;
        } else {
            return 0;
        }
    }

    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    function combineDigits(digit1, digit2, digit3) {
        return parseInt("" + digit1 + digit2 + digit3);
    }

    function calculateArea(length, width = length) {
        return length * width;
    }

    function isPerfectNumber(num) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum === num;
    }

    function perfectNumbersInRange(min, max) {
        let perfectNumbers = [];
        for (let i = min; i <= max; i++) {
            if (isPerfectNumber(i)) {
                perfectNumbers.push(i);
            }
        }
        return perfectNumbers;
    }

    function formatTime(hours, minutes = 0, seconds = 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function timeToSeconds(hours, minutes, seconds) {
        return hours * 3600 + minutes * 60 + seconds;
    }

    function secondsToTime(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return formatTime(hours, minutes, seconds);
    }

    function dateDifference(year1, month1, day1, year2, month2, day2) {
        const date1 = new Date(year1, month1 - 1, day1);
        const date2 = new Date(year2, month2 - 1, day2);
        const difference = Math.abs(date2 - date1);
        return secondsToTime(Math.floor(difference / 1000));
    }

    // End of example functions

    window.runTask = runTask; // Make runTask function accessible globally
});
