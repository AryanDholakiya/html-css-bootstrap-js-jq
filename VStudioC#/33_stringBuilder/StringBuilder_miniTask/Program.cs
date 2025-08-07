using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringBuilder_miniTask
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] friends = { "aryan", "jay", "Sonu", "krish", "vishal" };

            StringBuilder frnds = new StringBuilder("Users: "); 

            foreach (var friend in friends)
            {
                frnds.Append(friend + ", ");    
            }

            Console.WriteLine(frnds.ToString().TrimEnd(',', ' ')); // "" nai aavse ahiya



            Console.ReadLine();
        }
    }
}
