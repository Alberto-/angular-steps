
Angular Steps


Angular Steps is an example of a registration step wizard made with AngularJS (version 1.5.8).


The App is made of a main controller that manages the logic to move from a step to another.
Each step has its own controller with its logic to manage the specific step.
There also is a main-shared service, it stores the shared data between all controllers, so you can move to the previous step and to the next without losing data.
Finally the last steps allow you to make an API call to submit all data.



