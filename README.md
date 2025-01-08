# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers:  missing error handling for invalid input.  Specifically, the `/users/:id` route attempts to access a user based on a provided ID, but lacks proper validation and error handling if the ID is not a number or the user does not exist.

The `bug.js` file contains the erroneous code, and `bugSolution.js` provides a corrected version with robust error handling.