A C program, whatever its size, consists of functions and variables. A function contains statements that specify the computing operations to be done, and variables store values used during the computation. C functions are like the subroutines and functions of Fortran or the procedures and functions of Pascal. Our example is a function named, `main`. Normally you are at liberty to give functions whatever names you like, but "`main`" is special-your program begins executing at the
beginning of `main`. This means that every program must have a main somewhere.

`main` will usually call other functions to help perform its job, some that you
wrote, and others from libraries that are provided for you.

## Variables and Arithmetic Expressions

C provides several other basic data types:

- `char` - Character, a single byte.
- `short` - Short Integer.
- `long` - Long Integer.
- `double` - Double-precision floating point.
- `int` - Integers.
- `float` - Floating point.

`printf` is a general-purpose output formatting function.

- `%d` - print as decimal integer.
- `%6d` - print as decimal integer, at least 6 characters wide.
- `%f` - print as floating point.
- `%6f` - print as floating point, at least 6 characters wide.
- `%.2f` - print as floating point, 2 characters after decimal point.
- `%6.2f` - print as floating point, at least 6 wide and 2 after decimal point.
- `%o` - Octal.
- `%x` - Hexadecimal.
- `%c` - Character.
- `%s` - Character string.
- `%%` - for % itself.

## Symbolic Constants

It's bad practice to bury "magic numbers" like 300 and 20 in a program; they convey little information to someone who might have to read the program later, and they are hard to change in a systematic way. One way to deal with magic numbers is to give them meaningful names. A `#define` line defines *symbolic name* or *symbolic constant* to be a particular string of characters.

Symbolic constant names are conventionally written in upper case so they can be readily distinguished from lower case variable names. Notice that there is **no** semicolon at the end of a `#define` line.
