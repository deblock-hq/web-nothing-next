import axios from "axios";
import { useGlobalContext } from "../../../context";
import Image from "next/image";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getFromStorage } from "../../utils/getFromStorage";
import styled from "styled-components";
import Blob from "../Blob";
import { flushSync } from "react-dom";

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
  padding-top: 88px;
  z-index: 5;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 864px;
  max-height: 460px;
  width: 100%;
  height: 100%;
  background-color: #fbfaf9;
  border: 2px solid #000000;
  border-radius: 14px;
  box-shadow: 3px 3px 0px 0px rgb(0 0 0);
  position: relative;
  overflow: hidden;
  padding: 48px;

  h2 {
    font-size: 35px;
    line-height: 28px;
    text-align: center;
    padding-bottom: 72px;
  }

  > div:first-child {
    z-index: 5;
    text-align: center;

    .place-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding-bottom: 50px;

      div {
        :first-child {
          font-weight: 500;
          font-size: 21px;
          padding-bottom: 4px;
        }
        :nth-child(2) {
          font-weight: 500;
          font-size: 58px;
          line-height: 65px;
          letter-spacing: 0.12em;
          border: 1px solid black;
          border-radius: 4px;
          width: fit-content;
          margin: auto;
          background-color: white;
          box-shadow: 3px 3px 0px 0px rgb(0 0 0);
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
      gap: 16px;

      > div {
        display: flex;
        justify-content: space-around;
        width: 462px;
        margin: auto;

        .phone-dropdown-container {
          > div {
            background: #ffffff;
            border: 1px solid #000000;
            border-radius: 4px;
            padding: 8px 16px;
            position: relative;
          }
          .phone-dropdown {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 316px;
            background: #ffffff;
            border: 1px solid #000000;
            box-shadow: 0px 2.85227px 2.85227px rgba(0, 0, 0, 0.04);
            border-radius: 4px;
          }
        }
      }
    }
  }

  .Blob {
    position: absolute;
    z-index: 1;
  }

  .blob-top {
    width: 58%;
    left: -200px;
  }

  .blob-left {
    top: 300px;
  }

  .blob-right {
    width: 50%;
    top: 130px;
    left: 720px;
  }
`;

const VerificationSteps = styled.div`
  display: flex;
  width: 308px;
  margin: auto;
  padding-bottom: 24px;

  div {
    border: 2px solid black;
    height: 12px;
    width: 100%;

    :first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    :nth-child(2) {
      border-left: 0px;
      border-right: 0px;
    }

    :last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

const Modal = ({ email }: { email: string }) => {
  const [phoneCode, setPhoneCode] = useState("+44");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [phoneVerifyCode, setPhoneVerifyCode] = useState("");
  const phoneVerifyRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [triggerSendNumber, setTriggerSendNumber] = useState(false);

  const [actualStep, setActualStep] = useState("");

  const [referral, setReferral] = useState("");

  const [queueSize, setQueueSize] = useState<number>();
  const [previousPosition, setPreviousPosition] = useState<number>();
  const [currentPosition, setCurrentPosition] = useState<number>();
  const [jumpPosition, setJumpPosition] = useState<number>();
  const [priorityAccess, setPriorityAccess] = useState<number>();

  const handleChange = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  let token: unknown;
  if (typeof window !== "undefined") token = localStorage.getItem("token");

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
        setActualStep("verify_email");
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
          // setActualStep("phone");
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

    if (phoneVerifyCode.length == 4) {
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
          // setActualStep(res.data.result.user.step);
          console.log("VerifyPhone res", res);
          // setActualStep("invite_friend");
        })
        .catch((err) => {
          console.log("VerifyPhone err", err);
        });
    }
  }, [actualStep, phoneCode, phoneNumber, phoneVerifyCode, token]);

  /** Get status */
  useEffect(() => {
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
      })
      .catch((err) => {
        console.log("status err", err);
      });
  }, [actualStep, phoneCode, phoneNumber, phoneVerifyCode, token]);

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
          <div>
            <div>
              We send a code to {phoneCode}
              {phoneNumber}{" "}
            </div>
            <div>
              <input
                ref={phoneVerifyRef}
                type="number"
                value={phoneVerifyCode}
                onChange={(e) => setPhoneVerifyCode(e.target.value)}
                placeholder="_ _ _ _"
              />
              <div onClick={() => setTriggerSendNumber(false)}>
                change your phone
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="phone-verification">
          <strong>Verify your phone number </strong>
          <div>
            <div className="phone-dropdown-container">
              <div onClick={() => setOpenDropdown(!openDropdown)}>
                {phoneCode}
              </div>

              {openDropdown && (
                <ul className="phone-dropdown">
                  <li onClick={() => setPhoneCode("+44")}>
                    {/* <Image /> */}
                    <span>+44</span>
                    <span>United Kingdom</span>
                  </li>
                  <li onClick={() => setPhoneCode("+33")}>
                    {/* <Image /> */}
                    <span>+33</span>
                    <span>France</span>
                  </li>
                </ul>
              )}
            </div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handleChange}
              placeholder="your phone number"
            />
            <button
              onClick={() => {
                sendPhoneNumber();
                setTriggerSendNumber(!triggerSendNumber);
              }}
            >
              Send Code
            </button>
          </div>
        </div>
      );
    } else if (actualStep === "invite_friend") {
      return <div>{referral}</div>;
    }
  };

  // console.log("actualStep", actualStep, referral);

  // const actualStepCss = useEffect(() => {
  //   if (actualStep === "verify_email") return "step1";
  //   if (actualStep === "phone") return "step2";
  //   if (actualStep === "phone" && triggerSendNumber) return "step3";
  //   if (actualStep === "invite_friend") return "step4";
  // }, [actualStep, triggerSendNumber]);

  return (
    <Container>
      <ModalContainer>
        <div>
          <h2>
            <span>
              The first <span>{priorityAccess} </span>
            </span>{" "}
            will get priority access
          </h2>
          <div className="place-container">
            <div>Your place</div>
            <div>{currentPosition}</div>
            <div>in a queue of {queueSize}</div>
          </div>
          <VerificationSteps className={""}>
            <div />
            <div />
            <div />
          </VerificationSteps>
          <div className="queue">
            Cut the queue by <strong> {jumpPosition} spots</strong>
          </div>
          {StepsVerification()}
        </div>
        <Blob className="blob-top" color="#F9D6BE" />
        <Blob className="blob-left" color="#E5E0EA" />
        <Blob className="blob-right" color="#F5EAD2" />
      </ModalContainer>
    </Container>
  );
};

export default Modal;
