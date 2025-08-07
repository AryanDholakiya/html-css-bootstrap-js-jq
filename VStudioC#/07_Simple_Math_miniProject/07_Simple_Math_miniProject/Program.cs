using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07_Simple_Math_miniProject
{
    internal class Program
    {
        static void Main(string[] args)
        {

            char doExit = ' ';
            double Number =  0;
            do
            {
                Console.WriteLine("\nSelect an Operation: ");
                Console.WriteLine("1.Square Root \n2.Power (x^y) \n3.Round a Number \n4.Truncate a Number " +
                    "\n5.Absolute Value \n6.Exit");


                Console.WriteLine();
                int choice = int.Parse(Console.ReadLine());

                if (choice < 6)
                {
                    string str = choice == 2 ? "Enter your first value:" : "Enter your Number:";
                    Console.Write(str);
                    Number = double.Parse(Console.ReadLine());
                }

                if (choice == 1)
                {
                    Console.WriteLine("SquareRoot of your given Number is: {0}", Math.Sqrt(Number));
                }
                else if (choice == 2)
                {
                    Console.Write("Enter your second value: ");
                    double Num2 = double.Parse(Console.ReadLine());
                    Console.WriteLine($"{Number} Power {Num2} is: {Math.Pow(Number, Num2)}");
                }
                else if (choice == 3)
                {
                    Console.WriteLine("Rounded value of your given Number: {0}", Math.Round(Number));
                }
                else if (choice == 4)
                {
                    Console.WriteLine("Trucated value of your given Number: {0}", Math.Truncate(Number));
                }
                else if (choice == 5)
                {
                    Console.WriteLine("Absolute value of your given Number: {0}", Math.Abs(Number));
                }
                else if (choice == 6)
                {
                    doExit = 'n';
                }
                else if(choice >= 7)
                {
                    Console.WriteLine("Choice Operation Not Found!");
                }

                if (doExit == 'n')
                {
                    Console.WriteLine("Exited!");
                }
                else
                {
                    Console.WriteLine("\nDo you want to continue? (y / n)");
                    char Exit = char.Parse(Console.ReadLine());
                    doExit = char.ToLower(Exit);
                }
            } while (doExit == 'y');



            Console.ReadLine();
        }
    }
}
