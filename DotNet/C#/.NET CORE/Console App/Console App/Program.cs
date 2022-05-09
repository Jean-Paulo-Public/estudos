using System;
//using System.Collections.Generic;
//using System.Linq;
using System.Text;
//using System.Threading.Tasks;

namespace Console_App
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("teste");
            string EntradaUsuário = Console.ReadLine();
            Console.WriteLine(EntradaUsuário);
            teste(Console.ReadLine());
            Console.ReadLine();
        }

        static void teste(string teste) { 
            Console.WriteLine("Teste"+teste); 
        }
    }
}
