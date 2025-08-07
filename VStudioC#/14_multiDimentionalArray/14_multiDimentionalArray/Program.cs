using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Diagnostics;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;

namespace _14_multiDimentionalArray
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //declarin an 2 diamentional array;
            int[,] arr = new int[2, 2];  //first 2 is row and second 2 is column.
            arr[0, 0] = 10;
            arr[0, 1] = 20;
            arr[1, 0] = 30;
            arr[1, 1] = 40;

            foreach (int i in arr)
            {
                Console.WriteLine(i + " ");
            }
            Console.WriteLine("\nshowing an array as matrix representation:");

            for (int i = 0; i < arr.GetLength(0); i++)
            {
                for (int j = 0; j < arr.GetLength(1); j++)
                {
                    Console.Write(arr[i, j] + " ");
                }
                Console.WriteLine();
            }

            //direct initiaization:
            int[,] arr2 = { { 1, 2, 3 }, { 4, 5, 6 } };
            Console.WriteLine("\narr2[0,2]: {0}", arr2[0, 2]);
            Console.WriteLine("changing the value of position arr2[0,2]: {0}", arr2[0, 2] = 10);

            foreach (int i in arr2)
            {
                Console.WriteLine(i);
            }

            Console.WriteLine("\nshowing an array as matrix representation:");

            for (int i = 0; i < arr2.GetLength(0); i++)
            {
                for (int j = 0; j < arr2.GetLength(1); j++)
                {
                    Console.Write(arr2[i, j] + " ");
                }
                Console.WriteLine();
            }


            Console.WriteLine();

            //Mini task:
            //🔸 Create a 3x3 matrix.
            //🔸 Ask user to input values.
            //🔸 Print the matrix.
            //🔸 Calculate sum of each row and column separately.

            int[,] matrix = new int[3, 3];
            int sumOfRows = 0;
            int sumOfcols = 0;

            for(int i = 0; i < matrix.GetLength(0); i++)
            {
                for(int j = 0 ; j< matrix.GetLength(1); j++)
                {
                    Console.Write($"Enter the value for position [{i},{j}]: ");
                    int IJval = int.Parse(Console.ReadLine());
                    matrix[i, j] = IJval;
                }
            }
            Console.WriteLine();
            for(int i = 0; i < matrix.GetLength(0); i++)
            {
                sumOfRows = 0;
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    Console.Write(matrix[i,j] + " ");
                    sumOfRows += matrix[i,j];
                }

                Console.WriteLine(" = " + sumOfRows);
            }

            Console.WriteLine("\nColumn sum:");
            for(int j = 0; j < matrix.GetLength(1); j++)
            {
                sumOfcols = 0;
                for(int i = 0; i < matrix.GetLength(0); i++)
                {
                    sumOfcols += matrix[i,j];     
                }
                Console.Write(" " + sumOfcols);
            }
            
           
            Console.ReadLine();
        }
    }
}
