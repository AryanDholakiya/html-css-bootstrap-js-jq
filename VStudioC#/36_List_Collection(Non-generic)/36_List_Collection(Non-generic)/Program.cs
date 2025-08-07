using System;
using System.Collections.Generic;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace _36_List_Collection_Non_generic_
{
    class employee
    {
        public int id { get; set; }
        public string Name { get; set; }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> students = new List<string>();
            students.Add("abc");
            students.Add("bcd");
            students.Add("dsd");
            students.Add("aea");
            foreach (var student in students)
            {
                Console.WriteLine(student);
            }

            List<int> rollNo = new List<int> { 1, 2, 3, 4, 5 };
            foreach (var i in rollNo)
            {
                Console.WriteLine("Roll No." + i);
            }






            //add or remove the elements:
            Console.WriteLine("\nAdd or remove method:");
            //Add()
            students.Add("raju");
            students.Add("kaju");


            //insert():
            students.Insert(2, "kaalu");

            foreach (var student in students)
            {
                Console.WriteLine(student);
            }

            //AddRange()
            string[] handicapStudents = { "happy", "bubbly" };
            students.AddRange(handicapStudents);
            Console.WriteLine("\nstudents List after the AddRange method: ");
            foreach (var student in students)
            {
                Console.WriteLine(student);
            }


            //Remove()
            students.Remove("kaju");
            students.RemoveAt(1);
            Console.WriteLine("\nstudents List after the Remove and RemoveAt() method: ");
            foreach (var student in students)
            {
                Console.WriteLine(student);
            }

            //accessing an list item
            Console.WriteLine("\nAccessing a list item: " + students[1]);

            //count
            Console.WriteLine("\nCount method in List: " + students.Count);
            for (int i = 0; i < students.Count; i++) //how can we use the count method 
            {
                Console.WriteLine($"Student at index: {i} --> {students[i]}");
            }



            //searching methods:

            //Contains():
            Console.WriteLine("\nContains() Method: {0}", students.Contains("raju"));

            //IndexOf():
            Console.WriteLine("\nIndexOf() method: {0}", students.IndexOf("raju"));

            //Find():
            Console.WriteLine("\nFind() method: {0}", students.Find(person => person == "raju"));





            //Sorting Methods:

            //sort():
            students.Sort();
            foreach (var student in students)
            {
                Console.WriteLine(student);
            }

            students.Reverse();


            Console.WriteLine("\nLinq method");

            // New List with specific type
            var Employee = new List<employee>()
            {
                new employee() {id = 10, Name = "abcd"},
                new employee() {id = 11, Name = "efgh"},
                new employee() {id = 12, Name = "hijk"},
            };

            //Linq
            var specialStudents = from s in Employee
                                  where s.id == 10
                                  select s;

            foreach (var specialStudent in specialStudents)
            {
                Console.WriteLine("id: "+specialStudent.id + " "+ "name: " + specialStudent.Name);
            }

            Console.WriteLine("Find method in special list: {0}", Employee.Find(emp => emp.id == 10).Name); //note that .Name at last   
            Console.WriteLine();
            foreach(var a in Employee)
            {
                Console.WriteLine(a.Name);
            }




            Console.WriteLine("\n"+Employee.Exists(emp => emp.Name.StartsWith("1")));
            var abcd = Employee.Find(emp => emp.id == 12);
            Console.WriteLine(Employee.IndexOf(abcd));



            Console.ReadLine();
        }





    }
}
