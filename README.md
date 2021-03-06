# PWA-3D-WRAPPSHELL
A PWA Template, with 3D power by BabylonJS, a hint of jQuery animation spice, and pure vanilla Wrappable-AppShell. Introducing the VanillaWeb with Wrappables, in a wide-ranging-appshell. Welcome. Take a look below for some PWA Design Patterns.

<img src="promo/ops11.png" width="300px" border="1px solid #ccc" style="border-radius: 13px;">

# PWA Wrappables

The first PWA Wrappable App Pattern is called: a TITLESCREEN. 

<hr>

## ~TITLESCREEN

Using a vanillaweb naming convention, we get aTitleScreen after instantiation. Like that? Its a little bit like inheriting from SplashScreen, but not. More like SEQUENCES. Many SEQUENCES evolve one another. It is a SEQUENCE of SEQUENCES. That is all. After SPLASHSCREEN completes, show lightning-fast TITLESCREEN, with user-interaction, and OPEN the media. Why???


### PURPOSE

SPEED. It is all about speed: Time to Paint, Time to Interaction. <i>A TITLESCREEN PWA Wrappable solves the Time To Interaction problem.</i> It gives the highest possible Lighthouse Audit score, makes Time to Interaction quick, and makes scenes dynamically interchangable. Which, we think is radical. Not to mention, it serves as a PERFORMANCE-BASELINE for future performance ops. Like. +1. 


### RESULTS


<img src="promo/baseline1.png" width="600px" border="1px solid #ccc" style="border-radius: 13px;">

That is the performance baseline. Mostly. Could still resize a logo, and other small things.


### INGREDIENTS

> - Add a single OPEN-BUTTON. 
> - DYNAMICALLY-LOAD a BABYLONJS scene into the PWA.
> - hide the BUTTON.


### EXAMPLE

> TITLESCREEN Wrapper: w/ black-screen (canvas) & open-button:

<img src="promo/ops8.png" width="300px" border="1px solid #ccc" style="border-radius: 13px;">

That op improved our Lighthouse Performance Score by 15pts!

<img src="promo/beginning1.png" width="600px" border="1px solid #ccc" style="border-radius: 13px;">

And gave a benchmark to optimize against while beefing up the animations. Isn't that cool? We think so. :) 


###

NOTE: we have not gone asynchronous yet.


<hr>

## More in the pipeline.


Follow, like, and subscribe!

MIT.

<hr>

## TUTORIAL

PWA Template with BabylonJS - A 3D Progressive Web Appshell Template - 3DWRAPPSHELL-.

Powered by:

[<img src="promo/logo1.png" width="200" border="3" style="border-radius: 10px;">](https://www.babylonjs.com/)

Progressive Web Applications are a big innovation for the world wide web. Basically they enable HTML5 developers to take any Web Page and save it offline to a users "Homescreen" as an App, for easy access anytime! We think that is cool for distributing creative content with BabylonJS. Below you can learn how to take your 3D skills to the "Home screen" with no app store necessary. Use this template as an example of how to serve 3D PWA's from any SSL Website. 

## PWA AppShell Template Examples
- [AppShellTemplate Demo](https://www.anmscape.com/AppShellTemplate/public/index.html).
- [BOXiGON! FREE VERSION](https://www.anmscape.com/boxigonpwa1/app/index.html).
<img src="promo/boxigonPWA1.png" width="250" border="3" style="border-radius: 10px;">


## WARNING - leading edge technologies!

Be sure to check the W3C compatibility before going to production. PWA technology is a "Progressive Enhancement" (meaning it is a vanilla web site underneath) and it will fallback to simple web page on any device or browser that does not support it. But all that is changing! So it's best to watch for browser support for things like the [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest#Browser_compatibility) and [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#Specifications). Also [caniuse Service Workers](https://caniuse.com/#feat=serviceworkers) and [caniuse Web App Manifest](https://caniuse.com/#feat=web-app-manifest). At time of writing the only outstanding component is the Push API which is NOT on the roadmap for Safari iOS.


UPDATE: [Safari gets beefy with PWAs?](https://medium.com/@firt/pwas-on-ios-12-2-beta-the-good-the-bad-and-the-not-sure-yet-if-good-a37b6fa6afbf)


## Create your own 3D Web App 

1) Clone.

2) Set up [Web Server for Chrome](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#install_and_verify_web_server), (details below).

3) Flip > that "Start Server" button. Click > the blue Localhost link, and the Web App pops up in your browser. Atomic!

4) Then "Install" it with a Tap > using the (custom) "Add to Homescreen" button.

5) And your Progressive Web App is refreshed in NATIVE CONTEXT and saved to the "Homescreen".

<img src="promo/curio2.png" width="350" border="3" style="border-radius: 10px;">

6) Use [BabylonJS to add your own creations](https://doc.babylonjs.com/).

<img src="promo/curio5.png" width="350" border="3" style="border-radius: 10px;">



## Under the hood

In DevTools, Right Click > and Inspect Elements. Refresh > and check those cached files in the console log. You renegade. It caches the skybox, 3D assets, audio and the "App Shell"! Not to mention that helpful LocalStorage Runtime Database. We can render any cached content offline, and hold game state too.  When we install, there is a smooth loading screen - thank BabylonJS! But don't forget the other PWA benefits like: 

- hidden URL, 
- SSL info, 
- screen orientation support. 
- app splash screen

> Jump back to your desktop/homescreen to find your App! 

Windows 10 installs the app link to the desktop, and we think that will usher in an era of 3D Apps.

<pre>
NOTES: 
- To uninstall PWA, Click > Apps button in Chrome.
- Then Right Click > Remove (also in app header). 
</pre>



## Chrome Web Server

The Chrome Web Server is awesome and it is finally a quick, reliable, and unobstrusive dev server.

<pre>
TIPS: 
- point to 'public' folder or all your cache-paths go 404.
- separate cache-paths between Dev and Prod. And look for console messaging to see <i>what is happening</i>. 
</pre>


<img src="promo/curio4.png" width="350" border="3" style="border-radius: 10px;">



## AppShell Template

PWAs have a DESIGN PATTERN called "App Shell" and it is really clever. It separates content from the app (shell), so that each cache can be updated separately. This allows for an  <i>episodic </i> "Content Stream" to be updated in an ongoing basis, while the App Shell remains static. 



## Service Workers

Service Workers appear [widely supported across browsers](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker#Browser_compatibility). At time of writing it says, <i>"This is experimental technology"</i>. Great!

<pre>
TIPS: 
- look under DevTools > Application tab for help on Service Workers and Manifest.
- Also the > Network tab is really good for the "Clear Site Data" button, and "Update on reload." 
- Under > Network > there is 'Offline' Mode to watch it load from cache.
</pre>



## "Add to Homescreen" (Web App Manifest)

"Homescreen" is the COOL new ability brought to you by the "Web App Manifest". Thank you [W3C](https://www.w3.org/TR/appmanifest/)! 

<pre>
NOTE: 
- If you need a <i>custom</i> "Add to Homescreen" button for your PWA, check out the vanilla-component in the index. 
- It is a "component" made with pure HTML, CSS, and JavaScript. 
</pre>

LINKS to great resources on Homescreen capabilities:
- [PWA - "A2HS"](https://developers.google.com/web/fundamentals/app-install-banners/)
- [PWA - custom button](https://paul.kinlan.me/new-in-chrome-68webgoogle-developers/) 
- [PWA - tutorial](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Installable_PWAs). 



## Structure

```
├── README.md
├── MIT-LICENSE
├── promo (app curation)
└── public
    ├── 3d (mesh)
    │   └── assets
    │   └── ...
    ├── img
    │   └── logos (separate from icons)
    │   └── ...
    ├── lib
    │   └── jquery (2D)
    │   └── babylon (3D)
    │   └── ...
    ├── sonic
    │   └── ... (AUDIO)
    ├── app.js
    ├── index.html
    ├── manifest.json
    └── sw.js (SERVICE-WORKER)
```

<i>That's it!</i>



## Performance Optimizations

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is a tool for scoring PWA capabilities. Run it in DevTools > Audit tab. Performance optimization were made to this template after using Lighthouse, and more are needed, so please PR!

The best optimization left is outside of the template: GZIP your server. 2) Also be sure to Click > DevTools > Performance > 'backwards looking refresh icon'. Because it refreshes and profiles the PWA. <i>Including Animations?</i> And if we look closely into that sequence of stratified data, we can find the layers that can be optimized and help with Lighthouse. And that is why we added a skull! Use it to emulate complex matrix integrations. Thank you DK. 

<pre>
STATUS: we still look to lazy-load 3D mesh with scenes that re-render with new meshes. Sequenced-scenes make sense with Service Workers.
</pre>  

<img src="promo/curio6.png" width="80%" border="3" style="border-radius: 10px;">


## Libs

- [BabylonJS](https://www.babylonjs.com/) it's excellent.
- [JQuery](https://jquery.com/) get hybrid 2D and 3D.


## Production

<pre>
TIPS: When you push your PWA to production there are a few things to keep in mind.
- You need to change the APP 'start_url' in the manifest. 
Because in dev it is local /index.html but in prod, it is the subfolder off of main page. 

The change looks like this:
  "scope": "/",
  "start_url": "/index.html?source=pwa",
  //change to production server path
  "scope": "/AppShell2/public/",
  "start_url": "/AppShell2/public/index.html?source=pwa",

- The 'start_url' allows multiple apps can be hosted from the same site! 
</pre>



## Resources

- [PWA - Your First Progressive Web App - Google Developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)
- [PWA in an hour - freeCodeCamp](https://medium.freecodecamp.org/how-you-can-make-a-progressive-web-app-in-an-hour-7e36d560610e)
- [PWA Structure - tutorial](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/App_structure)
- [PWA Examples - js13kpwa](https://github.com/mdn/pwa-examples)
- [PWA Add to Homescreen](https://developers.google.com/web/fundamentals/app-install-banners/)
- [PWA - Wikipedia](https://en.wikipedia.org/wiki/Progressive_web_applications)
- chrome://inspect/#service-workers
- chrome://apps



## PWA Proof of Purchase (POP)?

Check out [itch.io](https://itch.io/docs/creators/html5) and [LeadBolt](https://www.leadbolt.com/). They are good.

STATUS: working on itch.io docs to integrate [many](https://itch.io/developers) [options](https://itch.io/docs/api/overview) like [embeds](https://itch.io/docs/creators/widget) or [JWT with Node](https://itch.io/docs/api/serverside)? For paywall or subscriptions or interstitial, etc. Overall, we are looking for PWA to integrate with subscription systems or one-time payments systems. 

UPDATE: DOESN"T WORK.

STATUS: Looking at Appscope and PWA.ROCKS.



## 3D-PWA-WRAPPSHELL?

<i>All in! :) </i>

