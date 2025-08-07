using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _38_Stack_And_Queue
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Stack<int> stack1 = new Stack<int>();
            Stack<int> firstStack = new Stack<int>();
            firstStack.Push(1);
            firstStack.Push(2);
            firstStack.Push(3);
            firstStack.Push(4);

            //for(int i = 0; i < firstStack.Count; i++) 
            //{
            //    Console.WriteLine(firstStack[i]);
            //}
            //actually we can't use the for loop to get values which are in stack because it needs a key with value, and stack only containes the values.

            foreach(int i in firstStack)
            {
                Console.WriteLine(i);
            }
            Console.WriteLine();
            for(int i = 0; i < firstStack.Count; i++)
            {
                Console.WriteLine(firstStack.ElementAt(i)); //but it's a Dictionary method.
            }

            Console.WriteLine();


            //Removing the value from stack : pop()
            var any = firstStack.Count; //we must have to perform this to use the for loop or we can use while
            Console.WriteLine("Poped values: ");
            for (int i = 0; i < any; i++)
            {
                int item = firstStack.Pop();
                Console.WriteLine(item);
            }
            //while (firstStack.Count > 0)
            //{
            //    int item = firstStack.Pop();
            //    Console.WriteLine(item);
            //}

            int itemlen = 0;

            while (itemlen < 5)
            {
                firstStack.Push(itemlen + 1); 
                itemlen++;
            }

            foreach(int i in firstStack)
            {
                Console.WriteLine("added value: "+i);
            }

            //Peek():
            Console.WriteLine("\nPeek():");
            while(firstStack.Count > 0 ) 
            {
                Console.WriteLine(firstStack.Peek());
                firstStack.Pop();
            }

            Console.WriteLine();

            Console.WriteLine("Queue:");
            var firstQueue= new Queue<string>();
            firstQueue.Enqueue("abcd");
            firstQueue.Enqueue("efgh");
            firstQueue.Enqueue("ijkl");

            foreach(var i in firstQueue)
            {
                Console.WriteLine(i);
            }

            Console.WriteLine("\nDequeue:"); //first in - first out
            while( firstQueue.Count > 0 )
            {
                Console.WriteLine(firstQueue.Dequeue());
            }



            Console.ReadLine();
        }
    }
}
