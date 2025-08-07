using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace _26_polymorphism
{
    //1. CompileTime polymorphism: (method overloading)
    public class calculator
    {
        public int add(int a, int b)
        {
            return a + b;   
        }
        public double add(double a, double b)
        {
            return a + b;   
        }

        public double add(double a, double b , double c)
        {
            return a+b+c;
        }
    }


    //2. runtime polymorphism (Method OverRiding)
    public class animal
    {
        public new void sound()
        {
            Console.WriteLine("Animals can produce different kind of sounds.");
        }
    }
    public class Dog : animal
    {
        public  void sound()
        {
            Console.WriteLine("Dog Barks!!");
        }
    }
    //public class Lion : animal
    //{
    //    public override void sound()
    //    {
    //        Console.WriteLine("Lion Roares!!");
    //    }
    //}
    internal class Program
    {
        static void Main(string[] args)
        {
            //1. CompileTime polymorphism: (method overloading)
            animal animal1 = new animal();
            animal1.sound();

            Dog dog1 = new Dog();
            dog1.sound();

            //Lion lion1 = new Lion();
            //lion1.sound();

            Console.WriteLine();

            //2. runtime polymorphism (Method OverRiding)
            calculator addition = new calculator();
            Console.WriteLine(addition.add(1, 2)); 
            Console.WriteLine(addition.add(1.2, 2.5)); 
            Console.WriteLine(addition.add(11, 12.8, 12)); 

            Console.ReadLine();
        }
    }
}
