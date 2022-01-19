# Get Screen Width with fallback

The idea here is that you can improve your Web Vitals by only loading necessary JS on page load. The other scripts can safely be loaded after everything else has happened.

This is done by changing the `src` property of your `<script>` to `delay` and then attaching event listeners to the page that look for user interaction before swapping those property names back.

The following (taken from [the SpeedVitals blog](https://blog.speedvitals.com/delay-javascript/#more-161)) shows the event listeners, the code to invoke the change from `delayed` to `src`, and the clean up of those events:

```javascript
const autoLoadDuration = 5; //In Seconds
const eventList = ["keydown", "mousemove", "wheel", "touchmove", "touchstart", "touchend"];
const autoLoadTimeout = setTimeout(runScripts, autoLoadDuration * 1000);

eventList.forEach(function(event) {
    window.addEventListener(event, triggerScripts, { passive: true })
});

function triggerScripts() {
    runScripts();
    clearTimeout(autoLoadTimeout);
    eventList.forEach(function(event) {
         window.removeEventListener(event, triggerScripts, { passive: true });
    });
}

function runScripts() {
    document.querySelectorAll("script[delay]").forEach(function(scriptTag) {
        scriptTag.setAttribute("src", scriptTag.getAttribute("delay"));
    });
}
```
