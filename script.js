// Book class
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  // UI class
  class UI {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const table = document.getElementById('book-list');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button class="delete">Remove</button></td>
      `;
      table.appendChild(row);
    }
  
    static deleteBook(element) {
      if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert ${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.getElementById('add-book-form');
      container.insertBefore(div, form);
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.getElementById('book-title').value = '';
      document.getElementById('book-author').value = '';
    }
  }
  
  // Store class
  class Store {
    static getBooks() {
      let books = JSON.parse(localStorage.getItem('books'));
      return books ? books : [];
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(title) {
      const books = Store.getBooks();
      const updatedBooks = books.filter((book) => book.title !== title);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
    }
  }
  
  // Event: Display books
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  
  // Event: Add a book
  document.getElementById('add-book-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
  
    if (title === '' || author === '') {
      UI.showAlert('Please fill in all fields', 'error');
    } else {
      const book = new Book(title, author);
  
      UI.addBookToList(book);
      Store.addBook(book);
      UI.showAlert('Book added successfully', 'success');
      UI.clearFields();
    }
  });
  
  // Event: Remove a book
  document.getElementById('book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.showAlert('Book removed successfully', 'success');
  });
  