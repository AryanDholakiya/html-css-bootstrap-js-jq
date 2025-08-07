using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _30_Namespace; 

namespace Another_namespace
{
   
    internal class Access_Students
    {
        static void Main(string[] args)
        {
            car newcar = new car();
            newcar.drive();  //we can use the method of another namespace in different namespace

            Console.WriteLine();

            student student1 = new student();
            student1.Name = "abd";
            student1.rollNumber = 1;


            Console.WriteLine(student1.Name);
            Console.WriteLine(student1.rollNumber);

            Console.ReadLine();
        }
    }
}
