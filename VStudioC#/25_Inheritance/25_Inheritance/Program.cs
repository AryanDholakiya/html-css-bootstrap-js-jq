using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _25_Inheritance
{
    public class parent
    {
        public string surname = "Xyz";

        public void property()
        {
            Console.WriteLine("Large amount of property.");
        } 
    }

    //1.single inheritance
    public class child : parent
    {
        public string name = "abc";
    }

    //2.multilevel inheritance:
    public class grandChild : child
    {
        public int age = 10;
    }


    //3.Hierarchical inheritance
    public class child2 : parent
    {
        public string name = "abc";
    }


    //4.Multiple inheritance :
    public interface ITeamLeader
    {
         void WorkOfTl(); 
    }
    public interface HR
    {
        void WorkOfHr();
    }

    public class Employee : ITeamLeader, HR
    {
        public void WorkOfTl()
        {
            Console.WriteLine("Working on the Project!");
        }
        public void WorkOfHr()
        {
            Console.WriteLine("Working for Employees!");
        }
    }


    //4.Hybrid inheritance :
    public class Manager: Employee
    {
        public void LeaveApprove()
        {
            Console.WriteLine("manager approves the leave");
        }
    }



    internal class Program
    {
        static void Main(string[] args)
        {
            //5 types of inheritance 
            //1.single 2.Multilevel 3.multiple 4.hierarchical 5.Hybrid

            //1.single inheritance
            child child1 = new child();
            Console.WriteLine("Fullname of the child is: "+ child1.name + " " + child1.surname);
            child1.property();

            parent parent1 = new parent();
            Console.WriteLine("Parent surname: {0}",parent1.surname);



            //2.multilevel inheritance:
            grandChild gchild = new grandChild();
            gchild.name = "Bablu";
            Console.WriteLine($"multilevel inheritance: {gchild.name} {gchild.surname}");
            gchild.property();


            //3.Hierarchical inheritance : All child classes get the properties and methods of the same parent class
            child2 chick = new child2();
            chick.name = "Children";
            Console.WriteLine("example of Hierarchical inheritance: {0}", chick.surname);



            //4.Multiple inheritance :
            Employee emp1 = new Employee();
            emp1.WorkOfHr();
            emp1.WorkOfTl();



            //5.Hybrid inheritance :
            Manager m1 = new Manager();
            m1.LeaveApprove();
            //in class Employee, we are doing the multiple inheritance and then we are applying the multilevel inheritance on manager. so, this becomes Hybrid inheritance. 



            Console.ReadLine();
        }
    }
}
