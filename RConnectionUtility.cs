using RDotNet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RTest
{
    class RConnectionUtility
    {
        static List<string> RCharVector = new List<string>();
        public void Analyse(List<string> inputTweets)
        {
            REngine.SetEnvironmentVariables();
            REngine engine = REngine.GetInstance();
            try
            {
                inputTweets.ForEach(x => RCharVector.AddRange(x.Split(new char[] { '.' }, StringSplitOptions.RemoveEmptyEntries)));
                inputTweets.ForEach(x => RCharVector.RemoveAll(y => string.IsNullOrEmpty(y.Trim())));
                if (inputTweets.Count > 0)
                {
                    engine.Evaluate("library('syuzhet')");
                    CharacterVector gp3 = engine.CreateCharacterVector(RCharVector);    
                    engine.SetSymbol("grp3", gp3);
                    engine.Evaluate("grp3");
                    engine.Evaluate("g <- get_nrc_sentiment(grp3)");
                    engine.Evaluate("barplot(colSums(prop.table(g[, 3:8])))");
                }
                else
                {
                    Console.WriteLine("No Tweets found with input data. Please change input data.");
                }
            }
            finally
            {
                engine.Dispose();
            }

        }
    }
}
