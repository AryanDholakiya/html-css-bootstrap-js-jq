using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _32_Indexers
{
    internal class Program
    {
        //indexers : basically aapne properties set get no use koi private field no data keva parkaar no hse to tema store thse ena mate use krie 6ie. ---> pn jo aa field koi array hoi to? .... to eva time k jya aapne set get no use krine validate krvu hoi k keva type no data aapna array ma store thse ena mate "Indexers" no use thy 6.


        private int[] empIds = new int[3];

        //indexer tab tab
        public int this[int index]
        {

            set
            {
                if (index >= 0 && index < empIds.Length)
                {
                    if (value > 0)
                    {
                        empIds[index] = value;
                    }
                    else
                    {
                        Console.WriteLine("invalid Id : Value can't be zero or less than 0.");
                    }
                }
                else
                {
                    Console.WriteLine("Trying to assign value on invalid index number!");
                }
            }
            get
            {
                return empIds[index];
            }
        }



        static void Main(string[] args)
        {
            Program empId = new Program();
            empId[2] = 2;
            Console.WriteLine(empId[2]);











            Console.ReadLine();
        }
    }
}
