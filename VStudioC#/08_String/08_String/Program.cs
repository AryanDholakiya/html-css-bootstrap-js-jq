using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08_String
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string str1 = "abcdefghijklmn";

            //length of string
            Console.WriteLine("Length of str1 is: {0}", str1.Length);

            //ToUpper and ToLower
            Console.WriteLine("convert str1 into uppercase: {0}", str1.ToUpper());
            Console.WriteLine("after ToUpper str1 will not chaned, it remains as it is: {0}", str1);

            //string concatination:
            string str2 = "hello";
            string str3 = "world";

            //using + operator:
            Console.WriteLine("String Concatination using + operator: {0}", str2 + str3);  //this is more preferred

            //using string.Concat() method:
            Console.WriteLine("String  Concatination using string.Concat() method: {0}", string.Concat(str2, str3));

            //string iterpolation:
            string StringInterpolation = $"mergring two strings, string '{str2}' and '{str3}', using string interpolation";
            Console.WriteLine("String Interpolation : {0}", StringInterpolation);






            //Access String:

            string myString1 = "Hello World";
            Console.WriteLine("\n\nAccessing the first letter of string: {0}", myString1[0]); //index starts from 0
            Console.WriteLine("Accessing the second letter of string: {0}", myString1[1]);

            //indexOf():
            Console.WriteLine("finding the position of word/char in string using the indexOf(): {0}", myString1.IndexOf("o"));

            //substring:
            Console.WriteLine("made another string using Substring() method: {0}",myString1.Substring(6));



            Console.ReadLine();
        }
    }
}
