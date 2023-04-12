# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️  "Matz is nice so we are nice"

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# define a method called `even_or_odd` that takes a number as an argument
def even_or_odd(number)
    # check if the number is even
    if number % 2 == 0
        # if the number is even, return a string indicating so
        return "#{number} is even"
    else
        # if the number is odd, return a string indicating so
        return "#{number} is odd"
    end
end

reposts1 = 7
# Expected output: '7 is odd'

puts even_or_odd(reposts1)
# Output: 7 is odd

reposts2 = 42
# Expected output: '42 is even'

puts even_or_odd(reposts2)
# Output: 42 is even

reposts3 = 221
# Expected output: '221 is odd'

puts even_or_odd(reposts3)
# Output: 221 is odd

# Refactored code:

# define a method called `even_or_odd` that takes a number as an argument
def even_or_odd_refactored(number)
    # use a ternary operator to check if the number is even
    return number % 2 == 0 ? "#{number} is even" : "#{number} is odd"
end


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# define a method called `remove_vowels` that takes a string as an argument
def remove_vowels(string)
    # use the `delete` method to remove all vowels from the string
    string.delete("aeiouAEIOU")
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'

puts remove_vowels(beatles_album1)
# Output: Rbbr Sl

beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'

puts remove_vowels(beatles_album2)
# Output: Sgt Pppr

beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

puts remove_vowels(beatles_album3)
# Output: bby Rd

# Refactor code:

# define a method called `remove_vowels` that takes a string as an argument
def remove_vowels_1(string)
    # use the `gsub` (global substitution) method to replace all vowels (using Regex or regular expression; and 'i' to make the pattern case insensitive), with an empty string.
    string.gsub(/[aeiou]/i, '')
    # string.gsub(/pattern/, "replacement")
end

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindrome?(str)
    # Remove any non-alphanumeric characters and convert to lowercase
    clean_str = str.downcase.gsub(/[^a-z0-9]/i, '')
        # Check if the reversed string is equal to the original (i.e. if it's a palindrome)
        if clean_str == clean_str.reverse
            "#{str} is a palindrome"
        else
            "#{str} is not a palindrome"
    end
end

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'

puts palindrome?(palindrome_tester1)
# Output: Racecar is a palindrome


palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'

puts palindrome?(palindrome_tester2)
# Output: LEARN is not a palindrome

palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

puts palindrome?(palindrome_tester3)
# Output: Rotator is a palindrome

# Refactor code:

def refactored_palindrome?(str)
    # Remove any non-alphanumeric characters ("/\W+/" looks for anything that is not a letter, a digit, or and underscore, and removes it; the "+" means one or more occurrences if "\W") and convert to lowercase
    clean_str = str.downcase.gsub(/\W+/, '')
        # Check if the reversed string is equal to the original (i.e. if it's a palindrome)
        "#{str} is " + (clean_str == clean_str.reverse ? '' : 'not ') + 'a palindrome'
end