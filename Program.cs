using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace RTest
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Please Enter Search Query on twitter");
            var searchedTweetList = new TwitterUtility().searchOnTwitter(Convert.ToString(Console.ReadLine()));
            Console.WriteLine("Tweets Count : "+ searchedTweetList.Count + "\n");
            foreach (var item in searchedTweetList)
            {
                Console.WriteLine(item.Text);
                Console.WriteLine();
            }

            new RConnectionUtility().Analyse(searchedTweetList.Select(x => CleanString(Regex.Replace(x.Text, @"http[^\s]+", ""))).ToList());

            Console.ReadLine();
            Console.Clear();

        }

        public static string CleanString(string dirtyString)
        {
            HashSet<char> removeChars = new HashSet<char>("?&^$#@!()+-,:;<>’\'-_*");
            StringBuilder result = new StringBuilder(dirtyString.Length);
            foreach (char c in dirtyString)
                if (!removeChars.Contains(c)) // prevent dirty chars
                    result.Append(c);
            return result.ToString();
        }

    }
}
