using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _22_Encapsulation_and_Properties
{
    //ReadOnly & WriteOnly property:
    public class readWrite
    {
        private int age; //readonly
  
        //readonly
        public readWrite(int age)
        {
            this.age = age;
        }

        //readonly
        public int MyAge
        {
            get
            {
                return age;
            }
        }




        //writeOnly 
        private string password;
        public string Password
        {
            set
            {
                password = value;
            }
        } 

        public void setPassword()
        {
            Console.WriteLine("writeonly property, Password: {0}", password);
        }
    }
    internal class Program
    {
        private string name;
        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }

        //shorthand properties :- More usable 
        public string surname { get; set; }


        static void Main(string[] args)
        {
            Program obj = new Program();
            obj.Name = "aryy"; //set
            Console.WriteLine(obj.Name); //get
                
            Program obj2 = new Program();
            obj2.surname = "sharma";
            Console.WriteLine(obj2.surname);



            //readonly example
            readWrite firststudent = new readWrite(21);
            //firststudent.MyAge = 22;  we can't do anything instead of reading the readonly property
            Console.WriteLine("readonly example: {0}",firststudent.MyAge);



            //writeOnly example:
            firststudent.Password = "firstStudent1234@student";
            //Console.WriteLine(firststudent.Password); we can't get it outide 
            //string showPw = firststudent.Password;  we can't assign it in other and show the pass via another var.
            firststudent.setPassword(); // we can only get it internally.

            Console.ReadLine();
        }
    }
}
