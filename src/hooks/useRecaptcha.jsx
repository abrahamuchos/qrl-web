import { useRef, useState, useCallback, useEffect } from "react";

const useRecaptcha = () => {
  const [captchaToken, setCaptchaToken] = useState(/**@type {string}**/ '');
  const recaptchaRef = useRef(/** @type {ReCAPTCHA|null}*/ null);

  /**
   *
   * @type {(function(*): void)|*}
   */
  const handleRecaptcha = useCallback((token) => {
    setCaptchaToken(token|| '');
  }, []);

  useEffect(() => {
    const refreshCaptcha = () => {
      if (recaptchaRef.current && captchaToken) {
        recaptchaRef.current.reset();
        setCaptchaToken('');
      }
    };

    let tokenRefreshTimeout= null;

    if (captchaToken) {
      tokenRefreshTimeout = setTimeout(refreshCaptcha, 110000); // 110 seconds
    }

    return () => {
      if (tokenRefreshTimeout) {
        clearTimeout(tokenRefreshTimeout);
      }
    };
  }, [captchaToken]);

  return { captchaToken, setCaptchaToken, recaptchaRef, handleRecaptcha };
}

export default useRecaptcha;