using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _29_Enum
{
    enum days
    {
        Sun, Mon, Tue, Wed, Thur, fri, sat // inum starts from 0
    }

    enum Months
    {
        jan = 1,
        feb = 2,
        april = 3,
        may,
        june,
        aug = 8,
        sept, oct
    }
    internal class Program
    {
        enum Level
        {
            high, medium, low
        }
        static void Main(string[] args)
        {
            days Day = days.sat;
            Console.WriteLine("day: " + Day); //sat
            Console.WriteLine("Number of Enum Day(in integer form): " + (int)Day);

            Level lev = Level.high;
            Console.WriteLine("level: " + lev);

            Months month = Months.feb;
            Console.WriteLine("Month of feb: "+(int)month);

            Months month2 = Months.sept;
            Console.WriteLine("Month of sept: " + (int)month2);
            Console.WriteLine("Month at No 9: " + (Months)9);



            //loop in enum
            Console.WriteLine("\nLoop in days Enum");
            string[] totalDays = Enum.GetNames(typeof(days)); //not here Enum.GateNames

            foreach(string i in totalDays)
            {
                Console.WriteLine(i);
            }

            Console.ReadLine();
        }
    }
}
