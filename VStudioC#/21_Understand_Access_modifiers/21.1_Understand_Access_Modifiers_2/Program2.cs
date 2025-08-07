using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _21_Understand_Access_modifiers;

namespace _21._1_Understand_Access_Modifiers_2
{
    internal class Program2 : PublicSpecifier
    {
        static void Main(string[] args)
        {
            //----1.public in another assembly : true
            PublicSpecifier obj1 = new PublicSpecifier();
            obj1.showName();
            obj1.usingPublicInSameClass();

            //----1.public in derived class of another assembly : true
            Program2 p2 = new Program2();
            p2.showName();







            //----2.private in another assembly : false
            PublicSpecifier obj2 = new PublicSpecifier();
            //Console.WriteLine(obj2.name2); error bcz of private

            //----2.private in derived class of another assembly : false
            Program2 p3 = new Program2();
            //p3.privateMethod();







            //----3.protected in another assembly : false
            PublicSpecifier obj3 = new PublicSpecifier();
            //Console.WriteLine(obj3.name3); error bcz of protected

            //----3.private in derived class of another assembly : true
            Program2 p4 = new Program2();
            p4.ProtectedMethod();







            //----5.protected internal in another assembly : false
            PublicSpecifier obj5 = new PublicSpecifier();
            //Console.WriteLine(obj5.name5); //error bcz of protected internal

            //----5.protected internal in derived class of another assembly : true
            Program2 p5 = new Program2();
            p5.ProtectedInternalMethod();







            //----6.private protected in another assembly : false
            PublicSpecifier obj6 = new PublicSpecifier();
            //Console.WriteLine(obj6.name6); //error bcz of private protected

            //----6.private protected in derived class of another assembly : true
            Program2 p6 = new Program2();
            p6.PrivateProtectedMethod();




            Console.ReadLine();
        }
    }
}
