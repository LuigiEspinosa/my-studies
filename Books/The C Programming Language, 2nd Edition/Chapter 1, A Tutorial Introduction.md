A C program, whatever its size, consists of functions and variables. A function contains statements that specify the computing operations to be done, and variables store values used during the computation. C functions are like the subroutines and functions of Fortran or the procedures and functions of Pascal. Our example is a function named, `main`. Normally you are at liberty to give functions whatever names you like, but "`main`" is special-your program begins executing at the
beginning of `main`. This means that every program must have a main somewhere.

`main` will usually call other functions to help perform its job, some that you wrote, and others from libraries that are provided for you.

## Variables and Arithmetic Expressions

The 1970's was a time of transition in the amount of memory installed in computers. The C language `int` type was 16 bits in the older but more generally available computers like the PDP/11. C could be used to write programs line the UNIX operating that made efficient use of available memory. The size of an integer affected the maximum size of arrays and strings. A lot of early C programs used the `long` type to get at least 32-bit integer capable of representing numbers up to about two billion. In modern computers and databases we tend to choose between 32 bit and 64 bit integers.

C provides several other basic data types:

- `char` - Character, a single byte.
- `short` - Short Integer.
- `long` - Long Integer.
- `double` - Double-precision floating point.
- `int` - Integers.
- `float` - Floating point.

Integer division with truncation (especially for 16-bit numbers) was quite fast in 1970's computers compared to floating point division that kept the fractional part intact. Early PDP/11 computers did integer division in *hardware* while floating point was done with loops and functions so it was far slower.

By the way, `printf` is *not* part of the C language; there is no input or output defined in C itself. `printf` is a general-purpose output formatting function which is part of the standard library of routines that are normally accessible to C programs.

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

The syntax of the `for` and `while` loops is a feature of C-like languages. In modern languages we tend to have two kinds of loop structures - determinant and indeterminant. The `for` and `while` loop structures are indeterminate because you must read them closely to make sure they are properly constructed and, for example, are not unintentionally "infinite loops".

An example of a determinant loop is the `foreach` loop in PHP or `for` loop in Python. The semantics of both of these loops is to iterate over all of the elements in a collection. Because the collections are not infinite, you can be assured that these determinant loops will not run forever.

## Symbolic Constants

It's bad practice to bury "magic numbers" like 300 and 20 in a program; they convey little information to someone who might have to read the program later, and they are hard to change in a systematic way. One way to deal with magic numbers is to give them meaningful names. A `#define` line defines *symbolic name* or *symbolic constant* to be a particular string of characters.

Symbolic constant names are conventionally written in upper case so they can be readily distinguished from lower case variable names. Notice that there is **no** semicolon at the end of a `#define` line.

## Character Input and Output

Text input or output, regardless of where it originates or where it goes to, is dealt with as streams of characters. A *text stream* is a sequence of characters divided into lines; each line consists of zero or more characters followed by a newline character.

The standard library provides several functions for reading or writing one character at a time.

- `getchar()` - reads the *next input character* from a text stream and returns that as its value.
- `putchar()` - prints a character each time it is called.

`long` integers are at least 32 bits. Although on some machines, `int` and `long` are the same size, on others `int` is 16 bits, with a maximum value of 32767, and it would take relatively little input to overflow an `int` counter.

> The isolated semicolon, It's called a *null statement*.

Modern C compilers define `EOF` in the `stdio.h` include file - so you should never define `EOF` in your code. In modern C, the value of `EOF` is -1, but you should just include `stdio.h` and use pre-defined `EOF` constant to check for end of file.

The "nuisance" of different values for `EOF` was resolved shortly after 1978.

The numeric values that are shown for characters are using the ASCII character set. Character sets in the 1970's were quite intricate. Most were eight bits long to conserve computer memory and only support 100 or so supported Latin-like characters. This is why early programming languages use special characters like `*` and `{` in their syntax very carefully. They needed to choose characters that were commonly available on computer keyboards from different manufacturers.

Modern languages store internal string values using the Unicode character set so they are able to represent all characters in all languages around the world. Modern languages tend to represent eight bit values (range 0-256) using a `byte`or similar type.

The `||` and `&&` are the norm for boolean operators in "C-like" languages.

## Arrays

The number of elements of an array *cannot* be adjusted using an array declaration while the program is running.

This inability to automatically resize C arrays as data is added, leads to a class of security flaws that are generally referred to as "buffer overflow" where a program reads more data than can fit into an array and is tricked to overwriting other data or code and compromising an application.

The underlying technique that is used to implement language structures like Python's `list` is dynamic memory allocation and a "linked list" structure. Linked lists are one of the most important data structures in all of Computer Science.

## Functions

A function provides a convenient way encapsulate some computation in a black box, which can be used without worrying about its innards. Functions are really the only way to cope with the potential complexity of large programs.

## Arguments - Call by Value

In C, all function arguments are passed "by value". This means that the called function is given the values of its arguments in temporary variables (actually on a stack) rather than their addresses.

Passing by reference was the norm before C and passing by value was the norm after C. It is nice because it isolates the data in the calling code form the called code - so the called code can't easily mess with its arguments and create an unexpected side effect (and possibly a bug / security flaw) in the calling code.

C implements a "call stack" where a bit of memory is allocated at each function call and C makes a copy of the values in the calling code to pass them into the called code in a way that the calling code can see the values and change their local copies without affecting the values in the calling code.

The same "call stack" that made it possible for C functions arguments to be passed by value, also made it possible for a function to call itself recursively.

When the name of an array is used as an argument, the value passed to the function is actually the location or address of the beginning of the array. (There is no copying of array elements.) By subscripting this value, the function can access and alter any element of the array.

## Character Arrays

Recall that in C array sizes do not grow and shrink dynamically after they are allocated.

> [!info]
> Change the book's original use of a function named `getline()` to `get_line()` in code examples, because it conflicts with the `stdio.h` file the defines `getline()` as a library function.

`get_line` puts the character `\0` (the *null character*, whose value is zero) at the end of the array it is creating, to mark the end of the string of characters this conversion is also used by the C compiler: when a string constant like `"hello\n"` is written in a C program, the compiler creates an array of characters containing the characters of the string, and terminates it with a `\0` so that functions such as `printf` can detect the end:

<table>
	<thead>
		<tr>
			<th>h</th>
			<th>e</th>
			<th>l</th>
			<th>l</th>
			<th>o</th>
			<th>\n</th>
			<th>\0</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>

The `%s` format specification in `printf` expects a string represented in this form.

## External Variables and Scope

The variables in `main` (`line`, `save`, etc.) are private or local to `main`: because they are declared within `main`, no other function can have direct access to them. The same is true of the variables in order functions; for example, the variable `in` in `get_line` is unrelated to the `in` in `copy`. Each local variable in routine comes into existence only when the function is called, and `disappears` when the function is exited. It is for this reason that such variables are usually know as `automatic` variables, following terminology in other languages. We will use the term automatic henceforth to refer to these dynamic local variables.

Because automatic variables come and go with function, they do not retain their values from one call to the next, and must be explicitly set upon each entry. If they are not set, the will contain garbage.

As an alternative to automatic variables, it is possible to define variables which are `external` to all functions, that is, global variables which can be accessed by name by any function that cares to.

Before a function can use an external variable, the name of the variable must be made known to the function. One way to do this is to write an `extern` *declaration* in the function.
