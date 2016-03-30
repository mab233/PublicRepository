using LinqToTwitter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RTest
{
    class TwitterUtility
    {
        private static SingleUserAuthorizer authorizer = new SingleUserAuthorizer
        {
            CredentialStore = new
               SingleUserInMemoryCredentialStore
            {
                ConsumerKey = "UESAT1ZmTNGDPCZvq2AytaPQP",
                ConsumerSecret = "EhsRWdeVLQS2XT4w8yTZaV38zFiuOLSzJZ9VKTvjxdVC1KLnJs",
                AccessToken = "4175888835-M2XNK9QScEZcjgnlngcqWkWdYNMn5AII0ijBBvL",
                AccessTokenSecret = "KcNvDQCJ1C3eNxdclWg3Ym78BBqagzPEVcExfQ4KaQgru"
            }
        };

        public List<Status> searchOnTwitter(string searchKey)
        {
            if (!string.IsNullOrEmpty(searchKey))
            {
                var twitterContext = new TwitterContext(authorizer);

                var srch =
                   Enumerable.SingleOrDefault((from search in twitterContext.Search
                                               where search.Type == SearchType.Search &&
                                                  search.Query == searchKey &&
                                                  search.ResultType == ResultType.Popular &&
                                                  search.Count == 15

                                               select search));
                if (srch != null && srch.Statuses.Count > 0)
                {
                    return srch.Statuses.ToList();
                }

            }
            return new List<Status>();
        }
    }
}
