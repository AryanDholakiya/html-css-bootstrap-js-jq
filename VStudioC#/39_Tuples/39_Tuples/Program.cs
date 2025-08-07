using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _39_Tuples
{
    public class simpleClass
    {
        public string emp { get; set; }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            //creating tuple type 1:
            var Tuple1 = ("abhi", 90.9, 21);
            Console.WriteLine(Tuple1.Item1);


            //creating tuple type 1:
            (string, int, double) tuple2 = ("abcdefgh", 21, 129.5);
            Console.WriteLine(tuple2.Item3);
            Console.WriteLine(tuple2.Item2);
            Console.WriteLine(tuple2.Item1);

            Console.WriteLine("\nNamed Tuple: ");
            (string name, int TotalMarks, double ObtainedMarks) Tuple3 = ("xyz", 200, 158.7);
            Console.WriteLine("name of the candidate: {0}", Tuple3.name);
            Console.WriteLine("Total Marks: {0}", Tuple3.TotalMarks);
            Console.WriteLine("Obtained Marks: {0}", Tuple3.ObtainedMarks);

            //modify the value in tuple:
            Tuple3.name = "Aryan";
            Console.WriteLine("modify the value in tuple: " + Tuple3.name);



            //we can check the Equality Opearation in the tuples:

            Console.WriteLine("Tuple Equality check: {0}", Tuple1 == Tuple3);
            Console.WriteLine("Tuple Equality check:{0}", Tuple1 != Tuple3);




            simpleClass objj = null;
            string str = Convert.ToString(objj);
            Console.WriteLine(str);





            Console.ReadLine();
        }
    }
}
