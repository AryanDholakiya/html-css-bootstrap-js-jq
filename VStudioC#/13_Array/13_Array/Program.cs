using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;

namespace _13_Array
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //declaring an array:
            int[] bikes = new int[5]; //we must have to give the size of an array at the declaration time.
            bikes[0] = 12;
            Console.WriteLine(bikes[0]);

            //array with values:
            string[] cars = { "chiron", "veron", "Boat-tail", "Phantom" };
            Console.WriteLine("accessing the item from an array of c#: {0}", cars[2]);
            Console.WriteLine();
            //c# ma array no dataType fix hoi so aapne fix type na data j enter kri skie. // js na array ma multiple kind na data no array bnavi skie.


            //accessing all the elements of cars[] using foreach.
            foreach (string car in cars)
            {
                Console.WriteLine(car);
            }



            //example of array with user input:
            int[] studentmarks = new int[5];

            //for (int i = 0; i < 5; i++)
            //{
            //    Console.Write("Enter the marks of student " + (i + 1) + " =>");
            //    studentmarks[i] = int.Parse(Console.ReadLine());
            //}

            //Console.WriteLine("Entered Marks of students: ");
            //int j = 0;
            //foreach (int i in studentmarks)
            //{
            //    Console.WriteLine($"marks of student {j++}: " + i);
            //}

            //Console.WriteLine();
            //for (int i = 0; i < studentmarks.Length; i++)
            //{
            //    Console.WriteLine($"marks of student {i} => {studentmarks[i]}");
            //}



            //MiniTask:
            //Create an array of 10 numbers.
            //Let the user enter 10 numbers.
            //Print all even numbers using a foreach loop.

            //Console.WriteLine();
            //int[] randomNum = new int[10];

            //for (int i = 0; i < randomNum.Length; i++)
            //{
            //    Console.Write($"Enter the value {i}: ");
            //    randomNum[i] = int.Parse(Console.ReadLine());
            //}
            //Console.WriteLine();
            //Console.WriteLine("Even values from Entered Values: ");
            //foreach (int i in randomNum)
            //{
            //    if (i % 2 == 0)
            //    {
            //        Console.WriteLine(i);
            //    }
            //    else
            //    {
            //        continue;
            //    }
            //}


            //Sort an Array 
            //array.Sort() and array.Reverse();

            int[] values = { 100, 5, 400, 300, 2 };
            Console.WriteLine("Max value in given array: " + values.Max());
            Console.WriteLine("Max value in given array: " + values.Min());
            Console.WriteLine("Max value in given array: " + values.Sum());

            //Console.WriteLine(Array.Sort(values));//this is not works in cosnole.log
            Array.Sort(values);
            foreach (int value in values)
            {
                Console.WriteLine(value);
            }

            Console.WriteLine();

            string[] sorteString = { "Bat", "alphabet", "cat" };
            Array.Sort(sorteString);

            foreach (string val in sorteString)
            {
                Console.WriteLine(val);
            }




            //Mini task:
            //🔸 Ask user to input 7 numbers.
            //🔸 Store them in an array.
            //🔸 Show:

            //Numbers in ascending order
            //Numbers in descending order
            //Smallest and largest number

            int[] choice = new int[7];

            for (int i = 0; i < choice.Length; i++)
            {
                Console.Write($"Enter the value {i + 1}: ");
                choice[i] = int.Parse(Console.ReadLine());
            }
            Array.Sort(choice);
            Console.WriteLine("\nNumbers in ascending order: ");
            foreach (int val in choice)
            {
                Console.Write(val + " ");
            }

            Array.Reverse(choice);
            Console.WriteLine("\nNumbers in descending orderz: ");
            foreach (int val in choice)
            {
                Console.Write(val + " ");
            }
            Console.Write("\nSmallest number: " + choice.Min());
            Console.Write("\nLargest number: " + choice.Max());



            Console.ReadLine();
        }
    }
}
