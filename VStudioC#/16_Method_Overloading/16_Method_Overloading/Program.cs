using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace _16_Method_Overloading
{
    internal class Program
    {
        //In Method Overloading:
        //--> Method name mustt be same.
        //--> parameters must be different in : number of parameter, type of parameter, order of parameter


        //example 1: Based on Number of Parameters
        public static void greeting()
        {
            Console.WriteLine("Hello, Have a Good Day!");
        }
        public static void greeting(string name)
        {
            Console.WriteLine($"Hello {name}, Have a Good Day!");
        }




        //ex:2 Based on Data Type
        public static int sum(int a, int b)
        {
            return a + b;
        }
        public static double sum(Double a, double b)
        {
            return a + b;
        }




        //ex:3 Based on Parameter Order
        public static void nameAndage(string name, int age)
        {
            Console.WriteLine("Name: " + name + ", Age: " + age);
        }
        public static void nameAndage(int age, string name)
        {
            Console.WriteLine("Age: " + age + ", Name: " + name);
        }




        //minitask methods:
        public static double ConvertToCelsius(double fahrenheit)
        {
            return ((fahrenheit - 32.0) * (5.0/9));
        }
        public static double ConvertToCelsius(double fahrenheit, bool RoundOff)
        {
            int roundedOffCelcius = Convert.ToInt32( Math.Round((fahrenheit - 32.0) * (5.0 / 9.0)) );
            return roundedOffCelcius;
        }




        static void Main(string[] args)
        {
            //ex:1 Based on Number of Parameters
            greeting();
            greeting("ABCD");

            //ex:2 Based on Data Type
            Console.WriteLine("sum of int numbers: " + sum(1, 2));
            Console.WriteLine("Sum of double type numbers: " + sum(2.2, 3.3));

            nameAndage("abcd", 20);
            nameAndage(21, "efgh");





            //MiniTask:
            //ConvertToCelsius(double fahrenheit)
            //🔸 Converts Fahrenheit to Celsius
            //✏️ Formula: (F − 32) × 5⁄9

            //ConvertToCelsius(double fahrenheit, bool roundOff)
            //🔸 If roundOff = true, round off the result to the nearest whole number


            Console.WriteLine("fahrenheit to celcius: " + ConvertToCelsius(1));
            Console.WriteLine("fahrenheit to celcius with roundoff: " + ConvertToCelsius(1,true));



            Console.ReadLine();
        }
    }
}
