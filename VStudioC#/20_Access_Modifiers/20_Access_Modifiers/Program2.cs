using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;


namespace _20_Access_Modifiers
{
    //class for understand the public and private specifiers.
    public class Modifier
    {
        private string name = "abc";
        public void show()
        {
            Console.WriteLine("this is the method of main class!");
        }

        //we only can access private things in same class.

        //Modifier m2 = new Modifier();  ///aapne aa rite koi object na bnavi skie.. object always koi method ma j bne
        //m2.name = "efg";

        public void show3()
        {
            Modifier m2 = new Modifier();
            m2.name = "abcd";  // now we can access the private things.

            Console.WriteLine(m2.name);
        }
    }



    //class for understand the protected 
    public class protectedClass
    {
        protected void show2()
        {
            Console.WriteLine("this is the example of protected class!");
        }

        public void showing2()
        {
            show2();
        }
    }

    public class newclass: protectedClass//we have to create and derive the "protectedClass", to acces it in main method
    {
        public void showing()
        {
            show2();
        }
    }

    internal class Program2 : protectedClass
    {
        static void Main(string[] args)
        {
            Modifier obj1 = new Modifier();
            //Console.WriteLine(obj1.name); // gives error bcz of private.
            obj1.show(); //we can use because of public 
            obj1.show3(); 


            newclass obj2 = new newclass();
            //obj2.show2(); we have to make another class first and there we have to derive the class which contains protected field. then we can use that class's method in main method.
            obj2.showing();
        }
    }
}
