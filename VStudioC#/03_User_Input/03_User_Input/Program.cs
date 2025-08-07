using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_User_Input
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.ReadLine() always returns string, so for numbers, you need type casting.

            //taking name(string typed data) from user
            Console.Write("Enter your Name: ");
            string name = Console.ReadLine();
            Console.WriteLine($"Hello, {name}");

            Console.WriteLine();

            //taking Number typed data from string.
            Console.Write("Enter your Age: ");
            int age = int.Parse(Console.ReadLine());
            Console.WriteLine($"'{name}', According to your current age {age}, you will become {age + 1} years old next year.");

            Console.WriteLine();


            //addition of two numbers 
            Console.WriteLine("Now we are going to do Addition of two numbers.");
            Console.WriteLine("Enter first Number: ");
            int firstNum = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter second Number: ");
            int secondNum = Convert.ToInt32(Console.ReadLine());
            int sum = firstNum + secondNum;
            Console.WriteLine("Final result is: {0}", sum);

            //NOTE: Use Convert.ToInt32() to avoid errors if the input is null or invalid.
            Console.WriteLine();


            //handle error like this:
            Console.WriteLine("Enter first Number: ");
            int fNum,sNum;
            bool num1 = int.TryParse(Console.ReadLine(), out fNum);
            Console.WriteLine("Enter second Number: ");
            bool num2 = int.TryParse(Console.ReadLine(), out sNum);
            if (num1 && num2)
            {
                Console.WriteLine("Addition of Both Numbers are: {0}", fNum + sNum);
            }
            else if(!num1){
                Console.WriteLine("first number is invalid.");
            }
            else if (!num2)
            {
                Console.WriteLine("second number is invalid.");
            }
            else
            {
                Console.WriteLine("both inputs are Invalid.");
            }
            



            Console.ReadLine();
        }
    }
}
