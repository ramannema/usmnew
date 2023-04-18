import React from 'react'
import '../header/header.css'
function Header() {
  return (
    <div>

      <nav class="navbar navbar-expand-md top-nav">

        <div class="container">

          <a class="navbar-brand" href="#"><strong>Fs</strong></a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>

          </button>




          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav ml-auto">

              <li class="nav-item active">

                <a class="nav-link" href="/">Home <span class="sr-only"></span></a>

              </li>

              <li class="nav-item">

                <a class="nav-link" href="/search">search</a>

              </li>

              <li class="nav-item">

                <a class="nav-link" href="/contact">Contact</a>

              </li>



              <li class="nav-item">

                <a class="nav-link" href="/about">About</a>

              </li>

              {/* <li class="nav-item">

                <a class="nav-link" href="#">Help</a>

              </li> */}

              {/* <li class="nav-item">

                <a class="nav-link" href="#">Contact</a>

              </li> */}

            </ul>

          </div>

        </div>

      </nav>

    </div>
  )
}

export default Header;
