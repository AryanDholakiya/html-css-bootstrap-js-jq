using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace _02_Variables_and_DataTypes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Variables in C#");
            Console.WriteLine();

            int a = 10;
            Console.WriteLine($"integer No. a = {a}"); //string interpolation
            Console.WriteLine("integer No. a = {0}", a); //placeholder method
            Console.WriteLine("integer No. a = " + a); //concate

            Console.WriteLine();

            float b = 10.345678F; //here this is necessary to take F for float values.
            Console.WriteLine($"float No: {b}"); //it will show the total 7 values. excluding "."

            string Name = "Hello World";
            Console.WriteLine("String type: {0}", Name);

            char c = 'A';
            Console.WriteLine("char type: {0}", c);

            bool isTrue = true;
            Console.WriteLine("bool type: {0}", isTrue);

            double data = 13456.2345678998765432D; //it will show the total 15 values.  excluding "."
            Console.WriteLine("bool type: {0}",data);

            Console.WriteLine();

            //Simple variables without "const" keyword can be chageable
            int variablewithoutConst = 10;
            variablewithoutConst = 20;
            Console.WriteLine("we can see that value of variable is changed from 10 to: {0}.",variablewithoutConst);

            //with const keyword
            const int variablewithConst = 100;
            //variablewithConst = 10;
            Console.WriteLine("value will not change in of keyword const, " +
                "if we try to change then it will Throw error directly: {0}",variablewithConst);

            //NOTE: const keyword must need the value of variable otherwise it will throw error.

            Console.WriteLine();

            //display variable
            string firstName = "Hello";
            string lastName = "World";
            string fullname = firstName + " " + lastName;
            Console.WriteLine("fullname: {0}", fullname);

            int firstVal = 10;
            int secondVal = 20;
            //Console.WriteLine("Total: {0}{1}",firstVal+secondtVal);
            //Console.WriteLine($"Total : {firstVal} + {secondVal}");
            Console.WriteLine($"Total: {firstVal + secondVal}"); //both the upper appriach is wrong for addition.

            //if we want to do the same task using placeholder method then,
            int additionVal = firstVal + secondVal;
            Console.WriteLine("Total of {0} and {1} is: {2}", firstVal,secondVal,additionVal);


            Console.WriteLine();



            //c# multiple variables:

            int x = 10, y = 20, z = 30;
            Console.WriteLine($"total of multiple variables: {x + y + z}");

            float ab, bc, ca;
            ab = bc = ca = 100;
            Console.WriteLine($"Total of another multiple vars: {ab + bc + ca}");

            Console.WriteLine();





            //Type Casting 

            Console.WriteLine("-Typecasting-");

            //Implicit Casting(automatically) - converting a smaller type to a larger type size
            // char -> int -> long -> float -> double

            //Explicit Casting(manually) - converting a larger type to a smaller size type
            //double -> float -> long -> int -> char


            int charTointCasting = 'a';
            int CastedcharToInt = charTointCasting;  //returns the ascii val of 'a'.
            Console.WriteLine("char To int Casting: {0}", charTointCasting);

            float intToFloatCasting = CastedcharToInt;
            Console.WriteLine("int To Float Casting: {0}", intToFloatCasting);

            intToFloatCasting = 1100.77F;
            double floatToDoubleCasting = intToFloatCasting;
            Console.WriteLine("float to double casting: {0}", floatToDoubleCasting);



            //explicit type casting:
            string stringToIntCasting = "123";
            int CatedFloatToInt = int.Parse(stringToIntCasting); 
            //we only can use int.parse , float.parse, double.parse, bool.parse --> if there we are casting from the string typed.
            Console.WriteLine(CatedFloatToInt);


            //(type) method:
            float PI = 3.14159F;
            Console.WriteLine("Converted the float typed pi val into the type int: " + (int)PI);


            int asciiVal = 65;
            Console.WriteLine("converting the int typed val into the char type: {0}", (char)asciiVal);



            //Convert.ToString, .ToDouble, .ToFloat etc... method
            double ConvertMethod= 22323.12212D;
            Console.WriteLine("Type casting using the Convert method: " + Convert.ToInt32(ConvertMethod));

            bool ConvertBoolToString = true;
            Console.WriteLine($"bool to string type casting using Convert method: {Convert.ToString(ConvertBoolToString)}");

            //parsing a date from string format to dateTime format

            string TodayDate = "2025-07-15"; // YYYY-MM-DD
            DateTime date = DateTime.Parse(TodayDate);
            Console.WriteLine($"parsing a date from string to datetime format: {date}");

            string todaydate = "15-07-2025"; // DD-MM-YYYY
            Console.WriteLine("Converting date number 2: {0}",DateTime.Parse(todaydate));


            Console.ReadLine();
        }
    }
}
