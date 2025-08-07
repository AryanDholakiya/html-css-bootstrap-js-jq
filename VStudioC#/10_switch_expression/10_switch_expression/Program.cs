using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10_switch_expression
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter Your Grade: ");
            string grade = Console.ReadLine().ToUpper();

            switch (grade)
            {
                case "A":
                    Console.WriteLine("Excellent");
                    break;
                case "B":
                    Console.WriteLine("Good");
                    break;
                case "C":
                    Console.WriteLine("Average");
                    break;
                case "D":
                    Console.WriteLine("Pass");
                    break;
                case "F":
                    Console.WriteLine("Fail");
                    break;
                default:
                    Console.WriteLine("Invalid grade");
                    break;
            }
            Console.ReadLine();
        }
    }
}
