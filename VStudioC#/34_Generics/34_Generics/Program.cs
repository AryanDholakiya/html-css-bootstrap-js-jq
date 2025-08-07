using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _34_Generics
{
    internal class Program
    {
        //examples of generic methods; 
        public void values<T>(T val1,  T val2)
        {
            Console.WriteLine("first value: " + val1);
            Console.WriteLine("second value: " + val2);

            //Console.WriteLine(val1 + val2); //we can't do like this.
        }


        //for the addition of any kind of number 
        public T Addition<T>(T val1, T val2) 
        {
            return (dynamic)val1 + (dynamic)val2;
        }

        public dynamic Add(dynamic val1, dynamic val2) 
        {
            return val1+val2;
        }


        //generics with any number of argments(using the generics with params): 
        public T AddAnynumberofPara<T>(params T[] numbers)
        {
            dynamic sum = 0;

            foreach(T val in numbers)
            {
                sum += (dynamic)val; //note here the dynamic keyword
            }
            return sum;
        }



        //swapping two values with each other using generics:
        public void swap<T>( ref T a, ref T b)
        {
            T temp = a;
            a = b;
            b = temp;

            Console.WriteLine("value1: " + a + " and " + "value2: " + b);
        }


        static void Main(string[] args)
        {
            Program p = new Program();
            p.values<string>("hello", "world");
            p.values<int>(10, 20);

            Console.WriteLine();

            //for the addition of any kind of number
            Program p2 = new Program();
            Console.WriteLine("additon of any datatyped values using the generics: " + p2.Addition("hello", "word"));
            Console.WriteLine("additon of any datatyped values using the generics: " + p2.Addition(2.0, 3.3));


            //using the dynamics only , no use of generics
            Console.WriteLine("additon of any datatyped values using only dynamics: " + p2.Addition("hello", "word"));
            Console.WriteLine("additon of any datatyped values using only dynamics: " + p2.Add(2.0, 3.3));


            //generics with any number of argments(using the generics with params): 
            Console.WriteLine("Using generics with params: "+p2.AddAnynumberofPara(12, 12, 12));



            Console.WriteLine();

            //swapping two values with each other using generics:
            int valu1 = 4;
            int valu2 = 5;
            Console.WriteLine("values before swap: " + "value 1: " + valu1 + " , " + "value 2: " + valu2);
            p2.swap(ref valu1,ref valu2);
            Console.WriteLine("values After swap: " + "value 1: " + valu1 + " , " + "value 2: " + valu2);

            Console.WriteLine();

            string valuee1 = "abc";
            string valuee2 = "Hello";
            p2.swap(ref valuee1, ref valuee2);




            //generics class
            //generics fileds
            //generics Constrains

            Console.ReadLine();
        }
    }
}
