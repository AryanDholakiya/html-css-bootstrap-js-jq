using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace _11_Loops
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //while loop 
            Console.WriteLine("While-loop");
            int i = 1;
            while (i <= 5)
            {
                Console.WriteLine(i);
                i++;
            }



            //do-while loop
            Console.WriteLine("\nDo-while loop");
            int j = 1;
            do
            {
                Console.WriteLine(j);
                j++;
            } while (j <= 5);



            //for loop
            Console.WriteLine("\nfor-loop");

            for (int k = 0; k <= 5; k++)
            {
                for (int l = 0; l <= k; l++)
                {
                    Console.Write("*");
                }
                Console.WriteLine("");
            }
            Console.WriteLine();

            //Mini task: Print the multiplication table (like 2 × 1 = 2 to 2 × 10 = 20) using a for loop.
            Console.WriteLine("Enter the Number, you want to print table.");
            int number = int.Parse(Console.ReadLine());
            for (int k = 1; k <= 10; k++)
            {
                Console.WriteLine($"{number} x {k} = {number * k}");
            }


            //foreach :
            //foreach એ એવું loop છે જે collections (જેમ કે arrays, lists) ના દરેક elements ઉપર iteration (એક એક કરીને traversal) કરે છે.એ index ની ઝંઝટ વગર easy રીતે ચાલે છે.

            // | Feature            | JavaScript Array                        | C# Array                                |
            // ----------------     | -----------------------------------     | --------------------------------------- |
            // |Syntax              | `let arr = [1, 2, 3];`                  | `int[] arr = { 1, 2, 3 };`              |
            // |Type                | Can hold any type(mixed allowed)        | Must be same type(e.g., only `int[]`)   |
            // |Size                | Dynamic(can grow / shrink)              | Fixed after initialization              |
            // |Built -in methods   | Many(`push`, `pop`, `slice`, etc.)      | Limited, but `Array` class helps        |
            // |Flexibility         | More flexible and easy to use           | Safer and more performant in some cases |


            Console.WriteLine("\nforeach-loop");
            string[] friends = { "aryan", "jay", "krish", "sonu", "vishal" };

            foreach (string person in friends)
            {
                Console.WriteLine(person);
            }

            Console.WriteLine();
            //ex:2
            int[] nums = { 10, 20, 30 };
            int index = 1;
            foreach (int num in nums)
            {
                Console.WriteLine(index + ":" + num);
                index++;
            }
            Console.WriteLine();



            //mini task:
            //1. An array of integers – print square of each number.
            int[] integers = { 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 };

            foreach (int square in integers)
            {
                Console.WriteLine(square + ":" + (square * square));
            }
            




            //break and continue:
            Console.WriteLine("\n Break statement:");
            for (int numb = 0; numb < 11; numb++) 
            {
                if(numb == 6){
                    break;
                }
                Console.WriteLine(numb); // 0 1 2 3 4 5  // because 6 mlya pachhi na statement trf jse j nai.
            }

            Console.WriteLine("\nContinue statement:");
            for(int conti = 0; conti < 11;  conti++)
            {
                if (conti == 6)
                {
                    continue;
                }
                Console.WriteLine(conti); // skips a number 6 and continue further
            }




            Console.WriteLine("\nbreak with arrays: ");
            foreach(string friend in friends)
            {
                if(friend == "sonu")
                {
                    Console.WriteLine("Person Found: {0}", friend);
                    break;
                }
                
            }


            Console.ReadLine();
        }
    }
}
