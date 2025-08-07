using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _33_stringBuilder
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string a = "abc";
            Console.WriteLine(a + " <-- using string.");
            Stopwatch sw = new Stopwatch();

            sw.Start();
            for(int i=0; i<= 50000; i++)
            {
                 a = a + i;
            }
            sw.Stop();

            //strings are immutable.That means, every time when we modify the string, it will assign a new memory space in heap memory for that modified string.
            //but the stringBuilder has different case, that means it will not assign the new heap memory space for the every modification.it will joint the string in same memory allocated space if we are changing that same string.

            StringBuilder sb = new StringBuilder("abcd");
            sb.Append(" Heyy, ");
            Console.WriteLine(sb);

            Stopwatch sw2 = new Stopwatch();

            sw2.Start();

            for (int i = 0; i <= 50000; i++)
            {
                sb.Append(i);
            }
            sw2.Stop();

            Console.WriteLine(" time taken by string: "+sw.ElapsedMilliseconds);
            Console.WriteLine(" time taken by stringBuilder: "+ sw2.ElapsedMilliseconds);



            //methods of stringBuilder : 
            //1)Append() : Adds text at the end
            //2)Insert(index No. , Text you want to insert at index) : Inserts text at a specified index
            //3)Remove(index of remove from, No. of characters you want to remove): : 	Removes characters
            //4)Replace("string you want to replace from", "string you want to replace with"): 
            //5)Clear(): Removes all content
            //6)ToString(): Converts StringBuilder to normal string


            //switch to the another namespace for the mini task

            Console.ReadLine();
        }
    }
}
