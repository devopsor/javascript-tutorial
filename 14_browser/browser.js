// Since JavaScript appears to be able to run in the browser, the browser is naturally a must for JavaScript developers.

// The current mainstream browsers are divided into the following types:

// IE 6~11: The most used IE browser in China has always had poor support for W3C standards. 
// ES6 standard is supported since IE10;

// Chrome: 
// Google's Webkit-based browser with a built-in very powerful JavaScript engine - V8. 
// Since Chrome maintains self-upgrades at all times once installed, regardless of its version, the latest version already 
// supports ES6;

// Safari: 
// Apple's Mac system comes with a Webkit-based browser that supports ES6 since version 6.1 of OS X 10.7 Lion. 
// The latest version of Safari that comes with OS X 10.11 El Capitan is 9.x, which has already been supported ES6;

// Firefox: 
// Mozilla's own Gecko kernel and JavaScript engine OdinMonkey. 
// The early Firefox was released by version, and later it finally learned from Chrome’s approach to self-upgrade and 
// keep it up-to-date at all times;

// On mobile devices, the current iOS and Android camps mainly use Apple's Safari and Google's Chrome respectively. 
// Since both are the core of Webkit, HTML5 was first fully popularized on mobile phones (the desktop is definitely Microsoft's 
// hindrance). The standards support is also very good, the latest version supports ES6.

// Other browsers 
// such as Opera are automatically ignored due to their small market share.
// In addition, we should also pay attention to identifying various domestic browsers, such as certain security browsers 
// and certain whirlwind browsers. They are just a shell, and their core calls are IE, and there are also "dual-core" browsers 
// that claim to support both IE and Webkit. device.

// The main difference between different browsers' support for JavaScript is that the interfaces of some APIs are different, 
// such as AJAX and File interfaces. For the ES6 standard, different browsers support each feature differently.
// When writing JavaScript, it is necessary to fully consider the differences of browsers, and try to make the same JavaScript 
// code run in different browsers.
