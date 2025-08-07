using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _21_Understand_Access_modifiers
{
    
    public class PublicSpecifier
    {
        //------1.public 
        public string name = "arav";
        public void showName()
        {
            Console.WriteLine($"Showing a name of public specifer: {name}");
        }

        //using public things in same class : true
        public void usingPublicInSameClass()
        {
            name = "arry";
            Console.WriteLine($"Showing a changed name of public specifer by usingPublicInSameClass : {name}");
        }




        //------2.Private
        private string name2 = "abhi";
        private void privateMethod()
        {
            Console.WriteLine($"showing a name of private field: {name2}");
        }

        //using private things in same class : true
        public void makePrivatetoPublic()
        {
            Console.WriteLine($"Private field name: {name2}");
            privateMethod();
        }




        //------3.Protected
        protected string name3 = "saiyaara";
        protected void ProtectedMethod()
        {
            Console.WriteLine($"showing a name of Protected field: {name3}");
        }

        //using private things in same class : true
        public void makeProtectedPublic()
        {
            Console.WriteLine($"Private field name: {name3}");
            ProtectedMethod();
        }




        //------4.internal class only outside assembly ma j work nai kre .. current assembly ma gme tya krse.




        //------5.protected internal
        protected internal string name5 = "Bhool Bhulaiyaa";
        protected void ProtectedInternalMethod()
        {
            Console.WriteLine($"showing a name of Protected Internal field: {name5}");
        }

        //using private things in same class : true
        public void makeProtectedInternalPublic()
        {
            Console.WriteLine($"protected internal field name: {name5}");
            ProtectedInternalMethod();
        }





        //------6.private protected 
        private protected string name6 = "Son of sardaar";
        protected void PrivateProtectedMethod()
        {
            Console.WriteLine($"showing a name of Private Protected field: {name6}");
        }

        //using private things in same class : true
        public void makePrivateProtectedPublic()
        {
            Console.WriteLine($"Private protected field name: {name6}");
            PrivateProtectedMethod();
        }


    }

    internal class Program1: PublicSpecifier
    {
        static void Main(string[] args)
        {
            //------1.public 
            //using public things in different class : true
            PublicSpecifier p1 = new PublicSpecifier();
            p1.showName();
            p1.usingPublicInSameClass();




            //------2.private 
            //using public things in different class : false
            PublicSpecifier p2 = new PublicSpecifier();
            //Console.WriteLine(p2.name2); // error bcz we can't access private field outside of class
            //p2.privateMethod();
            p2.makePrivatetoPublic();




            //------3.protected 
            //using protected things in different class : false
            PublicSpecifier p3 = new PublicSpecifier();
            //Console.WriteLine(p3.name3); // can't use without deriving the class or making this class childclass

            //if we make current class child, of protected fields-methods class then we can use everthing
            Program1 forprotected = new Program1();
            Console.WriteLine(forprotected.name3); 
            forprotected.ProtectedMethod();





            //------5.protected internal
            //using protected things in different class : true
            PublicSpecifier p5 = new PublicSpecifier();
            Console.WriteLine(p5.name5); 

            //if we make current class child, of protected Internal in fields-methods class then we can use everthing
            Program1 forprotectedInternal = new Program1();
            Console.WriteLine(forprotectedInternal.name5);
            forprotectedInternal.ProtectedInternalMethod();






            //------5.private protected 
            //using protected things in different class : true
            PublicSpecifier p6 = new PublicSpecifier();
            //Console.WriteLine(p6.name6); 

            //if we make current class child, of protected Internal in fields-methods class then we can use everthing
            Program1 forprivateprotected = new Program1();
            Console.WriteLine(forprivateprotected.name6);
            forprivateprotected.PrivateProtectedMethod();







            Console.ReadLine();
        }
    }
}
