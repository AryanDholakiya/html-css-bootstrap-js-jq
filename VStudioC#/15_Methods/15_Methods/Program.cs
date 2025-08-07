using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15_Methods
{
    internal class Program
    {
        //first simple method:
        public static void FirstMethod()
        {
            Console.WriteLine("First simple method executed!");
        }



        //Method with parameters:
        public static void MethodWithParameter(string name, int age)
        {
            Console.WriteLine($"\nYour name is {name} and you are {age} years Old.");
        }



        //Default parameter value
        public static void defaultParavalueMethod(string name = "Unknown")
        {
            Console.WriteLine(name);
        }



        //return value methods:
        public static int sum(int a, int b)
        {
            return a + b;
        }



        //named Arguments:
        public static void childs(string child1, string child2, string child3)
        {
            Console.WriteLine("name of your 3rd child: {0}", child3);
        }



        static void Main(string[] args)
        {
            //first simple method:
            FirstMethod();
            FirstMethod();
            FirstMethod();


            ///Method with parameters:
            MethodWithParameter("abcd", 21);



            //Default parameter value
            defaultParavalueMethod("Abcd");
            defaultParavalueMethod();
            Console.WriteLine();



            //return value methods:
            Console.WriteLine(sum(1, 3));



            //named arguments
            childs(child2: "abcd", child3: "efgh", child1: "ijkl");


            //MiniTask:
            WelcomeUser("abcd");
            Console.WriteLine(squareOfNum(12));
            Console.WriteLine(AverageOfVals(10, 20, 30));



            Console.ReadLine();
        }


        //Mini Task:
        //🔹 Create a program with following methods:
        //void WelcomeUser(string name) → prints “Welcome, [name]!”
        //int Square(int num) → returns square of number
        //double Average(int a, int b, int c) → returns average


        public static void WelcomeUser(string name)
        {
            Console.WriteLine($"Welcome, {name}!");
        }
        public static int squareOfNum(int num)
        {
            return num * num;
        }
        public static double AverageOfVals(int a, int b, int c)
        {
            return (a + b + c) / 3.0;
        }
    }
}
