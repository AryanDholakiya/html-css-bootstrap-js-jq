using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace _12_MiniTask__Loops_break_continue_
{
    public  class Program
    {

        public void tries(int tries)
        {
            if (tries == 5)
            {
                Console.WriteLine("Your Withdrawal attemp limit crossed than 5. Please try again after 24 Hours!");
            }
        }
      public  static void Main(string[] args)
        {
            var any = new Program();//here we created an object of current class because we created an our method non-static and non-static method can only call with the object.
            //if we don't want to create an obj of class then we have to create our method static.

            int TotalBalance = 10000;
            int NoOfTries = 0;
            DateTime dt = DateTime.Now;

            do
            {
                Console.WriteLine("Enter the Withdrawal amount: ");
                int withdrawalAmt = int.Parse(Console.ReadLine()); 

                if(withdrawalAmt == 0 || withdrawalAmt < 1)
                {
                    NoOfTries++;  //continue pela j lkhvu pde otherwise te jump thy jse.
                    Console.WriteLine("Please enter the valid Amount!");
                    Console.WriteLine("Number of tries: {0}", NoOfTries);
                    any.tries(NoOfTries);
                    continue;
                }
                else if(withdrawalAmt >= TotalBalance)
                {
                    Console.WriteLine("Warning!: Withdrawal Amount exceeds the total Balance! \nPlease try again.");
                    NoOfTries++;
                    break;
                }
                else
                {
                    TotalBalance -= withdrawalAmt;
                    Console.WriteLine($"Rs.{withdrawalAmt} is debited from your account on {dt.ToString()}. Total available Balance is Rs.{TotalBalance}. \nThank You");
                    break;
                }

            } while (NoOfTries < 5);

            Console.ReadLine();
        }
       
    }
}
