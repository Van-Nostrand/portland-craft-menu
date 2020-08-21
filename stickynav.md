ads via Carbon
Limited time offer: Get 10 free Adobe Stock images.
ads via Carbon
Build a sticky navigation bar with React
cover-imagecover-image
Jan 23, 2020☕ 6 min
Follow me on Twitter
Traduire en francais
Subscribe to receive the free weekly article
Ibrahiman
Ibrahima Ndaw

This article has been updated on 2020-05-03

I'm pretty sure that you've already seen the effect we are going to make today - It's a common animation that we see on a lot of websites. When the user scrolls, the navigation bar moves down with a cool animation effect.

You're lucky today because, in this post, we'll replicate the same effect with React by building a sticky navbar from scratch with a custom hook.

You can check it live here
Sorry for the interrupt!

If you're interested in learning React in a comprehensive way, I highly recommend this bestseller course: React - The Complete Guide (incl Hooks, React Router, Redux)
It's an affiliate link, so by purchasing, you support the blog at the same time.
Setting up the project

To be able to follow along, you need to create a fresh React app by running the following command:

npx create-react-app react-sticky-navbar

Next, structure your folder as follows.

src
├── App.js
├── App.test.js
├── assets
|  └── images
|     └── logo.svg
├── components
|  └── Header
|     ├── About.js
|     ├── Navbar.css
|     ├── Navbar.js
|     ├── Welcome.css
|     └── Welcome.js
├── hooks
|  └── useSticky.js
├── index.css
├── index.js
├── serviceWorker.js
└── setupTests.js

I will focus mostly on the navbar related files to make this post short and useful. You can still find the source code at the end of the article.

Let's now get hands dirty by writing some code.

    Header/Welcome.js

import React from "react"

import "./Welcome.css"
import Logo from "../../assets/images/logo.svg"
import About from "./About"

const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div ref={element}>
          <img src={Logo} alt="logo" className="welcome--logo" />
          <p>Even if you scroll, i will stick with you</p>
          <button className="welcome__cta-primary">Contact us</button>
        </div>
      </section>
      <About />
    </main>
  )
}

export default Welcome

As you can see, here we have a simple component that receives the props element. This last is the reference of the element that will fire the sticky effect later on the scrolling.

By the way, here I use destructuring to pull out the element. If you want too, you can use props.stickyRef.

Now, let's move on to the next file and create the navigation bar skeleton.

    Header/Navbar.js

import React from "react"
import "./Navbar.css"
import Logo from "../../assets/images/logo.svg"

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <img src={Logo} alt="logo" className="navbar--logo" />
      <h1> Stick'Me</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Home</li>
      <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Blog</li>
    </ul>
  </nav>
)
export default Navbar

Here, we have for now a very simple component. But later we will update it to be able to display some elements conditionally. And also make the navigation bar sticky.
The sticky effect

For the sticky effect, we will create a custom hook to handle the effect and then use it in our component and at the same time, make it reusable.

    hooks/useSticky.js

import { useEffect, useState, useRef } from "react"

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false)
  }

  // This function handle the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { isSticky, element }
}

export default useSticky

All the magic will happen here (i promise). We first need to import a couple of hooks from React. And next, define our state with useState() and set the initial state to false. That means, now, we'll be able to switch between true and false depending on the scrolling.

When the user starts scrolling, the function handleScroll() will be called. And, it checks if the window.scrollY > stickyRef.current.getBoundingClientRect().bottom and handles the isSticky state. In other words, it will check if the number of pixels the page has currently scrolled along the vertical axis is superior or not to the position of the current element relative to its bottom.

Next, we use a debounce function to throttle the scrolling event and avoid performance issues. This function, instead of running handleScroll all the time, will just run every 20 milliseconds to give you more control.

With that, we can now listen to the scroll event when the component is mounted and remove listeners when unmounted.

Great! now to make our custom hook usable in other files, we need to return something from it. Here we need to return the isSticky state and element which allows having an element reference.

    Header/Navbar.js

import React from "react"
import "./Navbar.css"
import Logo from "../../assets/images/logo.svg"

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
      <h1> Stick'Me</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Home</li>
      <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Blog</li>
    </ul>
  </nav>
)
export default Navbar

As you can see, this file receives now as props the sticky state. We can now check if it's true or false and show classes or elements conditionally with the help of the ternary operator.

We have covered a lot, however, it remains an important part: styling and animations. Let's do that in the next section.
Styling the navbar

    In Navbar.css

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  position: absolute;
  z-index: 1;
  width: 100%;
}

.navbar-sticky {
  background: #333;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 1px #222;
  animation: moveDown 0.5s ease-in-out;
}

.navbar--logo {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  animation: rotate 0.7s ease-in-out 0.5s;
}

@keyframes moveDown {
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(0rem);
  }
}

Here, besides fixing the navigation bar on scroll with the .navbar-sticky class, we use moveDown to make the animation effect which also rotates the logo a little bit to make everything look good and smooth on the scrolling.

With that, we can now use the App.js file to display our components when the page loads.

    App.js

import React from "react"
import useSticky from "./hooks/useSticky.js"
import Welcome from "./components/Header/Welcome"
import Navbar from "./components/Header/Navbar"

function App() {
  const { isSticky, element } = useSticky()
  return (
    <>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
    </>
  )
}

export default App

As you can see, here, we import our components and the custom hook which allows us to pass down props and handle the sticky effect appropriately.

With that, we've now done building our sticky navbar using React JS.

Thanks for reading it.

You can find the Source code here
#react
How to copy text to the clipboard with JavaScript ?
Differences between forEach and map that you should know
Support my work
coffeeBuy me a coffee
Get articles in your inbox
rssTwitterGithubLinkedinDEV

© 2019 - 2020, Built with ❤️ to code
