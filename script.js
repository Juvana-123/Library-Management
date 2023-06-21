function getInfo() {
  var usernames = document.getElementById("username").value;
  var passwords = document.getElementById("password").value;
  var emails = document.getElementById("email").value;

  var objPeople = [
      {
          username: "sam",
          password: "001",
          email : "sam@example.com"
      },
      {
          username: "matt",
          password: "002",
          email : "matt@example.com"
      },
      {
          username: "chris",
          password: "003",
          email: "chris@example.com"
      }
  ];

  for (var i = 0; i < objPeople.length; i++) {
      if (usernames === objPeople[i].username && passwords === objPeople[i].password && emails === objPeople[i].email) {
          console.log(usernames + " is logged in successfully!!!");
          window.location.assign('staff.html');
          alert("Logged in successfully!!!");
          return;
      }
  }

  console.log("Incorrect username or password");
  alert("Invalid Information");
}
function showContenta() {
  
  var blurredContent = document.getElementById("blurred-contenta");
  blurredContent.style.display = "block";
  addBooks(allbook, "book-table0", "book-list0","searchBar0","count0");
}

function showContente() {
  
  var blurredContent = document.getElementById("blurred-contente");
  blurredContent.style.display = "block";
  addBooks(edu, "book-table1", "book-list1","searchBar1","count1");
}

function showContentn() {
  var blurredContent = document.getElementById("blurred-contentn");
  blurredContent.style.display = "block";
  addBooks(novels, "book-table2", "book-list2","searchBar2","count2");
}
function showContentc() {
  var blurredContent = document.getElementById("blurred-contentc");
  blurredContent.style.display = "block";
  addBooks(crime, "book-table3", "book-list3","searchBar3","count3");
}
function showContenth() {
  var blurredContent = document.getElementById("blurred-contenth");
  blurredContent.style.display = "block";
  addBooks(horror, "book-table4", "book-list4","searchBar4","count4");
}




function sortBooksByRating(array) {
  array.sort(function(a, b) {
    return b.rating - a.rating;
  });
}

function updateCount(count,countId) {
  document.getElementById(countId).textContent = count;
}

function handleRequestBook(){
  
  var formContainer = document.getElementById('formContainer');
var formCloseButton = document.getElementById('formCloseButton');
var myForm = document.getElementById('myForm');

requestButton.addEventListener('click', function() {
  formContainer.style.display = 'block';
}); 

formCloseButton.addEventListener('click', function() {
  formContainer.style.display = 'none';
});

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle form submission here
  // You can access form fields using their IDs like:
  // var name = document.getElementById('name').value;
  // var email = document.getElementById('email').value;
  // ...
  // Perform form validation and submission logic
  // ...
  formContainer.style.display = 'none'; // Hide the form after submission
});
}

// Function to add books to the table
function addBooks(array, tableId, listId, searchId,countId) {
  var searchBar = document.getElementById(searchId);
  var bookTable = document.getElementById(tableId);
  var bookList = document.getElementById(listId);
  // Clear existing table content
  bookList.innerHTML = "";

  // Sort books by rating
  sortBooksByRating(array);

  // Loop through the sorted books array and create table rows
  for (var i = 0; i < array.length; i++) {
    var book = array[i];
    var row = document.createElement("tr");
    // Create and append cells for each book property
    var titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    var authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    var ratingCell = document.createElement("td");
    ratingCell.textContent = book.rating;
    row.appendChild(ratingCell);

    var actionCell = document.createElement("td");
    var requestButton = document.createElement("button");
    requestButton.textContent = "Request Book";
    actionCell.appendChild(requestButton);
    row.appendChild(actionCell);

    
    // Append the row to the book list
    bookList.appendChild(row);
  }

  // Show the table once the books are added
  bookTable.style.display = "table";

  // Add event listener for search bar input
  
  searchBar.addEventListener("input", function () {
    var filter = searchBar.value.toUpperCase();
    var rows = bookList.getElementsByTagName("tr");
    var count = 0;
    // Loop through the rows and hide/show based on search filter
    for (var i = 0; i < rows.length; i++) {
      var title = rows[i].getElementsByTagName("td")[0];
      var author = rows[i].getElementsByTagName("td")[1];
      
      if (title.textContent.toUpperCase().indexOf(filter) > -1 || author.textContent.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
        count++;
      } else {
        rows[i].style.display = "none";
      }
    }
    updateCount(count,countId);
  });
}



// Array of books
var edu = [{
  title: "Introduction to Physics",
  author: "John Smith",
  rating: 4.5,
  publish:"19-11-2020"
},
{
  title: "Mathematics for Beginners",
  author: "Jane Johnson",
  rating: 3.8,
  publish:"19-11-2020"
},
{
  title: "History of World War II",
  author: "Michael Brown",
  rating: 4.2,
  publish:"19-11-2020"
},
{
  title: "Chemistry Fundamentals",
  author: "Emily Davis",
  rating: 4.1,
  publish:"19-11-2020"
},
{
  title: "Programming in Python",
  author: "David Wilson",
  rating: 4.6,
  publish:"19-11-2020"
},
{
  title: "English Grammar Guide",
  author: "Sarah Thompson",
  rating: 4.0,
  publish:"19-11-2020"
},
{
  title: "Geography: Exploring the World",
  author: "Robert Anderson",
  rating: 4.3,
  publish:"19-11-2020"
},
{
  title: "Art History: Renaissance to Modernism",
  author: "Jennifer Clark",
  rating: 4.4,
  publish:"19-11-2020"
},
{
  title: "Introduction to Economics",
  author: "Andrew Harris",
  rating: 3.9,
  publish:"19-11-2020"
},
{
  title: "Biology Essentials",
  author: "Laura Martinez",
  rating: 4.2,
  publish:"19-11-2020"
},
{
  title: "Philosophy: A Beginner's Guide",
  author: "Daniel Brown",
  rating: 4.1,
  publish:"19-11-2020"
},
{
  title: "Statistics Made Easy",
  author: "Thomas Johnson",
  rating: 4.3,
  publish:"19-11-2020"
},
{
  title: "Computer Science Fundamentals",
  author: "Jessica Wilson",
  rating: 4.6,
  publish:"19-11-2020"
},
{
  title: "Literature Classics: Shakespeare",
  author: "Michael Turner",
  rating: 4.5,
  publish:"19-11-2020"
},
{
  title: "Physics in Everyday Life",
  author: "Laura Adams",
  rating: 4.2,
  publish:"19-11-2020"
},
{
  title: "Understanding Psychology",
  author: "Daniel Moore",
  rating: 4.4,
  publish:"19-11-2020"
},
{
  title: "Environmental Science: A Global Perspective",
  author: "Emma Davis",
  rating: 4.1,
  publish:"19-11-2020"
},
{
  title: "Algebra Made Simple",
  author: "Kevin Wilson",
  rating: 4.3
},
{
  title: "Introduction to Sociology",
  author: "Alex Johnson",
  rating: 4.0
},
{
  title: "Theatre History: From Ancient Greece to Modern Times",
  author: "Sophia Turner",
  rating: 4.2
}
];
var novels = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.27 },
  { title: '1984', author: 'George Orwell', rating: 4.19 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 3.92 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.27 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 3.81 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', rating: 4.28 },
  { title: 'Brave New World', author: 'Aldous Huxley', rating: 3.99 },
  { title: 'To the Lighthouse', author: 'Virginia Woolf', rating: 3.78 },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', rating: 3.98 },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', rating: 4.06 },
  { title: 'Moby-Dick', author: 'Herman Melville', rating: 3.49 },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', rating: 4.49 },
  { title: 'Gone with the Wind', author: 'Margaret Mitchell', rating: 4.29 },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', rating: 4.2 },
  { title: 'Jane Eyre', author: 'Charlotte Brontë', rating: 4.12 },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', rating: 4.08 },
  { title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', rating: 3.85 },
  { title: 'Wuthering Heights', author: 'Emily Brontë', rating: 3.84 },
  { title: 'Anna Karenina', author: 'Leo Tolstoy', rating: 4.04 },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', rating: 4.32 }
];


var crime = [
  { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', rating: 4.2 },
  { title: 'Gone Girl', author: 'Gillian Flynn', rating: 4.0 },
  { title: 'The Da Vinci Code', author: 'Dan Brown', rating: 3.8 },
  { title: 'The Silence of the Lambs', author: 'Thomas Harris', rating: 4.3 },
  { title: 'The Big Sleep', author: 'Raymond Chandler', rating: 4.1 },
  { title: 'The Girl on the Train', author: 'Paula Hawkins', rating: 3.9 },
  { title: 'In Cold Blood', author: 'Truman Capote', rating: 4.4 },
  { title: 'The Godfather', author: 'Mario Puzo', rating: 4.5 },
  { title: 'The Secret History', author: 'Donna Tartt', rating: 4.2 },
  { title: 'The Maltese Falcon', author: 'Dashiell Hammett', rating: 4.0 },
  { title: 'And Then There Were None', author: 'Agatha Christie', rating: 4.6 },
  { title: 'The Cuckoo is Calling', author: 'Robert Galbraith', rating: 3.7 },
  { title: 'The Girl in the Ice', author: 'Robert Bryndza', rating: 4.1 },
  { title: 'Red Dragon', author: 'Thomas Harris', rating: 4.3 },
  { title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', rating: 4.4 },
  { title: 'The Black Dahlia', author: 'James Ellroy', rating: 3.8 },
  { title: 'Dark Places', author: 'Gillian Flynn', rating: 4.2 },
  { title: 'The No. 1 Ladies\' Detective Agency', author: 'Alexander McCall Smith', rating: 4.0 },
  { title: 'The Snowman', author: 'Jo Nesbø', rating: 4.3 },
  { title: 'The Talented Mr. Ripley', author: 'Patricia Highsmith', rating: 4.1 }
];

var horror = [
  { 
    title: "The Shining",
    author: "Stephen King",
    rating: 4.5
  },
  { 
    title: "It",
    author: "Stephen King",
    rating: 4.3
  },
  { 
    title: "Dracula",
    author: "Bram Stoker",
    rating: 4.1
  },
  { 
    title: "Frankenstein",
    author: "Mary Shelley",
    rating: 4.0
  },
  { 
    title: "Pet Sematary",
    author: "Stephen King",
    rating: 4.2
  },
  { 
    title: "The Exorcist",
    author: "William Peter Blatty",
    rating: 4.2
  },
  { 
    title: "Misery",
    author: "Stephen King",
    rating: 4.4
  },
  { 
    title: "Rosemary's Baby",
    author: "Ira Levin",
    rating: 4.0
  },
  { 
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    rating: 4.1
  },
  { 
    title: "Coraline",
    author: "Neil Gaiman",
    rating: 4.2
  },
  { 
    title: "The Woman in Black",
    author: "Susan Hill",
    rating: 4.0
  },
  { 
    title: "The Call of Cthulhu",
    author: "H.P. Lovecraft",
    rating: 4.3
  },
  { 
    title: "Bird Box",
    author: "Josh Malerman",
    rating: 4.1
  },
  { 
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    rating: 4.5
  },
  { 
    title: "American Psycho",
    author: "Bret Easton Ellis",
    rating: 4.2
  },
  { 
    title: "The Stand",
    author: "Stephen King",
    rating: 4.4
  },
  { 
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    rating: 4.3
  },
  { 
    title: "Ghost Story",
    author: "Peter Straub",
    rating: 4.0
  },
  { 
    title: "Let the Right One In",
    author: "John Ajvide Lindqvist",
    rating: 4.1
  },
  { 
    title: "The Girl with All the Gifts",
    author: "M.R. Carey",
    rating: 4.2
  }
];

var allbook = edu.concat(novels, crime, horror);



/////////////////////////////////////////////////////////////////////////////////////////////
var div1 = document.getElementById('a');
var div2 = document.getElementById('e');
var div3 = document.getElementById('n');
var div4 = document.getElementById('c');
var div5 = document.getElementById('h');

var content1 = document.getElementById('blurred-contenta');
var content2 = document.getElementById('blurred-contente');
var content3 = document.getElementById('blurred-contentn');
var content4 = document.getElementById('blurred-contentc');
var content5 = document.getElementById('blurred-contenth');

div1.addEventListener('click', function() {
  // Hide all other content
  content2.style.display = 'none';
  content3.style.display = 'none';
  content4.style.display = 'none';
  content5.style.display = 'none';

  // Display content 1
  content1.style.display = 'block';
});

div2.addEventListener('click', function() {
  // Hide all other content
  content1.style.display = 'none';
  content3.style.display = 'none';
  content4.style.display = 'none';
  content5.style.display = 'none';
  // Display content 2
  content2.style.display = 'block';
});

div3.addEventListener('click', function() {
  // Hide all other content
  content1.style.display = 'none';
  content2.style.display = 'none';
  content4.style.display = 'none';
  content5.style.display = 'none';
  // Display content 3
  content3.style.display = 'block';
});

div4.addEventListener('click', function() {
  // Hide all other content
  content1.style.display = 'none';
  content2.style.display = 'none';
  content3.style.display = 'none';
  content5.style.display = 'none';
  // Display content 4
  content4.style.display = 'block';
});

div5.addEventListener('click', function() {
  // Hide all other content
  content1.style.display = 'none';
  content2.style.display = 'none';
  content4.style.display = 'none';
  content3.style.display = 'none';
  // Display content 5
  content5.style.display = 'block';
});