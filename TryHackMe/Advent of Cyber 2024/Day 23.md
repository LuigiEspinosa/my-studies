## You wanna know what happens to your hashes?

[TryHackMe - Advent of Cyber 2024 - Day 23 Walkthrough](https://www.youtube.com/watch?v=Nf5txFuGKvM)

A long time ago, before security was a “thing”, passwords were stored in cleartext along with the associated username. When the user tries to log in, the system compares the provided password for this account with the saved one. Consequently, if a user forgets their password, someone with enough access privileges can look at the table and respond with something like, “The password for `joebloggs` is `ASDF1234`.”

To protect passwords, even in the case of a data breach, companies started to save a hashed version of the password. For that, we need to use a hash function. A hash function takes an input of any size and returns a fixed size value. For example, SHA256 (Secure Hash Algorithm 256) creates a 256-bit hash value. In other words, `sha256sum FILE_NAME` will return a 256-bit hash value regardless of whether the input file is a few bytes or several gigabytes.

MD5 is now considered insecure. In addition to choosing a secure hash function, we should add a **salt**, i.e., _a random string of characters_, to the password before hashing it. In other words, instead of saving `hash(password)` in the table, we save `hash(password + salt)` along with the salt. Consequently, when the user tries to log in, the authentication system takes their password along with the saved salt, calculates its hash and compares it with the saved hash value; if identical, they are granted access. This makes the saved passwords more immune to a variety attacks.

Although it is recommended to use a modern secure hashing algorithm to calculate the hash value of the password concatenated with a random salt before saving it, reality is not that shiny. In many cases, there are issues in the implementation, be it due to negligence or ignorance. In a recent story, a social media platform was discovered to have saved 600 million passwords in plaintext for seven years, despite all the security guidelines warning against that. In other words, password cracking is not over yet.
