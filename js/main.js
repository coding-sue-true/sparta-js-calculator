var welcome = prompt("Hi, Welcome! We have different calculators waiting for you! Type 'a' for Advanced operations, 'b' for Basic operations, 'c' if you want to know your BMI and 'd' in case you would like to know the estimated cost for a journey you're planning.");


// ------------------ BASIC CALCULATOR ----------------------

if (welcome == 'b'){
  var first_Number = prompt("Alright, let's start! Type a number...");
  var operation_basic = prompt("And now choose an operation (+, -, / or *)");
  var second_number = prompt("Almost there! Just type one more number!");

  if (operation_basic === '-') {
    var result = parseFloat(first_Number) - parseFloat(second_number);
    alert(first_Number + ' - ' + second_number + ' = ' + result);
  }
  if (operation_basic === '+') {
    var result = parseFloat(first_Number) + parseFloat(second_number);
    alert(first_Number + ' + ' + second_number + ' = ' + result);
  }
  if (operation_basic === '/') {
    var result = parseFloat(first_Number) / parseFloat(second_number);
    alert(first_Number + ' / ' + second_number + ' = ' + result);
  }
  if (operation_basic === '*') {
    var result = parseFloat(first_Number) * parseFloat(second_number);
    alert(first_Number + ' * ' + second_number + ' = ' + result);
  }

  // ------------------ ADVANCED CALCULATOR ----------------------

} else if (welcome == 'a') {
  var first_Number = prompt("Alright, let's start! Type a number...");
  var operation_advanced = prompt ("And now choose an operation (type 'power' or 'square root')");
  var second_number = prompt("Almost there! Just type one more number!");

  if (operation_advanced === 'power') {
    var result = Math.pow(parseFloat(first_Number), parseFloat(second_number));
    alert(first_Number + ' ^ ' + second_number + ' = ' + result);
  }
  if (operation_advanced === 'square root') {
    var result = Math.sqrt(parseFloat(first_Number), parseFloat(second_number));
    alert(first_Number + ' √ ' + second_number + ' = ' + result);
  }

  // ------------------ BMI CALCULATOR ----------------------

} else if (welcome == 'c') {
  var imperial_metric = prompt("Great! Do you prefer Imperial or Metric values? (please type 'imperial' or 'metric')");

  if (imperial_metric = 'metric') {
    var height_metric = prompt("Please enter you height in meters! (Ex. 1.65)");
    var weight_metric = prompt("And now your weight in kilograms (Ex. 63). Come on, don't be shy!");
    var result_metric = weight_metric / Math.pow(height_metric, 2);
    var final_result_metric = parseFloat(result_metric).toFixed(2);
    alert('Your BMI in metric value is' + ' ' + final_result_metric + '!');

    if (final_result_metric <= 18.5) {
      alert("A bit too skinny...?");
    } else if (final_result_metric <= 24.9) {
      alert("Looking like a super model!");
    } else if (final_result_metric <= 29.9) {
      alert("I bet there's a gym very close to you!");
    } else {
      alert("I would be very careful and try contact a doctor...!");
    };
  };
  if (imperial_metric = 'imperial') {
    var height_imperial = prompt("Please enter you height in inches! (Ex. 63.77)");
    var weight_imperial = prompt("And now you weight in pounds (Ex. 99). Come on, don't be shy!");
    var result_imperial = weight_imperial / Math.pow(height_imperial, 2) * 703;
    var final_result_imperial = parseFloat(result_imperial).toFixed(2);
    alert('Your BMI in imperial value is' + ' ' + final_result_imperial + '!');

    if (final_result_imperial <= 18.5) {
      alert("A bit too skinny...?");
    } else if (final_result_imperial <= 24.9) {
      alert("Looking like a super model!");
    } else if (final_result_imperial <= 29.9) {
      alert("I bet there's a gym very close to you!");
    } else {
      alert("I would be very careful and try contact a doctor...!");
    };
  };
}
else if (welcome === 'd') {
  var distance = prompt("How long is your journey? (please enter your value in miles)");
  var mpg = prompt("What's the comsuption of your car? (in mpg)");
  var costpg = prompt("How much is one full fuel tank? (Ex. 50.43)");
  var speed = prompt("What's your average speed? (Ex. 55)");
  var time_result = distance / speed;
  var final_time = parseFloat(time_result).toFixed(2);
  var total_cost = 0;
  alert('Your journey will take ' + final_time + 'hours and cost £' + total_cost + '.');
}
