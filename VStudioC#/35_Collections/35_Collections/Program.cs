using System;
using System.Collections;


namespace _35_Collections
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ArrayList arrList1 = new ArrayList(); //ArrayList can store any kind of datatyped values not like array which store only spefic type of values
            arrList1.Add(1);
            arrList1.Add("hello");
            arrList1.Add(3.454D);
            arrList1.Add(3.3m);
            arrList1.Add(true); 

            foreach (var i in arrList1)
            {
                Console.WriteLine(i);
            }

            Console.WriteLine();

            Console.WriteLine("Accessing the first ele of ArrayList: {0}", arrList1[0]);
            arrList1[0] = 100;
            Console.WriteLine("Changed the first ele of ArrayList: {0}", arrList1[0]);


            //object initializer syntax
            ArrayList arrList2 = new ArrayList() { 3,"abc",true,4.5};
            Console.WriteLine("\n" + arrList2[1]);



            //methods of ArrayList:
            //add(value) : adds a value at the last of the ArrayList

            //insert(index, value): adds the value at specified index
            arrList2.Insert(2, "InsertedValue");
            Console.WriteLine("Value check after insert method: {0}", arrList2[2]);

            //remove(value) : remove by value
            arrList2.Remove("InsertedValue");
            Console.WriteLine("Value check after remove method: {0}", arrList2[2]);

            //removeAt(index number) : remove by index
            arrList2.RemoveAt(2);
            Console.WriteLine("Value check after removeAt method: {0}", arrList2[2]);



            

            //sort():  Only useful for same data types
            ArrayList arrlist3 = new ArrayList() {3,6,1,3,9,8};
            Console.WriteLine("\nbefore sort(): ");
            foreach (var i in arrlist3)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine();

            arrlist3.Sort();
            Console.WriteLine("\aafter sort(): ");
            foreach (var i in arrlist3)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine();





            //addRange(ICollection) : we can add entire collections in arrList
            string[] arr = { "abc", "efg", "hij" };

            arrlist3.AddRange(arr);
            Console.WriteLine("after addRange() method: ");
            foreach (var i in arrlist3)
            {
                Console.WriteLine(i);
            }
            


            //reverse(): reverse the arrayList members
            arrlist3.Reverse();

            Console.WriteLine("\nvalues after the reverse method: ");
            foreach (var i in arrlist3)
            {
                Console.WriteLine(i);
            }


            //Contains():
            Console.WriteLine("\nContains method: " + arrlist3.Contains(1));

            Console.ReadLine();
        }
    }
}
