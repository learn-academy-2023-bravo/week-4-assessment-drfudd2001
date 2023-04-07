# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your __OWN WORDS__.

---
---

### 1. What is object-oriented programming? How is it different than functional programming?

Your answer:

- Object-oriented programming (OOP): OOP is a way of writing computer programs that focuses on "objects" which contain both data and code that works with that data. Objects can interact with each other through "methods", which are like actions that can be performed on the object's data. OOP is different from "functional programming", which is another way of writing computer programs that focuses on using "functions" to process data instead of objects.

---

Researched answer:

- Object-oriented programming (OOP): Object-oriented programming is a programming paradigm that is centered around the concept of "objects," which are instances of classes that encapsulate both data and behavior. The goal of OOP is to create modular, reusable code that more closely mirrors the real world. OOP provides several advantages over other programming paradigms, including better code organization, easier maintenance, and the ability to model complex systems with ease. One of the key principles of OOP is inheritance, which allows for the creation of new classes that inherit properties and methods from existing classes. Inheritance is an important tool for creating modular, reusable code, as it allows for the creation of specialized classes that share much of their behavior with other classes. Another important principle of OOP is encapsulation, which is the practice of keeping data and behavior separate and hiding implementation details from the outside world. Encapsulation helps to ensure that changes to one part of a program don't have unintended effects on other parts of the program.
- Here's an example of OPP that can be reused to create as may different cars as you want:
    ```ruby
    # Define a Car class with some instance variables and methods
    class Car
    def initialize(color, make_model)
        @color = color
        @make_model = make_model
        @engine_running = false
    end

    def start
        @engine_running = true
    end

    def drive
        if @engine_running
        puts "Vroom vroom!"
        else
        puts "The engine isn't running!"
        end
    end
    end

    # Create a new Car object and use its methods
    my_car = Car.new("red", "Toyota Tercel") # My first car! 🚗 🚓💨
    my_car.start
    my_car.drive
    ```
---
---

### 2. What is the difference between a Float and an Integer in Ruby?

Your answer:

- Float and Integer in Ruby: A "Float" is a type of number in programming that can have a "decimal point" and represent fractions or parts of a whole number. An "Integer" is a type of number in programming that represents whole numbers without any decimal points. Here are some examples:
    ```ruby
    # This is a Float because it has a decimal point
    price = 2.99

    # This is an Integer because it has no decimal point
    quantity = 5
    ```

---

Researched answer:

- Float and Integer in Ruby: In Ruby, a Float is a data type that represents a floating-point number with a fractional component, while an Integer is a data type that represents a whole number with no fractional component. Because Float values are represented using binary fractions, they can sometimes be imprecise when compared to decimal fractions. It's important to be aware of this when doing calculations with Float values, as it can lead to unexpected results. For example, if you write 0.1 + 0.2, you might expect to get 0.3, but due to the imprecision of floating-point numbers, you will actually get 0.30000000000000004. In contrast, Integer values are always precise, and can be used for calculations where exactness is important. However, it's important to be aware of the potential for integer overflow, where an integer value becomes too large to be represented by the computer's memory. In Ruby, integers can be of arbitrary size, so overflow is less of a concern than in some other languages, but it's still something to keep in mind when doing calculations with very large numbers.
    ```ruby
    # Define a variable as a Float and an Integer
    my_float = 3.14
    my_integer = 5

    # Use the variables in some calculations
    puts my_float + my_integer
    puts my_integer / 2
    ```
---
---

### 3. Ruby has an implicit return. What does that mean?

Your answer:

- Implicit return in Ruby: In Ruby, when you write a block of code like a method or a loop, the last line of code will automatically be the "return value" of the block. This means you don't need to use the word "return" to return a value from the block. Here's an example: 
    ```ruby
    # This method adds two numbers and returns the result
    def add_numbers(a, b)
        a + b  # This is the implicit return value
    end

    # We can call the method and get the result
    result = add_numbers(2, 3)
    puts result
    ```

---

Researched answer:

-  Implicit return in Ruby: In Ruby, the last evaluated expression in a method is automatically returned, unless there is an explicit return statement somewhere else in the method. This can be a powerful shorthand for writing concise code, but it can also lead to confusion if you're not careful. It's important to keep in mind that return statements can be used to explicitly return a value from a method, even if it's not the last evaluated expression. One common mistake when using implicit return in Ruby is to forget that certain statements, like if statements and puts statements, do not return a value. 
- Here's an example of implicit return:
    ```ruby
    def double(number)
    number * 2
    end

    # Call the method and print the return value
    puts double(5)
    ```

---
---

### 4. What is a block in Ruby?

Your answer:

- Blocks in Ruby: A "block" in Ruby is a way of writing a short piece of code that can be "passed in" to another method to be used. Blocks are often used to perform a task repeatedly or to sort data. Here's an example:
    ```rb
    # This method calls the block repeatedly with each number in the list
    def do_something_with_each_number(numbers)
        numbers.each do |number|
            yield number
        end
    end

    # We can call the method and pass in a block of code to be executed with each number
    do_something_with_each_number([1, 2, 3]) do |number|
        puts number * 2
    end
    # This will print:
    # 2
    # 4
    # 6
    ```

---

Researched answer:

- Blocks in Ruby: In Ruby, a block is a piece of code that can be passed to a method as an argument. Blocks are typically used for iterating over collections of data, like arrays or hashes, and performing some operation on each element. Blocks are defined using either the do..end syntax or curly braces {..}. When a block is passed to a method, it can be executed by calling the yield keyword within the method.
One powerful feature of blocks in Ruby is their ability to capture variables from the surrounding scope. This is called a closure, and it allows the block to reference variables from the calling context.
- Here's a simple example of a ruby block:
    ```ruby
    # Define a method that accepts a block
    def repeat(n)
    n.times do
        yield
    end
    end

    # Call the method with a block and print some text
    repeat(3) { puts "Hello, world!" }
    ```
---
---

### 5. How do you extract a value in a Ruby hash?

Your answer:

- Extracting a value from a Ruby hash: A "hash" in Ruby is a way of storing data that is associated with a "key". To extract a value from a hash, you can use the key to "look up" the value. Here's an example:
    ```ruby
    # This hash maps fruit names to their colors
    fruit_colors = {"apple" => "red", "banana" => "yellow", "orange" => "orange"}

    # We can extract the color of an apple by using the "[]" operator and the key "apple"
    color = fruit_colors["apple"]
    puts color  #=> "red"
    ```

---

Researched answer:

- Extracting values from a Ruby hash: In Ruby, a hash is a collection of key-value pairs, where each key is unique. To extract a value from a hash, you can use the square bracket syntax [], passing in the key as an argument. For example, consider the following code:
    ```ruby
    person = { name: "Alice", age: 30, occupation: "Programmer" }

    puts person[:name]  # Output: "Alice"
    puts person[:age]   # Output: 30
    puts person[:hometown]   # Output: nil
    ```
- In this case, we're defining a hash called person that contains three key-value pairs. To extract a value from the hash, we're using the square bracket syntax, passing in the key as an argument. If the key is found in the hash, the corresponding value will be returned. If the key is not found, nil will be returned. It's important to be aware of this behavior when working with hashes, as it can lead to unexpected results if you're not careful. For example, if you try to extract a value using a key that doesn't exist, you might accidentally try to perform an operation on nil, which could lead to a NoMethodError or other error. To avoid this, it's a good practice to check whether the key exists in the hash using the has_key? method before trying to extract a value.
---
---

## Looking Ahead: Terms for Next Week

1. RSpec:
- RSpec is a testing framework for the Ruby programming language that allows developers to write automated tests for their Ruby code using a human-readable syntax. It is designed to support behavior-driven development (BDD) and provides a rich set of matchers to define expectations. Behavior-driven development (BDD) is a software development methodology that focuses on describing the behavior of the software from the user's perspective. 
- __In other words; it's like a microscope for your Ruby code, helping you see what's really going on.__

---

2. Test-driven development:
- Test-driven development (TDD) is a software development methodology that emphasizes writing automated tests before writing the code. In TDD, the developer writes a failing test that describes the behavior they want to implement, then writes the code to make the test pass, and finally refactors the code to improve its design without changing its behavior. This process is repeated for each new feature or change to the code. The goal of TDD is to ensure that the code meets the desired behavior and prevents regression bugs from being introduced as new features are added or existing features are modified. By writing tests first, developers can have a better understanding of what needs to be implemented, reduce the amount of time spent debugging, and produce more maintainable code.
- __In other words; writing tests before code - because sometimes it's easier to break something before it's even built.__

---

3. PostgreSQL:
-PostgreSQL is an open-source relational database management system (RDBMS) that is used to store and manage large amounts of data. It is a powerful and highly scalable database system that has a reputation for reliability and robustness. PostgreSQL supports many advanced features, such as transactions, views, triggers, and stored procedures, and is designed to be compliant with SQL standards. It is also highly extensible, allowing users to add their own custom data types, functions, and operators. PostgreSQL has a large and active community of users and developers who contribute to its ongoing development and improvement. It is used by many organizations and businesses, from small startups to large enterprises, and is often the preferred choice for applications that require a high level of data integrity and security. 
- __In other words; the quiet, dependable workhorse of the database world. It's like a faithful donkey that can carry your data wherever you need it to go.__

---

4. CRUD:
- CRUD stands for Create, Read, Update, and Delete. It is a set of fundamental operations that are commonly used to manage data in a database or any other persistent storage system.

    - Create: The create operation is used to insert new data into a database. It involves defining a new record or entry in the database, typically by specifying values for each field or column.

    - Read: The read operation is used to retrieve data from a database. It involves querying the database for specific data, often based on one or more criteria, and returning the matching records.

    - Update: The update operation is used to modify existing data in a database. It involves changing one or more fields or columns in an existing record, typically based on some criteria such as an ID or unique key.

    - Delete: The delete operation is used to remove data from a database. It involves removing one or more records from the database, typically based on some criteria such as an ID or unique key.

- CRUD operations are used extensively in web development, especially in the context of RESTful APIs, which provide a standardized way of accessing and manipulating data over the internet. 
- __In other words; the four horsemen of the database apocalypse - they create, they read, they update, and they delete. Watch out!__

---

5. HTTP:
- HTTP (Hypertext Transfer Protocol) is a protocol used to exchange data over the internet. It is the foundation of data communication on the World Wide Web and is used by web browsers and servers to communicate with each other. HTTP is a client-server protocol, which means that there are two types of participants in the communication: the client, typically a web browser, and the server, which hosts the web page or resource being requested. The client sends an HTTP request to the server, and the server responds with an HTTP response, typically containing the requested data. HTTP requests and responses are made up of a set of headers and a message body. The headers contain metadata about the message, such as the content type and encoding, while the message body contains the actual data being exchanged. HTTP is a stateless protocol, which means that each request/response pair is independent of any previous or subsequent requests/responses. However, web applications often need to maintain state information, and this is typically done using cookies, sessions, or other mechanisms. HTTP has several methods (also known as verbs) that can be used in requests to indicate the desired action to be performed, such as GET to retrieve a resource, POST to submit data to be processed, PUT to update a resource, and DELETE to remove a resource. 
- __In other words; it's like a postman for the internet, delivering messages to and from web servers. Just don't ask him to carry anything too heavy.__
