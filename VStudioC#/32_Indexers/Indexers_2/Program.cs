using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Indexers_2
{
    internal class Program
    {
        private string[] strArr = new string[10]; // internal data storage

        public string this[int index]
        {
            get
            {
                if (index < 0 || index >= strArr.Length)
                    throw new IndexOutOfRangeException("Index out of range");

                return strArr[index];
            }

            set
            {
                if (index < 0 || index >= strArr.Length)
                    throw new IndexOutOfRangeException("Index out of range");

                strArr[index] = value;
            }
        }



        static void Main(string[] args)
        {
            Program p = new Program();
            p[10] = "hello";
            Console.WriteLine(p[10]);






            Console.ReadLine();
        }
    }
}
