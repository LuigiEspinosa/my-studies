# JAVA - Code Your Way to Corporate - A Beginners Guide to Learn the Latest Edition of Java Programming and Coding By Anton Romanov (2015)

After being officially launched as "Java" in the mid-90's (1995), it has been catapulted to the forefront of programming. Java is an object oriented language, where everything is an Object.

## Java Basic Syntax and Operators

- **Object:** It's a Java component that presents states and behaviours. By states, we mean the basic traits, and by behaviour, we are talking about what we can expect from the object development. Using an analogy, consider someone named Mike: his states will be his name, nationality, everything that defines him as a person, while the behaviours will be the code of norms and rules he will use to fit in society.
- **Class:** The class is the support where the objects will be placed, according to each type.
- **Methods:** A class can contain several methods; with these, you'll define a set of rules, manipulate the data, and execute actions.
- **Instance Variables:** The instance variables make the object unique, since you'll be able to set values to each one.

### Rules

1. Java has case sensitivity; a single capital letter will make a difference, so "Mike" and "mike" can have different meanings.
2. For all Class names, the first letter should always be capital, even if it's a set of words you can have the class "TheFirstLetterShouldBeCapital".
3. The Method names should begin with a lower case, but a set of words must have a capital letter in the first letter excluding the first word "theMethodNameIsLikeThis()".
4. The program file name should be the same as the class name. Remember the first point of case sensitivity, and when you save the file, always append ".java" at the end; otherwise, your program will not work. If the class name is "TheFirstLetterShouldBeCapital", then, the program file would be "TheFirstLetterShouldBeCapital.java".
5. Public static void main (string args []) start from the main "()" method; it's mandatory and the program won't work without it.

### Identifiers

1. Java has case sensitivity; a single capital letter will make a difference, so "Mike" and "mike" can have different meanings.
2. For all Class names, the first letter should always be capital, even if it's a set of words you can have the class "TheFirstLetterShouldBeCapital".
3. The Method names should begin with a lower case, but a set of words must have a capital letter in the first letter excluding the first word "theMethodNameIsLikeThis()".
4. The program file name should be the same as the class name. Remember the first point of case sensitivity, and when you save the file, always append ".java" at the end; otherwise, your program will not work. If the class name is "TheFirstLetterShouldBeCapital", then, the program file would be "TheFirstLetterShouldBeCapital.java".
5. Public static void main (string args []) start from the main "()" method; it's mandatory and the program won't work without it.

### Java Modifiers

If you have experience with any programming language, you'll know that modifiers are widely used; they allow modifying classes, methods, and variables and are divided into two categories:

1. Access Modifiers
2. Non Access Modifiers

### Java Variables

Concerning Java language, we can distinguish three types of variables:

1. Local Variables
2. Class Variables
3. Non-static Variables or Instance Variables

### Java Arrays

In Java language, the arrays are objects that contain multiple variables of the same type.

### Keywords

![List of Keywords in Java](https://www.journaldev.com/wp-content/uploads/2019/09/java-keywords.png)

### Inheritance

With Java you need not keep creating classes from the start. If there's a class with some code you require, you can simply derive the new code from the original one, reusing the fields and methods available. The original class is called superclass, and the derived one is called subclass.

### Interfaces

The interface is the way objects communicate with each other. The interface will define the method, and the inheritance will define the deriving class, making the inheritance important to build a steady program.

## Operators

![Java Basic Operators](https://media.geeksforgeeks.org/wp-content/uploads/arithmetic-operators.png)

### Relational Operators

![Java Relational Operators](https://www.startertutorials.com/corejava/wp-content/uploads/2014/10/Relational-operators.jpg)

### Bitwise Operators

Java defines several bitwise operators, which can be applied to the integer types, long, int, short, char, and byte.

![Java Bitwise Operators](https://www.startertutorials.com/corejava/wp-content/uploads/2014/10/Bitwise-operators.jpg)

### Logical Operators

![Java Logical Operators](https://www.examtray.com/sites/default/files/2019-06/java-boolean-logical-operators-priotiry-table.jpg)

### Assignment Operators

![Java Assignment Operators](https://2.bp.blogspot.com/-uSA_dVZCceE/WXHq022NL0I/AAAAAAAAAHc/ViBXzmMXE7UwdzbJNTBSYZpBZ6SY_mP7gCLcBGAs/s1600/Assignment%2Boperators%2Bin%2Bjava.png)

### Precedence of Operators

![Precedence of Operators in Java](https://examples.javacodegeeks.com/wp-content/uploads/2019/12/fig1-691x1024.jpeg)

## Classes and Objects

### Classes

A class is a template for multiple objects with similar features, which embodies all the features of a particular set of objects.

#### Attributes

In Java, attributes are individual aspects that can distinguish one object from another, determining the appearance, state, or any other qualities of that object. They are defined by (instance) variables.

#### Behavior

We can define behavior as the way objects can do anything to themselves or have anything done to them. A class behavior has a word on what that class does when the internal state changes or when it is asked to do something by another class or object. To define an object's behavior, you must create methods, which are defined inside a class and operate on the instances of those classes.

### Objects

For what's related to objects, let's use an analogy. If we think about our daily routine, we can find many objects around us, such as humans, cars, or dogs, all of which have a state and a behavior. Compared with the software object, they are similar.

## Data Types

### Primitive Data Types

There are eight primitive data types in Java: byte, short, int, long, float, double, Boolean and char.

### Reference Data Types

A reference data type is created, using a defined constructor for the class to access objects. The variables are declared to be in a specific type that will be unchangeable.

- Class objects and several types of array variables come under reference data type.
- Default value of any reference variable is null.
- A reference variable can refer to any object.

### Java Literals

A literal represents a fixed value with no computation. Byte, int, long and short can be expressed in base 10, base 16, base 8; the prefix 0 can indicate octal, and 0x can indicate hexadecimal. A string and char can have any Unicode character.

![Escape sequences](https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2020/05/Escape-Sequences-in-Java.jpg)

## Variables

### Local variables

These variables are declared in methods or blocks, created when the method is entered and the variable will be destroyed once it exits the method. It's impossible to use access modifiers for local variables. These are visible, only within the method, implemented internally at stack level, and there's no default value.

### Instance Variables

A slot for an instance variable is created when a space is allocated for an object, using the keyword "new", and destroyed after the destruction of the object. It holds values that must be referenced by more than one method and can be declared in class level before or after use. Instance variables can have access modifiers and are visible for all methods; however, it is recommended to make these as private variables.

### Class/static variables

A class variable, also known as static variable, is declared outside the method, using a static keyword. There's only one copy of each variable per class, independent of how many objects were created from it. These variables are often used to be declared as constants, never changing from their initial value.

The storage is made within the static memory, created when the program starts and destroyed when the program stops. The visibility and default values are similar to the instance variables; however, initial values can be assigned in special static blocks. These can be accessed by the class name.

## Java Modifier

Types A modifier is simply a keyword added to the definitions to change their meaning.

### Java Access Modifiers

The access modifiers allow access to classes, variables, methods, and constructors, according to four access levels:

a) Visible to the package, the default. No modifiers are needed.

```java
// Declaration of variables without modifiers

String version = '1.5.1'

boolean processOrder {
  return true
}
```

b) Visible to the class only (private).

```java
// User of private modifiers

public class Logger {
  private String format;

  public String getFormat() {
    return this.format;
  }

  public void setFormat(String format) {
    this.format = format;
  }
}
```

c) Visible to the world (public).
d) Visible to the package and all subclasses (protected).

```java
// Protected access modifiers

class AudioPlayer {
  protected boolean openSpeaker(Speaker sp) {
    // Implementation details
  }
}

class StreamingAudioPlayer {
  boolean openSpeaker(Speaekr sp) {
    // Implementation details
  }
}
```

### Access Control and Inheritance

The Access Control and Inheritance follows a set of rules:

- Methods declared public in a superclass also must be public in all subclasses.
- Methods declared protected in a superclass must either be protected or public in subclasses, meaning they cannot be private.
- Methods declared without access control, with no use of modifier, can be declared private in subclasses.
-Methods declared private are not inherited , so no rule applies to them.

### Non Access Modifiers

To use a modifier, it's only needed to include the keyword in the definition of a class, method, or variable preceding the rest of the statement. In the example of the image below, the modifiers are in italic.

```java
public class ClassName {
  // ...
}

private boolean myFlag;
static final double weeks = 9.5;
protected static final int BOXWIDTH = 42;

public static void main(String[] arguments) {
  // Body of method
}
```

Java provides several non-access modifiers to reach several functionalities.

- *Static modifier* for class methods and variables.
- *Final modifier* for finalizing the implementations of classes, methods, and variables.
- *Abstract modifier* for abstract classes and methods.
- *Synchronized and volatile modifiers* for threads.

## Java Loop Control

### While Loop

```java
while (Boolean_expression) {
  // Statements
}
```

### Do While Loop

```java
do  {
  // Statements
} while (Boolean_expression)
```

### For Loop

```java
for (initialization; Boolean_expression; update) {
  // Statements
}
```

### The "break" keyword

If you write the keyword break in your code, the entire loop will be stopped; it must be inserted inside a loop or as a switch statement.

```java
public class Test {
  public static void main(String args[]) {
    int[] numbers = [10, 20, 30, 40, 50];

    for (int x : numbers) {
      if (x == 30) {
        break;
      }

      System.out.print(x)
      System.out.print("\n")
    }
  }
}
```

### The "continue" keyword

The continue keyword causes the loop to immediately jump to the next iteration.

```java
public class Test {
  public static void main(String args[]) {
    int[] numbers = [10, 20, 30, 40, 50];

    for (int x : numbers) {
      if (x == 30) {
        continue;
      }

      System.out.print(x)
      System.out.print("\n")
    }
  }
}
```

## Java Decision Making

### If Statements

```java
if (Boolean_expression) {
  // Statements
}
```

#### If/else Statements

```java
if (Boolean_expression) {
  // Statements
} else {
  // Statements
}
```

#### If/else/if/else Statements

```java
if (Boolean_expression) {
  // Statements
} else if (Boolean_expression2) {
  // Statements
} else {
  // Statements
} (...)
```

#### Nested if/else Statements

```java
if (Boolean_expression) {
  if (Boolean_expression2) {
    // Statements
  }
} else {
  // Statements
}
```

### Switch Statement

```java
switch (expression) {
  case value:
    // Statement
    break;
  case value:
    // Statement
    break;
  default:
    // Statement
}
```
