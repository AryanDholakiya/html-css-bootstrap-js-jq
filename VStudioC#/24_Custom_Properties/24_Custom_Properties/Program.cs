using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _24_Custom_Properties
{
    internal class Program
    {
        private int age;

        public int Age
        {
            get
            {
                return age;
            }
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentOutOfRangeException("Age can't be negative");
                }
                else
                {
                    age = value;
                }
            }
        }
        static void Main(string[] args)
        {
            Program candidate = new Program();
            try
            {
                candidate.Age = 0;
                Console.WriteLine("Age of candidate is: " + candidate.Age);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine("Error creating Candidate age: " + ex.Message);
            }



            Console.ReadLine();
        }
    }
}
