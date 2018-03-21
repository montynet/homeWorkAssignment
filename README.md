# Create an App for Uncle Morty



# Thought Process

Although the homework assignment did not specify to write a front end for this script.
I took this as an opportunity to showcase how I would build a simple app that my customer (in this case Uncle Morty) would be able to use multiple times without having to
set up his own IDE to use this code.

Step 1:
Since Uncle Morty is just copying digital strings,
I needed to sanitize the input. I had to ensure the strings contain digits only. Ignore strings that have non-digit characters.


Step 2:
I needed some type of way to create all the possible combinations I can build with a digit string
knowing that the combination can either be 1 digit number or 2 digit numbers.
This is when a recursive algorithm seemed like a good idea to do this. 


Step 3:
I would then have to loop over the result of the recursive algorithm and test the values in the array against repeated numbers
and also to ensure no digit was bigger than 59.

Step 4: 
I would then stored my findings in an array to present the results to the user.

# Getting Started

To get started with this app, head over to the [Live Demo](http://plnkr.co/QuVmBvmO2aOjq5a2stz0) on plnkr to try it.
Enter comma separated text and click submit.
