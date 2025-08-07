using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace _29_Files
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //File.WriteAllText(path,text which you want to insert)
            string path = "E:\\git files\\html-css-bootstrap-js-jq\\FileHandlingC#.txt";
            //string path = @"E:\git files\html-css-bootstrap-js-jq\FileHandlingC#.txt";
            //escape sequence: verbatim literal

            if (File.Exists(path))
            {
                //string Text = "Hello world!";    //commented to check file.copy(path, path2, true);
                //File.WriteAllText(path, Text);
                Console.WriteLine("Welcome to the File.");
                Console.WriteLine("File modification is done!");
            }
            else
            {
                Console.WriteLine("File not exist.");
            }



            //File.ReadAllText(path)
            string dataInFile =  File.ReadAllText(path); 
            Console.WriteLine("File.ReadAllText(path): {0}", dataInFile);




            //File.Copy(source file path, destinaton file path)
            string path2 = @"E:\git files\html-css-bootstrap-js-jq\FileHandlingC#_2.txt"; //aapel path ma kse aa same file hovi joie nahi.. te ahi aapel path pr file banvase ane tema data nakhse.


            //File.Copy(path, path2);  
            //first program run prr j file bni jase etle second time file already exist ni error apse. file hova chhata bnavva mate mate overwrite ni 3rd argument apavi pde.

            File.Copy(path, path2, true);
            Console.WriteLine("File copied successfull.");






            //directoryinfo class: new folder banavva mate

            string createFolder = @"E:\git files\html-css-bootstrap-js-jq\FileHandlingCreateDirectory";
            DirectoryInfo dir = new DirectoryInfo(createFolder);


            //create directory method:
            dir.Create(); //this method is for creating an directory(folder) in specified path
            Console.WriteLine("\nDirectory created Successfully!");


            //creating sub-directory method:
            dir.CreateSubdirectory("SubDiretoryUsingFileHandling");
            Console.WriteLine("\nSub-Directory created Successfully!");


            //MoveTo method():
            string MoveToDirectorypath = @"E:\git files\html-css-bootstrap-js-jq\MovedData Directory";
            //dir.MoveTo(MoveToDirectorypath);// file already hoi to biji vkht run krta error aape.
            Console.WriteLine("All data from diretory 'FileHandlingCreateDirectory' is moved to directory 'MovedData Directory.'");
            Console.WriteLine("previous dirctory 'FileHandlingCreateDirectory' deleted automatically after data moving.");
            //MoveTo thi tema provide krela path prr new directory create thse tema biji directory no data copy thse and old directory delete thse.




            //delete directory;
            string fileTobeDeleted = @"E:\git files\html-css-bootstrap-js-jq\DeleteFolder";
            DirectoryInfo dir2 = new DirectoryInfo(fileTobeDeleted);

            //dir2.Delete(true); // direcotory nai mlse to exception apse.//true etla mate bcz if directory ma koi data hse to bhi te delete kri dese.
            Console.WriteLine("\nDeleted Directory Successfully.");





            

            Console.ReadLine();
        }
    }
}
