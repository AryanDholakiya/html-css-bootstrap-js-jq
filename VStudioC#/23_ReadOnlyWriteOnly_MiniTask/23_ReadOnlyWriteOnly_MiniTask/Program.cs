//Create a class Employee with:
//-A read-only EmployeeId(assigned only via constructor)
//-A write-only Salary (print it internally only)
//-A read-write property Name

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _23_ReadOnlyWriteOnly_MiniTask
{
    internal class Program
    {
        //set: readOnly property
        private int EmpId;

        public Program(int empId)
        {
            EmpId = empId;
        }
        public int empId
        {
            get
            {
                return EmpId;
            }
        }

        //get: WriteOnly property
        private int Salary;
        public int salary
        {
            set
            {
                Salary = value;
            }
        }
        public void showSalaryInternallyOnly()
        {
            Console.WriteLine("WriteOnly property(showing Internally): {0}", Salary);
        }


        //read-write both
        public string name { get; set; }

        static void Main(string[] args)
        {
            Program Employee = new Program(123); //reaadOnly
            Console.WriteLine("ReadOnly property EmpId: " + Employee.empId);

            Employee.salary = 20000; //writeOnly
            //Console.WriteLine(Employee.salary); // we can't get it
            Employee.showSalaryInternallyOnly();

            //read and writeonly both:
            Employee.name = "abcdefg";
            Console.WriteLine("name of the emplyeee using the get and set both propeties: " + Employee.name);




            Console.ReadLine();
        }
    }
}
