using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _28_Exception_Handling
{
    internal class Program
    {
        public class ageException : Exception
        {
            public ageException(string message) : base(message) { }
        }
       
        static void Main(string[] args)
        {

            //1. simple try...catch...funally
            try
            {
                int[] Numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
                Console.WriteLine(Numbers[11]);
            }
            catch (Exception e)
            {
                Console.WriteLine("Error Occured: " + e.Message);
                Console.WriteLine("Do not cross the limits.");
            }
            finally
            {
                Console.WriteLine("Finally statement always runs.");
            }


            //throw keyword
            Console.WriteLine("Enter the Age: ");
            int age = int.Parse(Console.ReadLine());

            try
            {
                if (age < 18)
                {
                    throw new Exception("You are not allowed to Enter. sorry!");
                }
                else
                {
                    Console.WriteLine("Welcome!");
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine("Error Accurd: " + ex.Message);
            }

            //example of Custom exception

            //try
            //{
            //    if(age > 60)
            //    {
            //        throw new ageException("Elders are not allowed!");
            //    }
            //    else
            //    {
            //        Console.WriteLine("Welcome!");
            //    }
            //}
            //catch(ageException ex)
            //{
            //    Console.WriteLine("Exception is occured: " + ex.Message);
            //}

            Console.ReadLine();
        }
    }
}
