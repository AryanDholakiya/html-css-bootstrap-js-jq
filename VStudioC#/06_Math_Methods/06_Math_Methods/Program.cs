using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06_Math_Methods
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Math Methods of c#:");
            int a = 100;
            int b = 30;
            double c = -5.3242D;
            Console.WriteLine("Math.Max(): {0}", Math.Max(12,13));

            Console.WriteLine("Math.Max(a,b): {0}", Math.Max(a, b));
            Console.WriteLine("Math.Min(a,b): {0}", Math.Min(a, b));
            Console.WriteLine("Math.Sqrt(a): {0}", Math.Sqrt(a));
            Console.WriteLine("Math.Abs(): {0}", Math.Abs(c)); //make negative number positive
            Console.WriteLine("Math.Round(): {0}", Math.Round(c));  
            Console.WriteLine("Math.Truncate(): {0}", Math.Truncate(c));  // દશાંશ કાપી નાખે
            Console.WriteLine("Math.Pow(a,b): {0}", Math.Pow(2,3)); // 8
            Console.WriteLine("Math.Sign(a): {0}", Math.Sign(-3)); //-1
            //value + then returns 1
            //value 0 then returns 0
            //value - then returns -1


            Console.ReadLine();
        }
    }
}
