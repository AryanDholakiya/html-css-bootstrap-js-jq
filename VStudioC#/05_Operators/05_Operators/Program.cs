using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Services;
using System.Text;
using System.Threading.Tasks;

namespace _05_Operators
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double a = 7;
            double b = 2;

            Console.WriteLine("Modulus: {0}", a % b);

            //assignment op:
            Console.WriteLine("Assingnment operator a+=3 =>: {0}", a += 3);
            Console.WriteLine("Assingnment operator a%=3 =>: {0}", a %= 3); // a = a % 3
            Console.WriteLine("Now a = {0}", a);


            //comparision op: give true or false only
            Console.WriteLine("Comparision operator a>=b: => {0}", a >= b); // 1 >= 7 = false
            Console.WriteLine("Comparision operator a>=b: => {0}", a != b);


            //Logical Operator: returns true or false 
            Console.WriteLine("logical AND: {0}", a < 10 && b > 1);
            Console.WriteLine("logical OR: {0}", a > 10 || b > 1);
            Console.WriteLine("logical NOT: {0}", !(a > 10 || b > 1)); //gives false if result is true. gives reverse response of statement 


            Console.WriteLine();
            //ternary operator:
            Console.WriteLine("Ternary Operator:");
            int age = 20;
            Console.WriteLine(age > 18 ? "you should have to vote." : "You should have to watch Doraemon");

            Console.WriteLine();



            //Null coalescing op: તેનો ઉપયોગ ત્યારે થાય છે જ્યારે તમને null હોય તેવી value માટે fallback (default) value આપવી હોય.
            Console.WriteLine("Null-Coalescing Operator (??):");
            string name = null;
            string child = name ?? "Unknown";
            Console.WriteLine("Name of child is: {0}", child);
            Console.WriteLine();

            int defaultVal = 0;
            int? val = null;  //NOTE that how to assing NULL value in non-nullable types like int,double,bool
            int Num1 = val ?? defaultVal;
            Console.WriteLine("Num1 value: {0}", Num1);





            Console.ReadLine();
        }
    }
}
