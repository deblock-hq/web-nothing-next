import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { devices } from "../../utils/devices";
import styled, { css } from "styled-components";
import Loader from "../../assets/lottie/loader.json";

import Burgermenu from "../../assets/burger-menu.svg";
import Cross from "../../assets/cross.svg";

import Logo from "../../../public/typo-logo.svg";
// import Logo from "../../../public/TestLogo2.svg";
// import Logo from "../../../public/HeaderLogo.svg";
import { GlobalContext } from "../../../context/globalContext";
import Lottie, {
  LottiePlayer,
  useLottie,
  useLottieInteractivity,
} from "lottie-react";

interface Props {
  scrollY: number;
}

const HeaderContainer = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  width: calc(95% - 50px);
  z-index: 10;
  max-width: 1152px;
  height: 60px;
  align-self: center;
  position: absolute;
  padding-top: 8px;

  .logo-section {
    display: flex;
    max-height: 110px;
    justify-content: left;
    align-items: center;

    > div {
      max-width: 36px;
    }

    img {
      padding: 0;
    }
  }

  button {
    display: none;
  }

  .burger-menu {
    display: none;
  }

  .logo {
    max-width: 110px;
    cursor: pointer;
    /* margin-left: 40px; */
  }

  > div {
    width: 30%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;

    a {
      cursor: pointer;
      display: inline-flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: space-between;
      text-decoration: none;

      :after {
        content: attr(data-text);
        content: attr(data-text) / "";
        height: 0;
        visibility: hidden;
        overflow: hidden;
        user-select: none;
        pointer-events: none;
        font-weight: 600;
      }

      :hover {
        font-weight: 600;
        color: #2cd5c4;
      }
    }
  }

  .hide-on-desktop {
    display: none;
  }

  @media ${devices.tabletMax} {
    position: fixed;
    top: 0;
    box-shadow: 0px 1px 0px 0px lightgray;
    border: none;
    border-radius: 0;
    width: 100%;

    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);

    .hide-on-mobile {
      display: none;
    }

    .hide-on-desktop {
      display: block;
    }

    .burger-menu {
      display: block;
      text-align: right;
      cursor: pointer;

      img {
        width: 20px;
        animation: fadeIn 1s;
      }
    }

    .logo-section {
      padding-left: 24px;
    }

    .desktop-tablet-display {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      gap: 12px;
      background: #ffffff;
      border: 2px solid #000000;
      border-radius: 5px;
      /* width: 80%; */
      width: 90%;
      max-width: 1152px;
      margin: auto;
      top: 80px;
      left: 2%;
      /* left: 10%; */
      box-shadow: 2px 2px 0px 0px rgb(0 0 0);
      padding: 12px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        padding: 16px 0px;
        text-align: center;
        font-size: 16px;
        width: 100%;
        line-height: 19px;
        font-weight: 400;

        /* :before {
          content: "";
          background: url("/arrow.svg") no-repeat;
          position: absolute;
          width: 10px;
          height: 10px;
          background-size: 100%;
        } */

        :hover {
          background: #f3f3f3;
          :before {
            content: "";
            background: url("/arrow.svg") no-repeat;
            position: absolute;
            width: 10px;
            height: 10px;
            background-size: 100%;
            right: 80px;
          }
        }
        &:after {
          content: attr(data-text);
          content: attr(data-text) / "";
          height: 0;
          visibility: hidden;
          overflow: hidden;
          user-select: none;
          pointer-events: none;
          font-weight: 600;
        }
      }
    }
  }

  ${(props) =>
    props.scrollY > 33 &&
    css`
      @media ${devices.tablet} {
        margin: auto;
        width: calc(90% - 50px);
        position: fixed;
        top: 16px;
        background-color: rgba(255, 255, 255, 0.85);
        border: 1px solid #000000;
        backdrop-filter: blur(10px);
        border-radius: 7px;
        box-shadow: 2px 2px 0px 0px rgb(0 0 0);
        padding: 0 40px;
        max-width: 1152px;
        animation: fadeIn 0.4s;

        .hide-on-mobile {
          width: 100%;
          align-items: center;
          justify-content: end;
          gap: 30px;

          button {
            display: block;
            color: white;
            background: #000000;
            border: 0.95393px solid #000000;
            border-radius: 3.81572px;
            font-weight: 600;
            height: 40px;
            max-width: 134px;
            font-size: 13px;
            line-height: 16px;
            width: 100%;
            cursor: pointer;

            :hover {
              background: rgba(0, 0, 0, 0.7);
            }
          }
        }
      }
    `};
`;

// @media ${devices.tabletMax} {
//   top: 0;
//   box-shadow: 0px 1px 0px 0px lightgray;
//   border: none;
//   border-radius: 0;

//   .desktop-tablet-display {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     position: absolute;
//     gap: 12px;
//     background: #ffffff;
//     border: 2px solid #000000;
//     border-radius: 5px;
//     /* width: 80%; */
//     width: 90%;
//     max-width: 1152px;
//     margin: auto;
//     top: 80px;
//     left: 2%;
//     /* left: 10%; */
//     box-shadow: 2px 2px 0px 0px rgb(0 0 0);
//     padding: 12px;
//   }
// }

const Header = ({ displayModal }: { displayModal: () => void }) => {
  const { setDisplayRequestButton } = useContext(GlobalContext);

  const [scrollY, setScrollY] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState(false);

  const dropdownRef = useRef<HTMLInputElement>(null);

  const closeOpenMenus = (e: { target: any }) => {
    if (
      dropdownRef.current &&
      openMenu &&
      !dropdownRef.current.contains(e.target)
    ) {
      setOpenMenu(false);
    }
  };

  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", closeOpenMenus);
    document.addEventListener("scroll", closeOpenMenus);
  }

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let checkLocalStorage;
  if (typeof window !== "undefined") {
    checkLocalStorage = localStorage.getItem("token");
  }

  const animationRef = useRef<any | string>(null);

  const setAnimationDirection = (number: number) => {
    animationRef.current.setDirection(number);
    animationRef.current.play();
  };

  return (
    <HeaderContainer scrollY={scrollY}>
      <Link href="/">
        {/* <Image className="logo" src={Logo} alt="Deblock logo" /> */}
        <div
          onMouseEnter={() => setAnimationDirection(-1)}
          onMouseLeave={() => setAnimationDirection(1)}
          className="logo-section"
        >
          <Lottie
            lottieRef={animationRef}
            loop={false}
            autoPlay={false}
            animationData={Loader}
          />
          <Image className="logo" src={Logo} alt="Deblock logo" />
        </div>
      </Link>
      <div className="burger-menu" onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu && <Image src={Burgermenu} alt="Burger menu" />}
        {openMenu && <Image src={Cross} alt="lose button" />}
      </div>
      {openMenu && (
        <div
          ref={dropdownRef}
          className="desktop-tablet-display hide-on-desktop"
        >
          <Link href="/blog">Blog</Link>
          <Link href="/about-us">About</Link>
          <a
            href="https://apply.workable.com/deblock"
            target="_blank"
            rel="noreferrer"
          >
            Careers
          </a>
          <Link href="/support">Support</Link>
        </div>
      )}
      <div className="hide-on-mobile">
        <Link href="/blog" data-text="Blog">
          Blog
        </Link>
        <Link href="/about-us" data-text="About">
          About
        </Link>
        <a
          href="https://apply.workable.com/deblock"
          target="_blank"
          rel="noreferrer"
          data-text="Careers"
        >
          Careers
        </a>
        <Link href="/support" data-text="Support">
          Support
        </Link>
        {checkLocalStorage && (
          <button onClick={() => displayModal()}>Request access</button>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
