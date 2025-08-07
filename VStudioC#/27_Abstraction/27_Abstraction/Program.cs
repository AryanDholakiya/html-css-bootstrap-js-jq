//we can achieve abstraction using (1)abstract class or by (2)using the interfaces
//the differene is that, in interfaces we only can define the method without body. instead this we can't define anyting in our interfaces.


using _27_Abstraction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _27_Abstraction
{

    public abstract class Animal
    {
        //abstract class have can contain both type of method, 1.abstract method and 2. simple method
        public abstract void see(); // abstract method ne body na hoi. The body is provided by the derived class.

        public void sleep()
        {
            Console.WriteLine("Animal is sleeping...!");
        }
    }

    public class BaseClass : Animal //if the abstract class is not public then we can't inherit it to baseclass
    {
        public override void see()  //override keyword is must to put here otherwise it gives error
        {
            Console.WriteLine("Animal can see..!");
        }
    }




    //MiniTask:
    public abstract class Employee
    {
        public abstract void CalculateSalary();
        public void DisplayInfo()
        {
            Console.WriteLine("Employee of the Company.");
        }
    }
    public class Developer : Employee
    {
        int BasicPay = 30000;
        decimal tax = 18m/100m ;

        public override void CalculateSalary()  //override keyword is neccessary
        {
            Console.WriteLine("Inhand Salary: {0}",BasicPay -  (BasicPay * tax));
        }
    }
}






internal class Program
{
    static void Main(string[] args)
    {
        //Animal animal1 = new Animal(); we can't create an instance(obj) of abstract class
        BaseClass Bc1 = new BaseClass();
        Bc1.see();
        Bc1.sleep();





        //Mini Task:
        //Create an abstract class Employee with:
        //abstract method CalculateSalary()
        //concrete method DisplayInfo()
        //Then create a class Developer that inherits from Employee and implements CalculateSalary().


        Developer dev1 = new Developer();
        dev1.DisplayInfo();
        dev1.CalculateSalary();


        //int saalaary = 30000;
        //decimal taax = 18m / 100m;
        //Console.WriteLine(saalaary * taax);













        Console.ReadLine();
    }
}

