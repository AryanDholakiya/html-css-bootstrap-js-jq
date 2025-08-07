using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using _20_Access_Modifiers;

namespace _20._1_subproject
{
    internal class Program: Modifier
    {
        static void Main(string[] args)
        {
            Modifier modi1 = new Modifier();
            //Console.WriteLine("subclass: "+ modi1.name); we can't use this outside assembly or class bcz of "private"
            modi1.show();

            Program p1 = new Program();
            p1.show();   //we can use public property in derived class of another assembly also.

            Console.ReadLine();
        }
    }
}
