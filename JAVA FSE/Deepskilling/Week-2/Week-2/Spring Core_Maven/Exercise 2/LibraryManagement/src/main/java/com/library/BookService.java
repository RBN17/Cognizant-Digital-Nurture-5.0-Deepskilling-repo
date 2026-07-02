package com.library;

public class BookService {

    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService created");
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        System.out.println("BookService: Calling BookRepository...");
        bookRepository.display();
    }
}