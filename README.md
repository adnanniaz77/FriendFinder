<h1>Friend Finder</h1>
<p>Overview
In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.</p>

<h2>Instructions</h2>

<ol>

<li>
    Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
</li>

<li>Your <code>server.js</code> file should require the basic npm packages we've used in class: <code>express</code> and <code>path</code>.</li>

<li>Your <code>htmlRoutes.js</code> file should include two routes:

    A GET Route to <code>/survey</code> which should display the survey page.
    A default, catch-all route that leads to <code>home.html</code> which displays the home page.

<li>Your <code>apiRoutes.js</code> file should contain two routes:
    <ul>
    <li></li>
    <li>A POST routes <code>/api/friends</code>. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.</li>
    </ul>
</li>

<li>You should save your application's data inside of <code>app/data/friends.js</code> as an array of objects. Each of these objects should roughly follow the format below.</li>
<pre>
{
  "name":"Abc",
  "photo":"https:/example.com/photos/photo.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
</pre>

<li>
    Determine the user's most compatible friend using the following as a guide:
<ul>
    <li>
        With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the <code>totalDifference</code>.
    </li>
    <li>
        Convert each user's results into a simple array of numbers (ex: <code>[5, 1, 4, 4, 5, 1, 2, 5, 4, 1])</code>.
        <em>Example:</em>
    </li>
        <ul>
            <li>User 1: <code>[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]</code></li>
            <li>User 2: <code>[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]</code></li>
            <li>Total Difference: 2 + 1 + 2 = 5</li>
        </ul>  
    <li>Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.</li>
    <li>The closest match will be the user with the least amount of difference.</li>   
</li>
</ul>

<li>
    Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    <ul>
        <li>The modal should display both the name and picture of the closest match.</li>
    </ul>
</li>
</ol>
