function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(this.haveRead) ? "have read" : "not read yet"}.`
    }
}

const book1 = new Book("Dracula", "Bram Stoker", 789, true)
console.log(book1.info())
console.log(console.dir)