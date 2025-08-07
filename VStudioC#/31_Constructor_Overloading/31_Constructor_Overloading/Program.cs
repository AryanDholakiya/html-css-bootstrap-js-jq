using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace _31_Constructor_Overloading
{
    //Constructor overloading means having multiple constructors in the same class with different parameters.
    internal class Program
    {
        public string name;
        public int age;

        public Program()
        {
            name = "Unknown";
            age = 0;
            Console.WriteLine("constructor without any parameter.");
        }
        public Program(string name)
        {
            this.name = name;
            Console.WriteLine("Your name is: {0}", name);
        }
        public Program(string name, int age)
        {
            this.name = name;
            this.age = age;
            Console.WriteLine($"Your name is {this.name} and you're {this.age} years old.");
        }



        //static constructor
        static Program()
        {
            Console.WriteLine("static constructor runs before everything of class. either you create any object or not."); // check by commenting all the objects.
        }
        

        static void Main(string[] args)
        {
            Program p1 = new Program(); //invokes first constructor which has no any parameter.
            Program p2 = new Program("abc"); //invokes second parameter
            Program p3 = new Program("abc", 22);





            Console.ReadLine();
        }
    }
}
