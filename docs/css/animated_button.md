# [Boutton Animé](readme.md)

## Description

```css

.button {
  position: relative;
  cursor: pointer;
  user-select: none;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
}

.button:hover {
  transition-duration: 0.1s;
  background-color: #006f9e;
}

.button:after {
  content: "";
  display: block;
  position: absolute;
  // border-radius: 4em;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px #33b2e8;
}

.button:active:after {
  box-shadow: 0 0 0 0 #33b2e8;
  position: absolute;
  // border-radius: 4em;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.button:active {
  top: 1px;
}

```

## Sources

* []()