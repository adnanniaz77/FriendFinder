<h1>Friend Finder</h1>
<p>Overview
In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.</p>

<h2>Instructions</h2>

<ol>
<pre>
<li>Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.</li>

<li>Your <code>server.js</code> file should require the basic npm packages we've used in class: <code>express</code> and <code>path</code>.</li>

<li>Your <code>htmlRoutes.js</code> file should include two routes:

A GET Route to <code>/survey</code> which should display the survey page.
A default, catch-all route that leads to <code>home.html</code> which displays the home page.

<li>Your <code>apiRoutes.js</code> file should contain two routes:
    <ul>
    <li>A GET route with the url <code>/api/friends.</code> This will be used to display a JSON of all possible friends.</li>
    <li>A POST routes <code>/api/friends</code>. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.</li>
    </ul>
</li>

<li>You should save your application's data inside of <code>app/data/friends.js</code> as an array of objects. Each of these objects should roughly follow the format below.</li>
</ol>
</pre>
