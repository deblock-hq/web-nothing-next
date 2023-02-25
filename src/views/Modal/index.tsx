import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Arrow from "../../assets/arrow.svg";
import { devices } from "../../utils/devices";

import FlagFr from "../../assets/fr-flag.svg";
import FlagEn from "../../assets/en-flag.svg";
import Rotate from "../../assets/rotate.svg";
import Popup from "../../components/Popup";

interface Props {
  step: string;
  trigger: boolean;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(6px);
  display: flex;
  align-items: top;
  justify-content: center;
  padding: 76px 16px 0 16px;
  z-index: 5;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 864px;
  /* max-height: 460px; */
  max-height: 560px;

  width: 100%;
  height: 100%;
  background-color: #fbfaf9;
  border: 2px solid #000000;
  border-radius: 14px;
  box-shadow: 3px 3px 0px 0px rgb(0 0 0);
  position: relative;
  padding: 0 48px;

  @media ${devices.tabletMax} {
    padding: 0 8px;
    max-height: 100%;
    border: none;
    box-shadow: none;
  }

  h2 {
    font-size: 35px;
    line-height: 28px;
    text-align: center;
    padding-bottom: 72px;
    padding-top: 48px;
    position: relative;

    span {
      position: relative;
      :before {
        content: "";
        background: url("./mobile-background/modal-trace.svg") no-repeat;
        position: absolute;
        width: 235px;
        height: 23px;
        top: 40px;
        left: 15px;
        background-size: 100%;
      }
    }

    @media ${devices.tabletMax} {
      font-size: 28px;
      line-height: 39px;

      span:before {
        width: 152px;
        height: 15px;
        top: 30px;
        left: 25px;
      }
    }
  }

  > div:first-child {
    z-index: 5;
    text-align: center;

    .place-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding-bottom: 50px;

      .current-position {
        display: flex;
        justify-content: center;
        gap: 3px;

        > div {
          font-weight: 500;
          font-size: 58px;
          line-height: 65px;
          border: 1px solid black;
          border-radius: 4px;
          padding: 8px 4px;
          background-color: white;
          box-shadow: 3px 3px 0px 0px rgb(0 0 0);
          min-width: 46px;
        }
      }

      > div {
        :first-child {
          font-weight: 500;
          font-size: 21px;
          padding-bottom: 4px;
        }
      }
    }

    .queue {
      font-size: 26px;
      line-height: 28px;
      padding-bottom: 12px;
    }

    .email-verification {
      div {
        :first-child {
          padding-bottom: 16px;
        }
        :last-child {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 266px;
          height: 40px;
          margin: auto;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          background: #ffffff;
          border: 1px solid #000000;
          border-radius: 4px;
          box-shadow: 3px 3px 0px 0px rgb(0 0 0);
        }
      }
    }

    .phone-verification {
      display: flex;
      flex-direction: column;
      gap: 20px;

      > div {
        display: flex;
        justify-content: center;
        gap: 10px;
        /* width: 462px;
        margin: auto; */

        @media ${devices.tabletMax} {
          flex-direction: column;
          align-items: center;

          button {
            max-width: 334px;
            width: 100% !important;
            height: 42px;
          }
        }

        > div {
          display: flex;
          gap: 10px;
        }

        .phone-dropdown-container {
          > div {
            background: #ffffff;
            border: 1px solid #000000;
            border-radius: 4px;
            padding: 12px 12px 12px 8px;
            position: relative;
            cursor: pointer;
            display: flex;
            gap: 8px;
          }

          .phone-dropdown {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            max-width: 316px;
            width: 100%;
            height: 96px;
            background: #ffffff;
            border: 1px solid #000000;
            box-shadow: 0px 2.85227px 2.85227px rgba(0, 0, 0, 0.04);
            border-radius: 4px;
            top: 510px;
            padding: 8px;

            @media ${devices.tabletMax} {
              flex-direction: column;
              justify-content: start;
              border: none;
              box-shadow: none;
              border-radius: 0;
              max-width: 100%;
              width: 100vw;
              height: 100%;
              top: 536px;
              padding: 15px;
              gap: 40px;
              left: -15px;
              border-top: 1px solid rgba(0, 0, 0, 0.1);
            }

            li {
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 100%;
              width: 98%;
              cursor: pointer;
              border-radius: 4px;
              padding-left: 8px;

              > div {
                > div {
                  display: flex;
                  gap: 24px;
                }
                display: flex;
                gap: 40px;
              }

              > img {
                visibility: hidden;
                padding-right: 16px;
              }

              :hover {
                background-color: #f3f3f3;
                > img {
                  visibility: visible;
                  text-align: end;
                }
              }

              @media ${devices.tabletMax} {
                height: 52px;
                width: 92%;
              }
            }
          }
        }

        input {
          border: 1px solid #000000;
          border-radius: 4px;
          box-shadow: 1px 1px 0px 0px rgb(0 0 0);
          width: 224px;
          padding-left: 12px;

          ::placeholder {
            font-size: 14px;
            line-height: 27px;
          }
        }

        button {
          color: white;
          font-weight: 600;
          background: #000000;
          border: 1px solid #000000;
          border-radius: 4px;
          width: 134px;
          cursor: pointer;

          :hover {
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .phone-code {
      > div:first-child {
        padding-bottom: 20px;
        span {
          font-weight: 700;
        }
      }
      input {
        display: block;
        margin: auto;
        padding: 0;
        width: 6ch;
        background: repeating-linear-gradient(
            90deg,
            black 0,
            black 1ch,
            transparent 0,
            transparent 1.5ch
          )
          0 84%/ 6ch 2px no-repeat;
        font: 2.2rem "Ubuntu Mono", monospace;
        letter-spacing: 0.5ch;
        background-color: #ffffff;
        border: 1px solid #000000;
        padding: 0px 20px 8px 20px;
        border-radius: 4px;
        background-position-x: center;
        text-align: left;
        box-shadow: rgb(0 0 0) 2px 2px 0px 0px;

        :focus {
          outline: none;
        }

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      > div:last-child {
        > div {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          line-height: 28px;
          gap: 8px;
          padding-top: 12px;
          cursor: pointer;
        }
      }
    }

    .invite-friend {
      h4 {
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        padding-bottom: 28px;
      }

      > div {
        display: flex;
        height: 40px;
        justify-content: center;
        gap: 16px;

        input {
          border: 1px solid #000000;
          border-radius: 3.81572px;
          box-shadow: 1px 1px 0px 0px rgb(0 0 0);
          padding-left: 20px;
          color: #12baa9;
          font-weight: 600;
          font-size: 14px;
          line-height: 30px;
          max-width: 210px;
          width: 100%;
        }

        button {
          color: white;
          background: #000000;
          border: 0.95393px solid #000000;
          border-radius: 3.81572px;
          font-weight: 600;
          font-size: 16px;
          max-width: 134px;
          width: 100%;
          cursor: pointer;

          :hover {
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }
`;

const VerificationSteps = styled.div<Props>`
  display: flex;
  width: 308px;
  margin: auto;
  position: relative;
  padding-bottom: 24px;

  background: transparent;
  height: 12px;
  align-items: center;
  border: 0px solid transparent;
  border-radius: 5px;

  transition: all 2s ease;

  .progress {
    position: absolute;
    border: 0px solid transparent;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background: #2cd5c4;
    /* width: 0; */
    height: 12px;
    z-index: 1;

    width: ${(props) =>
      props.step === "verify_email"
        ? "25%"
        : props.step === "phone" && !props.trigger
        ? "33.5%"
        : props.step === "phone" && props.trigger
        ? "50%"
        : props.step === "invite_friend"
        ? "66.5%"
        : ""};

    transition: width 0.4s linear;
  }

  div:not(:first-child) {
    border: 2px solid black;
    height: 12px;
    width: 100%;
    z-index: 2;

    :nth-child(2) {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    :nth-child(3) {
      border-left: 0px;
      border-right: 0px;
    }

    :last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

const Modal = ({
  email,
  setIsOpen,
}: {
  email: string;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [phoneCode, setPhoneCode] = useState("+44");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [phoneVerifyCode, setPhoneVerifyCode] = useState("");
  const phoneVerifyRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [triggerSendNumber, setTriggerSendNumber] = useState(false);

  const [actualStep, setActualStep] = useState("");

  const [referral, setReferral] = useState("");
  const referralRef = useRef(null);

  const [queueSize, setQueueSize] = useState<number>();
  const [previousPosition, setPreviousPosition] = useState<number>();
  const [currentPosition, setCurrentPosition] = useState<number>();
  const [jumpPosition, setJumpPosition] = useState<number>();
  const [priorityAccess, setPriorityAccess] = useState<number>();

  const [triggerStatus, setTriggerStatus] = useState(true);

  const [triggerPopup, setTriggerPopup] = useState(false);

  const modalRef = useRef<HTMLInputElement>(null);

  const handleChangePhoneTel = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleChangePhoneCode = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneVerifyCode(value);
  };

  const closeModal = (e: { target: any }) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const displayPopup = () => {
    if (actualStep === "phone" && !triggerSendNumber) {
      setTimeout(() => {
        setTriggerPopup(false);
      }, 5000);
      return (
        <Popup
          color="#2CD5C4"
          texte={`Thank you for verifying your email. We bumped you up by ${
            currentPosition! - previousPosition!
          } spots!`}
        />
      );
    }
  };

  // setTimeout(() => {
  //   setTriggerpopup(false);
  // }, 2000);

  let token: unknown;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
    document.addEventListener("mousedown", closeModal);
  }

  const baseUrl = "https://waitlist-staging.deblock.com/v1";

  /** Send mail */
  useEffect(() => {
    axios
      .post(
        `${baseUrl}/waitlist/email`,
        {
          user: {
            email: `${email}`,
          },
        },
        {
          headers: {
            "Accept-Language": "fr",
            Authorization:
              "Bearer 64726720888b45b06e7f8f22ac2cbb4ece5cefe6016cf31986b80ad47fece262de9bb18db4225f728816d611eb28487fddf9",
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (res) => {
        console.log("Emailresponse", res);
        setQueueSize(res.data.result.user.size);
        setCurrentPosition(res.data.result.user.current_position);
        setJumpPosition(res.data.result.user.jump_by);
        setPriorityAccess(res.data.result.user.priority_access);

        setActualStep("verify_email");
        setTriggerStatus(true);
      })
      .catch((error) => {
        console.log("Emailerror", error);
      });
  }, [email]);

  /** Verify email */
  useEffect(() => {
    if (actualStep === "verify_email") {
      fetch(`${baseUrl}/waitlist/email/verify`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (res) => {
          console.log("verifyEmail", res);
          setTriggerStatus(true);

          setTriggerPopup(true);
        })
        .catch((err) => {
          console.log("verifyEmailErr", err);
        });
    }
  }, [actualStep, token]);

  /** Send phone code */
  const sendPhoneNumber = () => {
    axios
      .post(
        `${baseUrl}/waitlist/phone`,
        {
          user: {
            phone_number: `${phoneCode}${phoneNumber}`,
          },
        },
        {
          headers: {
            "Accept-Language": "fr",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (res) => {
        // setActualStep(res.data.result.user.step);
        console.log("SendPhone", res, actualStep);
        setTriggerStatus(true);
      })
      .catch((err) => {
        console.log("SendPhoneErr", err);
      });
  };

  /** Verify phone code */
  useEffect(() => {
    console.log(
      "phoneVerifyCode.length",
      phoneVerifyCode.length,
      "phoneVerifyCode",
      phoneVerifyCode
    );

    if (phoneVerifyCode.length === 4) {
      axios
        .post(
          `${baseUrl}/waitlist/phone/verify`,
          {
            user: {
              phone_number: `${phoneCode}${phoneNumber}`,
              code: `${phoneVerifyCode}`,
            },
          },
          {
            headers: {
              "Accept-Language": "fr",
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then(async (res) => {
          console.log("VerifyPhone res", res);
          setTriggerStatus(true);

          // setActualStep("invite_friend");
        })
        .catch((err) => {
          console.log("VerifyPhone err", err);
        });
    }
  }, [actualStep, phoneCode, phoneNumber, phoneVerifyCode, token]);

  /** Get status */
  useEffect(() => {
    triggerStatus &&
      axios
        .get(`${baseUrl}/waitlist/status`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (res) => {
          setActualStep(res.data.result.user.step);
          console.log("status res", res, actualStep);
          setReferral(res.data.result.user.referrals.url);
          setQueueSize(res.data.result.user.size);
          setCurrentPosition(res.data.result.user.current_position);
          setJumpPosition(res.data.result.user.jump_by);
          setPriorityAccess(res.data.result.user.priority_access);
          setPreviousPosition(res.data.result.user.previous_position);
          setTriggerStatus(false);
        })
        .catch((err) => {
          console.log("status err", err);
          setTriggerStatus(false);
        });
  }, [triggerStatus]);

  const StepsVerification = () => {
    if (actualStep === "verify_email") {
      return (
        <div className="email-verification">
          <div>
            Just <strong>verify your email</strong> to cut the queue
          </div>
          <div>Waiting for email verification...</div>
        </div>
      );
    } else if (actualStep === "phone") {
      if (!!phoneNumber && phoneCode && triggerSendNumber) {
        return (
          <div className="phone-code">
            <div>
              We send a code to{" "}
              <span>
                {phoneCode} {phoneNumber}
              </span>
            </div>
            <div>
              <input
                ref={phoneVerifyRef}
                type="text"
                value={phoneVerifyCode}
                maxLength={4}
                onChange={handleChangePhoneCode}
              />
              <div onClick={() => setTriggerSendNumber(false)}>
                change your phone <Image src={Rotate} alt="Rotate" />
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="phone-verification">
          <strong>Verify your phone number </strong>
          <div>
            <div>
              <div className="phone-dropdown-container">
                <div onClick={() => setOpenDropdown(!openDropdown)}>
                  {phoneCode === "+44" ? (
                    <Image
                      className="flag"
                      src={FlagEn}
                      alt="United kingdom flag"
                    />
                  ) : phoneCode === "+33" ? (
                    <Image className="flag" src={FlagFr} alt="France flag" />
                  ) : (
                    ""
                  )}
                  {phoneCode}
                </div>

                {openDropdown && (
                  <ul className="phone-dropdown">
                    <li onClick={() => setPhoneCode("+44")}>
                      <div>
                        <div>
                          <Image
                            className="flag"
                            src={FlagEn}
                            alt="United kingdom flag"
                          />
                          <span>+44</span>
                        </div>
                        <span>United Kingdom</span>
                      </div>
                      <Image src={Arrow} alt="Arrow right" />
                    </li>
                    <li onClick={() => setPhoneCode("+33")}>
                      <div>
                        <div>
                          <Image
                            className="flag"
                            src={FlagFr}
                            alt="France flag"
                          />
                          <span>+33</span>
                        </div>
                        <span>France</span>
                      </div>
                      <Image src={Arrow} alt="Arrow right" />
                    </li>
                  </ul>
                )}
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handleChangePhoneTel}
                placeholder="your phone number"
              />
            </div>
            <button
              onClick={() => {
                sendPhoneNumber();
                setTriggerSendNumber(true);
              }}
            >
              Send Code
            </button>
          </div>
        </div>
      );
    } else if (actualStep === "invite_friend") {
      return (
        <div className="invite-friend">
          <h4>Invite a friend</h4>
          <div>
            <input type="text" value={referral} readOnly ref={referralRef} />
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(referral)}
            >
              Copy
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <Container>
      {triggerPopup && displayPopup()}
      <ModalContainer>
        <div ref={modalRef}>
          <h2>
            <span>
              The first <strong>{priorityAccess} </strong>
            </span>{" "}
            will get priority access
          </h2>
          <div className="place-container">
            <div>Your place</div>
            <div className="current-position">
              {currentPosition
                ?.toString()
                .split("")
                .map((n, i) => (
                  <div key={i}>{n}</div>
                ))}
            </div>
            <div>in a queue of {queueSize}</div>
          </div>
          <VerificationSteps
            step={actualStep}
            trigger={triggerSendNumber}
            // className={actualStep}
          >
            <div className="progress" />
            <div />
            <div />
            <div />
          </VerificationSteps>
          <div className="queue">
            Cut the queue by <strong> {jumpPosition} spots</strong>
          </div>
          {StepsVerification()}
        </div>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
