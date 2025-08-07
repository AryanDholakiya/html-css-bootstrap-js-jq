using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _17_Method_Parameters_value_ref_out_
{
    internal class Program
    {
        //inscrease by value
        public static int IncreseByValue(int value)
        {
            value = value + 10; //diffence can be note between ref and value from here.
            return value;
        }


        //increase by ref
        public static int IncreaseByRef(ref int value)
        {
            value = value + 20;
            return value;
        }


        //out : used to return multiple outputs:
        public static void OutKeyword(int a, int b, out int sum, out int product)
        {
            Console.WriteLine(sum = a + b);
            Console.WriteLine(product = a * b);
        }




        //params keyword: When you don't know in advance how many arguments of a specific type a method will receive
        public static void paramsEx(params int[] values)
        {
            int sum = 0;
            foreach(int i in values)
            {
                sum += i;
            }
            Console.WriteLine(sum);
        }





        static void Main(string[] args)
        {
            int a = 10;
            Console.WriteLine(IncreseByValue(a)); 
            Console.WriteLine("value of a after method IncreseByValue : {0}", a);
            int c = 20;
            Console.WriteLine(IncreaseByRef(ref c)); 
            Console.WriteLine("value of a after method IncreaseByRef : {0}", c);

            int b = 50;
            int sumOfNums, productOfNums;
            OutKeyword(a, b, out sumOfNums, out productOfNums);


            //example of params keyword:
            Console.WriteLine("\nExample of params: ");
            paramsEx(10, 30, 40, 10,10); //we can give any number of arguments because of "params". 
            Console.WriteLine("\nparams parameter method with no arguments.");
            paramsEx();






            Console.ReadLine();
        }
    }
}
