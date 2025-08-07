using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04_Basic_Calculator_Program_UsingUserInput
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double fNum, sNum;
            Console.Write("Enter the first Number: ");
            bool firstNum = double.TryParse(Console.ReadLine(), out fNum);  //note: we always have to take bool typed.

            Console.WriteLine("Enter the second Number: ");
            bool secondNum = double.TryParse(Console.ReadLine(), out sNum);


            

            if (!firstNum || !secondNum)
            {
                Console.WriteLine("Enter valid input!");
            }

            else
            {
                double result;
                Console.WriteLine("select the Operation:('+', '-', '*', '/') ");
                char operation = char.Parse(Console.ReadLine());

                switch (operation)
                {
                    case '+':
                        result = fNum + sNum;
                        Console.WriteLine("Result of Addition: {0}", result);
                        break;
                    case '-':
                        result = fNum - sNum;
                        Console.WriteLine("Result of Substraction: {0}", result);
                        break;
                    case '*':
                        result = fNum * sNum;
                        Console.WriteLine("Result of Multiplication: {0}", result);
                        break;
                    case '/':
                        if (sNum == 0)
                        {
                            Console.WriteLine("Error:Can't divisible by Zero!");
                            break;
                        }
                        else
                        {
                            result = fNum / sNum;
                            Console.WriteLine("Result of Addition: {0}", result);
                            break;
                        }
                    default:
                        Console.WriteLine("Invalid Operator!");
                        break;
                }

            }
            Console.ReadLine();
        }
    }
}
