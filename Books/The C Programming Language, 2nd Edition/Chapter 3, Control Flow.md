# Chapter 3: Control Flow

The control flow statements of a language specify the order in which computations are done.

## Statements and Blocks

An _expression_ such as `x = 0` or `i++` or `printf( ... )` becomes a _statement_ when it is followed by a semicolon.

The braces { and } are sued to group declarations and statements together into a _compound statement_ or _block_ so that they are syntactically equivalent to a single statement.

## If-Else

The `if-else` statement is used to make decisions. The _expression_ is evaluated, if it is "true", first statement is done. if it is "false" and if there is an `else` part, second statement is executed instead.

## Else-if

This sequence of `if`'s is the most general way of writing a multi-way decision. The _expressions's_ are evaluated in order, if any _expression_ is true, the _statement_ associated with it is executed, and this terminates the whole chain. The code for each _statement_ is either a single statement, or a group in braces.

The last `else` part handles the "non of the above" or default case where none of the conditions was satisfied.

## Switch

The `switch` statement is a special multi-way decision maker that tests whether an expression matches one of a number of _constant_ values, and branches accordingly.

There are very few situations where a branch table outperforms a series of if-else checks and those are likely deep in library or operating system code. Programmers should only use `switch` if they understand what a branch table is, and why is more efficient of this particular bit of their program. Otherwise just use `else if` to do the readers of your code a favor.

## Loops - While and For

The _expression_ is evaluated. If it is non-zero, _statement_ is executed and _expression_ is re-evaluated. This cycle continues until _expression_ becomes zero, at which point execution resumes after _statement_.

The commas that separate function arguments, variables in declarations, etc., are _not_ comma operators, and do _not_ guarantee left to right evaluation.

## Loops - Do-while

The `while` and `for` loops share the desirable attribute of testing the termination condition at the top, rather than at the bottom. The third loop in C, the `do-while`, test at the bottom _after_ making each pass through the loop body; the body is always executed atleast once.

## Break

It is sometimes convenient to be able to control loop exits other than by testing at the top or bottom. The `break` statement provides an early exit from `for`, `while`, and `do`, just as from `switch`. A `break` statement causes the innermost enclosing loop (or `switch`) to be exited immediately.

## Continue

The `continue` statement is realted to `break`, but less often used; it causes the _next iteration_ of the enclosing loop (`for`, `while`, `do`) to begin. In the `while` and `do`, this means that the test part is executed immediately; in the `for`, `control` passes to the re-initialization step. (`continue` applies only to loops, not to `switch`, A continue inside a `switch` inside a loop causes the next loop iteration.)

## Goto's and Labels

The most common use is to abandon processing in some deeply nested structure, such as breaking out of two loops at once. The `break` statement cannot be used directly since it leaves only the innermost loop. Thus:

```c
for (...)
  for (...) {
    ...
    if (disaster)
      goto error;
  }
```

error clean up the mess.

As new languages were built the concept of "exceptions" became part of language design and was a far more elegant solution to a path of some deeply nested code that just needs to "get out". So most of the time you think `goto` es a good idae - you should lean towards a `throw` / `catch` pattern to make your intention clear.
