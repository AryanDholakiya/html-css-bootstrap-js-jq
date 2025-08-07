using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _18_ClassesAndObjects
{
    internal class car
    {
        public string Company = "TATA";//Company = field  //here we must have to give public to field bcz we are accessing this property in another class. it will throw complile time error if we forget to give "public". it calls "Access Modifier"

        public int price; //blank field 
        public int MaxSpeed;
        public void maxSpeed()
        {
            Console.WriteLine("this car can go on max-speed: {0}", MaxSpeed);
        }   
    }

    //MiniTask:
    class student
    {
        public string name;
        public int age;
        public char grade;

        public void DisplayInfo()
        {
            Console.WriteLine($"Name of student: {name}\nAge of student: {age}\nGrade: {grade}");
        }

        public void IsEligibleForExam(int age)
        {
            if(age < 18)
            {
                Console.WriteLine("Not Eligible for Vote!");
            }
            else
            {
                Console.WriteLine("Eligible for Vote!");
            }
        }
    }






    internal class Program
    {
        static void Main(string[] args)
        {
            car Nexon = new car();
            Nexon.price = 1299000;
            Nexon.MaxSpeed = 160;
            Console.WriteLine(Nexon.Company);
            Console.WriteLine(Nexon.price);
            Nexon.maxSpeed();

            car Altroz = new car();
            Altroz.price = 890000;
            Console.WriteLine("\n",Altroz.Company);



            //MiniTask:
            student abcd = new student();
            abcd.name = "abcd";
            abcd.age = 21;
            abcd.grade = 'A';
            abcd.DisplayInfo();
            abcd.IsEligibleForExam(abcd.age);

            student abcd2 = new student();
            abcd2.name = "abcd2";
            abcd2.age = 22;
            abcd2.grade = 'A';
            abcd2.DisplayInfo();
            abcd2.IsEligibleForExam(abcd2.age);



            Console.ReadLine();
        }  
    }

   
}
