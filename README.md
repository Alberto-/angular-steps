# Angular Steps

Angular Steps is an example of a registration step wizard made with AngularJS (version 1.5.8). [view demo]

## Introduction

The project is composed by 5 steps.
You can move forward to the next step if the current step is valid.
If you want, you can move back to old steps, the wizard stores data into a shared service.

The aim of the project is to create a wizard able to guide the user into a correct form filling composed by different interfaces with their own logic and layout.

 --> [view demo] <--

## Structure

The App is made of a main controller that manages the logic to move from a step to another.

Each step has its own controller with its logic to manage the specific step, so you can customize forms adding regular expressions, custom validations and so on.

There is a Main-shared service that stores the shared data between all controllers, so you can move to the previous step and to the next without losing data.

Finally the last steps allow you to make an API call to submit all data.


## Installation

Clone the repository

```sh
$ git clone https://github.com/Alberto-/angular-steps.git
```


From project root `(
Prerequisites: bower
)`


```
$ bower install
```
this will download all required packages


### Run

```
$ http-server -a 0.0.0.0 -p 5000
```

Angular Steps will run on http://localhost:5000/app



### Version
1.0

## License

MIT

[view demo]: <http://angularsteps-enta.rhcloud.com/app/>
