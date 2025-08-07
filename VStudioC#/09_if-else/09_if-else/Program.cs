using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09_if_else
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //પ્રોગ્રામ બનાવો જે user દ્વારા આપવામાં આવેલી units પરથી વીજ બિલ બનાવે.

            //UnitsRange      દર યુનિટ માટે
            //0 - 50          ₹1.5
            //51 - 150        ₹2.5
            //151 - 250       ₹3.5
            //> 250           ₹5.0

            //જો તમારું કુલ બિલ ₹500 કરતા વધારે થાય છે તો 20 % extra surcharge ઉમેરો.
            //output should be:
            //Enter total units consumed: 280
            //Units: 280
            //Bill: ₹880
            //Surcharge(20 %): ₹176
            //Final Bill: ₹1056

            Console.OutputEncoding = System.Text.Encoding.UTF8; //rupee symbol cosnole ma btavva proparly


            double TotalUnits;
            double bill = 0 ;
            double Surcharge = 0;

            Console.WriteLine("Enter total units consumed: ");
            bool units = double.TryParse(Console.ReadLine(), out TotalUnits);

            if (units == false)
            {
                Console.WriteLine("can not be in characters, enter Number of Units.");
            }

            else
            {
                if (TotalUnits > 0 && TotalUnits <= 50)
                {
                    Console.WriteLine("Units: {0}", TotalUnits);
                    bill = TotalUnits *= 1.5;
                }
                else if (TotalUnits > 50 && TotalUnits <= 150)
                {
                    Console.WriteLine("Units: {0}", TotalUnits);
                    bill = (50 * 1.5) + ((TotalUnits - 50) * 2.5);
                }
                else if (TotalUnits > 150 && TotalUnits <= 250)
                {
                    Console.WriteLine("Units: {0}", TotalUnits);
                    bill = (50 * 1.5) + (100 * 2.5) + ((TotalUnits - 150) * 3.5);
                }
                else
                {
                    Console.WriteLine("Units: {0}", TotalUnits);
                    bill =(50 * 1.5) + (100 * 2.5) + (100 * 3.5)  + ((TotalUnits - 250) * 5);
                }

                Console.WriteLine($"Bill : ₹{bill}");

            }
            if (bill > 500)
            {
               Surcharge = (20.0/100) * bill; 
                // we must have to take one value in decimal because if 20 and 100 both will integer then in c# it will return 0
                bill -= Surcharge;
            }

            Console.WriteLine("Surcharge(20 %) (if bill > 500): {0}", Surcharge);
            Console.WriteLine("Total Payable bill: {0}", bill);
            Console.ReadLine();
        }
    }
}
