function select_sample_classes(){
var z = new Array();

z[1] = `
'''
 Simple class
'''
class car(): 
      
    # init method or constructor 
    def __init__(self, model, color): 
        self.model = model 
        self.color = color 
          
    def show(self): 
        print("Model is", self.model ) 
        print("color is", self.color ) 
          
# both objects have different self which  
# contain their attributes 
audi = car("audi a4", "blue") 
ferrari = car("ferrari 488", "green") 
  
audi.show()     # same output as car.show(audi) 
ferrari.show()  # same output as car.show(ferrari) 
  
# Behind the scene, in every instance method  
# call, python sends the instances also with 
# that method call like car.show(audi) 

`

z[2] = `
'''
Class & Instance Attributes in Python
'''
# Class attributes 
class sampleclass: 
    count = 0     # class attribute 
  
    def increase(self): 
        sampleclass.count += 1
  
# Calling increase() on an object 
s1 = sampleclass() 
s1.increase()         
print (s1.count) 
  
# Calling increase on one more 
# object 
s2 = sampleclass() 
s2.increase() 
print (s2.count) 
  
print (sampleclass.count)

# Python program to demonstrate 
# instance attributes. 
class emp: 
    def __init__(self): 
        self.name = 'xyz'
        self.salary = 4000
  
    def show(self): 
        print (self.name) 
        print (self.salary) 
  
e1 = emp() 
#print ("Dictionary form :", vars(e1)) 
print (dir(e1))  

`
z[3] = `
'''
 Class as decorator
'''
# Python program showing 
# use of __call__() method 
  
class MyDecorator: 
    def __init__(self, function): 
        self.function = function 
      
    def __call__(self): 
  
        # We can add some code  
        # before function call 
  
        self.function() 
  
        # We can also add some code 
        # after function call. 
  
  
# adding decorator to the class  
@MyDecorator
def function(): 
    print("GeeksforGeeks") 
  
function() 

# Python program showing 
# class decorator with  
# return satement 
  
class SquareDecorator: 
  
    def __init__(self, function): 
        self.function = function 
  
    def __call__(self, *args, **kwargs): 
  
        # before function 
        result = self.function(*args, **kwargs) 
  
        # after function 
        return result 
  
# adding decorator to the class 
@SquareDecorator
def get_square(n): 
    print("given number is:", n) 
    return n * n 
  
print("Square of number is:", get_square(195)) 

# Python program to execute 
# time of a program 
  
# importing time module 
from time import time 
class Timer: 
  
    def __init__(self, func): 
        self.function = func 
  
    def __call__(self, *args, **kwargs): 
        start_time = time() 
        result = self.function(*args, **kwargs) 
        end_time = time() 
        print("Execution took {} seconds".format(end_time-start_time)) 
        return result 
  
  
# adding a decorator to the class 
@Timer
def some_function(delay): 
    from time import sleep 
  
    # Introducing some time delay to  
    # simulate a time taking function. 
    sleep(delay) 
  
some_function(3) 
`

prog = ''
for (var i=1; i < z.length; i++)
  prog = prog+z[i];
$model.view.setCode(prog);
$model.reset();
$("#open_file").val("");
}
