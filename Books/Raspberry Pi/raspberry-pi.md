# RASPBERRY PI: A Beginners Concise Guide to Raspberry Pi Setup, Learning Programming and Developing Innovative Projects by Duke Denton

## What is Raspberry Pi?

Is an affordable, pocket-sized computer that plugs conveniently into a screen like a monitor or TV with a mouse and a standard keyboard.

1. It is suitable for low budget businesses or projects.
2. Can be use with or without prior coding experience.
3. Good for experimenting adaptative technologies.
4. Python is default but It supports other programming languages too.
5. It has many interfaces yet can fit comfortably in your purse.

## The Raspberry Hardware components

The Raspberry micro-computer board like any other computer is made up of the RAM, Processor, GPU , CPU, the Ethernet Port, GPIO pins, XBee pin out/socket, UART, power connector, SD card slot, RCA connector, LED, Bluetooth, Wi-Fi, MIPI DSI, MIPI CSI, HDMI port and extension for other external devices through the USB port.

## The Raspberry Software components

- **Raspbian**: OS based on Debian
- **Ubuntu MATE**: Based on Linux
- **RetroPie**: Based on Raspbian
- **DietPi**: Runs on an optimized Debian version
- **Manjaro**: Uncommon system based on Arch Linux
- **Fyde OS**: Chromium OS for Raspberry Pi
- **OSMC**: Best Media Solutions Built based on Debian
- **Windows 10 ARM**.
- **Open ELEC**: Developed to use system and its resources to access media browsing and playback.
- **Android**.

NOOBS (New out of box Software) is the installer for the Raspberry Pi OS.

## Python

- Numbers. Can be Integers or Floats.
- Variables. A variable point to a particular value or a set of values stored in memory.
- Strings. Letters or a group of letters, numbers, or symbols that are enclosed in either single or double quotes.
- Booleans. The output represents two constant values, which can either be 'True' or 'False'.
- Tuples. This are considered to be like strings, the differ in that they are enclosed in the parenthesis instead of brackets. The values of the variables in tuples cannot be changed.
- Lists. Two or more strings combine to form a list. The values of lists can be modified, concatenated, or cut. It can contain various data types or the same data types.
- Sets. They are composed of an unordered collection of datatypes or elements that has no duplicated elements in the same set. They are mutable.

- Frozen Sets. These types of sets cannot be changed.
  - Clear() Function: This will clear all elements of the set.
  - Difference() Function: This will return the difference between elements in a set.
  - Add() Function: This method is used to add unalterable elements to a set.
  - Discard/Remove() Function: You can use the discard function to remove any element in a set. Alternatively, you can use remove.

### If Statements

You can use the 'if' statements to run your code if specified conditions are met. If the expression is true, it is executed. Otherwise, the are not carried out. For more complex checks, if statements can be nested, one inside the other. This implies that the inner if the statement is part of the outer one.

Else estatements follow an 'if' statement, and contains code that is calle when the 'if' statement is 'False'.

#### Boolean Logic

This is used to make more complicated conditions for 'if' statements that rely on more than one condition.

- The 'and' operator usually takes two statements, and the results are 'True' if and only if both statements are True.
- The 'or' operator also takes two statements, and it returns 'True' if either or both arguments are True and 'False' if both arguments are False.
- The Boolean 'not' takes only one argument and inverts it. i.e., 'not true' is False.

### Loop

- While Loop. They are used to execute a block of statements or arguments continuously until certain conditions are met. The block of code is executed continuously as long as the conditions holds. Once it betcomes false, the next block of code is executed.
- Foor Loops. They are used for iterating each element in a list, string, tuple, or a dictionary.

```python
import random

while True:
    rolled_num = random.randint(1,6)
    print('The dice rolled and you have: ' rolled_num)
    input('Press any key to roll again')
```

### Functions

You can define a function as a group of statements that performs a specific task.

```python
def function_name():
    # Statements
```

The component parts of a function are:

- The function keyworkd 'def' that marks the beginning of the function header.
- Parameters which is where function values are incorporated.
- A colon (:) which indicates the termination of the function header.
- Python statements that constitute the body of the functinos.
- A return statement in case you decide to recycle code.

The first thing that comes immediately after the functino header is **docstring**. It explains what a functino does.

```python
def greet (name):
  """
  This function will greet the named person in a paramenter
  """

  print("Good morning, " + name + ". How are you doing today?")
```

Statements can have expressions that gets evaluated, and the value returned, and i can have on or more returns depending on the line of code you are running.

```python
def meters(L_in_centimeters):
    """This will return the length in centimeters"""

    return (L_in_centimeters / 100)

    for L in (120,332,145,270,255):
      print(L, ": ", meters(L))
```

The **keywords arguments** can be used to call functinos, also, default argument values are commonly used to call a function one.

```python
def printdata(age, state="LA"):
  """This prints the data into this function"""

  print("Age: ", age)
  print("State: ", state)

printdata(age="45", state="Kansas")
```

With the **arbitrary argument list** you can call this function if it involves a number of arguments.

```python
def functioname ([formal_args,]*var_args_tuple):
  # Statements
```

### Modules Classes and Methods

Modules are used to organize or arrange files. They are grouped elements or values that you can refer to and call them any time they are needed.

**Packages** are similar to folders. They contain more than a single module that are properly organized. They are presented by "\_\_init\_\_.py" file name (empty file).

What an **absolute import** does is point out the elements or values to be imported using its full path from the project's main folder.

In the other hand, with **relative imports** you can simply import the class of a module into another within the same package. A relative import points out the data to be imported depending on the recent location of the import.

Also, There are dates and times objects, these are "naive" and "aware".

**Aware** is conscious of its environment as relates to time zones, time adjustmentes, and other aspects of time it may currently or in the near future be in. The **naive**, is unaware of its environment and cannot work on its work since it lacks the necessary information to work on its own.

### Object Orientation

Python is object-based, meaning that more emphasis is placed on objects rather than functions. When data and objects becomes bigger, the need for an object-oriented programming approach becomes essential.

**Inheritance** is used to refer to a situation where a class assumes the method and attribute of another one. They usually of two forms which are; the parent or base class and the child or derived class.

Child classes are a resultant of a parent inheritance, and they share all of the attributes of their parent classes.

### Reading and writing binary data

In python programming language, you can use the open() function and the read binary "rb" or write binary "wb" mode to read or write binary data. Bytes, byte array, and memory view are all part of binary sequence types.

**Bytes** can be expressed in terms of integers, zero filled bytes objects, or binary data contained in the buffer protocol, and the binary values are unchangeable. **Bytearrays** unlike the bytes, the variables are mutable.

### Pickle module or Pickling

Pickling or pickle module in python programming is used to describe the process of turning objects structures or their equivalent values into byte fragments or streams, i.e., 0s and 1s. Some important things to keep in mind regarding pickling in python:

- The fact that pickling can be put to good use in saving complicated data is undeniable.
- It is quite simple, doesn't require long lines of code.
- Pickled file in python may be unreadable in other programming languages.
- The pickled file or module is not malware proof.

### Arduino and Raspberry Pi

You can linken an Arduino to the circuit board of a micrcontroller. A microcontroller may simply be referred to as a pc which will run on program time and time again. It's straightforward to use.

A Raspberry Pi is single-board hardware equipped with the speed and memory to run many programs. It has additional sophisticated usage compared to Arduino.

An Arduino is most suitable for a single task that can be repeated as many times as possible.

Raspberry Pi can be used for just about anything a traditional computer would normally do. This can range from programming to hacking, design, and anything you can hope to imagine or dream of.

> raspberrypi.org
