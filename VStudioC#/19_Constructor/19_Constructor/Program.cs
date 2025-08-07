using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace _19_Constructor
{
    class student
    {
        public string name;
        public int age;
        public student() //simple constructor: constructor name is same as class name
        {
            name = "Unknown Student";
            age = 0;
            Console.WriteLine("Constructor invoked!");
        }

        public student(string n, int a) //parameterized constructor
        {
            name = n;
            age = a;
        }

        public student(student s)  // COPY constructor
        {
            name = s.name;
            age = s.age;
        }


        public void display()
        {
            Console.WriteLine($"name: {name}\nAge: {age}");
        }
    }



    // MiniTask;
    class Book
    {
        string title;
        string author;
        double price;

        public Book()
        {
            title = "Unknown";
            author = "Anonymous";
            price = 0.0;
        }
        public Book(string _title, string _author, double _price)
        {
            title = _title; // if _title ne bdle "title" lete to --> this.title = title ..... aam levu pde
            author = _author;
            price = _price;
        }

        public void DisplayDetails()
        {
            if(price < 0.0)
            {
                Console.WriteLine("Invalid price entered. Setting price to Rs.0.");
                price = 0;
                Console.WriteLine($"Title: {title}\nAuthor: {author}\nprice: {price}");
            }
            else
            {
                Console.WriteLine($"Title: {title}\nAuthor: {author}\nprice: {price}");
            } 
        }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            student student1 = new student(); //simple constructor
            student1.display();

            student student2 = new student("jay",21); //parameterized constructor
            student2.display();

            Console.WriteLine("Copied Object:");
            student student3 = new student(student2); //COPY constructor // copied object
            student3.display();


            Console.WriteLine();

            Book book1 = new Book();
            book1.DisplayDetails();

            Book book2 = new Book("Si-yu-Chi", "Hyu-en-styang", -10);
            book2.DisplayDetails();
            

            Console.ReadLine();
        }
    }
}
