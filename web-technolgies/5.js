var size = 5; // Set the desired size of the pattern

// Loop through each row
for (var row = 1; row <= size; row++) {
  var pattern = '';

  // Loop through each column
  for (var col = 1; col <= size; col++) {
    // Check if the current position is on the border or within
    if (row === 1 || row === size || col === 1 || col === size) {
      pattern += '*'; // Print asterisk for border positions
    } else {
      pattern += ' '; // Print a space for inner positions
    }
  }

  console.log(pattern); // Print the pattern for each row
}