using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _37_Dictionary_generic_Collection_
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //SortedList 
            SortedList<int, string> studentData = new SortedList<int, string>();
            studentData.Add(3, "abc");
            studentData.Add(1, "efg");
            studentData.Add(2, "xyz");

            foreach (var item in studentData)
            {
                Console.WriteLine($"RollNo.: {item.Key} Name: {item.Value}");
            }

            Console.WriteLine("Getting value of key using studentData[3]: " + studentData[3]);



            //now a days we mostly uses the Dictionary only not sortedList




            //dictionary
            Console.WriteLine("\nDictionary: same example,but it give value as we stored the data in dictionary. where sortedList sort the data according to the keys and return the output to us.");

            Dictionary<int, string> employeesData = new Dictionary<int, string>();
            employeesData.Add(3, "abc");
            employeesData.Add(1, "efg");
            employeesData.Add(2, "xyz");

            foreach (var item in employeesData)
            {
                Console.WriteLine($"EmpId.: {item.Key} Name: {item.Value}");
            }
            Console.WriteLine("Getting value of key using employeesData[3]: " + employeesData[3]);



            //Access Elements in Dictonary
            
            var cities = new Dictionary<string, string>()
            {
               {"India", "delhi, puducherry, Chandigarh" },
               {"UK", "Manchester, London, Birmingham" },
               {"USA", "NewYork, Washington, Chicago" },
               //{"USA", "NewYork, Washington, Chicago" }, //same key can't be acceptable in dictionary. Eception
            };

            //TryGetValue method: for unknown key 
            Console.WriteLine("\nTryGetvalue:");
            string result;
            if (cities.TryGetValue("UK", out result))
            {
                Console.WriteLine(result);
            }

            //contains: for unknown key 
            Console.WriteLine("\nContainsKey:");
            if (cities.ContainsKey("USA"))
            {
                Console.WriteLine(cities["USA"]);
            }

            //ElementAt: to get value of specific index
            Console.WriteLine("\nElementAt:");
            Console.WriteLine("ElementAt(1).Key : " + cities.ElementAt(1).Key);
            Console.WriteLine("ElementAt(1).Value : " + cities.ElementAt(1).Value);

            for(int i = 0; i < cities.Count; i++)
            {
                Console.WriteLine($"key: {cities.ElementAt(i).Key},   value: {cities.ElementAt(i).Value}");
            }





            //UPDATE Dictionary elements:
            Console.WriteLine("\nUpdating the Dictionary value: ");

            cities["India"] = "Ladakh, diu-daman-nagarhaveli";
            for(int i = 0; i < cities.Count; i++)
            {
                Console.WriteLine("Key: {0} ,  Value: {1}",cities.ElementAt(i).Key, cities.ElementAt(i).Value);
            }




            //Remove Elements in Dictionary:
            //Remove() method deletes an existing key-value pair from a dictionary
            //Clear() method deletes all the elements of the dictionary


            Console.WriteLine("\nRemove(key) Method:");
            cities.Remove("UK");
            for (int i = 0; i < cities.Count; i++)
            {
                Console.WriteLine("Key: {0} ,  Value: {1}", cities.ElementAt(i).Key, cities.ElementAt(i).Value);
            }

            Console.WriteLine("\nClear() Method:");
            cities.Clear(); //clears entire list.
            for (int i = 0; i < cities.Count; i++)
            {
                Console.WriteLine("Key: {0} ,  Value: {1}", cities.ElementAt(i).Key, cities.ElementAt(i).Value);
            }





            //Mostly we uses the Dictionary instead of Hashtable , list , HashSet etc...

            //The difference between the HashTable and Dictionary is:
            //A Hashtable stores keys and values of type object. This means you can add any type of data, which can lead to runtime errors if you try to use a value with the wrong type.
            //Hashtable myHashtable = new Hashtable();
            //myHashtable.Add(1, "hello"); // key is an int, value is a string
            //myHashtable.Add("two", 2.0); // key is a string, value is a double


            Console.ReadLine();
        }
    }
}
