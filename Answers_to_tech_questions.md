# Technical Questions

# How long did you spend on the coding assignment?

I spend around 5-6 hours to to create a new version from scratch and complete the assessment according to user story
## A) What would you add to your solution if you had more time?  B) If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
I would include the following functionality:

- A loading state until data is being fetched.
- Show only limited books like 10 at first and provide a button functionality to view next 10 and so on.
- would store the api information for this app into a local storage in order to manipulate it with filters.
-  need to add more tests
  
# What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
## Logical assignment operator
Logical assignment operators combine logical operators and assignment expressions.
There are some new operators:

- And & Equals (&&=)
- OR & Equals (||=)
- Nullish Coalescing & Equals (??=)

my favorite one is And & Equals (&&=).

### &&=
Assign when the value is truthy.
#### Before
```
let a = 1;
if(a){
  a = 8;
}

// Output: a = 8
```
#### After
```
let a = 1;
a &&= 3

// Output: a = 3
```
# How would you track down a performance issue in production? Have you ever had to do this?
  Following are the ways i would track down performance issues:
  - I would use light house audit to check Performance, SEO, Accessibility, and load times on the images for particular page.
  - I would include data analytical tracking on html tags using adobe analytics or google analytics to keep track of users interacting with what part of application and how much load time it is taking.
  - Also keep an eye out for server load times, in case it takes too long to load.
# How would you improve the API that you just used?
The api include long list of arrays of dates, isbn, contributors, etc. for each book. i would rather divide that info into new api and in this would return a api link to view extra data.
# Please describe yourself using correctly formatted JSON.
```

{
    "type": "Person",
    "properties": {
        "firstname": "Sehajpreet",
        "lastname": "singh",
        "alias": "Sehaj",
        "age": 24,
        "nationality": "Indian",
        "address": {
            "house_number": "27",
            "street": "Gemma Pl",
            "city": "Brampton",
            "province": "ON",
            "postal": "L6Z0J5"
        },
        "passions": [
            "Programming",
            "Digital Art",
            "Yoga"
        ],
        "interests": [
            "Yoga",
            "Technology",
            "Hiking"
        ],
        "dreams": [
            "To keep Learning!"
        ]
    }
}
```